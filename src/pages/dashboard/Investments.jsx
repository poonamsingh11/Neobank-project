
import { useState } from "react";

const Investments = () => {
  const [investment, setInvestment] = useState("");
  const [amount, setAmount] = useState("");
  const [duration, setDuration] = useState("");
  const [message, setMessage] = useState("");

  const investmentOptions = [
    { id: "mutual-fund", name: "Mutual Funds", icon: "📊" },
    { id: "stocks", name: "Stocks", icon: "📈" },
    { id: "fd", name: "Fixed Deposit", icon: "🏦" },
    { id: "bonds", name: "Bonds", icon: "💵" },
    { id: "sip", name: "SIP (Monthly)", icon: "📅" },
    { id: "gold", name: "Gold Investment", icon: "🥇" },
  ];

  const handleInvest = (e) => {
    e.preventDefault();
    if (!investment || !amount || !duration) {
      setMessage("⚠️ Please select an investment type, amount, and duration.");
      return;
    }
    setMessage(`✅ Successfully invested ₹${amount} in ${investment} for ${duration} years!`);
    setInvestment("");
    setAmount("");
    setDuration("");
  };

  return (
    <div className="container py-5 d-flex justify-content-center">
      <div className="card shadow-lg p-4 rounded-4" style={{ maxWidth: "600px", width: "100%" }}>
        <h3 className="mb-2 fw-bold text-center" style={{ color: "#950606" }}>
          📈 Investments
        </h3>
        <p className="text-muted text-center mb-4">
          Choose your investment option and grow your wealth
        </p>

  
        <div className="row g-3 mb-4">
          {investmentOptions.map((item) => (
            <div className="col-6 col-md-4" key={item.id}>
              <div
                role="button"
                onClick={() => setInvestment(item.name)}
                className={`card h-100 d-flex align-items-center justify-content-center text-center border-2 
                  ${investment === item.name ? "border-success bg-light" : "border-light"}`}
              >
                <div className="card-body p-3">
                  <div className="fs-2">{item.icon}</div>
                  <p className="small fw-semibold mt-2">{item.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>


        <form onSubmit={handleInvest} className="row g-3">
          <div className="col-12">
            <div className="input-group">
              <span className="input-group-text">₹</span>
              <input
                type="number"
                placeholder="Enter Amount"
                className="form-control"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
          </div>

          <div className="col-12">
            <div className="input-group">
              <span className="input-group-text">⏳</span>
              <input
                type="number"
                placeholder="Duration (in years)"
                className="form-control"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
              />
            </div>
          </div>

          <div className="col-12 d-grid">
            <button
              type="submit"
              className="btn btn-lg fw-bold text-white rounded-pill"
              style={{ backgroundColor: "#950606" }}
            >
              Invest Now
            </button>
          </div>
        </form>

        {message && (
          <div className="alert alert-info text-center mt-4 fw-semibold" role="alert">
            {message}
          </div>
        )}
      </div>
    </div>
  );
};

export default Investments;
