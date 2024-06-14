// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    
  apiKey: "AIzaSyBEnp97XcYi0MV-IY8xPAC2iDNNxH3UB_A",
  authDomain: "educational-8d34e.firebaseapp.com",
  projectId: "educational-8d34e",
  storageBucket: "educational-8d34e.appspot.com",
  messagingSenderId: "577140538025",
  appId: "1:577140538025:web:9eaaaff687efa22b1247b8"
};
console.log(import.meta.env.VITE_apiKey)
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;