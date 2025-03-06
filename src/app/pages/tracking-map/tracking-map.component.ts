import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleMap, GoogleMapsModule } from '@angular/google-maps';
import { FirebaseService } from '../../service/firebase.service';
import { environment } from '../../../environments/environment';

interface DriverData {
  lat: number;
  lng: number;
}

@Component({
  selector: 'app-tracking-map',
  standalone: true,
  imports: [CommonModule, GoogleMapsModule],
  templateUrl: './tracking-map.component.html',
  styleUrls: ['./tracking-map.component.scss']
})
export class TrackingMapComponent implements OnInit, AfterViewInit {
  @ViewChild(GoogleMap, { static: false }) googleMap!: GoogleMap;

  center: google.maps.LatLngLiteral = { lat: -26.2041, lng: 28.0473 }; // Johannesburg
  zoom = 12;
  drivers: google.maps.LatLngLiteral[] = [];
  private map: google.maps.Map | undefined;
  private markers: google.maps.Marker[] = [];
  private currentPosition: google.maps.LatLngLiteral | undefined;

  constructor(private cdr: ChangeDetectorRef, private firebaseService: FirebaseService, private ngZone: NgZone) {}

  ngOnInit() {
    console.log("🛠 Initializing TrackingMapComponent...");

    // ✅ Ensure Google Maps API is loaded properly
    this.loadGoogleMapsAPI().then(() => {
      console.log("✅ Google Maps API loaded successfully.");
    }).catch(error => {
      console.error("❌ Google Maps API failed to load.", error);
    });

    // ✅ Ensure Firebase URL is sent to Service Worker
    const firebaseDBURL = environment.firebaseDatabaseURL;
    console.log("📡 Sending Firebase URL to Service Worker:", firebaseDBURL);
  
    if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
      navigator.serviceWorker.controller.postMessage({
        type: "SET_FIREBASE_URL",
        firebaseURL: firebaseDBURL
      });
    } else {
      console.warn("⚠️ No active Service Worker found.");
    }
  
    // ✅ Subscribe to Firebase data inside Angular zone to prevent "Outside Injection Context" errors
    this.firebaseService.getDrivers().subscribe({
      next: (data) => {
        this.ngZone.run(() => {
          console.log("📡 Firebase snapshot received:", data);
          if (!data) {
            console.warn("⚠️ No drivers found in Firebase.");
            this.drivers = [];
            this.clearMarkers();
            this.cdr.detectChanges();
            return;
          }

          this.drivers = Object.entries(data).map(([key, value]: [string, any]) => {
            if (value && typeof value.lat === "number" && typeof value.lng === "number") {
              return { lat: value.lat, lng: value.lng };
            } else {
              console.warn(`⚠️ Skipping invalid driver entry: ${key}`, value);
              return null;
            }
          }).filter((d): d is google.maps.LatLngLiteral => d !== null);

          console.log("🚘 Updated Drivers List:", this.drivers);
          this.updateMarkers();
          this.cdr.detectChanges();
        });
      },
      error: (error) => {
        console.error("❌ Firebase Error:", error);
      }
    });
  }

  ngAfterViewInit() {
    if (this.googleMap) {
      this.map = this.googleMap.googleMap;
      this.updateMarkers();
    }
  }

  addMarkers() {
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
        title: `Driver Location ${index}`,
      });
      this.markers.push(marker);
    });

    console.log("📍 Markers added:", this.markers.length);
  }

  updateMarkers() {
    if (!this.map) {
      console.error("❌ Google Map instance is not available.");
      return;
    }

    this.clearMarkers();
    this.addMarkers();
  }

  clearMarkers() {
    this.markers.forEach(marker => marker.setMap(null));
    this.markers = [];
    console.log("🚫 All markers cleared.");
  }

  startTracking() {
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

  // ✅ Ensure Google Maps loads properly
  private async loadGoogleMapsAPI(): Promise<void> {
    if (window.google && window.google.maps) {
      console.log("✅ Google Maps API is already loaded.");
      return;
    }

    console.log("📡 Loading Google Maps API...");

    const script = document.createElement("script");
    script.id = "google-maps-script";
    script.src = `https://maps.googleapis.com/maps/api/js?key=${environment.firebase.apiKey}&libraries=places&v=3.51`;
    script.async = true;
    script.defer = true;

    document.head.appendChild(script);

    return new Promise((resolve, reject) => {
      script.onload = () => {
        console.log("✅ Google Maps API loaded successfully.");
        resolve();
      };

      script.onerror = () => {
        console.error("❌ Google Maps API failed to load.");
        reject(new Error("Google Maps API failed to load."));
      };
    });
  }
}
