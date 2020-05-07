import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDfWJCmxYgGauquOiCrR5CKHPfk7YgiPOE",
    authDomain: "workapp-f66bf.firebaseapp.com",
    databaseURL: "https://workapp-f66bf.firebaseio.com",
    projectId: "workapp-f66bf",
    storageBucket: "workapp-f66bf.appspot.com",
    messagingSenderId: "483793748726",
    appId: "1:483793748726:web:4d7b4188c98c88a4cc62d7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export default firebase;