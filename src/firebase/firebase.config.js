// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuGA5y14pTCAVFUyi2j-rGUdn-MSAGr-g",
  authDomain: "the-dragon-news-5cc29.firebaseapp.com",
  projectId: "the-dragon-news-5cc29",
  storageBucket: "the-dragon-news-5cc29.appspot.com",
  messagingSenderId: "4632107404",
  appId: "1:4632107404:web:bfb76951f773f6b3ef1ea9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
export default app;