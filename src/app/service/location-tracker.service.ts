import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

import { openDB } from 'idb';

interface ServiceWorkerRegistration {
  sync?: SyncManager;
}

interface SyncManager {
  register(tag: string): Promise<void>;
}




@Injectable({
  providedIn: 'root'
})
export class LocationTrackerService {
  private watchId: number | null = null;
  private driverId: string;

  constructor(private db: AngularFireDatabase) {
    this.driverId = this.generateDriverId(); // Generate a dynamic driver ID
  }

  startTracking() {
    if ('serviceWorker' in navigator && 'SyncManager' in window) {
      navigator.serviceWorker.ready.then((sw) => {
        if ('sync' in sw) {
          (sw as ServiceWorkerRegistration).sync!.register("syncLocation").catch((error: any) => 
            console.error("Sync registration failed:", error)
          );
        } else {
          console.warn("SyncManager is not supported in this browser.");
        }
      });
    }
    
  }

  stopTracking() {
    if (this.watchId !== null) {
      navigator.geolocation.clearWatch(this.watchId);
      this.watchId = null;

      // ✅ Remove driver from Firebase when tracking stops
      this.db.object(`drivers/${this.driverId}`).remove()
        .then(() => console.log(`🗑️ Driver ${this.driverId} removed from Firebase`))
        .catch((error: any) => console.error('Error removing driver:', error));
    }
  }

  private updateLocation(lat: number, lng: number) {
    const locationData = { lat, lng, timestamp: Date.now() };
    this.db.object(`drivers/${this.driverId}`).update(locationData);

    // Store location in IndexedDB for offline sync
    this.saveLocationOffline(locationData);
  }

  private generateDriverId(): string {
    return `driver_${Math.random().toString(36).substr(2, 9)}`;
  }

  private async saveLocationOffline(location: any) {
    if (!("indexedDB" in window)) return;
  
    const db = await openDB("LocationDB", 1, {
      upgrade(db) {
        if (!db.objectStoreNames.contains("locations")) {
          db.createObjectStore("locations", { keyPath: "timestamp" });
        }
      }
    });
  
    const tx = db.transaction("locations", "readwrite");
    const store = tx.objectStore("locations");
    await store.put(location);
  }
  
}
