// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxvqO8-5H45VZuEwgNADXcfoAZ3K3p-gY",
  authDomain: "dragon-news-dd242.firebaseapp.com",
  projectId: "dragon-news-dd242",
  storageBucket: "dragon-news-dd242.firebasestorage.app",
  messagingSenderId: "796202157367",
  appId: "1:796202157367:web:5382fd699de2b8906b06b2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
