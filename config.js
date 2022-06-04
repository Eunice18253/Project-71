import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyBXM_SKMB7Thm4lApqcMXL4HZsO8WFJQZA",
    authDomain: "complaint-forum-38827.firebaseapp.com",
    projectId: "complaint-forum-38827",
    storageBucket: "complaint-forum-38827.appspot.com",
    messagingSenderId: "756419666910",
    appId: "1:756419666910:web:37e4c3b871bac04c34f34f"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
