// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBK5fkrlr6I6RqSlHZBjV32QF-nKh1u_1E",
  authDomain: "e-commerce-fullstack-4f0bc.firebaseapp.com",
  projectId: "e-commerce-fullstack-4f0bc",
  storageBucket: "e-commerce-fullstack-4f0bc.appspot.com",
  messagingSenderId: "534714421649",
  appId: "1:534714421649:web:000fbf7125aee11b364a30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;