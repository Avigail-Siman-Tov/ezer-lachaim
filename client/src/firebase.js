// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0wWDuVkMTWg1iuH5JqqzT_aT2WN6GHxw",
  authDomain: "project-8897e.firebaseapp.com",
  projectId: "project-8897e",
  storageBucket: "project-8897e.appspot.com",
  messagingSenderId: "532069850315",
  appId: "1:532069850315:web:0fa9f4fc1ba1286ce74f4e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);

