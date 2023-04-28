'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a78ef48ec489a294129907a58009b99d",
".git/config": "a271582caa2a0102fb643a6618009884",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "e544b56f561c6ec8374393870934720d",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "747d090802ec7793ecc05e393b64bdb9",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8d0ebd372915aadff4588f830850b2f0",
".git/logs/refs/heads/main": "d0c55a893c46081fe8126944238c9156",
".git/logs/refs/remotes/origin/main": "6e2366f6f4901499edc13c107e6073ae",
".git/objects/00/1313c21b4f730b83431a6faa8329c8deb4f599": "a04813f21dee6c53fb9e0dfd38ba448d",
".git/objects/00/d2c272e6d94ac1de96622a8267bdd1022d5461": "3391f73e993df7d8ea3e1aab6001c5d4",
".git/objects/0b/4cb2563c0da766c6b8000c7a9ed413e92516e3": "73d869432da15cdf03db2e3d7a931aae",
".git/objects/0b/e9ce7fe9560a58e8f555dbd1d99d3f8accb20b": "cdae5c9da661b960a4f01eb1f4b7a127",
".git/objects/10/1e40a1ef04306ea352a30914460b49b4056e9e": "a73b72890ad56a81a7d507fd924e6a21",
".git/objects/12/05ac519f3eb05ebb109c55f1c3e5d98a720a7e": "13b01c552bec5cae6b24e3b6301526f1",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/14/92dd0285df0ef02bc1da789bd3de32811df758": "104a1497fa49b03568678c34da14a7f6",
".git/objects/1c/2df287b51503eb907ad643fde4aaa7f274cb33": "a302ee1d9f4a5eb765b7a73c5ae6fa44",
".git/objects/23/3374a8f26b29da544b0d8bdf82eadbaff0ce17": "1360eefeea3281d52fe6a4b32a659b16",
".git/objects/26/67ed81d3e0928757dfd5ace37b22634c885a36": "f50dd689e2e38abff01d171f46a2d825",
".git/objects/27/33f28aa9f61fc598cd29fcf4d2825161c21625": "912514abd964e76e2b5e5a74ecbba156",
".git/objects/31/1ab5ea9ccd36c9f69d74d79ba9dde19eb5bf6f": "5751558e01c16148ac99774efa0314e4",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/68c16bd50230b359786bfbdd16628fcc5860d9": "6cdb127138dbff2269937cc5d90dc4c3",
".git/objects/4a/a5f5f81ec18eb24c29c58ca6888ad5c209903c": "0ac0e6b259313beb2fd0e68dca3343c1",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/4c/8650340aac51b432747afa46d108a6138ba777": "5734fa852c99319ee74a808e11539d6f",
".git/objects/4d/a9338127ab19c8d6dc3e82a8b1c46c760ed6c8": "9c891d1f7dfd5912b8318f70f21e8293",
".git/objects/4e/14141239ecf805657ad510f8243dd1f6637390": "8d447a7af1a7c2c9557e4df8f2a551be",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/5d/66b5da0d318c3834fcf00c10e87ca462948c0f": "d4e6908169575dac1cf7f6b0e3a8e05c",
".git/objects/62/e539d2602e68426db52c6130480abb0ecda033": "0dc0930d67a69e39c580f25b8f543c3e",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/71/353212954bd4f1373f6727750016eee7c0b880": "ed649e6c086838a3cab822056bb36445",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/79/a8b89aaa4c69153cb9d1ce10ce36053327d621": "4289f8ef5374149d37923fba7ca0b4b1",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/82/b349301039f348952b9cba7133da5f8b368ae3": "c4a163166f94ba4d0439667b9046811d",
".git/objects/84/d9a00736686eee49a6de766d4f2075b4e072b1": "1dd53df7916499a63bf945ed6c21628e",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/96/defd28a193846aa9f4b7b409886877de4a846b": "49f08c7ed5dea6ccc4ae7c9983dcee93",
".git/objects/98/98ff5337ce63c8f4cc90f0b70e962effdb07ef": "add7a6269e02a7eb12c5c634a81e129a",
".git/objects/9e/f33d02cc76ffd9409953a3af5b3c80da72758f": "1ebfd4aee353d44366dac145ba6100d2",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/6ba4e3325a532cd181f887a4c40a2d8b5dd218": "5a057b91b9f2a002d4a802d9c02c4723",
".git/objects/aa/d07f26c08763ee4aa0bb594b4a8c561abef403": "bf90829405400fa49aee2c7540a5f4b6",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/915743e29570ab74ab151b1b164866e937d982": "d7a5eebd6f1f84e93bdedc1ca224b0aa",
".git/objects/b2/d57c4334498d176ecf37a875b213530f1a6c24": "3ffe472967923a6d1a63a7ae2b17b38a",
".git/objects/be/8aacdbbf40aa56612d7fc65f3e32163d77b514": "f7e8e7ea93bce549d5b33baf3bef5859",
".git/objects/c4/ccc3504ce27864ef2fd2a63732edbe28a750a3": "4bdec31e909028d6bada0e42fe5e6f44",
".git/objects/c9/c15f8ea8808a35c1d8ed88bf8a701c58984bd5": "557f7ea874d0fa47046ec81cd3fe6485",
".git/objects/cc/44088c85e537e6bf0d87e0a60664c71866886f": "a082fd6513140945db8f58477c5b0dbf",
".git/objects/d8/78bb14b5a73314a15e0a2d2fb3dbd0bf53b9fd": "3c436de6152bb4a24d5909c2b093da35",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e8/ebd22175eb1a13c526b7021ee734cd102ceead": "f2dbd863d298db4a106f8816213a720b",
".git/objects/ed/bb32f31efadde8cd08b717b7bcfb4b606fca8f": "7b37ab4577cb5619b915d0f6fb724359",
".git/objects/f0/9724ee15803c60280996e9c8be4daffa18c4ea": "7a7615ceeaf21ca3c7fe3026105a54af",
".git/objects/f4/0e8731d81d47f58a76df5fa06861f2e7661f9b": "d0c1aa93149b3881de0b1e487ea59d3e",
".git/objects/fa/d1af924707772ab2b8b1513a79a9bb97591203": "6acd991a369c9284f084365f47256ef5",
".git/objects/fc/f64c6f2cf76fb923f82675c137cb5587a212ea": "aaf0dbcbc5e3c4a49c6654a83ba7b03c",
".git/refs/heads/main": "d3beb110d5699184c0fb449cc5659d5a",
".git/refs/remotes/origin/main": "d3beb110d5699184c0fb449cc5659d5a",
"assets/AssetManifest.json": "274fa426e8ef2befad4c3db9bc15c0cf",
"assets/assets/icons/behance.svg": "1487dff57f5c15131037cb6965a4d0bf",
"assets/assets/icons/check.svg": "bce7a581bb999caac446c9138a57a401",
"assets/assets/icons/download.svg": "8c24d4679cb0c5297277321bf7b65d28",
"assets/assets/icons/dribble.svg": "cf842513f50591eb280695ad14bfa409",
"assets/assets/icons/github.svg": "49b7a0f6543674cc4743ec1a9f02e368",
"assets/assets/icons/linkedin.svg": "2f5e837978e8a6bb595dfd11c8dbd42f",
"assets/assets/icons/twitter.svg": "c09d9f98cb67b0dfc2aa4c63170f2632",
"assets/assets/images/bg.jpg": "4b51d257e8c11d7000d0740faaf48f94",
"assets/assets/images/perfil.jpg": "30db7ea5b3dd9e220a04181aa892e04c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "f27f9ae3ef9295bacbf32809ec269ee0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "0f9b8116195f3428d7e6820fdf8c4bfc",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "0f9b8116195f3428d7e6820fdf8c4bfc",
"icons/Icon-512.png": "10fbd207d169e4a57b3a61e36c25d236",
"index.html": "b259415c304d5403aefda7bcd3d71a08",
"/": "b259415c304d5403aefda7bcd3d71a08",
"main.dart.js": "eaf2530ef28087372a69d6b57be75ed1",
"manifest.json": "6f329b3a398bb282fa75661ee9d0abb8",
"version.json": "1ac57eb0214a8f5216f1da7dd479b33f"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
