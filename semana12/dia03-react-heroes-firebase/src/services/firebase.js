// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVSYTS0tnwoN5qH4C0bZpWEZzsoQ4So5E",
  authDomain: "heroes-victor-villazon.firebaseapp.com",
  projectId: "heroes-victor-villazon",
  storageBucket: "heroes-victor-villazon.appspot.com",
  messagingSenderId: "314810284230",
  appId: "1:314810284230:web:f1e50168a7df5f2f84ffc7",
  measurementId: "G-XB8ZXE2HK3"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)


