import { useEffect, useState } from "react";
import "../styles/loginform.css";
import { useDispatch, useSelector } from "react-redux";

import {
  loginAsync,
  selectToken,
  selectError,
  setError,
  selectMessage,
} from "../utils/TokenSlice";

import {
  SelectErrorMessage,
  selectErrorUser,
  setErrorUser,
} from "../utils/ProfilSlice";
import { Navigate } from "react-router";
function LoginForm() {
  const dispatch = useDispatch();

  let token = useSelector(selectToken);
  let error = useSelector(selectError);
  let message = useSelector(selectMessage);

  let UserMessage = useSelector(SelectErrorMessage);
  let UserError = useSelector(selectErrorUser);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  useEffect(() => {
    async function dispatchError() {
      dispatch(setError(false));
    }

    dispatchError();
  }, [dispatch]);

  let localtoken = sessionStorage.getItem("token");

  if (UserError && !error) {
    message = UserMessage;
  }

  let displayError;
  if (error || UserError) {
    displayError = <p className="sign-in-error">{message}</p>;
  } else {
    displayError = null;
  }

  const onSubmit = (event) => {
    
    dispatch(setErrorUser(false));
    event.preventDefault();
    event.stopPropagation();
    dispatch(loginAsync({ email, password, remember }));
  };

  if (token || localtoken) {
    return <Navigate to="/user" />;
  }
  return (
    <div className="FormContainer">
      <div className="Form">
        <i className="fa fa-user-circle"></i>
        <p className="SigninText">Sign in</p>
        {displayError}
        <form onSubmit={onSubmit}>
          <label className="formtext">Username</label>
          <input
            value={email}
            type="text"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          ></input>

          <label className="formtext">Password</label>
          <input
            value={password}
            type="text"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <div className="FormRemember">
            <input
              className="cb"
              type="checkbox"
              onClick={(e) => setRemember(e.target.checked)}
            ></input>
            <label className="rb">Remember me!</label>
          </div>
          <input className="buttonSubmit" type="submit" value="Sign In" />
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
