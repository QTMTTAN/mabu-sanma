import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

/* Web app's Firebase configuration */
const firebaseConfig = {
  apiKey: "AIzaSyDdWE4fUNecIZWG5nA3grNCww-Q6e5BUlc",
  authDomain: "mar-fafo-app.firebaseapp.com",
  projectId: "mar-fafo-app",
  storageBucket: "mar-fafo-app.appspot.com",
  messagingSenderId: "734200859064",
  appId: "1:734200859064:web:f6fee8fe2e191e7ab3674d"
};
/* Web app's Firebase configuration */

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;