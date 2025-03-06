self.addEventListener("install", (event) => {
  console.log("⚠️ Fake Service Worker Installed in Development Mode.");
  event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", (event) => {
  console.log("⚠️ Fake Service Worker Activated.");
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event) => {
  console.log("🔄 Service Worker Intercepted:", event.request.url);
});

// ✅ Listen for Messages from the Main App
self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "UPDATE_LOCATION") {
    console.log("📍 Received Location Update:", event.data.coords);
    syncLocationToFirebase(event.data.coords);
  }
});

// ✅ Function to Send Data to Firebase
async function syncLocationToFirebase(coords) {
  const firebaseURL = "https://YOUR_FIREBASE_URL/drivers/driver_123.json";

  try {
    const response = await fetch(firebaseURL, {
      method: "PATCH",
      body: JSON.stringify({
        lat: coords.latitude,
        lng: coords.longitude,
        timestamp: Date.now(),
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      console.log("✅ Location Synced to Firebase:", coords);
    } else {
      console.error("❌ Failed to Sync Location to Firebase");
    }
  } catch (error) {
    console.error("❌ Error Syncing Location:", error);
  }
}
