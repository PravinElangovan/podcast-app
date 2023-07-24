// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDH53ymm_pqNvCa9gu1pi5RDGfv0sAZRoU",
  authDomain: "podcast-app-records.firebaseapp.com",
  projectId: "podcast-app-records",
  storageBucket: "podcast-app-records.appspot.com",
  messagingSenderId: "26956104875",
  appId: "1:26956104875:web:1247d7e1734f527c47e3ee",
  measurementId: "G-PD56YZZYN7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { auth, db, storage };
