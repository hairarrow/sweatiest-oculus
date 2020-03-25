import firebase from "firebase/app";

import "firebase/analytics";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD-eBnpZzD9ZpAMEiodzLQWbQLlMACR9pY",
  authDomain: "sweatiest-oculus.firebaseapp.com",
  databaseURL: "https://sweatiest-oculus.firebaseio.com",
  projectId: "sweatiest-oculus",
  storageBucket: "sweatiest-oculus.appspot.com",
  messagingSenderId: "64071109874",
  appId: "1:64071109874:web:169d053efafbabf951146b",
  measurementId: "G-XG6XH6DBP0"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
