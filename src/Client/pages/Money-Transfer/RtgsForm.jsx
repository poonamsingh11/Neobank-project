import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Card, Form, Button, Alert } from "react-bootstrap";

const RtgsForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    beneficiaryName: "",
    accountNumber: "",
    ifsc: "",
    amount: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.beneficiaryName || !formData.accountNumber || !formData.ifsc || !formData.amount) {
      alert("Please fill all fields!");
      return;
    }
    if (parseFloat(formData.amount) < 200000) {
      alert("RTGS is for transactions ₹2,00,000 or more.");
      return;
    }
    setSubmitted(true);
  };

  return (
    <Container fluid className="d-flex align-items-center justify-content-center min-vh-90 bg-light py-3">
      <Card className="shadow rounded-3 p-3" style={{ maxWidth: "500px", width: "95%" }}>
        <Card.Body className="p-3">
          <h5 className="text-center mb-3 text-danger fw-bold fs-5">RTGS Transfer</h5>

          <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-2">
              <Form.Label className="fw-semibold fs-6">Beneficiary Name</Form.Label>
              <Form.Control
                type="text"
                name="beneficiaryName"
                placeholder="Enter beneficiary name"
                value={formData.beneficiaryName}
                onChange={handleChange}
                className="fs-6 py-2"
              />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label className="fw-semibold fs-6">Account Number</Form.Label>
              <Form.Control
                type="text"
                name="accountNumber"
                placeholder="Enter account number"
                value={formData.accountNumber}
                onChange={handleChange}
                className="fs-6 py-2"
              />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label className="fw-semibold fs-6">IFSC Code</Form.Label>
              <Form.Control
                type="text"
                name="ifsc"
                placeholder="Enter IFSC code"
                value={formData.ifsc}
                onChange={handleChange}
                className="fs-6 py-2"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="fw-semibold fs-6">Amount (₹2,00,000+)</Form.Label>
              <Form.Control
                type="number"
                name="amount"
                placeholder="Enter amount"
                min={200000}
                value={formData.amount}
                onChange={handleChange}
                className="fs-6 py-2"
              />
            </Form.Group>

            <div className="d-grid gap-2 mt-2">
              <Button
                size="md"
                type="submit"
                style={{
                  backgroundColor: "#950606",
                  borderColor: "#950606",
                  color: "white",
                  fontSize: "0.9rem",
                  padding: "6px 0",
                }}
              >
                Submit RTGS
              </Button>

              <Button
                size="md"
                onClick={() => navigate(-1)}
                style={{
                  backgroundColor: "#950606",
                  borderColor: "#950606",
                  color: "white",
                  fontSize: "0.9rem",
                  padding: "6px 0",
                }}
              >
                Back
              </Button>
            </div>

            {submitted && (
              <Alert variant="success" className="mt-2 py-1 fs-6">
                ✅ RTGS Transfer of ₹{formData.amount} has been initiated successfully!
              </Alert>
            )}
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default RtgsForm;
