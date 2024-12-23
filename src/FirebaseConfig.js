// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Import Firestore

// Your Firebase configuration details
const firebaseConfig = {
  apiKey: "AIzaSyAFBPCRcu6cnEOMQ0MwGy6JpFsvtoM1uLo",
  authDomain: "bike-spare-part.firebaseapp.com",
  projectId: "bike-spare-part",
  storageBucket: "bike-spare-part.appspot.com",
  messagingSenderId: "71211141517",
  appId: "1:71211141517:web:80790fc914bf3e393095c4",
  measurementId: "G-Q5TB7JR9FB"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Get Firebase Authentication instance
const auth = getAuth(app);

// Initialize Firestore
const db = getFirestore(app); // Initialize Firestore

export { auth, db }; // Export both auth and db
