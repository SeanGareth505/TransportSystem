import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { environment } from './environments/environment';
import { AppComponent } from './app.component';
import { appConfig } from './app.config';

// ✅ Enable production mode if applicable
if (environment.production) {
  enableProdMode();
}

// ✅ Load Google Maps Before Bootstrapping
async function loadGoogleMapsAPI(): Promise<void> {
  if (window.google && window.google.maps) {
    console.log("✅ Google Maps API is already loaded.");
    return;
  }

  console.log("📡 Loading Google Maps API...");

  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.id = "google-maps-script";
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDsvovnTyI8PZprGo66-aaWBDW_rzInMCg&libraries=places&v=beta`;
    script.async = true;
    script.defer = true;

    script.onload = async () => {
      console.log("✅ Google Maps API loaded successfully.");
      if (google.maps.importLibrary) {
        await google.maps.importLibrary("maps");
      }
      resolve();
    };

    script.onerror = () => {
      console.error("❌ Google Maps API failed to load.");
      reject(new Error("Google Maps API failed to load."));
    };

    document.head.appendChild(script);
  });
}

// ✅ Function to register Service Worker
function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('ngsw-worker.js')
        .then((registration) => {
          console.log("✅ Service Worker Registered:", registration);
        })
        .catch((error) => {
          console.error("❌ Service Worker Registration Failed:", error);
        });
    });
  } else {
    console.warn("⚠️ Service Worker is not supported in this browser.");
  }
}

// ✅ Load Google Maps First, Then Bootstrap Angular
Promise.all([
  loadGoogleMapsAPI(), // Ensure Google Maps loads first
  registerServiceWorker() // Register Service Worker independently
])
  .then(() => {
    console.log("🚀 Bootstrapping Angular Application...");
    return bootstrapApplication(AppComponent, appConfig);
  })
  .catch((err) => {
    console.error("🔥 Critical Error: Application bootstrap failed.", err);
  });
