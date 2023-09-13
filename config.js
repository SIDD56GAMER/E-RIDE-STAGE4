import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB6StegF8005zG6KmZNxbSoBopmFQoCT3E",
    authDomain: "e-ride-stage4-c803d.firebaseapp.com",
    projectId: "e-ride-stage4-c803d",
    storageBucket: "e-ride-stage4-c803d.appspot.com",
    messagingSenderId: "178231355065",
    appId: "1:178231355065:web:e0ea9ba78e7950da219d68",
    measurementId: "G-EQDKDV8S1E"
  };




firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


