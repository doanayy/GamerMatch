import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'; // 🔥 Firestore'u ekliyoruz

const firebaseConfig = {
  apiKey: "AIzaSyAUBVJgJh52Cj3VdkfF88rMaFL91-G1Os",
  authDomain: "gamermatch-59301.firebaseapp.com",
  projectId: "gamermatch-59301",
  storageBucket: "gamermatch-59301.appspot.com",
  messagingSenderId: "147803673615",
  appId: "1:147803673615:web:6938af4e093ea38da277ba"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // 🔥 Burada Firestore'u başlatıyoruz

export { auth, db }; // ✅ Artık hem auth hem db dışa aktarılıyor
