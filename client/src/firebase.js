// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'


import firebase from "firebase/app"
import { Firestore } from "firebase/firestore";
import "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const app = firebase.initializeApp ({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP__FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP__FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP__FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP__FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP__FIREBASE_APP_ID 
});

export const auth = app.auth()
export default app
// Initialize Firebase
// const app = initializeApp(firebaseConfig);

// export const firestore = getFirestore(app);

