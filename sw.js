// importScripts('/cache-polyfill.js');

self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('predix-ui').then(function(cache) {
     return cache.addAll([
       '/',
       '/contributing.html',
       '/getting_started.html',
       '/index.html',
       '/landing_page.html',
       '/px-catalog-state.html',
       '/px-sb-list.html',
       '/px-sb.html',
       '/use_component_generator.html',
       '/use_css.html',
       '/use_seed.html',
       '/what_is_predix_ui.html',
       '/css/predix-ui-styles.html',
       '/css/px-sb-list-styles.html',
       '/css/px-sb-styles.html'
     ]);
   })
 );
});
