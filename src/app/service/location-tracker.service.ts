import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class LocationTrackerService {
  private watchId: number | null = null;
  private driverId = 'driver_123'; // Replace with dynamic ID

  constructor(private db: AngularFireDatabase) {}

  startTracking() {
    if ('geolocation' in navigator) {
      this.watchId = navigator.geolocation.watchPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          this.updateLocation(latitude, longitude);
        },
        (error) => {
          console.error('Error tracking location:', error);
        },
        { enableHighAccuracy: true, maximumAge: 0 }
      );
    } else {
      console.error('Geolocation is not available.');
    }
  }

  stopTracking() {
    if (this.watchId !== null) {
      navigator.geolocation.clearWatch(this.watchId);
      this.watchId = null;
    }
  }

  private updateLocation(lat: number, lng: number) {
    this.db.object(`drivers/${this.driverId}`).update({ lat, lng, timestamp: Date.now() });
  }
}
