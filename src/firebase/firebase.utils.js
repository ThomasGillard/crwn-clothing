import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA7NXfzw3hRDOYqDJYbXJAi_UxX4z7WeZs",
    authDomain: "crwn-db-d390f.firebaseapp.com",
    databaseURL: "https://crwn-db-d390f.firebaseio.com",
    projectId: "crwn-db-d390f",
    storageBucket: "crwn-db-d390f.appspot.com",
    messagingSenderId: "232721036957",
    appId: "1:232721036957:web:18d0d8b04ae7c00f908674",
    measurementId: "G-LMB1H805ND"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;