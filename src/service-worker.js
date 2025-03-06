self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SET_FIREBASE_URL") {
    self.firebaseURL = event.data.firebaseURL;
    console.log("🔗 Firebase URL set in Service Worker:", self.firebaseURL);
  }

  if (event.data && event.data.type === "UPDATE_LOCATION") {
    console.log("📍 Received Location Update:", event.data.coords);
    syncLocationToFirebase(event.data.coords);
  }
});

self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);
  if (url.pathname.startsWith("/@vite/")) return;
});

// ✅ Initialize Firebase URL to avoid missing values
self.firebaseURL = "https://transport-51a63-default-rtdb.europe-west1.firebasedatabase.app";

async function syncLocationToFirebase(coords) {
  try {
    console.log("🌍 Using Firebase URL:", self.firebaseURL); // ✅ Debug log

    if (!self.firebaseURL) {
      console.warn("⚠️ Firebase URL is missing, using default.");
      self.firebaseURL = "https://transport-51a63-default-rtdb.europe-west1.firebasedatabase.app";
    }

    const firebaseURL = `${self.firebaseURL}/drivers/driver_123.json`;
    console.log("🚀 Syncing location to Firebase:", firebaseURL, coords);

    const response = await fetch(firebaseURL, {
      method: "PATCH",
      body: JSON.stringify({
        lat: coords.lat,
        lng: coords.lng,
        timestamp: Date.now(),
      }),
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-cache",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status} - ${response.statusText}`);
    }

    console.log("✅ Location Synced Successfully:", await response.json());
  } catch (error) {
    console.error("❌ Failed to Sync Location:", error);
  }
}
