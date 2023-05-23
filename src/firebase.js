
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDar5oTWJALHlRL3Rc5VIhSUJWQ5dTIMEg",
  authDomain: "react-hooks-blog-8fd66.firebaseapp.com",
  projectId: "react-hooks-blog-8fd66",
  storageBucket: "react-hooks-blog-8fd66.appspot.com",
  messagingSenderId: "709261991391",
  appId: "1:709261991391:web:6612edfc8e77bfc59bf86a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);