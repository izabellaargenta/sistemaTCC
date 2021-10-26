import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBb611jvV596ukKGiMlIguinoRZ0gmHz9M",
  authDomain: "agrocomercialargenta-a5ac0.firebaseapp.com",
  projectId: "agrocomercialargenta-a5ac0",
  storageBucket: "agrocomercialargenta-a5ac0.appspot.com",
  messagingSenderId: "771871509299",
  appId: "1:771871509299:web:fdee7532bd693fbb344c46"
};


// Initialize Firebase
export default initializeApp(firebaseConfig);

export const auth = getAuth();