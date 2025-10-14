// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdyl9LW93hBCCh9G0SPUebB3QV6V9pkDU",
  authDomain: "portfolio-b1e9e.firebaseapp.com",
  projectId: "portfolio-b1e9e",
  storageBucket: "portfolio-b1e9e.firebasestorage.app",
  messagingSenderId: "642307485761",
  appId: "1:642307485761:web:3c282232d714b37b7b96c0",
  measurementId: "G-X79FQ8V4YT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

export { db };