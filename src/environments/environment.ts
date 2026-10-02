export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000',
  // Same Firebase project the back-office uses for its staff web-push alerts
  // (shopbot-back-office/src/environments/environment.ts) — "the same logic
  // and credentials as the back office", just registering a guest's device
  // instead of a staff member's.
  firebaseConfig: {
    apiKey: 'AIzaSyALKWXDUQHGAf2nwjQ1eDN-zOApIlRiM4k',
    authDomain: 'foodie-6d808.firebaseapp.com',
    projectId: 'foodie-6d808',
    storageBucket: 'foodie-6d808.firebasestorage.app',
    messagingSenderId: '883466824651',
    appId: '1:883466824651:web:373261f8a1907bfe84a44e',
  },
  vapidKey: 'BGR6An1ArcSr33uyiWUSoMszE0SJC0b1FyEYzINtKAVAQ9mEar5r8Z0vkR4fSfy4Mb4qbke35IGyrBK7kNJ-ct0',
  // Dedicated key for the storefront's own Places Autocomplete/Geocoding and
  // the delivery address's static map preview — also hardcoded in
  // index.html's Maps JS API script tag, which can't read this file.
  googleMapsApiKey: 'AIzaSyDj2Iq9H0urXYeg-ZNuD4i19jmjZv6rk74',
};
