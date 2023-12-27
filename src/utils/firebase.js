// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6z0Xn0xq-wYRFJV42fbqDP7ol-MQtmhE",
  authDomain: "netflixgpt-77018.firebaseapp.com",
  projectId: "netflixgpt-77018",
  storageBucket: "netflixgpt-77018.appspot.com",
  messagingSenderId: "318337464223",
  appId: "1:318337464223:web:07f8255526e3514aa1efaa",
  measurementId: "G-2LMKM1G17T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();