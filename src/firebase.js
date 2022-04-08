import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDWTmU5hRU0Dr-IxC-09JDhTBvtNUD-wlY",
    authDomain: "patreon-b34c3.firebaseapp.com",
    projectId: "patreon-b34c3",
    storageBucket: "patreon-b34c3.appspot.com",
    messagingSenderId: "928195711416",
    appId: "1:928195711416:web:6218414731923afb43bf4d"
  };

  // const db = firebaseDB.database().ref();
  firebase.initializeApp(firebaseConfig)
const auth = firebase.auth();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

export { auth, googleAuthProvider, facebookAuthProvider };