import React, { useState } from "react";
import { Container, Card, Form, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ImpsForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    accountNumber: "",
    ifsc: "",
    mobileNumber: "",
    mmid: "",
    amount: "",
    remark: "",
  });
  const [submitted, setSubmitted] = useState(false);

  // Handle form input changes
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // Form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate: Either Account+IFSC or Mobile+MMID must be provided
    if (
      (!formData.accountNumber || !formData.ifsc) &&
      (!formData.mobileNumber || !formData.mmid)
    ) {
      alert(
        "Please provide either Account Number + IFSC OR Mobile Number + MMID"
      );
      return;
    }

    if (!formData.amount) {
      alert("Please enter an amount");
      return;
    }

    if (Number(formData.amount) > 200000) {
      alert("IMPS daily transfer limit is ₹2,00,000. Please enter a smaller amount.");
      return;
    }

    if (!formData.name) {
      alert("Please enter the beneficiary name");
      return;
    }

    // Mark form as submitted
    setSubmitted(true);
  };

  return (
    <Container fluid className="bg-light py-5 mt-5 d-flex justify-content-center">

      <Card className="shadow-lg p-5 rounded-4" style={{ maxWidth: "1000px", width: "170%" }}>
        <Card.Body>
          <h1 className="text-center mb-4 text-danger fw-bold fs-3">IMPS Transfer</h1>



          <Form onSubmit={handleSubmit}>
            {/* Name */}
            <Form.Group className="fw-bold mb-3">
              <Form.Label>Beneficiary Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter beneficiary name"
                value={formData.name}
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

            {/* IFSC */}
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

           <div className="text-center text-muted my-3">OR</div>


            {/* Mobile Number */}
            <Form.Group className="fw-bold mb-3">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control
                type="text"
                name="mobileNumber"
                placeholder="Enter mobile number"
                value={formData.mobileNumber}
                onChange={handleChange}
              />
            </Form.Group>

            {/* MMID */}
            <Form.Group className="fw-bold mb-3">
              <Form.Label>MMID</Form.Label>
              <Form.Control
                type="text"
                name="mmid"
                placeholder="Enter MMID"
                value={formData.mmid}
                onChange={handleChange}
              />
            </Form.Group>

            {/* Amount */}
            <Form.Group className="fw-bold mb-3">
              <Form.Label>Amount</Form.Label>
              <Form.Control
                type="number"
                name="amount"
                placeholder="Enter amount (max ₹2,00,000)"
                value={formData.amount}
                onChange={handleChange}
              />
            </Form.Group>

            {/* Remark */}
            <Form.Group className="fw-bold mb-3">
              <Form.Label>Remark</Form.Label>
              <Form.Control
                type="text"
                name="remark"
                placeholder="Enter remark"
                value={formData.remark}
                onChange={handleChange}
              />
            </Form.Group>

            <div className="d-grid gap-4 mt-4">
  <Button 
    size="lg" 
    type="submit"
    style={{ backgroundColor: "#950606", borderColor: "#950606", color: "white" }}
  >
    Submit IMPS
  </Button>

  <Button
    size="lg"
    onClick={() => navigate(-1)}
    style={{ backgroundColor: "#950606", borderColor: "#950606", color: "white" }}
  >
   Back
  </Button>
</div>

          </Form>

          {submitted && (
            <Alert variant="success" className="mt-4">
              ✅ IMPS Transfer of ₹{formData.amount} to {formData.name} has been
              initiated successfully!
            </Alert>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ImpsForm;
