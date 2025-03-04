import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app.config';
import { AppComponent } from './app.component';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// Function to dynamically load Google Maps API
function loadGoogleMapsAPI(retryCount: number = 3): Promise<void> {
  return new Promise((resolve, reject) => {
    if (window.google && window.google.maps) {
      console.log("✅ Google Maps API is already loaded.");
      resolve();
      return;
    }

    if (document.getElementById("google-maps-script")) {
      console.warn("⚠️ Google Maps API script is already in the document.");
      resolve();
      return;
    }

    console.log("📡 Loading Google Maps API...");

    const script = document.createElement("script");
    script.id = "google-maps-script";
    script.src = `https://maps.googleapis.com/maps/api/js?key=${environment.googleMapsApiKey}&libraries=places`;
    script.async = true;
    script.defer = true;

    script.onload = () => {
      console.log("✅ Google Maps API loaded successfully.");
      resolve();
    };

    script.onerror = () => {
      console.error("❌ Google Maps API failed to load.");
      if (retryCount > 0) {
        console.warn(`🔄 Retrying... (${retryCount} attempts left)`);
        setTimeout(() => loadGoogleMapsAPI(retryCount - 1).then(resolve).catch(reject), 2000);
      } else {
        reject(new Error("Google Maps API failed after multiple attempts."));
      }
    };

    document.head.appendChild(script);
  });
}

// Load Google Maps API and bootstrap the Angular application
loadGoogleMapsAPI()
  .then(() => {
    console.log("🚀 Bootstrapping Angular Application...");
    return bootstrapApplication(AppComponent, appConfig);
  })
  .catch((err) => console.error("🔥 Error bootstrapping application:", err));
