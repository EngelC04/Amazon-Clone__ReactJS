// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDC4YhAzTRLgMSb6MRUIYq4ejW0RLsrN8k",
  authDomain: "clone-8f2d3.firebaseapp.com",
  databaseURL: "https://clone-8f2d3.firebaseio.com",
  projectId: "clone-8f2d3",
  storageBucket: "clone-8f2d3.appspot.com",
  messagingSenderId: "1056932423031",
  appId: "1:1056932423031:web:6a4e446ac5fa14fc4c2d72",
  measurementId: "G-4DGQKMJ99Y",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
