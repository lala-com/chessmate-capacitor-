/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-aeb6ecaf'], (function (workbox) { 'use strict';

  self.skipWaiting();
  workbox.clientsClaim();
  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */
  workbox.precacheAndRoute([{
    "url": "registerSW.js",
    "revision": "1872c500de691dce40960bb85481de07"
  }, {
    "url": "pwa-maskable-512x512.png",
    "revision": "29255bc078349cadfe247ec349dfcc4a"
  }, {
    "url": "pwa-512x512.png",
    "revision": "0543a7ad327151d060c4ec595cb0866a"
  }, {
    "url": "pwa-192x192.png",
    "revision": "3d322ea3c24cb5f6a4c6737029944719"
  }, {
    "url": "index.html",
    "revision": "432ecd5f2028b4e366beeb4412d7c97a"
  }, {
    "url": "icon.svg",
    "revision": "cd855b8071867e2e0376c8fb38d8168e"
  }, {
    "url": "icon-512.png",
    "revision": "0543a7ad327151d060c4ec595cb0866a"
  }, {
    "url": "icon-192.png",
    "revision": "3d322ea3c24cb5f6a4c6737029944719"
  }, {
    "url": "favicon.svg",
    "revision": "cd855b8071867e2e0376c8fb38d8168e"
  }, {
    "url": "favicon.png",
    "revision": "b0a6a707a7e8bc9a2e8d6b208a1ff5d6"
  }, {
    "url": "apple-touch-icon.png",
    "revision": "71e979ae09b3e170c7e6f714093cde35"
  }, {
    "url": "assets/index-Bh02dCkP.js",
    "revision": null
  }, {
    "url": "assets/index-BIpy6wy_.css",
    "revision": null
  }, {
    "url": "apple-touch-icon.png",
    "revision": "71e979ae09b3e170c7e6f714093cde35"
  }, {
    "url": "favicon.png",
    "revision": "b0a6a707a7e8bc9a2e8d6b208a1ff5d6"
  }, {
    "url": "favicon.svg",
    "revision": "cd855b8071867e2e0376c8fb38d8168e"
  }, {
    "url": "icon-192.png",
    "revision": "3d322ea3c24cb5f6a4c6737029944719"
  }, {
    "url": "icon-512.png",
    "revision": "0543a7ad327151d060c4ec595cb0866a"
  }, {
    "url": "icon.svg",
    "revision": "cd855b8071867e2e0376c8fb38d8168e"
  }, {
    "url": "pwa-192x192.png",
    "revision": "3d322ea3c24cb5f6a4c6737029944719"
  }, {
    "url": "pwa-512x512.png",
    "revision": "0543a7ad327151d060c4ec595cb0866a"
  }, {
    "url": "pwa-maskable-512x512.png",
    "revision": "29255bc078349cadfe247ec349dfcc4a"
  }], {});
  workbox.cleanupOutdatedCaches();
  workbox.registerRoute(new workbox.NavigationRoute(workbox.createHandlerBoundToURL("/index.html"), {
    denylist: [/^\/\.well-known/, /\/\.well-known\/.*/, /assetlinks\.json/]
  }));
  workbox.registerRoute(/^\/\.well-known\/.*/, new workbox.NetworkOnly(), 'GET');

}));
