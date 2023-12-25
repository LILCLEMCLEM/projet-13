import { useState } from "react";
import {
  SetUser,
  selectUserFirstname,
  selectUserLastname,
} from "../utils/ProfilSlice";
import { useDispatch, useSelector } from "react-redux";

import "../styles/edituser.css";
import { selectToken } from "../utils/TokenSlice";
function UserEditor() {
  let firstName = useSelector(selectUserFirstname);
  let lastName = useSelector(selectUserLastname);
  let token = useSelector(selectToken);
  const dispatch = useDispatch();
  const [inputFN, setInputFN] = useState(firstName);
  const [inputLN, setInputLN] = useState(lastName);

  const onSubmit = (event) => {
    console.log(inputFN, inputLN, token);
    event.preventDefault();
    event.stopPropagation();
    dispatch(SetUser({ firstName: inputFN, lastName: inputLN, token }));
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="FormInput">
          <input
            type="text"
            value={inputFN !== null ? inputFN : ""}
            id="firstname"
            onChange={(e) => setInputFN(e.target.value)}
          ></input>
          <input
            type="text"
            value={inputLN !== null ? inputLN : ""}
            id="firstname"
            onChange={(e) => setInputLN(e.target.value)}
          ></input>
        </div>
        <div className="FormButton">
          <input type="submit" className="sendBtn" value={"Envoyer"} />
        </div>
      </form>
    </div>
  );
}

export default UserEditor;
