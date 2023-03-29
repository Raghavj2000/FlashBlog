// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiAXOqYlvET6sIgBdznXXl6hX7Pw3zjxE",
  authDomain: "blogproject-ae872.firebaseapp.com",
  projectId: "blogproject-ae872",
  storageBucket: "blogproject-ae872.appspot.com",
  messagingSenderId: "93691688956",
  appId: "1:93691688956:web:c1b5a931768f25f3a32479"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

 export const auth= getAuth(app)
 export const provider= new GoogleAuthProvider()
 export const db= getFirestore(app)