import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyA31Ut_0hroa20cFJSKHgOjb1MZGBb-B5M",
  authDomain: "clone-8ac6e.firebaseapp.com",
  projectId: "clone-8ac6e", // This property is required
  storageBucket: "clone-8ac6e.appspot.com",
  messagingSenderId: "536135146111",
  appId: "1:536135146111:web:d2610e8d6a82eac079fd4a",
  measurementId: "G-51109V401L"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
console.log(auth);

export { db, auth, };