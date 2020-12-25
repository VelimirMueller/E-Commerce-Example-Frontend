import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCerh5X5cgOMWhD-VkBvSh9WDxhNPyW5zs",
  authDomain: "react-project-shop-db.firebaseapp.com",
  projectId: "react-project-shop-db",
  storageBucket: "react-project-shop-db.appspot.com",
  messagingSenderId: "799461029370",
  appId: "1:799461029370:web:89096c5baff89d2c242043",
  measurementId: "G-E1EX671LGH" 
}

firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
