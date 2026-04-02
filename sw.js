const CACHE_NAME = 'clap-finder-v2'; // 버전을 올려서 캐시를 갱신합니다.
const ASSETS = [
  'index.html',
  'manifest.json',
  'icon-512.png' // 새로운 아이콘 파일을 목록에 추가합니다.
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});
