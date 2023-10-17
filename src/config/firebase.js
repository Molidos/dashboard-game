// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArxjRpPGJZIaD1OYuaKMBAVnT_aKl0EDY",
  authDomain: "app-tibia.firebaseapp.com",
  projectId: "app-tibia",
  storageBucket: "app-tibia.appspot.com",
  messagingSenderId: "378391451603",
  appId: "1:378391451603:web:093921b4419741003c4126",
  measurementId: "G-VRH698SR07"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore()