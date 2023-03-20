import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCrfpwLdFJAGemIlsSL60pxobGaBk2A_lg",
  authDomain: "twitter-clone-6b262.firebaseapp.com",
  projectId: "twitter-clone-6b262",
  storageBucket: "twitter-clone-6b262.appspot.com",
  messagingSenderId: "269729146517",
  appId: "1:269729146517:web:4666e39de9694887529d9c",
  measurementId: "G-G20X77ZCL5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()

 export default db;