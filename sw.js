const CACHE='fe-civil-prep-v4.0.0';
const ASSETS=['./','./index.html','./styles.css','./app.js','./questions.json','./topics.json','./manifest.webmanifest','./icons/icon-192.png','./icons/icon-512.png'];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(x=>x!==CACHE).map(x=>caches.delete(x)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',event=>{if(event.request.method!=='GET'||new URL(event.request.url).origin!==location.origin)return;event.respondWith(fetch(event.request).then(res=>{if(res.ok){const clone=res.clone();caches.open(CACHE).then(cache=>cache.put(event.request,clone));}return res;}).catch(()=>caches.match(event.request)));});
