// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyAvfuJa8jfTEOs2WYctht0FU-HunCy5hhw",
  authDomain: "realestate-c2bce.firebaseapp.com",
  projectId: "realestate-c2bce",
  storageBucket: "realestate-c2bce.appspot.com",
  messagingSenderId: "719369062839",
  appId: "1:719369062839:web:0bf4b458a68eac0e670032",
  measurementId: "G-RJ0F1FTSVL"
};

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()
