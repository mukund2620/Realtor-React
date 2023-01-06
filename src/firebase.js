// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuLVxMbAW6KyHZV0_pgt9A0ZNe2wXPyh4",
  authDomain: "realtor-clone-react-a41e1.firebaseapp.com",
  projectId: "realtor-clone-react-a41e1",
  storageBucket: "realtor-clone-react-a41e1.appspot.com",
  messagingSenderId: "264838567693",
  appId: "1:264838567693:web:2fc035b2a35a7359888244"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()