import { Navigate } from "react-router";
import { resetToken } from "../utils/TokenSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function Logout() {
  const dispatch = useDispatch();
  sessionStorage.removeItem("token");
  useEffect(() => {
    dispatch(resetToken());
  }, [dispatch]);
  console.log("token : " , sessionStorage.getItem("token"))
  return (
    <div>
      {sessionStorage.getItem("token") === null ? (
        <Navigate to={"/signin"} />
      ) : <Navigate to={"/"} />}
    </div>
  );
}

export default Logout;
