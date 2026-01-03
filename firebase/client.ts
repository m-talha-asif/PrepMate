// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCq1WU00euYWnP1aKDIUOWs6OS8LFIwGPk",
  authDomain: "ai-interview-coach-9dd17.firebaseapp.com",
  projectId: "ai-interview-coach-9dd17",
  storageBucket: "ai-interview-coach-9dd17.firebasestorage.app",
  messagingSenderId: "327793846826",
  appId: "1:327793846826:web:7bf80b3557e6b981343153",
  measurementId: "G-8XRHNPGHL0"
};
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);



// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAML1mYTyKYGdiXVMlWng2AktdpJiZRFts",
//   authDomain: "ai-interview-coach-2299.firebaseapp.com",
//   projectId: "ai-interview-coach-2299",
//   storageBucket: "ai-interview-coach-2299.firebasestorage.app",
//   messagingSenderId: "770950979248",
//   appId: "1:770950979248:web:cea64e612e5b0cf3a82575",
//   measurementId: "G-T03YE924CC"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);