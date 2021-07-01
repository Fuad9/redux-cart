import React from "react";
import firebaseConfig from "./firebaseClient";
import firebase from "firebase/app";
import "firebase/auth";

firebase.initializeApp(firebaseConfig);

export default function Login() {
  const provider = new firebase.auth.GoogleAuthProvider();

  const googleSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const credential = result.credential;

        const token = credential.accessToken;
        sessionStorage.setItem("token", token);

        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;

        console.log(errorCode, errorMessage, email, credential);
      });
  };

  return <button onClick={googleSignIn}>Signin</button>;
}
