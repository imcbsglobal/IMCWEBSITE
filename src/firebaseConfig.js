import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAZCuxCP8Ltux4H93RX9yS6nB_SHG-7PJU",
  authDomain: "imcwebsite-66100.firebaseapp.com",
  projectId: "imcwebsite-66100",
  storageBucket: "imcwebsite-66100.appspot.com",
  messagingSenderId: "513961941476",
  appId: "1:513961941476:web:ca2b92c659c101353a0ff1",
  measurementId: "G-CLXWK3WPSD",
  databaseURL: "https://imcwebsite-66100-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const dbFirestore = getFirestore(app); // Consistent export naming
export const dbRealtime = getDatabase(app); // Consistent export naming
