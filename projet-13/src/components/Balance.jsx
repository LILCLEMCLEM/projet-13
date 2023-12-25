function Balance({ type, value }) {
  return (
    <div className="balance_container">
      <div className="bl-container">
        <h3>{type}</h3>
        <p>{value}</p>
        <h3>Available Balance</h3>
      </div>
      <div className="btn-bl-container">
        <button className="btn-bl-edit">View transactions</button>
      </div>
    </div>
  );
}

export default Balance;
