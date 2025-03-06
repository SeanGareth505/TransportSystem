import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-track-confonfirmation',
  templateUrl: './track-confonfirmation.component.html',
  styleUrl: './track-confonfirmation.component.scss'
})
export class TrackConfonfirmationComponent {
  trackingStarted = false;
  isLoading = false;
  driverId: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    console.log("📡 Checking if tracking is active...");

    navigator.serviceWorker?.addEventListener("message", (event) => {
      if (event.data?.type === "TRACKING_STARTED") {
        console.log("✅ Tracking already active, redirecting...");
        this.router.navigate(['/thank-you']);
      }
    });
  }

  startTracking() {
    this.driverId = "driver_123"; // ✅ Using a static ID for testing
    this.isLoading = true;

    console.log(`🚗 Using Dummy Driver ID: ${this.driverId}`);

    if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
      console.log("📡 Sending START_TRACKING to Service Worker...");
      navigator.serviceWorker.controller.postMessage({
        type: "START_TRACKING",
        driverId: this.driverId,
      });

      navigator.serviceWorker.addEventListener("message", (event) => {
        if (event.data?.type === "TRACKING_STARTED") {
          console.log("📡 Dummy Tracking Started!");
          this.trackingStarted = true;
          this.isLoading = false;
          this.router.navigate(['/thank-you']);
        }
      });
    } else {
      console.error("❌ Service Worker not available.");
      this.isLoading = false;
    }
  }
}
