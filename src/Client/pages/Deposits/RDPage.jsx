import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import fdBanner from "./fd-banner.png";
import { useNavigate } from "react-router-dom";


function RDPage() {
  const navigate = useNavigate();
  // States
  const [amount, setAmount] = useState(100000);
  const [duration, setDuration] = useState(24); // months
  const [isSenior, setIsSenior] = useState(false);

  // Interest Rates (General vs Senior Citizen) with unique id + months (duration)
  const generalRates = [
    { id: "g1", rate: 6.4, label: "For Tenure of 18M to 2Y", months: 24 },
    { id: "g2", rate: 6.6, label: "For Tenure of 2Y 1D to 10Y", months: 36, highlight: true },
    { id: "g3", rate: 6.6, label: "For Tenure of Tax Saver FD (5Y)", months: 60 },
  ];

  const seniorRates = [
    { id: "s1", rate: 6.9, label: "For Tenure of 12M to 2Y", months: 24 },
    { id: "s2", rate: 7.1, label: "For Tenure of 2Y 1D to 10Y", months: 42, highlight: true },
    { id: "s3", rate: 7.3, label: "For Tenure of Tax Saver FD (5Y)", months: 60 },
  ];

  const interestRates = isSenior ? seniorRates : generalRates;

  // ✅ selectedRate state to make slabs dynamic
  const [selectedRate, setSelectedRate] = useState(interestRates[0]);

  // Update selectedRate when General/Senior tab changes
  React.useEffect(() => {
    setSelectedRate(interestRates[0]);
    setDuration(interestRates[0].months); // tab change pe bhi duration update
  }, [isSenior]);

  // Active Interest Rate
  const activeRate = selectedRate;

  // Calculation
  const r = activeRate.rate / 100;
  const n = duration / 12; // years
  const maturityAmount = Math.round(amount * Math.pow(1 + r, n));
  const totalInterest = maturityAmount - amount;
  const maturityDate = new Date();
  maturityDate.setMonth(maturityDate.getMonth() + duration);

  return (
    <div>
      {/* Hero Section */}
      <section className="text-white py-5" style={{ backgroundColor: "#900603" }}>
        <div className="container">
          <div className="row align-items-center">
            {/* Left */}
            <div className="col-md-7">
              <h1 className="fw-bold display-5">Reccuring Deposit (RD)</h1>
              <h4>Invest smartly and safely</h4>
              <p>Attractive returns | Flexible Tenures | Guaranteed Returns</p>
              <button
                className="btn btn-light rounded-pill px-4 me-2 fw-bold"
                onClick={() => navigate("/Client/fixed-deposit", {
                  state: {
                    type: "Reccuring Deposit",
                    amount,
                    duration,
                    interestRate: activeRate.rate,
                    maturity: maturityAmount,
                  },
                })
                }
              >
                OPEN FD
              </button>
              <button className="btn btn-outline-light rounded-pill px-4 fw-bold">
                SAVE
              </button>
              <p className="mt-3">⭐ 8,500+ PEOPLE ARE INTERESTED</p>
            </div>
            {/* Right */}
            <div className="col-md-5 text-center">
              <img
                src={fdBanner}
                alt="FD Banner"
                className="img-fluid"
                style={{
                  maxWidth: "100%",    // container ke andar hi rahe
                  height: "auto"
                }}
              />
            </div>

          </div>
        </div>
      </section>

      {/* FD Calculator */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="card shadow-lg border-0 rounded-4 overflow-hidden">
            <div
              className="card-header text-white fw-bold"
              style={{ backgroundColor: "#900603" }}
            >
              Reccuring Deposit Calculator
            </div>
            <div className="card-body p-4">
              <div className="row">
                {/* Left */}
                <div className="col-md-8 pe-md-5">
                  {/* Tabs */}
                  <ul className="nav nav-tabs mb-4">
                    <li className="nav-item">
                      <button
                        className={`nav-link fw-bold ${!isSenior ? "active" : ""}`}
                        onClick={() => setIsSenior(false)}
                      >
                        General
                      </button>
                    </li>
                    <li className="nav-item">
                      <button
                        className={`nav-link fw-bold ${isSenior ? "active" : ""}`}
                        onClick={() => setIsSenior(true)}
                      >
                        Senior Citizen
                      </button>
                    </li>
                  </ul>

                  {/* Amount Slider */}
                  <div className="mb-4">
                    <label className="form-label fw-bold">Amount to be saved</label>
                    <input
                      type="range"
                      className="form-range"
                      min="1000"
                      max="1000000"
                      step="10000"
                      value={amount}
                      onChange={(e) => setAmount(Number(e.target.value))}
                    />
                    <div className="d-flex justify-content-between text-muted small">
                      <span>₹10,000</span>
                      <span className="fw-bold text-dark fs-6">
                        ₹{amount.toLocaleString()}
                      </span>
                      <span>₹10,00,000</span>
                    </div>
                  </div>

                  {/* Duration Slider */}
                  <div className="mb-4">
                    <label className="form-label fw-bold">Duration</label>
                    <input
                      type="range"
                      className="form-range"
                      min="6"
                      max="120"
                      step="6"
                      value={duration}
                      onChange={(e) => setDuration(Number(e.target.value))}
                    />
                    <div className="d-flex justify-content-between text-muted small">
                      <span>6 Months</span>
                      <span className="fw-bold text-dark fs-6">
                        {duration} Months
                      </span>
                      <span>10 Years</span>
                    </div>
                  </div>

                  {/* ✅ Interest Slabs Dynamic with unique id */}
                  <div className="d-flex gap-3 flex-wrap">
                    {interestRates.map((item) => (
                      <div
                        key={item.id}
                        onClick={() => {
                          setSelectedRate(item);
                          setDuration(item.months); // ✅ yahan duration update
                        }}
                        className={`p-3 rounded shadow-sm text-center flex-fill ${activeRate.id === item.id
                          ? "bg-danger text-white"
                          : "bg-light"
                          }`}
                        style={{
                          minWidth: "150px",
                          cursor: "pointer",
                          transition: "0.3s",
                        }}
                      >
                        <h5 className="fw-bold">{item.rate}%</h5>
                        <p className="small mb-0">{item.label}</p>
                        {item.highlight && (
                          <span className="badge bg-success">Highest</span>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="alert alert-warning small mt-3 mb-0">
                    Note: The above calculation does not include TDS deductions.
                  </div>
                </div>

                {/* Right */}
                <div className="col-12 col-md-6 col-lg-4 d-flex ps-md-4 mt-4 mt-md-0">
                  <div className="bg-white p-4 rounded shadow-sm border w-100 text-center">
                    <h6 className="text-muted">Interest Rate</h6>
                    <h2 className="fw-bold text-danger">
                      {activeRate.rate.toFixed(2)}% Per Annum
                    </h2>
                    <hr />
                    <p className="mb-2">
                      <strong>Maturity Amount:</strong> ₹{maturityAmount.toLocaleString()}
                    </p>
                    <p className="mb-2">
                      <strong>Total Interest:</strong> ₹{totalInterest.toLocaleString()}
                    </p>
                    <p className="mb-2">
                      <strong>Duration:</strong> {duration} Months
                    </p>
                    <p className="mb-2">
                      <strong>Maturity Date:</strong>{" "}
                      {maturityDate.toLocaleDateString("en-IN", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                    </p>
                    <div className="d-grid gap-2 mt-3">
                      <button
                        className="btn fw-bold text-white shadow"
                        style={{ backgroundColor: "#900603" }}
                        onClick={() =>
                          navigate("/Client/fixed-deposit", {
                            state: {
                              type: "Recurring Deposit",
                              amount,
                              duration,
                              interestRate: activeRate.rate,
                              maturity: maturityAmount,
                            },
                          })
                        }
                      >
                        OPEN RECURRING DEPOSIT
                      </button>

                      <button className="btn btn-outline-dark fw-bold shadow-sm">
                        CHECK INTEREST RATE
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-5">
        <div className="container text-center">
          <h3 className="fw-bold mb-4">
            Get Maximum Benefits from Recurring Deposit Investment
          </h3>
          <div className="row g-4">
            {[
              {
                title: "Flexible Tenures",
                desc: "Choose a tenure from 6 months to 10 years.",
              },
              {
                title: "Attractive Returns",
                desc: "Benefit from high interest rates, linked to Fixed Deposits.",
              },
              {
                title: "Goal-Based Savings",
                desc: "Be financially prepared with What-if planning.",
              },
              {
                title: "Hassle-Free Setup",
                desc: "Open RD easily via Mobile, Net Banking, or at branches.",
              },
            ].map((item, i) => (
              <div className="col-md-3" key={i}>
                <div className="p-4 bg-light rounded shadow-sm h-100">
                  <h6 className="fw-bold">{item.title}</h6>
                  <p className="text-muted small">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-5">
        <div className="container text-center">
          <h3 className="fw-bold mb-4">How to get maximum benefits?</h3>
          <div className="row g-4">
            {[
              {
                title: "Flexible Tenures",
                desc: "Choose a tenure from 6 months to 10 years.",
              },
              {
                title: "Attractive Returns",
                desc: "Benefit from high interest rates, linked to Fixed Deposits.",
              },
              {
                title: "Goal-Based Savings",
                desc: "Be financially prepared with What-if planning.",
              },
              {
                title: "Hassle-Free Setup",
                desc: "Open RD easily via Mobile, Net Banking, or at branches.",
              },
            ].map((item, i) => (
              <div className="col-md-3" key={i}>
                <div className="p-4 bg-light rounded shadow-sm h-100 border-hover">
                  <h6 className="fw-bold">{item.title}</h6>
                  <p className="text-muted">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="py-5 bg-light">
        <div className="container text-center">
          <h3 className="fw-bold mb-3">
            Pick the right Recurring Deposit for you
          </h3>
          <div className="d-flex justify-content-center gap-4 flex-wrap">
            <button
              className="btn btn-lg fw-bold text-white shadow px-4 py-2"
              style={{ backgroundColor: "#900603" }}
            >
              For Recurring Deposits
            </button>
            <button className="btn btn-lg btn-outline-dark fw-bold shadow-sm px-4 py-2">
              With Goal Based Savings
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default RDPage;
