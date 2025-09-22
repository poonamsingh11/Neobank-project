import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Card, Form, Button, Alert } from "react-bootstrap";

const RtgsForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    accountNumber: "",
    ifsc: "",
    amount: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.accountNumber || !formData.ifsc || !formData.amount) {
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
    <Container fluid className="min-vh-100 d-flex align-items-center justify-content-center bg-light py-5">
      <Card className="shadow-lg p-5 rounded-4" style={{ maxWidth: "1000px", width: "170%" }}>
        <Card.Body>
          <h1 className="text-center mb-4">RTGS Transfer</h1>

          <Form onSubmit={handleSubmit}>
  {/* Beneficiary Name */}
  <Form.Group className="fw-bold mb-3">
    <Form.Label>Beneficiary Name</Form.Label>
    <Form.Control
      type="text"
      name="beneficiaryName"
      placeholder="Enter beneficiary name"
      value={formData.beneficiaryName || ""} // initialize in state
      onChange={handleChange}
    />
  </Form.Group>

  {/* Account Number */}
  <Form.Group className="fw-bold mb-3">
    <Form.Label> Account Number</Form.Label>
    <Form.Control
      type="text"
      name="accountNumber"
      placeholder="Enter account number"
      value={formData.accountNumber}
      onChange={handleChange}
    />
  </Form.Group>

  {/* IFSC Code */}
  <Form.Group className="fw-bold mb-3">
    <Form.Label>IFSC Code</Form.Label>
    <Form.Control
      type="text"
      name="ifsc"
      placeholder="Enter IFSC code"
      value={formData.ifsc}
      onChange={handleChange}
    />
  </Form.Group>

  {/* Amount */}
  <Form.Group className="fw-bold mb-4">
    <Form.Label>Amount (₹2,00,000+)</Form.Label>
    <Form.Control
      type="number"
      name="amount"
      placeholder="Enter amount"
      min={200000} // ✅ Minimum limit
      value={formData.amount}
      onChange={handleChange}
    />
  </Form.Group>

  <div className="d-grid gap-4">
  <Button
    size="lg"
    type="submit"
    style={{ backgroundColor: "#950606", borderColor: "#950606" }}
  >
    Submit RTGS
  </Button>
  <Button
    size="lg"
    onClick={() => navigate(-1)}
    style={{ backgroundColor: "#950606", borderColor: "#950606", color: "white" }}
  >
    ← Back
  </Button>
</div>

</Form>


          {submitted && (
            <Alert variant="success" className="mt-5">
              ✅ RTGS Transfer of ₹{formData.amount} has been initiated successfully!
            </Alert>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default RtgsForm;
