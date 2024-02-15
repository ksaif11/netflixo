import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyCJupw75Eyqv2Izl9vB8tZJ-WLE8dTWMpI",
  authDomain: "netflixo-19f33.firebaseapp.com",
  projectId: "netflixo-19f33",
  storageBucket: "netflixo-19f33.appspot.com",
  messagingSenderId: "729265664434",
  appId: "1:729265664434:web:52504d4eeb814cef89f4ab",
  measurementId: "G-RRLY7QLYBS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth=getAuth(app);