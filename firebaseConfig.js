import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAUBJVgjh5z9Ci3YdWKfB8rMaFL91-G1Os",
  authDomain: "gamermatch-59301.firebaseapp.com",
  projectId: "gamermatch-59301",
  storageBucket: "gamermatch-59301.appspot.com",
  messagingSenderId: "147803673615",
  appId: "1:147803673615:web:6938afe409a3ea8da727ba"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
