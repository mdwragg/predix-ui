// importScripts('/cache-polyfill.js');

self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('predix-ui').then(function(cache) {
     return cache.addAll([
       '/predix-ui/',
       '/predix-ui/contributing.html',
       '/predix-ui/getting_started.html',
       '/predix-ui/index.html',
       '/predix-ui/landing_page.html',
       '/predix-ui/px-catalog-state.html',
       '/predix-ui/px-sb-list.html',
       '/predix-ui/px-sb.html',
       '/predix-ui/use_component_generator.html',
       '/predix-ui/use_css.html',
       '/predix-ui/use_seed.html',
       '/predix-ui/what_is_predix_ui.html',
       '/predix-ui/css/predix-ui-styles.html',
       '/predix-ui/css/px-sb-list-styles.html',
       '/predix-ui/css/px-sb-styles.html'
     ]);
   })
 );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});
