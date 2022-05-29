// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import {getFirestore} from 'firebase/firestore'


// import firebase from "firebase/app"
// import { Firestore } from "firebase/firestore";
// import "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const app = firebase.initializeApp ({
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP__FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP__FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP__FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP__FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP__FIREBASE_APP_ID 
// });

// export const auth = app.auth()
// export default app


// Import the functions you need from the SDKs you need 
// import { initializeApp } from "firebase/app"; 
// import {getFirestore} from 'firebase/firestore' 

// TODO: Add SDKs for Firebase products that you want to use 
// https://firebase.google.com/docs/web/setup#available-libraries 
 


// const app = firebase.initializeApp ({
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP__FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP__FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP__FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP__FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP__FIREBASE_APP_ID 
// });





// Your web app's Firebase configuration 
// const firebaseConfig = { 
//   apiKey: "AIzaSyBqQyGHXMDao2Tik09iymaqNom8eVyXE8w", 
//   authDomain: "ezer-lachaim.firebaseapp.com", 
//   projectId: " ezer-lachaim", 
//   storageBucket: " ezer-lachaim.appspot.com", 
//   messagingSenderId: "77275033893", 
//   appId: "1:77275033893:web:fea0a2b5976d0993eb6acc" 
// }; 
 
// Initialize Firebase 
// const app = initializeApp(firebaseConfig); 

// export const firestore = getFirestore(app); 
// export const auth = app.auth();
// export default app
// const auth = firebase.auth();

// const provider = new firebase.auth.GoogleAuthProvider();
// export { auth, provider };
// export { auth};
 




// Import the functions you need from the SDKs you need 
// import { initializeApp } from "firebase/app"; 
// import {getFirestore} from 'firebase/firestore' 

import "@firebase/auth"
import { initializeApp } from "@firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/auth';
import {getFirestore} from 'firebase/firestore' 
// TODO: Add SDKs for Firebase products that you want to use 
// https://firebase.google.com/docs/web/setup#available-libraries 
 
// Your web app's Firebase configuration 
const firebaseConfig = {
  apiKey: "AIzaSyBqQyGHXMDao2Tik09iymaqNom8eVyXE8w",
  authDomain: "ezer-lachaim.firebaseapp.com",
  projectId: "ezer-lachaim",
  storageBucket: "ezer-lachaim.appspot.com",
  messagingSenderId: "77275033893",
  appId: "1:77275033893:web:fea0a2b5976d0993eb6acc"
};
 
// Initialize Firebase 
const app = firebase.initializeApp(firebaseConfig); 
const firestore = getFirestore(app); 
// export const auth = firebase.auth();
const auth = firebase.auth();
 const provider = new firebase.auth.GoogleAuthProvider();
 export { auth, provider, firestore };

 export default app
