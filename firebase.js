// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAh4XhPKz3eH6_1syrKK0I7wGiM1GrAqKM",
  authDomain: "apolo-20db3.firebaseapp.com",
  projectId: "apolo-20db3",
  storageBucket: "apolo-20db3.firebasestorage.app",
  messagingSenderId: "525502841854",
  appId: "1:525502841854:web:d5e4bce648656a769976af",
  measurementId: "G-SJL7STY8C7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);

export { auth };