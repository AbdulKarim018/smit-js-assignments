import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCu08pN-UftmdeCnb7eANXGvZSuJroZfTg",
  authDomain: "smit-firebase-e6ef5.firebaseapp.com",
  projectId: "smit-firebase-e6ef5",
  storageBucket: "smit-firebase-e6ef5.appspot.com",
  messagingSenderId: "175151531259",
  appId: "1:175151531259:web:7061c6ed843617ee265c5e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, app, collection, doc, getDocs, addDoc, updateDoc, deleteDoc };
