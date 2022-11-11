import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCFhtdidKkPAZwK0a_JSM-AJq-WzLwRvRs",
  authDomain: "twitter-app-5efef.firebaseapp.com",
  databaseURL: "https://twitter-app-5efef.firebaseio.com",
  projectId: "twitter-app-5efef",
  storageBucket: "twitter-app-5efef.appspot.com",
  messagingSenderId: "1016155272215",
  appId: "1:1016155272215:web:f14aeb81bd009b37221852",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();
export const provider = new firebase.auth.GoogleAuthProvider();
