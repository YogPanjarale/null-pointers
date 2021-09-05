// Import the functions you need from the SDKs you need
import { initializeApp ,getApps,getApp} from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMmGNtsBfJ9jNWvzC6Jdg1aKajTx0dNSk",
  authDomain: "null-pointers-roadmappr.firebaseapp.com",
  projectId: "null-pointers-roadmappr",
  storageBucket: "null-pointers-roadmappr.appspot.com",
  messagingSenderId: "966349030038",
  appId: "1:966349030038:web:078517e2a0d70d31c778b7",
  measurementId: "G-4MKJYJ1YZH"
};

// Initialize Firebase
if (getApps().length<1) {
  initializeApp(firebaseConfig);
  const app = initializeApp(firebaseConfig);
}
export const app = getApp();
export const analytics = getAnalytics(app);