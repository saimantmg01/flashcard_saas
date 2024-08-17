// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRFcXNZL7WDXtjsOmjraMCuWr9FbmrsTk",
  authDomain: "flashcard-sass-b8ef6.firebaseapp.com",
  projectId: "flashcard-sass-b8ef6",
  storageBucket: "flashcard-sass-b8ef6.appspot.com",
  messagingSenderId: "984137350334",
  appId: "1:984137350334:web:85ed3314a09905eac9b2ef",
  measurementId: "G-245WXCPL1G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);