import firebaseConfig from "../../components/auth/firebaseClient";
import firebase from "firebase/app";
import "firebase/auth";

firebase.initializeApp(firebaseConfig);

const provider = new firebase.auth.GoogleAuthProvider();

export const googleSignIn = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const credential = result.credential;

        const authToken = credential.accessToken;
        sessionStorage.setItem("authToken", authToken);

        const users = result.user;
        /* user info will be sent(dispatch) to store ======================== */
        dispatch({
          type: "GET_AUTH_USER",
          users,
        });
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;

        console.log(errorCode, errorMessage, email, credential);
      });
  };
};
