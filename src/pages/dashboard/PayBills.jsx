
import { useState } from "react";

const PayBills = () => {
  const [biller, setBiller] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");

  const billers = [
    { id: "electricity", name: "Electricity Bill", icon: "💡" },
    { id: "water", name: "Water Bill", icon: "🚰" },
    { id: "gas", name: "Gas Bill", icon: "🔥" },
    { id: "mobile", name: "Mobile Recharge", icon: "📱" },
    { id: "dth", name: "DTH Recharge", icon: "📺" },
    { id: "broadband", name: "Broadband Bill", icon: "🌐" },
  ];

  const handlePay = (e) => {
    e.preventDefault();
    if (!biller || !accountNumber || !amount) {
      setMessage("⚠️ Please fill in all fields.");
      return;
    }
    setMessage(`✅ Successfully paid ₹${amount} for ${biller}!`);
    setBiller("");
    setAccountNumber("");
    setAmount("");
  };

  return (
    <div
      className="container py-5 d-flex justify-content-center"
    
    >
      <div
        className="card shadow-lg border-0 w-100"
        style={{ maxWidth: "600px", borderRadius: "18px" }}
      >
        <div className="card-body p-4">
 
          <h2
            className="fw-bold text-center mb-2"
            style={{ color: "#950606" }}
          >
            🧾 Pay Bills
          </h2>
          <p className="text-muted text-center mb-4">
            Select a biller and pay instantly
          </p>

 
          <div className="row g-3 mb-4">
            {billers.map((item) => (
              <div key={item.id} className="col-6 col-md-4">
                <div
                  onClick={() => setBiller(item.name)}
                  className={`text-center p-3 border rounded-4 shadow-sm h-100 cursor-pointer ${
                    biller === item.name
                      ? "border-2 border-danger bg-light"
                      : "border-secondary-subtle"
                  }`}
                  style={{
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                  }}
                >
                  <div className="fs-3 mb-2">{item.icon}</div>
                  <p className="small fw-semibold mb-0">{item.name}</p>
                </div>
              </div>
            ))}
          </div>

    
          <form onSubmit={handlePay}>
            <div className="mb-3">
              <input
                type="text"
                placeholder="Account / Consumer Number"
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
                className="form-control rounded-pill px-3 py-2"
              />
            </div>
            <div className="mb-3">
              <input
                type="number"
                placeholder="Enter Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="form-control rounded-pill px-3 py-2"
              />
            </div>
            <button
              type="submit"
              className="btn w-100 text-white fw-bold py-2 rounded-pill"
              style={{
                backgroundColor: "#950606",
                boxShadow: "0px 4px 12px rgba(149, 6, 6, 0.4)",
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor = "#7a0505")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor = "#950606")
              }
            >
              🚀 Pay Now
            </button>
          </form>

         
          {message && (
            <p className="mt-4 text-center fw-semibold text-success">{message}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PayBills;
