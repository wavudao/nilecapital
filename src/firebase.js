

import { initializeApp } from "firebase/app";

import { getAuth, signInWithEmailLink, isSignInWithEmailLink} from "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyA_lxSy30dT4oQV1_B2GekBHnegVOmeb5c",
  authDomain: "nilecapital-c74ff.firebaseapp.com",
  projectId: "nilecapital-c74ff",
  storageBucket: "nilecapital-c74ff.appspot.com",
  messagingSenderId: "577185031839",
  appId: "1:577185031839:web:bf5e174473ef8d5182a4aa",
  measurementId: "G-F2BQ1Y31JJ"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export { auth,signInWithEmailLink,isSignInWithEmailLink };