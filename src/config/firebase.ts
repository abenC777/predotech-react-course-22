// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHoo7dCVRdQoyireTpjqA2Rke7-ha9Sqg",
  authDomain: "pedro-react-course-aben.firebaseapp.com",
  projectId: "pedro-react-course-aben",
  storageBucket: "pedro-react-course-aben.appspot.com",
  messagingSenderId: "705472289473",
  appId: "1:705472289473:web:5eea40e182e37e202e5240",
  measurementId: "G-H37XNH6LNJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)