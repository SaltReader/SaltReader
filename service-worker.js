/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "20240403/test.html",
    "revision": "58e7d3f85edcbe3b380a9fa093768866"
  },
  {
    "url": "20240404/01.html",
    "revision": "bd138c8da83ef6f7252b457d0dfc4852"
  },
  {
    "url": "404.html",
    "revision": "13896d1b24734171dd2e748cb640f1da"
  },
  {
    "url": "assets/css/0.styles.99bb3c00.css",
    "revision": "9dde51ea3691e4c3a83f0a016a4cec67"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.f8bb34da.js",
    "revision": "35747f2559ae75f91f91f022f33b34d5"
  },
  {
    "url": "assets/js/10.fde088a2.js",
    "revision": "ac650d9efe8a8096a71ed7eec1d66c1a"
  },
  {
    "url": "assets/js/11.c62b6b34.js",
    "revision": "32811acddef58fcde432a0c5b3c632dd"
  },
  {
    "url": "assets/js/12.27d4f152.js",
    "revision": "ff95c50e9c7c4ed03032e410b506376c"
  },
  {
    "url": "assets/js/13.419d7748.js",
    "revision": "ef76c38f3a617e2e8e50f2e6432d653c"
  },
  {
    "url": "assets/js/14.eb7a3d07.js",
    "revision": "6cfc0941a1a9833db3e185cf0a550721"
  },
  {
    "url": "assets/js/15.114dfd5c.js",
    "revision": "24e40ee0f1eb3ba7fe96b622b8694a90"
  },
  {
    "url": "assets/js/16.85253907.js",
    "revision": "916954f7aef99018a2ea7a606da82326"
  },
  {
    "url": "assets/js/17.c2838453.js",
    "revision": "cfb93628d602ad7fc25579d777723e8b"
  },
  {
    "url": "assets/js/18.3256f17f.js",
    "revision": "d6f6688b7faba80c1ce3cc3b8e0687ae"
  },
  {
    "url": "assets/js/19.d8afd0ae.js",
    "revision": "a8a7da75d2c3a3e095e14079f195360c"
  },
  {
    "url": "assets/js/2.d3a12b6d.js",
    "revision": "3716a2dec6b5006dbc3068bf4fabb106"
  },
  {
    "url": "assets/js/20.0d880388.js",
    "revision": "50964e518e23d2fe908c3439070539e7"
  },
  {
    "url": "assets/js/21.33b300c9.js",
    "revision": "012fa5ee0e06f8fe48e51039c2333321"
  },
  {
    "url": "assets/js/22.e0ea1f24.js",
    "revision": "81c30e2d0fb7981671ddd118f7dc604f"
  },
  {
    "url": "assets/js/23.756c3d4c.js",
    "revision": "e8774db78b30bcbd6e42027c27dfb644"
  },
  {
    "url": "assets/js/24.f9426260.js",
    "revision": "919d9ef1e191cc49fbc267f98c6a145e"
  },
  {
    "url": "assets/js/25.ae9d0fb5.js",
    "revision": "66c4bada8b3d0770a5d9c79409c52b77"
  },
  {
    "url": "assets/js/3.af33e5d6.js",
    "revision": "68ee09bb1cce7a2bc8cdab9d1f6b6287"
  },
  {
    "url": "assets/js/4.0a92875f.js",
    "revision": "4d6f60693cdaf5af6f0061adec37e2b0"
  },
  {
    "url": "assets/js/5.3b9be48d.js",
    "revision": "7e306b7e89a1eacaa55e1dac99794a8d"
  },
  {
    "url": "assets/js/6.7b96ebf4.js",
    "revision": "b628c99c2dfd878ee96f7289407e79a2"
  },
  {
    "url": "assets/js/7.7e58b9c4.js",
    "revision": "68103119483a469696b1f2baba07128f"
  },
  {
    "url": "assets/js/app.1953b561.js",
    "revision": "06c78353c38f1a4ed6bdd015be7d4d2a"
  },
  {
    "url": "assets/js/vendors~docsearch.2493936b.js",
    "revision": "9e388c7d90557cbe5c5ede892e13cfec"
  },
  {
    "url": "index.html",
    "revision": "e2dfb18100b8adc1e3939336ca93feef"
  },
  {
    "url": "js/index.js",
    "revision": "5eeea5d47bd03ea74359fdc592bf2bcb"
  },
  {
    "url": "logo.png",
    "revision": "7251c3e3504ef0023629bba1d89e9051"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
