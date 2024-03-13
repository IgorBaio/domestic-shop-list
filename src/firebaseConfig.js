// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAq72qdo2QBrxrY92tgCgaPAmkK323cBnw",
  authDomain: "shoplist-6927d.firebaseapp.com",
  projectId: "shoplist-6927d",
  storageBucket: "shoplist-6927d.appspot.com",
  messagingSenderId: "135357919135",
  appId: "1:135357919135:web:ad02884b5f39964f8857aa",
  measurementId: "G-TWPB1V7YLJ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);