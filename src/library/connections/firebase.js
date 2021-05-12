import * as firebase from "firebase";

// Optionally import the services that you want to use
//import "firebase/auth";
//import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAYmQFae4-KGupzjtlsDRIkBiTj5Ki5Ln0",
  authDomain: "bikeinspectioner.firebaseapp.com",
  databaseURL:
    "https://bikeinspectioner-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "bikeinspectioner",
  storageBucket: "bikeinspectioner.appspot.com",
};

export const fireBaseInit = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app(); // if already initialized, use that one
  }
  return firebase;
};
