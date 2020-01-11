import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAh9x8tWuuzBBxurzicXgt38NNKL4JjIzA",
    authDomain: "react-ecommerce-f3d7f.firebaseapp.com",
    databaseURL: "https://react-ecommerce-f3d7f.firebaseio.com",
    projectId: "react-ecommerce-f3d7f",
    storageBucket: "react-ecommerce-f3d7f.appspot.com",
    messagingSenderId: "572756122971",
    appId: "1:572756122971:web:4253a6d470e563bd390e7e"
  }

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
