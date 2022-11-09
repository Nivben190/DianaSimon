// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB42xUmnlLRYv0GHGYyzzbza-tELp5_kz8",
  authDomain: "diana-shimon.firebaseapp.com",
  projectId: "diana-shimon",
  storageBucket: "diana-shimon.appspot.com",
  messagingSenderId: "983438674760",
  appId: "1:983438674760:web:9dedc92935540694f8417d",
  measurementId: "G-K6755DC1MP"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);

