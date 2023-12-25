import { useDispatch, useSelector } from "react-redux";
import {
  GetUser,
  selectUserLastname,
  selectUserFirstname,
  selectErrorUser,
  
} from "../utils/ProfilSlice";
import { selectToken} from "../utils/TokenSlice";
import { useEffect, useState } from "react";
import { Navigate } from "react-router";
import UserEditor from "./UserEditor";

function Username() {
  const dispatch = useDispatch();
  const username = useSelector(selectUserFirstname);
  const userlastname = useSelector(selectUserLastname);
  const token = useSelector(selectToken);
  const error = useSelector(selectErrorUser);
  let sessionToken = sessionStorage.getItem("token")
  const [edit, setEdit] = useState(false);
  
  useEffect(() => {
    async function GetProfile() {
      dispatch(GetUser(token !== null ? token : sessionToken));
    }

    GetProfile();
  }, [dispatch, token, sessionToken]);

  console.log(userlastname, username, token);
  if (error) {
    return (
      <div className="AccountUser">
        <Navigate to={"/signin"} />
      </div>
    );
  }


  const onClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setEdit(edit === true ? false : true);
  };

  return (
    <div className="AccountUser">
      <h1>Welcome back</h1>
      <h1>
        {username} {userlastname}
      </h1>
      <div className="btn-container">
        <button className="edit-btn" onClick={onClick}>
          Edit Name
        </button>
        {edit === true ? (
          <div className="Edit">
            <UserEditor />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Username;
