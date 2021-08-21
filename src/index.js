import React from "react";
import ReactDOM from "react-dom";
import App from "./component/App";
import "./index.css";
import "github-fork-ribbon-css/gh-fork-ribbon.css";
// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyA622xxh_AhhQMOHdWL02A0PzAxlXd-Zn4",
    authDomain: "auth-proj-2e618.firebaseapp.com",
    projectId: "auth-proj-2e618",
    storageBucket: "auth-proj-2e618.appspot.com",
    messagingSenderId: "697954232079",
    appId: "1:697954232079:web:affcddc02aedf6a6bd007a",
    measurementId: "G-F6TWYJCG1N"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


ReactDOM.render(<App />, document.getElementById("root"));
