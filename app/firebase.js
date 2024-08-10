// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgQLg_19V5tR_JuX7GZHNBs1ocjHnlQSE",
  authDomain: "inventory-management-6c2c9.firebaseapp.com",
  projectId: "inventory-management-6c2c9",
  storageBucket: "inventory-management-6c2c9.appspot.com",
  messagingSenderId: "507583507829",
  appId: "1:507583507829:web:f0b4e5de6a5f4862dff73c",
  measurementId: "G-KBJ4J9YWXF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export {firestore}