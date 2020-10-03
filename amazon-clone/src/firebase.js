import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAmUr0isKzOVavne2gXkZzKsRBAPiFqYEM",
    authDomain: "clone-d398e.firebaseapp.com",
    databaseURL: "https://clone-d398e.firebaseio.com",
    projectId: "clone-d398e",
    storageBucket: "clone-d398e.appspot.com",
    messagingSenderId: "1085003373062",
    appId: "1:1085003373062:web:7cd6a3304aad0371c48187",
    measurementId: "G-NCFWSCF8HE"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const auth = firebase.auth();

  export { db, auth}