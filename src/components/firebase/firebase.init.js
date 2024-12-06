// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA73PDssNPOCbUfbectjOYx33m8BHTTn68",
  authDomain: "fir-auth-5c484.firebaseapp.com",
  projectId: "fir-auth-5c484",
  storageBucket: "fir-auth-5c484.firebasestorage.app",
  messagingSenderId: "204683771811",
  appId: "1:204683771811:web:eb9213ab4d0f916e462416"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;