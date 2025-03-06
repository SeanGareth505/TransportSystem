import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleMapsModule } from '@angular/google-maps';
import { Database, ref, onValue } from '@angular/fire/database';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CommonModule, GoogleMapsModule],
  template: `
    <google-map [height]="'500px'" [width]="'100%'">
        <map-marker *ngFor="let driver of drivers" [position]="driver"></map-marker>
    </google-map>
    <button (click)="startTracking()">Start Tracking</button>
  `,
})
export class MapComponent implements OnInit {
  drivers: any[] = [];
  private db = inject(Database);

  ngOnInit() {
    const driversRef = ref(this.db, 'drivers');

    onValue(driversRef, (snapshot) => {
      if (snapshot.exists()) {
        this.drivers = Object.values(snapshot.val());
      } else {
        console.warn('No drivers found in Firebase Database.');
        this.drivers = [];
      }
    }, (error) => {
      console.error('Error fetching drivers:', error);
    });
  }

  startTracking() {
    if (!navigator.geolocation) {
      console.error('❌ Geolocation is not supported.');
      return;
    }
  
    navigator.geolocation.watchPosition(
      (position) => {
        console.log("📍 Sending location to Service Worker:", position.coords);
  
        if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
          navigator.serviceWorker.controller.postMessage({
            type: "START_TRACKING",
            coords: {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              timestamp: Date.now()
            }
          });
        } else {
          console.error("❌ Service Worker not available.");
        } 
      },
      (error) => console.error("❌ Location Tracking Error:", error),
      { enableHighAccuracy: true, maximumAge: 0 }
    );
  }
  
}
