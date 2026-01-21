
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Your web app's Firebase configuration
// TODO: Replace with your actual project keys from Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyDs8C8B8s2T1wM3zOKIySw9XgsDxICnOi8",
  authDomain: "stream-stephen1.firebaseapp.com",
  projectId: "stream-stephen1",
  storageBucket: "stream-stephen1.firebasestorage.app",
  messagingSenderId: "655351544398",
  appId: "1:655351544398:web:090e28f0726de13c58a11f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };
