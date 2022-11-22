import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCq8nv8xkSX7Z1V2-1aQaxkW72HeurOZj8",
  authDomain: "cyclofit-ee7cf.firebaseapp.com",
  databaseURL: "https://cyclofit-ee7cf-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "cyclofit-ee7cf",
  storageBucket: "cyclofit-ee7cf.appspot.com",
  messagingSenderId: "676472405532",
  appId: "1:676472405532:web:cb0ccd1b8bd9c86372a9d9",
  measurementId: "G-NEEDNQ6SFS"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const auth = getAuth();

export { app, auth };
