import Features from "../components/Feature";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HomeScreen from "../components/Home";

import money from "../assets/icon-money.png";
import chat from "../assets/icon-chat.png";
import security from "../assets/icon-security.png";

function App() {
  return (
    <div className="App">
      <Header />
      <HomeScreen />
      <div className="features">
        <Features message={"You are our #1 priority"} icon={chat}>
          Need to talk to a representative? You can get in touch through our
          24/7 chat or through a phone call in less than 5 minutes.
        </Features>

        <Features message={"More savings means higher rates"} icon={money}>
          The more you save with us, the higher your interest rate will be!
        </Features>

        <Features message={"Security you can trust"} icon={security}>
          We use top of the line encryption to make sure your data and money is
          always safe.
        </Features>
      </div>
      <Footer />
    </div>
  );
}

export default App;
