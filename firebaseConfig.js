// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAUBjVgjh5z9Ci3YdWfKB8BrMaFL91-G10s",
  authDomain: "gamermatch-59301.firebaseapp.com",
  projectId: "gamermatch-59301",
  storageBucket: "gamermatch-59301.appspot.com",
  messagingSenderId: "147380673615",
  appId: "1:147380673615:web:3d3e513E01195a44ea727ba",
  measurementId: "G-FLET2WN2JW"
};


const app = initializeApp(firebaseConfig);


const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
