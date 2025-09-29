import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Container, Card, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const SendMoney = () => {
  const location = useLocation();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    type: "",
    name: "",
    account: "",
    ifsc: "",
    upi: "",
    wallet: "",
    amount: "",
    note: "",
  });

  // Open UPI form directly if URL has type=upi
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const type = params.get("type");
    if (type && type.toLowerCase() === "upi") {
      setForm((prev) => ({ ...prev, type: "upi" }));
      setStep(2);
    }
  }, [location]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const buttonStyle = {
    backgroundColor: "#950606",
    color: "#fff",
    border: "none",
    fontSize: "1.15rem",
    padding: "15px",
    borderRadius: "12px",
  };

  const buttonHoverStyle = {
    backgroundColor: "#7a0404",
    color: "#fff",
  };

  const cardStyle = {
    maxWidth: "700px",
    width: "100%",
    minHeight: "140px",
    borderRadius: "20px",
  };

  return (
    <Container className="d-flex flex-column align-items-center justify-content-center p-5 bg-light min-vh-100">
      <h1 className="h2 mb-5 text-center fw-bold">Send Money</h1>

      {/* STEP 1 */}
      {step === 1 && (
        <Card className="p-5 shadow-lg" style={cardStyle}>
          <Card.Body>
            <h2 className="fw-bold text-center mb-5" style={{ fontSize: "2rem" }}>
              Choose Recipient Type
            </h2>
            <div className="d-grid gap-4">
              {["bank", "upi", "wallet"].map((type) => (
                <Button
                  key={type}
                  size="lg"
                  style={buttonStyle}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor)
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor)
                  }
                  onClick={() => {
                    setForm({ ...form, type });
                    setStep(2);
                  }}
                >
                  {type === "bank" ? "Bank Account" : type === "upi" ? "UPI" : "Wallet"}
                </Button>
              ))}
            </div>
          </Card.Body>
        </Card>
      )}

      {/* STEP 2 */}
      {step === 2 && (
        <Card className="p-5 shadow-lg" style={cardStyle}>
          <Card.Body>
            <h2 className="h4 mb-4 text-center fw-semibold">Enter Details</h2>
            <Form>
              {form.type === "bank" && (
                <>
                
                 <Form.Group className="fw-bold mb-3">
  <Form.Label>Beneficiary Name</Form.Label>
  <Form.Control
    type="text"
    name="name" // keep this same as in your state
    placeholder="Enter beneficiary name"
    value={form.name || ""} // your state variable
    onChange={handleChange}
    className="form-control-lg"
  />
</Form.Group>

                  <Form.Group className="fw-bold mb-3">
  <Form.Label>Account Number</Form.Label>
  <Form.Control
    type="text"
    name="account" // matches your state
    placeholder="Enter account number"
    value={form.account || ""}
    onChange={handleChange}
    className="form-control-lg"
  />
</Form.Group>

                 <Form.Group className="fw-bold mb-3">
  <Form.Label>IFSC Code</Form.Label>
  <Form.Control
    type="text"
    name="ifsc" // matches your state
    placeholder="Enter IFSC code"
    value={form.ifsc || ""}
    onChange={handleChange}
    className="form-control-lg"
  />
</Form.Group>
</>
              )}

              {form.type === "upi" && (
                <Form.Group className="fw-bold mb-3">
    <Form.Label>UPI ID</Form.Label>
    <Form.Control
      type="text"
      name="upi"
      placeholder="Enter UPI ID"
      value={form.upi || ""}
      onChange={handleChange}
      className="form-control-lg"
    />
  </Form.Group>
              )}

              {form.type === "wallet" && (
                 <Form.Group className="fw-bold mb-3">
    <Form.Label>Mobile Number</Form.Label>
    <Form.Control
      type="text"
      name="wallet"
      placeholder="Enter mobile number"
      value={form.wallet || ""}
      onChange={handleChange}
      className="form-control-lg"
    />
  </Form.Group>
              )}

              <Form.Group className="fw-bold mb-3">
  <Form.Label>Amount</Form.Label>
  <Form.Control
    type="number"
    name="amount"
    placeholder="Enter amount"
    value={form.amount || ""}
    onChange={handleChange}
    className="form-control-lg"
  />
</Form.Group>
               <Form.Group className="fw-bold mb-3">
        <Form.Label>Remark (Optional)</Form.Label>
        <Form.Control
          type="text"
          name="note"
          placeholder="Enter remark (optional)"
          value={form.note || ""}
          onChange={handleChange}
          className="form-control-lg"
        />
      </Form.Group>
    </Form>

            <div className="d-grid gap-3 mt-4">
              <Button
                size="lg"
                style={buttonStyle}
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor)
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor)
                }
                onClick={() => setStep(3)}
              >
                Continue →
              </Button>
              <Button
                size="lg"
                className="text-white"
                style={{ backgroundColor: "#950606" }}
                onClick={() => setStep(1)}
              >
                Back
              </Button>
            </div>
          </Card.Body>
        </Card>
      )}

      {/* STEP 3 */}
      {step === 3 && (
        <Card className="p-5 shadow-lg" style={cardStyle}>
          <Card.Body>
            <h2 className="h4 mb-4 text-center fw-semibold">Review & Confirm</h2>
            <div className="mb-4 fs-5">
              <p>
                <strong>Type:</strong> {form.type}
              </p>
              {form.name && (
                <p>
                  <strong>Name:</strong> {form.name}
                </p>
              )}
              {form.account && (
                <p>
                  <strong>Account:</strong> {form.account}
                </p>
              )}
              {form.ifsc && (
                <p>
                  <strong>IFSC:</strong> {form.ifsc}
                </p>
              )}
              {form.upi && (
                <p>
                  <strong>UPI:</strong> {form.upi}
                </p>
              )}
              {form.wallet && (
                <p>
                  <strong>Wallet:</strong> {form.wallet}
                </p>
              )}
              <p className="fw-bold text-primary">
                <strong>Amount:</strong> ₹{form.amount}
              </p>
              {form.note && (
                <p>
                  <strong>Note:</strong> {form.note}
                </p>
              )}
            </div>

            <div className="d-grid gap-3">
              <Button
                size="lg"
                style={buttonStyle}
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor)
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor)
                }
                onClick={() => setStep(4)}
              >
                Confirm & Pay
              </Button>
              <Button
                size="lg"
                className="text-white"
                style={{ backgroundColor: "#950606" }}
                onClick={() => setStep(1)}
              >
                Back
              </Button>
            </div>
          </Card.Body>
        </Card>
      )}

      {/* STEP 4 */}
      {step === 4 && (
        <Card className="p-5 shadow-lg" style={cardStyle}>
          <Card.Body>
            <h2 className="h4 mb-4 text-center fw-semibold">Authorize Payment</h2>
            <Form.Control
              className="form-control-lg mb-3"
              type="password"
              placeholder="Enter PIN / OTP"
            />
            <div className="d-grid gap-3 mt-4">
              <Button
                size="lg"
                style={buttonStyle}
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor)
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor)
                }
                onClick={() => setStep(5)}
              >
                Submit
              </Button>
              <Button
                size="lg"
                className="text-white"
                style={{ backgroundColor: "#950606" }}
                onClick={() => setStep(1)}
              >
                Back
              </Button>
            </div>
          </Card.Body>
        </Card>
      )}

      {/* STEP 5 */}
      {step === 5 && (
        <Card className="p-5 shadow-lg text-center" style={cardStyle}>
          <Card.Body>
            <h2 className="text-success mb-4 fw-bold">✅ Transaction Successful</h2>
            <p className="fs-5">Transaction ID: TXN{Math.floor(Math.random() * 100000)}</p>
            <p className="fs-5">Date: {new Date().toLocaleString()}</p>
            <p className="fs-5 text-primary fw-bold">Amount Sent: ₹{form.amount}</p>
            <p className="fs-5">Recipient: {form.name || form.upi || form.wallet}</p>
            <Button
              size="lg"
              style={buttonStyle}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor)
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor)
              }
              onClick={() => setStep(1)}
            >
              New Transfer
            </Button>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
};

export default SendMoney;
