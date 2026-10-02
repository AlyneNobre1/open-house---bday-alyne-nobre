import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || 'AIzaSyDummyKeyForSafeInitialization0',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || 'open-house-alyne.firebaseapp.com',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || 'open-house-alyne',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || 'open-house-alyne.appspot.com',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '100000000000',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || '1:100000000000:web:1000000000000000000000',
};

export const isFirebaseConfigured = Boolean(
  import.meta.env.VITE_FIREBASE_API_KEY && import.meta.env.VITE_FIREBASE_PROJECT_ID
);

let appInstance;
try {
  appInstance = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
} catch (error) {
  console.warn('Firebase initialization warning:', error);
  appInstance = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig, 'fallback-app');
}

export const app = appInstance;
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
