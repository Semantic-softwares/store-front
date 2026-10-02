// Firebase Cloud Messaging — background push handler for a guest's order
// status updates. Runs in the service worker context, so it can't import
// src/environments/*.ts — same Firebase project/credentials as the
// back-office's copy of this file (shopbot-back-office/public/firebase-messaging-sw.js),
// since this is "the same logic and credentials as the back office", just for
// guests instead of staff.
//
// Registered automatically by firebase/messaging's getToken() (default lookup
// path is /firebase-messaging-sw.js at the site root, which is why this file
// lives in public/ rather than src/assets/ — see angular.json's assets config).
//
// This app also registers Angular's own PWA asset-caching service worker
// (ngsw-worker.js) at the same root scope (see app.config.ts) — two service
// workers can coexist at one scope, same as the back-office.

importScripts('https://www.gstatic.com/firebasejs/10.14.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.14.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: 'AIzaSyALKWXDUQHGAf2nwjQ1eDN-zOApIlRiM4k',
  authDomain: 'foodie-6d808.firebaseapp.com',
  projectId: 'foodie-6d808',
  storageBucket: 'foodie-6d808.firebasestorage.app',
  messagingSenderId: '883466824651',
  appId: '1:883466824651:web:373261f8a1907bfe84a44e',
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const title = payload.notification?.title || 'Order update';
  const body = payload.notification?.body || '';

  self.registration.showNotification(title, {
    body,
    icon: '/icons/icon-192x192.png',
    data: payload.data,
    tag: payload.data?.orderId ? `self-order-${payload.data.orderId}` : undefined,
  });
});

// No per-order deep link is encoded in the push payload (the backend doesn't
// know this app's own URL structure) — focusing whichever tab the guest
// already has open is the common case and the honest thing to do; a closed
// tab just opens the app's root.
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      for (const client of clientList) {
        if ('focus' in client) {
          return client.focus();
        }
      }
      return self.clients.openWindow('/');
    }),
  );
});
