// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8rA1u5ntKOy0-9eWW-IG6XiMWM53q-eE",
  authDomain: "heroes-victor-villazon-2.firebaseapp.com",
  projectId: "heroes-victor-villazon-2",
  storageBucket: "heroes-victor-villazon-2.appspot.com",
  messagingSenderId: "195382185052",
  appId: "1:195382185052:web:f0374dd96b7f09ca472a99"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)


