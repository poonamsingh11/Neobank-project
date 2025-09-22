import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";

const InternationalTransferPage = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    country: "",
    recipientName: "",
    accountNumber: "",
    swiftIban: "",
  });

  const countries = ["USA", "UK", "UAE", "Canada"];
  const currencies = ["USD", "GBP", "AED", "CAD"];

  const handleNext = () => setStep(step + 1);
  const handlePrev = () => setStep(step - 1);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleStartTransfer = () => {
    alert("Transfer confirmed!");
    setStep(0);
    setFormData({
      country: "",
      recipientName: "",
      accountNumber: "",
      swiftIban: "",
    });
  };

  // Common card styles
  const cardStyle = {
    border: "0",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    borderRadius: "1rem",
    padding: "2rem",
    marginTop: "3rem",
  };

  // Step button style (Next, Back, Confirm)
  const stepButtonStyle = {
    backgroundColor: "#950606",
    borderColor: "#950606",
    color: "#fff",
    padding: "1rem 2.5rem",
    minWidth: "150px",
    fontSize: "1.1rem",
    borderRadius: "0.5rem",
  };

  return (
    <Container fluid className="bg-light min-vh-100 px-4">
      <div style={{ paddingTop: "6rem" }}></div>

      {/* Step 0: Landing */}
      {step === 0 && (
        <Row className="justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
          <Col xs={12} md={8} lg={6}>
            <Card style={{ ...cardStyle, minHeight: "200px", padding: "3rem" }}>
              <div className="text-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  className="text-primary mb"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>

              <h1 className="fw-bold mb-4">International Transfer</h1>
              <p className="text-muted mb-4">Send money securely to bank accounts worldwide</p>
              <div className="d-flex justify-content-center">
                <Button
                  variant="danger"
                  className="rounded-pill px-5 py-3 fw-semibold fs-5"
                  onClick={() => setStep(1)}
                >
                  Start Transfer
                </Button>
              </div>
            </Card>
          </Col>
        </Row>
      )}

      {/* Step 1: Choose Country */}
      {step === 1 && (
        <Row className="justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
          <Col xs={12} md={8} lg={6}>
            <Card style={{ ...cardStyle, minHeight: "200px", padding: "3rem" }}>
              <h4 className="mb-5">Choose recipient country</h4>
              <Form.Select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="mb-4"
              >
                <option value="">Select Country</option>
                {countries.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </Form.Select>

              <h6 className="mt-4">Supported currencies:</h6>
              <p>{currencies.join(", ")}</p>

              <div className="d-flex justify-content-end">
                <Button style={stepButtonStyle} onClick={handleNext} disabled={!formData.country}>
                  Next
                </Button>
              </div>
            </Card>
          </Col>
        </Row>
      )}

      {/* Step 2: Recipient Details */}
      {step === 2 && (
        <Row className="justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
          <Col xs={12} md={8} lg={6}>
            <Card style={{ ...cardStyle, minHeight: "200px", padding: "3rem" }}>
              <h4 className="mb-5">Recipient Details</h4>
              <Form>
                <Form.Group className="mb-4">
                  <Form.Label>Recipient Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="recipientName"
                    value={formData.recipientName}
                    onChange={handleChange}
                    placeholder="Enter recipient's full name"
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Account Number</Form.Label>
                  <Form.Control
                    type="text"
                    name="accountNumber"
                    value={formData.accountNumber}
                    onChange={handleChange}
                    placeholder="Enter recipient's account number"
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>SWIFT / IBAN</Form.Label>
                  <Form.Control
                    type="text"
                    name="swiftIban"
                    value={formData.swiftIban}
                    onChange={handleChange}
                    placeholder="Enter SWIFT or IBAN code"
                  />
                </Form.Group>
              </Form>

              <div className="d-flex justify-content-between">
                <Button style={stepButtonStyle} onClick={handlePrev}>
                  Back
                </Button>
                <Button
                  style={stepButtonStyle}
                  onClick={handleNext}
                  disabled={
                    !formData.recipientName ||
                    !formData.accountNumber ||
                    !formData.swiftIban
                  }
                >
                  Next
                </Button>
              </div>
            </Card>
          </Col>
        </Row>
      )}

      {/* Step 3: Review */}
      {step === 3 && (
        <Row className="justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
          <Col xs={12} md={8} lg={6}>
            <Card style={{ ...cardStyle, minHeight: "200px", padding: "3rem" }}>
              <h4 className="mb-5">Review Transfer Details</h4>
              <div className="border rounded p-3 mb-3">
                <p>
                  <strong>Country:</strong> {formData.country}
                </p>
                <p>
                  <strong>Recipient:</strong> {formData.recipientName}
                </p>
                <p>
                  <strong>Account Number:</strong> {formData.accountNumber}
                </p>
                <p>
                  <strong>SWIFT / IBAN:</strong> {formData.swiftIban}
                </p>
                <hr />
                <p>
                  <strong>Conversion Rate:</strong> 1 USD = 82.50 INR
                </p>
                <p>
                  <strong>Transfer Fees:</strong> $2.50
                </p>
                <p>
                  <strong>Estimated Delivery:</strong> 1-2 business days
                </p>
              </div>

              <div className="d-flex justify-content-between">
                <Button style={stepButtonStyle} onClick={handlePrev}>
                  Back
                </Button>
                <Button style={stepButtonStyle} onClick={handleStartTransfer}>
                  Confirm & Send Transfer
                </Button>
              </div>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default InternationalTransferPage;
