// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJHXMJuR4ApOv6CQ6RpuXQvzrc7tCv9bk",
  authDomain: "e-book-readers.firebaseapp.com",
  projectId: "e-book-readers",
  storageBucket: "e-book-readers.firebasestorage.app",
  messagingSenderId: "516163893176",
  appId: "1:516163893176:web:35d57c277f26c2a287814d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



// Initialize Firebase Authentication and get a reference to the service
 const auth = getAuth(app);
 export default  auth
