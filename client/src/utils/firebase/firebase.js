import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.VITE_FIREBASE_API_KEY,
  authDomain: "auth-profile-57de3.firebaseapp.com",
  projectId: "auth-profile-57de3",
  storageBucket: "auth-profile-57de3.appspot.com",
  messagingSenderId: "104357337048",
  appId: "1:104357337048:web:287cb07ac34d79803b44ad"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const imageObj = getStorage(app)