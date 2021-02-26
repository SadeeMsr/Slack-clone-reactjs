import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBqN1uYw3oc2D-pKljzCtByDOYQ_0irEnA",
    authDomain: "slack-clone-challenge-3d29c.firebaseapp.com",
    projectId: "slack-clone-challenge-3d29c",
    storageBucket: "slack-clone-challenge-3d29c.appspot.com",
    messagingSenderId: "334725596367",
    appId: "1:334725596367:web:0cd3045effccfee952a3ba"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();


  export default db;