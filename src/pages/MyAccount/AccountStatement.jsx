import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function AccountStatement() {
  const [step, setStep] = useState(1);
  const [captcha, setCaptcha] = useState("");
  const [enteredCaptcha, setEnteredCaptcha] = useState("");
  const [statementType, setStatementType] = useState("Request for statement");
  const [period, setPeriod] = useState("");
  const navigate = useNavigate();

  const generateCaptcha = () => {
    const code = Math.random().toString(36).substring(2, 8).toUpperCase();
    setCaptcha(code);
    setEnteredCaptcha("");
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const stepTitles = [
    { id: 1, label: "Account Verification" },
    { id: 2, label: "OTP Verification" },
    { id: 3, label: "Request Statement" },
  ];

  return (
    <div className="container py-5" style={{ minHeight: "100vh", backgroundColor: "#f9f4f0" }}>
      {/* Main Card */}
      <div className="row shadow-lg rounded-3" style={{ maxWidth: "900px", margin: "0 auto", backgroundColor: "#fff" }}>
        {/* Left Side - Branding */}
        <div
          className="col-md-4 d-flex flex-column justify-content-center align-items-center p-4"
          style={{ backgroundColor: "#e60000", color: "#fff", borderTopLeftRadius: "15px", borderBottomLeftRadius: "15px" }}
        >
          <img
            src="src/assets/neobank-logo.png"
            alt="Neo Bank Logo"
            className="img-fluid mb-3"
            style={{ maxHeight: 120 }}
          />
          <h4 className="fw-bold text-center">Neo Bank Account Statement</h4>
          <p className="text-light text-center mt-2" style={{ fontSize: "14px" }}>
            Follow these steps to download your account statement
          </p>
        </div>

        {/* Right Side - Stepper & Form */}
        <div className="col-md-8 p-4">
          {/* Stepper */}
          <div className="d-flex justify-content-between align-items-center mb-4 position-relative">
            {stepTitles.map((s, idx) => (
              <div key={s.id} className="text-center flex-fill position-relative">
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center mb-2 mx-auto"
                  style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: step === s.id ? "#e60000" : "#f0f0f0",
                    color: step === s.id ? "#fff" : "#888",
                    fontWeight: "bold",
                    fontSize: "18px",
                    zIndex: 1,
                    position: "relative",
                  }}
                >
                  {s.id}
                </div>
                <div
                  style={{
                    fontSize: "13px",
                    color: step === s.id ? "#e60000" : "#888",
                    fontWeight: step === s.id ? "bold" : "normal",
                  }}
                >
                  {s.label}
                </div>
                {/* Connector */}
                {idx < stepTitles.length - 1 && (
                  <div
                    style={{
                      position: "absolute",
                      top: "25px",
                      right: "-50%",
                      width: "100%",
                      height: "4px",
                      backgroundColor: step > s.id ? "#e60000" : "#d1d1d1",
                      zIndex: 0,
                    }}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Step 1 */}
          {step === 1 && (
            <div className="card shadow-sm">
              <div className="card-header bg-danger text-white">Step 1: Account Verification</div>
              <div className="card-body">
                <div className="mb-3">
                  <label className="form-label">Account Number</label>
                  <input type="text" className="form-control" placeholder="Enter Account Number" />
                </div>

                <div className="mb-3 d-flex align-items-center gap-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Captcha"
                    value={enteredCaptcha}
                    onChange={(e) => setEnteredCaptcha(e.target.value.toUpperCase())}
                  />
                  <div className="border p-2 fw-bold text-center bg-light">{captcha}</div>
                  <button type="button" className="btn btn-outline-danger" onClick={generateCaptcha}>
                    Refresh
                  </button>
                </div>

                <div className="d-flex justify-content-end">
                  <button className="btn btn-danger" disabled={enteredCaptcha !== captcha} onClick={() => setStep(2)}>
                    Next
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <div className="card shadow-sm">
              <div className="card-header bg-danger text-white">Step 2: OTP Verification</div>
              <div className="card-body">
                <p>
                  An OTP has been sent to your registered mobile number: <b>+91xxxx389</b>
                </p>
                <input type="text" className="form-control mb-3" placeholder="Enter OTP" />
                <div className="d-flex justify-content-between">
                  <button className="btn btn-outline-danger" onClick={() => setStep(1)}>
                    Back
                  </button>
                  <button className="btn btn-danger" onClick={() => setStep(3)}>
                    Next
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Step 3 */}
          {step === 3 && (
            <div className="card shadow-sm">
              <div className="card-header bg-danger text-white">Step 3: Request Account Statement</div>
              <div className="card-body">
                <div className="row g-3 mb-3">
                  <div className="col-md-6">
                    <label className="form-label">Account Holder</label>
                    <input type="text" className="form-control" value="AMITxxxxPUT" readOnly />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Account Number</label>
                    <input type="text" className="form-control" value="1937xxxx850" readOnly />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Mobile</label>
                    <input type="text" className="form-control" value="+91xxxx389" readOnly />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Email</label>
                    <input type="text" className="form-control" value="na@nxxxx.na" readOnly />
                  </div>
                  <div className="col-12">
                    <label className="form-label">Address</label>
                    <input type="text" className="form-control" value="GALIxxxxRDA" readOnly />
                  </div>
                </div>

                <div className="row g-3 mb-3">
                  <div className="col-md-6">
                    <label className="form-label">From Date</label>
                    <input type="date" className="form-control" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">To Date</label>
                    <input type="date" className="form-control" />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label">Banking Type</label>
                  <select className="form-select">
                    <option>General Banking</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label">Statement Type</label>
                  <select className="form-select" value={statementType} onChange={(e) => setStatementType(e.target.value)}>
                    <option>Request for statement</option>
                    <option>Request for interest certificate</option>
                    <option>Request for TDS certificate</option>
                  </select>
                </div>

                {statementType === "Request for statement" && (
                  <div className="mb-3">
                    <label className="form-label">Select Period</label>
                    <select className="form-select" value={period} onChange={(e) => setPeriod(e.target.value)}>
                      <option value="">-- Select Period --</option>
                      <option value="30">Last 1 Month</option>
                      <option value="90">Last 3 Months</option>
                      <option value="180">Last 6 Months</option>
                      <option value="365">Last 1 Year</option>
                      <option value="custom">Custom Date Range</option>
                    </select>
                  </div>
                )}

                <div className="d-flex justify-content-between mt-4">
                  <button className="btn btn-outline-danger" onClick={() => setStep(2)}>
                    Back
                  </button>
                  <button className="btn btn-danger" onClick={() => navigate("/accountstatement")}>
                    Submit
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AccountStatement;
