// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFireStore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQcVyllG9AFGvIBmdh4TJ1d8_72OEXsXw",
  authDomain: "bcontact-9a409.firebaseapp.com",
  projectId: "bcontact-9a409",
  storageBucket: "bcontact-9a409.appspot.com",
  messagingSenderId: "1090338498107",
  appId: "1:1090338498107:web:f851c08e26e3dd443ade1e",
  measurementId: "G-7PKCB7LNN3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFireStore(app);