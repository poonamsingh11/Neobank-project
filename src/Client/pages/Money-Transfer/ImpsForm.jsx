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

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
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
    setSubmitted(true);
  };

  return (
    <Container fluid className="bg-light d-flex justify-content-center align-items-center min-vh-100 py-2">
      <Card className="shadow rounded-3 p-2" style={{ maxWidth: "450px", width: "100%" }}>
        <Card.Body className="p-2">
          <h5 className="text-center mb-2 text-danger fw-bold fs-6">IMPS Transfer</h5>

          <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-1">
              <Form.Label className="fw-semibold fs-7">Beneficiary Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter beneficiary name"
                value={formData.name}
                onChange={handleChange}
                className="fs-7 py-1"
              />
            </Form.Group>

            <Form.Group className="mb-1">
              <Form.Label className="fw-semibold fs-7">Account Number</Form.Label>
              <Form.Control
                type="text"
                name="accountNumber"
                placeholder="Enter account number"
                value={formData.accountNumber}
                onChange={handleChange}
                className="fs-7 py-1"
              />
            </Form.Group>

            <Form.Group className="mb-1">
              <Form.Label className="fw-semibold fs-7">IFSC Code</Form.Label>
              <Form.Control
                type="text"
                name="ifsc"
                placeholder="Enter IFSC code"
                value={formData.ifsc}
                onChange={handleChange}
                className="fs-7 py-1"
              />
            </Form.Group>

            <div className="text-center text-muted my-1 fs-7">OR</div>

            <Form.Group className="mb-1">
              <Form.Label className="fw-semibold fs-7">Mobile Number</Form.Label>
              <Form.Control
                type="text"
                name="mobileNumber"
                placeholder="Enter mobile number"
                value={formData.mobileNumber}
                onChange={handleChange}
                className="fs-7 py-1"
              />
            </Form.Group>

            <Form.Group className="mb-1">
              <Form.Label className="fw-semibold fs-7">MMID</Form.Label>
              <Form.Control
                type="text"
                name="mmid"
                placeholder="Enter MMID"
                value={formData.mmid}
                onChange={handleChange}
                className="fs-7 py-1"
              />
            </Form.Group>

            <Form.Group className="mb-1">
              <Form.Label className="fw-semibold fs-7">Amount</Form.Label>
              <Form.Control
                type="number"
                name="amount"
                placeholder="Enter amount (max ₹2,00,000)"
                value={formData.amount}
                onChange={handleChange}
                className="fs-7 py-1"
              />
            </Form.Group>

            <Form.Group className="mb-1">
              <Form.Label className="fw-semibold fs-7">Remark</Form.Label>
              <Form.Control
                type="text"
                name="remark"
                placeholder="Enter remark"
                value={formData.remark}
                onChange={handleChange}
                className="fs-7 py-1"
              />
            </Form.Group>

            <div className="d-grid gap-1 mt-1">
              <Button
                size="sm"
                type="submit"
                style={{
                  backgroundColor: "#950606",
                  borderColor: "#950606",
                  color: "white",
                  fontSize: "0.75rem",
                  padding: "4px",
                }}
              >
                Submit IMPS
              </Button>

              <Button
                size="sm"
                onClick={() => navigate(-1)}
                style={{
                  backgroundColor: "#950606",
                  borderColor: "#950606",
                  color: "white",
                  fontSize: "0.75rem",
                  padding: "4px",
                }}
              >
                Back
              </Button>
            </div>

            {submitted && (
              <Alert variant="success" className="mt-1 py-1 fs-7">
                ✅ IMPS Transfer of ₹{formData.amount} to {formData.name} has been
                initiated successfully!
              </Alert>
            )}
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ImpsForm;
