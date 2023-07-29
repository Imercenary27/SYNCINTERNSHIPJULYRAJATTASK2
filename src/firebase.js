import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
const firebaseConfig = {
  
  apiKey: "AIzaSyBCKHFxtBP352AFJLZXqL9wMT1Flan-lQk",
  authDomain: "syncinternshipapp.firebaseapp.com",
  projectId: "syncinternshipapp",
  storageBucket: "syncinternshipapp.appspot.com",
  messagingSenderId: "769144877167",
  appId: "1:769144877167:web:e2779899c23a3c94c49d9a",
  measurementId: "G-MDL4XEPP4Z"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  
  export const firestore = firebase.firestore();
  
  export default firebase;