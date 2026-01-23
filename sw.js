// Archivo sw.js
self.addEventListener('fetch', function(event) {
  // No guarda nada, solo permite que la PWA sea "legal"
  event.respondWith(fetch(event.request));
});