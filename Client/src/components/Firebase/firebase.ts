  // Import the functions you need from the SDKs you need
//require('dotenv').config();
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
 /*  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT__APP__ID,
  measurementId: process.env.REACT__APP__MEASUREMENT__ID */

  apiKey: "AIzaSyAoLZLFCue-fgJu3v_tgptYr80L618DHcw",
  authDomain: "padelpadelpadel-10513.firebaseapp.com",
  projectId: "padelpadelpadel-10513",
  storageBucket: "padelpadelpadel-10513.appspot.com",
  messagingSenderId: "880663986637",
  appId: "1:880663986637:web:4cf49b03769072e3ea4484",
  measurementId: "G-HPE4XS81QM"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;