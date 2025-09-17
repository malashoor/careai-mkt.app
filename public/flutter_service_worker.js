// Minimal no-op service worker to satisfy stale registrations from previous Flutter web builds.
// It does not cache or intercept anything.
self.addEventListener('install', (event) => {
	self.skipWaiting();
});

self.addEventListener('activate', (event) => {
	// Take control immediately and avoid caching
	event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
	// Let the network handle all requests
	return; 
});
