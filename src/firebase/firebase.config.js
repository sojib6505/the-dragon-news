// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAY0coq0vx7A9VbVTI-AO9ytJ0W4zKXbQc",
  authDomain: "the-dragon-news-b022c.firebaseapp.com",
  projectId: "the-dragon-news-b022c",
  storageBucket: "the-dragon-news-b022c.firebasestorage.app",
  messagingSenderId: "57449885824",
  appId: "1:57449885824:web:de071ea2f18bc1f9567665"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export default app 
