import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAUBVJghJc52Gj3VdKf8R8rMaFLg1-G1Os",
  authDomain: "gamermatch-59301.firebaseapp.com",
  projectId: "gamermatch-59301",
  storageBucket: "gamermatch-59301.appspot.com",
  messagingSenderId: "147830673615",
  appId: "1:147830673615:web:6938afe409a3ea8da727ba",
  measurementId: "G-9EBQHF6Q5F" 
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
