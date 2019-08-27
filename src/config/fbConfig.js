import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyASH8vCMeOaRkoCydNGIJ36VpkaGhBNC20",
    authDomain: "travel-feels.firebaseapp.com",
    databaseURL: "https://travel-feels.firebaseio.com",
    projectId: "travel-feels",
    storageBucket: "",
    messagingSenderId: "117376161778",
    appId: "1:117376161778:web:30cc13c06f8e1319"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  

  export default firebase;