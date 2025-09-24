import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Book } from "lucide-react";
import { useLocation } from "react-router-dom";

const FixedDepositForm = () => {
  const location = useLocation();
  const data = location.state || {}; // safe handling

  const depositType = data.type || "Fixed Deposit";
  const [amount, setAmount] = useState(data.amount || 5000);
  const [duration, setDuration] = useState(data.duration || 6);
  const [account, setAccount] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [branch, setBranch] = useState("");

  const minAmount = 5000;
  const maxAmount = 9999999;
  const minDuration = 6;
  const maxDuration = 120;

  // Interest Rate Logic
  const getInterestRate = (months) => {
    if (months >= 6 && months < 12) return 6.4;
    if (months >= 12 && months < 24) return 6.8;
    if (months >= 24 && months < 60) return 7.2;
    if (months >= 60) return 7.5;
    return 6.0;
  };

  // Calculated interest & maturity
  const [calculated, setCalculated] = useState({
    interestRate: data.interestRate || getInterestRate(data.duration || 6),
    maturity:
      data.maturity ||
      Math.round(
        (data.amount || 5000) *
          Math.pow(1 + getInterestRate(data.duration || 6) / 100, (data.duration || 6) / 12)
      ),
  });

  // Auto recalc when amount/duration changes
  useEffect(() => {
    if (!amount || !duration) {
      setCalculated({ interestRate: 0, maturity: 0 });
      return;
    }
    const rate = getInterestRate(duration);
    const maturity = Math.round(amount * Math.pow(1 + rate / 100, duration / 12));
    setCalculated({ interestRate: rate, maturity });
  }, [amount, duration]);

  return (
    <div className="container my-5" >
      <h2
        className="mb-4 fw-bold"
        style={{ color: "#900603", display: "flex", alignItems: "center", gap: "0.5rem" }}
      >
        <Book size={24} /> Open New {depositType}
      </h2>

      {/* 🔹 Summary from Calculator */}
      {amount && duration && calculated.maturity > 0 && (
        <div
          className="alert text-white shadow-lg mb-2 border-0"
          style={{
            background: "linear-gradient(135deg, #900603, #b71c1c)",
            borderRadius: "0.9rem",
            padding: "1.2rem 1.5rem",
            fontSize: "1rem",
          }}
        >
          <strong>Summary from Calculator:</strong> You selected ₹{amount.toLocaleString()} for {duration} months at{" "}
          {data.interestRate}% → Expected Maturity: ₹{data.maturity.toLocaleString()}
        </div>
      )}

      <div className="card shadow-sm p-4"style={{  backgroundColor: "#FFF0F0" }}>
        {/* Account */}
        <div className="mb-3">
          <label className="form-label fw-bold">Your Saving A/C No.</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your Account Number"
            value={account}
            onChange={(e) => setAccount(e.target.value)}
          />
        </div>

        {/* Location */}
        <div className="row g-3 mb-3">
          <div className="col-md-4">
            <label className="form-label fw-bold">State</label>
            <select className="form-select" value={state} onChange={(e) => setState(e.target.value)}>
              <option value="">Select State</option>
              <option value="State1">State1</option>
              <option value="State2">State2</option>
            </select>
          </div>
          <div className="col-md-4">
            <label className="form-label fw-bold">City</label>
            <select className="form-select" value={city} onChange={(e) => setCity(e.target.value)}>
              <option value="">Select City</option>
              <option value="City1">City1</option>
              <option value="City2">City2</option>
            </select>
          </div>
          <div className="col-md-4">
            <label className="form-label fw-bold">Branch</label>
            <select className="form-select" value={branch} onChange={(e) => setBranch(e.target.value)}>
              <option value="">Select Branch</option>
              <option value="Branch1">Branch1</option>
              <option value="Branch2">Branch2</option>
            </select>
          </div>
        </div>

        {/* Amount */}
        <div className="mb-3">
          <label className="form-label fw-bold">Deposit Amount (₹)</label>
          <input
            type="number"
            className="form-control"
            value={amount}
            min={minAmount}
            max={maxAmount}
            onChange={(e) => setAmount(e.target.value ? Number(e.target.value) : "")}
          />
        </div>

        {/* Duration */}
        <div className="mb-3">
          <label className="form-label fw-bold">Deposit Duration (Months)</label>
          <input
            type="number"
            className="form-control"
            value={duration}
            min={minDuration}
            max={maxDuration}
            onChange={(e) => setDuration(e.target.value ? Number(e.target.value) : "")}
          />
        </div>

        {/* Interest & Maturity Summary */}
        {calculated.maturity > 0 && (
          <div
            className="mb-3 p-4 shadow-lg"
            style={{
              background: "linear-gradient(135deg, #f5f7fa, #d7d7d8, #f5f7fa)",
              borderRadius: "1rem",
              color: "#2c3e50",
            }}
          >
            <h5 className="fw-bold mb-3 d-flex align-items-center gap-2">
              💰 Interest & Maturity Summary
            </h5>
            <p className="mb-2 fs-6">
              <strong>📈 Interest Rate:</strong> {data.interestRate}% Per Annum
            </p>
            <p className="mb-0 fs-5 fw-bold">
              🎯 Estimated Maturity: ₹{data.maturity.toLocaleString()}
            </p>
          </div>
        )}

        {/* Action Buttons */}
        <div className="d-flex gap-3">
          <button className="btn text-white fw-bold" style={{ backgroundColor: "#900603" }}>
            Open FD
          </button>
          <button
            className="btn btn-outline-secondary"
            onClick={() => {
              setAccount("");
              setState("");
              setCity("");
              setBranch("");
              setAmount("");
              setDuration("");
              setCalculated({ interestRate: 0, maturity: 0 });
            }}
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default FixedDepositForm;
