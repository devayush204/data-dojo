import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCzd3yWVfpnx7Voe6YFWTB8BHd2PKNrh6Y",
  authDomain: "data-dojo-c3fe4.firebaseapp.com",
  projectId: "data-dojo-c3fe4",
  storageBucket: "data-dojo-c3fe4.firebasestorage.app",
  messagingSenderId: "182099374813",
  appId: "1:182099374813:web:131f53bba0b820d4242134",
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore, app };
