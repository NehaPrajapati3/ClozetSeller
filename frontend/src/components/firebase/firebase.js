// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC91gVHLmsOgKooVEZw6Zb7DEXaCeK73p4",
  authDomain: "clozetwebapp.firebaseapp.com",
  projectId: "clozetwebapp",
  storageBucket: "clozetwebapp.firebasestorage.app",
  messagingSenderId: "1068960143045",
  appId: "1:1068960143045:web:cb61060d056614214202ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);

export default app;