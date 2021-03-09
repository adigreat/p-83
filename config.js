import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyBNnnfLgeNeG-zPgmVhHoXSWroD3POAZ1s",
    authDomain: "booksanta-9ee26.firebaseapp.com",
    databaseURL: "https://booksanta-9ee26.firebaseio.com",
    projectId: "booksanta-9ee26",
    storageBucket: "booksanta-9ee26.appspot.com",
    messagingSenderId: "669786071994",
    appId: "1:669786071994:web:463d2e0cda22cac5483383",
    measurementId: "G-LGQWD6VWKG"
  };
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();