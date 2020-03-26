import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyD1ELgi8pumUqDW08D3S5W1fNgRLIvzMgc",
    authDomain: "sikad-1d4ac.firebaseapp.com",
    databaseURL: "https://sikad-1d4ac.firebaseio.com",
    projectId: "sikad-1d4ac",
    storageBucket: "sikad-1d4ac.appspot.com",
    messagingSenderId: "929865815137",
    appId: "1:929865815137:web:008b43580fe93cfb398620",
    measurementId: "G-G1C8H429E7"
  };

firebase.initializeApp(firebaseConfig)



export default firebase;


