// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import * as firebase from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTS2RzcRMa2pHKpsxsM-0Ofh8hz1OzSBk",
  authDomain: "firstproject-a107a.firebaseapp.com",
  databaseURL: "https://firstproject-a107a-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "firstproject-a107a",
  storageBucket: "firstproject-a107a.appspot.com",
  messagingSenderId: "8476515836",
  appId: "1:8476515836:web:e2719f75cc506a78fba679",
  measurementId: "G-QRPBFEJKKP"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const database = getDatabase(app);

//export default app;