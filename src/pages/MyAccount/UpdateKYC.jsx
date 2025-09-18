import { useState, useRef } from "react";
import Webcam from "react-webcam";
import SignatureCanvas from "react-signature-canvas";

export default function KYCForm() {
  const [step, setStep] = useState(1);
  const [choice, setChoice] = useState("customerId");
  const [customerId, setCustomerId] = useState("");
  const [panNumber, setPanNumber] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [verificationAnswer, setVerificationAnswer] = useState("");
  const [otp, setOtp] = useState("");
  const [photo, setPhoto] = useState(null);
  const [showWebcam, setShowWebcam] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const [captchaNum1, setCaptchaNum1] = useState(
    Math.floor(Math.random() * 10) + 1
  );
  const [captchaNum2, setCaptchaNum2] = useState(
    Math.floor(Math.random() * 10) + 1
  );

  const webcamRef = useRef(null);
  const sigCanvas = useRef(null);

  const getSelectedValue = () => {
    if (choice === "customerId") return customerId;
    if (choice === "panNumber") return panNumber;
    return accountNumber;
  };

  const handleStep1Submit = (e) => {
    e.preventDefault();
    if (!getSelectedValue()) {
      setError("Please enter a value.");
      return;
    }
    if (parseInt(verificationAnswer) !== captchaNum1 * captchaNum2) {
      setError("Captcha answer is incorrect.");
      // regenerate captcha
      setCaptchaNum1(Math.floor(Math.random() * 10) + 1);
      setCaptchaNum2(Math.floor(Math.random() * 10) + 1);
      setVerificationAnswer("");
      return;
    }
    setError("");
    setStep(2);
  };

  const handleStep2Submit = (e) => {
    e.preventDefault();
    if (otp !== "123456") {
      setError("Incorrect OTP.");
      return;
    }
    setError("");
    setStep(3);
  };

  const capturePhoto = () => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      setPhoto(imageSrc);
      setShowWebcam(false);
    }
  };

  const handleFinalSubmit = (e) => {
    e.preventDefault();
    if (!photo) {
      setError("Please capture a photo.");
      return;
    }
    if (sigCanvas.current.isEmpty()) {
      setError("Please draw your signature.");
      return;
    }
    setError("");
    setSuccess(true);
  };

  const resetForm = () => {
    setStep(1);
    setChoice("customerId");
    setCustomerId("");
    setPanNumber("");
    setAccountNumber("");
    setVerificationAnswer("");
    setOtp("");
    setPhoto(null);
    setShowWebcam(true);
    if (sigCanvas.current) sigCanvas.current.clear();
    setError("");
    setSuccess(false);
    setCaptchaNum1(Math.floor(Math.random() * 10) + 1);
    setCaptchaNum2(Math.floor(Math.random() * 10) + 1);
  };

  return (
    <div
      className="container py-5 d-flex justify-content-center"
      style={{ backgroundColor: "#f9f4f0", minHeight: "100vh" }}
    >
      <div
        className="row w-100 shadow-lg rounded-3"
        style={{ maxWidth: "900px", backgroundColor: "#fff" }}
      >
        {/* Left Side - Branding */}
        <div
          className="col-md-5 d-flex flex-column justify-content-center align-items-center p-4"
          style={{
            backgroundColor: "#e71c1cff",
            color: "#fff",
            borderTopLeftRadius: "15px",
            borderBottomLeftRadius: "15px",
          }}
        >
          <img
            src="src/assets/neobank-logo.png"
            alt="Neo Bank Logo"
            className="img-fluid mb-3"
            style={{ maxHeight: 180 }}
          />
          <h2 className="fw-bold">Neo Bank KYC</h2>
          <p className="text-light mt-2 text-center">
            Securely complete your account verification in simple steps
          </p>
        </div>

        {/* Right Side - Form */}
        <div className="col-md-7 p-5">
          {!success ? (
            <>
              {step === 1 && (
                <form onSubmit={handleStep1Submit}>
                  <h4 className="mb-4" style={{ color: "#e60000" }}>
                    KYC Verification
                  </h4>

                  {["customerId", "panNumber", "accountNumber"].map((type) => (
                    <div className="form-check mb-2" key={type}>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="choice"
                        id={type}
                        value={type}
                        checked={choice === type}
                        onChange={() => setChoice(type)}
                      />
                      <label className="form-check-label fw-bold" htmlFor={type}>
                        {type === "customerId"
                          ? "Customer ID"
                          : type === "panNumber"
                          ? "PAN Number"
                          : "Account Number"}
                      </label>
                    </div>
                  ))}

                  <div className="mb-3 mt-3">
                    <input
                      type="text"
                      className="form-control border border-dark rounded-3"
                      placeholder={`Enter your ${
                        choice === "customerId"
                          ? "Customer ID"
                          : choice === "panNumber"
                          ? "PAN Number"
                          : "Account Number"
                      }`}
                      value={getSelectedValue()}
                      onChange={(e) => {
                        const val = e.target.value;
                        if (choice === "customerId") setCustomerId(val);
                        else if (choice === "panNumber") setPanNumber(val);
                        else setAccountNumber(val);
                      }}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label text-dark fw-bold bg-light p-2 rounded">
                      What is the value of {captchaNum1} × {captchaNum2}?
                    </label>
                    <input
                      type="text"
                      className="form-control border border-dark rounded-3"
                      placeholder="Enter Answer"
                      value={verificationAnswer}
                      onChange={(e) => setVerificationAnswer(e.target.value)}
                    />
                  </div>

                  {error && <div className="alert alert-danger">{error}</div>}

                  <button
                    type="submit"
                    className="btn w-100 text-white fw-bold"
                    style={{ backgroundColor: "#e60000" }}
                  >
                    Verify & Send OTP
                  </button>
                </form>
              )}

              {step === 2 && (
                <form onSubmit={handleStep2Submit}>
                  <h5 className="mb-3" style={{ color: "#e60000" }}>
                    Enter OTP
                  </h5>

                  <input
                    type="text"
                    className="form-control mb-3 border border-dark rounded-3"
                    placeholder="Enter OTP (Use 123456)"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                  />

                  <div className="d-flex justify-content-between mb-3">
                    <button
                      type="button"
                      className="btn btn-outline-warning"
                      onClick={() => alert("OTP resent: 123456")}
                    >
                      Resend OTP
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-danger"
                      onClick={resetForm}
                    >
                      Cancel
                    </button>
                  </div>

                  {error && <div className="alert alert-danger">{error}</div>}

                  <button
                    type="submit"
                    className="btn w-100 text-white fw-bold"
                    style={{ backgroundColor: "#e60000" }}
                  >
                    Verify OTP
                  </button>
                </form>
              )}

              {step === 3 && (
                <form onSubmit={handleFinalSubmit}>
                  <h5 className="mb-3" style={{ color: "#e60000" }}>
                    Capture Photo & Signature
                  </h5>

                  <div className="mb-3">
                    <label className="form-label fw-bold">Take Photo</label>
                    {showWebcam ? (
                      <>
                        <Webcam
                          audio={false}
                          ref={webcamRef}
                          screenshotFormat="image/jpeg"
                          width="100%"
                          videoConstraints={{ width: 300, height: 200, facingMode: "user" }}
                          className="rounded-3 border border-dark"
                        />
                        <button
                          type="button"
                          className="btn btn-outline-success mt-2 w-100"
                          onClick={capturePhoto}
                        >
                          Capture Photo
                        </button>
                      </>
                    ) : (
                      <img
                        src={photo}
                        alt="Captured"
                        className="img-thumbnail mt-2 w-100"
                        style={{ maxWidth: "100%" }}
                      />
                    )}
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-bold">Draw Signature</label>
                    <SignatureCanvas
                      penColor="black"
                      canvasProps={{ width: 300, height: 100, className: "border border-dark rounded" }}
                      ref={sigCanvas}
                    />
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary mt-2"
                      onClick={() => sigCanvas.current.clear()}
                    >
                      Clear Signature
                    </button>
                  </div>

                  {error && <div className="alert alert-danger">{error}</div>}

                  <button
                    type="submit"
                    className="btn w-100 text-dark fw-bold"
                    style={{ backgroundColor: "#ff9f00" }}
                  >
                    Submit KYC
                  </button>
                </form>
              )}
            </>
          ) : (
            <div className="text-center p-4">
              <h4 className="text-success">✅ KYC completed successfully!</h4>
              <button className="btn btn-outline-primary mt-3" onClick={resetForm}>
                Start New KYC
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
