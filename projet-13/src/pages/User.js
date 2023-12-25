import Header from "../components/Header";
import Account from "../components/Account";
import Footer from "../components/Footer";
function UserPage() {
  return (
    <div>
      <Header />
      <div className="account_container">
        <Account />
      </div>
      <Footer />
    </div>
  );
}

export default UserPage;
