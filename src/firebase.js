import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCzHwiglIfGbfZ_bmhHE9hXfl0nvUDNZXM",
  authDomain: "patreon-4988b.firebaseapp.com",
  projectId: "patreon-4988b",
  storageBucket: "patreon-4988b.appspot.com",
  messagingSenderId: "1007661728396",
  appId: "1:1007661728396:web:eb15c4965af5998d7c31a9"
};

  // const db = firebaseDB.database().ref();
  firebase.initializeApp(firebaseConfig)
const auth = firebase.auth();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

export { auth, googleAuthProvider, facebookAuthProvider };