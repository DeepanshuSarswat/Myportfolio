import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";
import { ref } from "@firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZop_aYUMwVlK_F4hqLYLqx29fQSKNmRY",
  authDomain: "myportfollio-4f6ea.firebaseapp.com",
  projectId: "myportfollio-4f6ea",
  storageBucket: "myportfollio-4f6ea.appspot.com",
  messagingSenderId: "368326008962",
  appId: "1:368326008962:web:9aeb2bb03ccc7818b7d49b",
  measurementId: "G-PVL3JKBKQ7",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
// initializeApp(firebaseConfig);

// to established database
const db = firebaseApp.firestore();

export { db, firebase };
