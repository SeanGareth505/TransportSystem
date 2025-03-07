self.addEventListener("sync", (event) => {
  if (event.tag === "syncLocation") {
    event.waitUntil(syncLocationToFirebase());
  }
});

async function syncLocationToFirebase() {
  try {
    const db = await idb.openDB("LocationDB", 1);
    const tx = db.transaction("locations", "readonly");
    const store = tx.objectStore("locations");
    const locations = await store.getAll();

    for (const location of locations) {
      await fetch("https://yourfirebaseurl.firebaseio.com/tracking.json", {
        method: "PATCH",
        body: JSON.stringify(location),
        headers: { "Content-Type": "application/json" }
      });

      // Remove the synced location from IndexedDB
      const deleteTx = db.transaction("locations", "readwrite");
      deleteTx.objectStore("locations").delete(location.timestamp);
      await deleteTx.done;
    }
  } catch (error) {
    console.error("Failed to sync location:", error);
  }
}

self.addEventListener("install", (event) => {
  self.skipWaiting();
});
