// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCwlpT5qwXOb-1UX8rNgiSFUgWvCQsmbWQ",
    authDomain: "test-coderhouse-f21e6.firebaseapp.com",
    projectId: "test-coderhouse-f21e6",
    storageBucket: "test-coderhouse-f21e6.appspot.com",
    messagingSenderId: "353010496220",
    appId: "1:353010496220:web:33e1bdb0e5976fa523ba19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)