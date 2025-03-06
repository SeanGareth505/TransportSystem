import { Injectable, NgZone, inject } from '@angular/core';
import { Database, ref, onValue, off } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private db = inject(Database);
  private ngZone = inject(NgZone);

  constructor() {
    console.log("🔥 Firebase Service Initialized inside Angular Zone.");
  }

  getDrivers(): Observable<any> {
    return new Observable((observer) => {
      const driversRef = ref(this.db, "/drivers");
      console.log("📡 Firebase Reference Created:", driversRef);

      this.ngZone.runOutsideAngular(() => {
        const unsubscribe = onValue(
          driversRef,
          (snapshot) => {
            this.ngZone.run(() => { // ✅ Ensure this runs inside Angular's Zone
              const data = snapshot.val() ?? {};
              console.log("📊 Results:", data);
              observer.next(data);
            });
          },
          (error) => {
            console.error("❌ Firebase Error:", error);
            observer.error(error);
          }
        );

        return () => off(driversRef, "value", unsubscribe);
      });
    });
  }
}
