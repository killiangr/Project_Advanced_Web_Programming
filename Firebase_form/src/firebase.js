import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyBifgNKm3AKctOFHXpVAIlkXotOB73ydf4",
  authDomain: "space-shop-6f73c.firebaseapp.com",
  databaseURL: "https://space-shop-6f73c-default-rtdb.firebaseio.com",
  projectId: "space-shop-6f73c",
  storageBucket: "space-shop-6f73c.appspot.com",
  messagingSenderId: "377523713868",
  appId: "1:377523713868:web:3b792cc20f10eaee0741e9"
};

const fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();
