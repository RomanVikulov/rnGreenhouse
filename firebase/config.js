import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBsS_c-DdaQSjCUUP70n0rlbrEfRvmsOiE',
  authDomain: 'rngreenhouse-32e63.firebaseapp.com',
  projectId: 'rngreenhouse-32e63',
  storageBucket: 'rngreenhouse-32e63.firebasestorage.app',
  messagingSenderId: '404394046228',
  appId: '1:404394046228:web:b79e73df84501cd6028801',
  measurementId: 'G-XYTBSKG5TM',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

const db = getFirestore(app);

export { auth, db };
