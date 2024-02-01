// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0RigbEWnMx5b6Dxohg1RRexooOub6-78",
  authDomain: "mgcloud-dd822.firebaseapp.com",
  databaseURL: "https://mgcloud-dd822-default-rtdb.firebaseio.com",
  projectId: "mgcloud-dd822",
  storageBucket: "mgcloud-dd822.appspot.com",
  messagingSenderId: "201241038659",
  appId: "1:201241038659:web:e513343d036aecf8fd29f6",
  measurementId: "G-9B2J3KTZKW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();