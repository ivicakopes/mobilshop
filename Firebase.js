import * as firebase from 'firebase';
import firestore from 'firebase/firestore';


const settings = {timestampsInSnapshots: true};

const config = {
  apiKey: "AIzaSyAgi6XpUwB0F4Y-toLx83GFM1kpZsof9kI",
  authDomain: "logovanje-e08e9.firebaseapp.com",
  databaseURL: "https://logovanje-e08e9.firebaseio.com",
  projectId: "logovanje-e08e9",
  storageBucket: "logovanje-e08e9.appspot.com",
  messagingSenderId: "1091352333987"
 };
 firebase.initializeApp(config);


firebase.firestore().settings(settings);

export default firebase;
