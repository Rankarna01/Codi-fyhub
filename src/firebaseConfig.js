// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbx8H22l7GqyLCM5d1WTuSG7xQ2aNL5HA",
  authDomain: "codifyhub-2812f.firebaseapp.com",
  projectId: "codifyhub-2812f",
  storageBucket: "codifyhub-2812f.firebasestorage.app",
  messagingSenderId: "389729346084",
  appId: "1:389729346084:web:69dddd4029bc209eefaeb1",
  measurementId: "G-KHX1XM4EKV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };