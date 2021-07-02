import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { googleSignIn } from "../../store/actions/authActions";
import jwt_decode from "jwt-decode";

export default function NavBar() {
  const users = useSelector((state) => state.users);
  //   const authToken = jwt_decode(sessionStorage.getItem("authToken"));

  const dispatch = useDispatch();

  const handleSignIn = () => {
    dispatch(googleSignIn());
  };

  return (
    <>
      <ul>
        <li>
          <h3>{users.displayName}</h3>
        </li>
        <li>
          <button onClick={handleSignIn}>Signin</button>
        </li>
      </ul>
    </>
  );
}
