export const environment = {
  production: true,
  apiUrl: 'https://shopbot-server-7d7f5c27c0b7.herokuapp.com',
  // Same Firebase project as environment.ts (and public/firebase-messaging-sw.js's
  // own copy, which can't read this file) — same project the back-office uses.
  firebaseConfig: {
    apiKey: 'AIzaSyALKWXDUQHGAf2nwjQ1eDN-zOApIlRiM4k',
    authDomain: 'foodie-6d808.firebaseapp.com',
    projectId: 'foodie-6d808',
    storageBucket: 'foodie-6d808.firebasestorage.app',
    messagingSenderId: '883466824651',
    appId: '1:883466824651:web:373261f8a1907bfe84a44e',
  },
  vapidKey: 'BGR6An1ArcSr33uyiWUSoMszE0SJC0b1FyEYzINtKAVAQ9mEar5r8Z0vkR4fSfy4Mb4qbke35IGyrBK7kNJ-ct0',
  googleMapsApiKey: 'AIzaSyDj2Iq9H0urXYeg-ZNuD4i19jmjZv6rk74',
};
