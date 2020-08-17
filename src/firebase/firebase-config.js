import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAxhZN04C5TsiFGybOkljQt7Kty-viJQgg',
  authDomain: 'yogia-app-react.firebaseapp.com',
  databaseURL: 'https://yogia-app-react.firebaseio.com',
  projectId: 'yogia-app-react',
  storageBucket: 'yogia-app-react.appspot.com',
  messagingSenderId: '61177264736',
  appId: '1:61177264736:web:0bf0b88444114f66986105',
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

export { db, googleAuthProvider, facebookAuthProvider, firebase };
