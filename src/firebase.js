import firebase from 'firebase/app'
import 'firebase/auth'

export const auth = firebase.initializeApp( {
    apiKey: "AIzaSyCs9IPIGOKfLSbAQ1_FWSvrOVRkjG8Ecgw",
    authDomain: "simplex-24bf4.firebaseapp.com",
    projectId: "simplex-24bf4",
    storageBucket: "simplex-24bf4.appspot.com",
    messagingSenderId: "940961835122",
    appId: "1:940961835122:web:ab5ed76592f0176947faeb"
}).auth()