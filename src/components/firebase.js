import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCtusGCRnd4F52XqQHM_UEJJ49Jvm3ZIXc",
  authDomain: "startcommerce-392fe.firebaseapp.com",
  projectId: "startcommerce-392fe",
  storageBucket: "startcommerce-392fe.appspot.com",
  messagingSenderId: "643372343435",
  appId: "1:643372343435:web:1a4dff608d632db207b48e",
};
// Initialize Firebase
export const db = firebase.initializeApp(firebaseConfig).firestore();
