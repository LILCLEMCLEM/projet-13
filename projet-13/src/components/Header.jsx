import Logo from "../assets/argentBankLogo.png";
import { useSelector } from "react-redux";
import "../styles/header.css";
import { selectUserFirstname } from "../utils/ProfilSlice";
import { selectToken } from "../utils/TokenSlice";
import { useLocation } from "react-router";
function Header() {
  let logged = false;
  const location = useLocation()
  const token = useSelector(selectToken);
  const sessionToken = sessionStorage.getItem("token")
  
  if ((token || sessionToken) && location.pathname !== "/" ) {
    logged = true;
  }
  const username = useSelector(selectUserFirstname);
  return (
    <div className="header_container">
      <a href="/">
        <img className="LOGO" src={Logo} alt="logo"></img>
      </a>
      {logged === true ? (
        <div className="usersign">
          <i className="fa fa-user-circle"></i>
          <a href="/user">{username}</a>
        </div>
      ) : null}
      <div className="signin">
        {logged === true ? (
          <div>
            <i className="fa fa-sign-out"></i>

            <a href="/logout">Sign out</a>
          </div>
        ) : (
          <div>
            <i className="fa fa-user-circle"></i>
            <a href="/signin">Sign in</a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
