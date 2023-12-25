import Username from "./Username";
import "../styles/account.css";
import Balance from "./Balance";
function Account() {
  return (
    <div className="account_container">
      <Username />
      <Balance type={"Argent Bank Checking"} value={"$2,082.79"} />
      <Balance type={"Argent Bank Saving"} value={"$10,928.42"} />
      <Balance type={"Argent Bank Credit Card"} value={"$184.30"} />
    </div>
  );
}

export default Account;
