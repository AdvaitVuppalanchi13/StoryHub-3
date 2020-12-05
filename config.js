import * as firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyBRR3LPJsLXCh28YuxWhfQBNQC9-1GlS7Q",
    authDomain: "storyhub-2-advait.firebaseapp.com",
    databaseURL: "https://storyhub-2-advait.firebaseio.com",
    projectId: "storyhub-2-advait",
    storageBucket: "storyhub-2-advait.appspot.com",
    messagingSenderId: "284301345416",
    appId: "1:284301345416:web:ab116cecc80368d7cb153d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase.firestore();