import { Injectable, NgZone, inject } from '@angular/core';
import { Database, ref, onValue, off, update } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private db = inject(Database);
  private ngZone = inject(NgZone);

  constructor() {
    console.log("🔥 Firebase Service Initialized.");
    this.storeDummyData(); // Ensure dummy data is present
  }

  getDrivers(): Observable<any> {
    return new Observable((observer) => {
      const driversRef = ref(this.db, "/tracking");
      
      this.ngZone.runOutsideAngular(() => {
          const unsubscribe = onValue(
              driversRef,
              (snapshot) => {
                  this.ngZone.run(() => { 
                      const data = snapshot.val() ?? {};
                      console.log('driversRef', data)
              observer.next(data);
            });
          },
          (error) => observer.error(error)
        );

        return () => off(driversRef, "value", unsubscribe);
      });
    });
  }

  private storeDummyData() {
    update(ref(this.db, "drivers/dummy_user"), {
      lat: -25.7479,
      lng: 28.2293,
      timestamp: Date.now(),
      confirmed: false
    });
  }

  confirmTracking(userId: string) {
    update(ref(this.db, `tracking/${userId}`), {
      confirmed: true,
      timestamp: Date.now()
    });
  }

  updateLocation(userId: string, lat: number, lng: number) {
    update(ref(this.db, `tracking/${userId}`), {
      lat,
      lng,
      timestamp: Date.now()
    });
  }
}
