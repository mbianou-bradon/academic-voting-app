import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCXEmJl5XNkq2COBrA8YVFZEV0JbbZU2g4",
  authDomain: "academia-voting-app.firebaseapp.com",
  projectId: "academia-voting-app",
  storageBucket: "academia-voting-app.appspot.com",
  messagingSenderId: "417346351649",
  appId: "1:417346351649:web:3abaedc2f2596cee096960"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
export const storage = getStorage(app);
