import { getAuth, onAuthStateChanged } from 'firebase/auth';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_EErmbVewTtrORCOuyW75vyIn0aBH8ro",
  authDomain: "sudocodr.firebaseapp.com",
  projectId: "sudocodr",
  storageBucket: "sudocodr.appspot.com",
  messagingSenderId: "184257448599",
  appId: "1:184257448599:web:681bb5b533f2c4a60177d2",
  measurementId: "G-Q6EY3G6YQH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth
