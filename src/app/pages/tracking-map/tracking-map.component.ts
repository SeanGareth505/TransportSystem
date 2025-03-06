import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef, NgZone, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleMap, GoogleMapsModule } from '@angular/google-maps';
import { FirebaseService } from '../../service/firebase.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-tracking-map',
  standalone: true,
  imports: [CommonModule, GoogleMapsModule],
  templateUrl: './tracking-map.component.html',
  styleUrls: ['./tracking-map.component.scss']
})
export class TrackingMapComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(GoogleMap, { static: false }) googleMap!: GoogleMap;

  center: google.maps.LatLngLiteral = { lat: -26.2041, lng: 28.0473 };
  zoom = 12;
  drivers: google.maps.LatLngLiteral[] = [];
  private map!: google.maps.Map;
  private markers: google.maps.Marker[] = [];
  private currentPosition: google.maps.LatLngLiteral | undefined;
  private driversSubscription: any;

  constructor(private cdr: ChangeDetectorRef, private firebaseService: FirebaseService, private ngZone: NgZone) {}

  ngOnInit() {
    console.log("🛠 Initializing TrackingMapComponent...");
    this.loadGoogleMapsAPI()
      .then(() => {
        console.log("✅ Google Maps API loaded successfully.");
        this.startTracking();
      })
      .catch(error => console.error("❌ Google Maps API failed to load.", error));

    // ✅ Subscribe to Firebase drivers
    this.subscribeToDrivers();
  }

  ngAfterViewInit() {
    if (this.googleMap) {
      this.map = this.googleMap.googleMap!;
      this.updateMarkers();
    }
  }

  ngOnDestroy() {
    console.log("🛠 Destroying TrackingMapComponent...");
    this.unsubscribeDrivers();
  }

  private subscribeToDrivers() {
    console.log("📡 Subscribing to Firebase data...");
    this.driversSubscription = this.firebaseService.getDrivers().subscribe({
      next: (data) => {
        console.log("📡 Firebase data received:", data);
        this.ngZone.run(() => {
          this.drivers = Object.values(data);
          this.updateMarkers();
          this.cdr.detectChanges();
        });
      },
      error: (error) => console.error("❌ Firebase Error:", error)
    });
  }

  private unsubscribeDrivers() {
    if (this.driversSubscription) {
      this.driversSubscription.unsubscribe();
      console.log("🛠 Unsubscribed from Firebase drivers data.");
    }
  }

  private startTracking() {
    if (!navigator.geolocation) {
      console.error("❌ Geolocation is not supported.");
      return;
    }

    navigator.geolocation.watchPosition(
      (position) => {
        this.currentPosition = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };

        if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
          navigator.serviceWorker.controller.postMessage({
            type: "UPDATE_LOCATION",
            coords: this.currentPosition,
          });
        }
      },
      (error) => console.error("❌ Location Tracking Error:", error),
      { enableHighAccuracy: true, maximumAge: 0 }
    );
  }

  updateMarkers() {
    if (!this.map) {
      console.error("❌ Google Map instance is not available.");
      return;
    }
    this.clearMarkers();
    this.addMarkers();
  }

  private clearMarkers() {
    this.markers.forEach(marker => marker.setMap(null));
    this.markers = [];
    console.log("🚫 All markers cleared.");
  }

  private addMarkers() {
    if (!this.map) {
      console.error("❌ Google Map instance is not available.");
      return;
    }

    this.clearMarkers();

    if (this.drivers.length === 0) {
      console.warn("⚠️ No drivers available to add markers.");
      return;
    }

    this.drivers.forEach((driver, index) => {
      const marker = new google.maps.Marker({
        position: driver,
        map: this.map,
        title: `Driver ${index + 1}`,
      });
      this.markers.push(marker);
    });

    console.log("📍 Markers added:", this.markers.length);
  }

  navigateToDriver(index: number) {
    if (!this.map) {
      console.error('❌ Map instance is not initialized.');
      return;
    }

    if (!this.drivers[index]) {
      console.error(`❌ Driver at index ${index} does not exist.`);
      return;
    }

    this.map.setCenter(this.drivers[index]);
    this.cdr.detectChanges();
  }

  centerMap() {
    if (!this.map) {
      console.error('❌ Map instance is not initialized.');
      return;
    }

    if (!this.currentPosition) {
      console.error('❌ No current position to center map.');
      return;
    }

    this.map.setCenter(this.currentPosition);
    this.cdr.detectChanges();
  }

  private async loadGoogleMapsAPI(): Promise<void> {
    if (window.google?.maps) return;
  
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${environment.googleMapsApiKey}&libraries=places&v=beta&loading=async&callback=initMap`;
      script.async = true;
      script.defer = true;
  
      script.onload = () => {
        console.log("✅ Google Maps API loaded successfully.");
        resolve();
      };
  
      script.onerror = (error) => {
        console.error("❌ Google Maps API failed to load.", error);
        reject(error);
      };
  
      document.head.appendChild(script);
    });
  }
}
