
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyB383aTIKRTZN7afT1KPKQ8-yjyS3Wy53Q",
  authDomain: "portfolio-156.firebaseapp.com",
  projectId: "portfolio-156",
  storageBucket: "portfolio-156.appspot.com",
  messagingSenderId: "258007622459",
  appId: "1:258007622459:web:0473461b51b229744bcd1e",
  measurementId: "G-Y4NQYZ4XDQ"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);