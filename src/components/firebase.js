// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrg7Ex5Of1Uw3ZLVhba70NVSoKJ1pQKWs",
  authDomain: "loginwithsecurity-45cb1.firebaseapp.com",
  projectId: "loginwithsecurity-45cb1",
  storageBucket: "loginwithsecurity-45cb1.firebasestorage.app",
  messagingSenderId: "264099506120",
  appId: "1:264099506120:web:b4430c1bb79a0cd78282fd",
  measurementId: "G-TPPKHKVK5F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCrg7Ex5Of1Uw3ZLVhba70NVSoKJ1pQKWs",
//   authDomain: "loginwithsecurity-45cb1.firebaseapp.com",
//   projectId: "loginwithsecurity-45cb1",
//   storageBucket: "loginwithsecurity-45cb1.firebasestorage.app",
//   messagingSenderId: "264099506120",
//   appId: "1:264099506120:web:b4430c1bb79a0cd78282fd",
//   measurementId: "G-TPPKHKVK5F"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);