import { Injectable, inject, NgZone } from '@angular/core';
import { Database, ref, onValue } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private db = inject(Database);
  private ngZone = inject(NgZone);

  constructor() {}

  getDrivers(): Observable<any> {
    return new Observable((observer) => {
      const driversRef = ref(this.db, "/drivers");

      onValue(driversRef, (snapshot) => {
        this.ngZone.run(() => { // ✅ Runs inside Angular Zone
          console.log("📡 Firebase snapshot received:", snapshot.val());
          observer.next(snapshot.val());
        });
      }, (error) => {
        observer.error(error);
      });
    });
  }
}
