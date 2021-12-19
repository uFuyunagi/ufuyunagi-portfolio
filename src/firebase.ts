// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWEqh6tMDJkm5MRNc3p9mXWAoGGZXt9KU",
  authDomain: "ufuyunagi-portfolio.firebaseapp.com",
  projectId: "ufuyunagi-portfolio",
  storageBucket: "ufuyunagi-portfolio.appspot.com",
  messagingSenderId: "320827317215",
  appId: "1:320827317215:web:7257a52fbe6fa479c3826a",
  measurementId: "G-5MJFMYLNE0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);