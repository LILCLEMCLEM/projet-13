import "../styles/feature.css";

function Features({  message, children, icon }) {
  return (
    <div className="features-container">
      <img className="feature-icon" src={icon} alt="img"></img>
      <p className="feature_message">{message}</p>
      <p>{children}</p>
    </div>
  );
}

export default Features;
