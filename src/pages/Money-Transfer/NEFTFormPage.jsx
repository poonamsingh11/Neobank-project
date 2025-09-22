// src/pages/NEFTFormPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Card, Form, Button, Row, Col, Alert } from "react-bootstrap";

const NEFTFormPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    beneficiaryName: "",
    bankName: "",
    accountNumber: "",
    confirmAccountNumber: "",
    ifsc: "",
    amount: "",
    remarks: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const ifscRegex = /^[A-Za-z]{4}0[A-Za-z0-9]{6}$/;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const e = {};
    if (!formData.beneficiaryName.trim()) e.beneficiaryName = "Beneficiary name is required";
    if (!formData.bankName.trim()) e.bankName = "Bank name is required";
    if (!formData.accountNumber.trim()) e.accountNumber = "Account number is required";
    if (!formData.confirmAccountNumber.trim()) e.confirmAccountNumber = "Confirm account is required";
    if (
      formData.accountNumber &&
      formData.confirmAccountNumber &&
      formData.accountNumber !== formData.confirmAccountNumber
    )
      e.confirmAccountNumber = "Account numbers do not match";
    if (!formData.ifsc.trim()) e.ifsc = "IFSC is required";
    else if (!ifscRegex.test(formData.ifsc.trim().toUpperCase()))
      e.ifsc = "Invalid IFSC format (e.g., HDFC0AAAA12)";
    if (!formData.amount.trim()) e.amount = "Amount is required";
    else if (isNaN(Number(formData.amount)) || Number(formData.amount) <= 0)
      e.amount = "Please enter a valid amount";

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (!validate()) return;

    const payload = {
      ...formData,
      ifsc: formData.ifsc.trim().toUpperCase(),
      amount: Number(formData.amount),
      timestamp: new Date().toISOString(),
    };

    setSubmitted(true);
    alert(
      `NEFT Initiated:\n\nBeneficiary: ${payload.beneficiaryName}\nAccount: ${payload.accountNumber}\nIFSC: ${payload.ifsc}\nAmount: ₹${payload.amount}\nRemarks: ${payload.remarks}`
    );
    // navigate(-1); // Uncomment if you want to go back after submission
  };

  return (
    <Container fluid className="min-vh-100 d-flex align-items-center justify-content-center bg-light py-5">
      <Card className="shadow-lg p-5 rounded-4" style={{ maxWidth: "1200px", width: "170%" }}>
        <Card.Body>
          <h1 className="text-center mb-4">NEFT Transfer</h1>
          <Form onSubmit={handleSubmit}>
            {/* Beneficiary Name */}
            <Form.Group className="fw-bold mb-3">
              <Form.Label>Beneficiary Name</Form.Label>
              <Form.Control
                type="text"
                name="beneficiaryName"
                placeholder="e.g. Rajesh Kumar"
                value={formData.beneficiaryName}
                onChange={handleChange}
              />
              {errors.beneficiaryName && <Form.Text className="text-danger">{errors.beneficiaryName}</Form.Text>}
            </Form.Group>

            {/* Bank Name */}
            <Form.Group className="fw-bold mb-3">
              <Form.Label>Bank Name</Form.Label>
              <Form.Select name="bankName" value={formData.bankName} onChange={handleChange}>
                <option value="">Select Bank</option>
                <option value="HDFC Bank">HDFC Bank</option>
                <option value="State Bank of India">State Bank of India</option>
                <option value="ICICI Bank">ICICI Bank</option>
                <option value="Axis Bank">Axis Bank</option>
                <option value="Kotak Mahindra Bank">Kotak Mahindra Bank</option>
                <option value="Punjab National Bank">Punjab National Bank</option>
              </Form.Select>
              {errors.bankName && <Form.Text className="text-danger">{errors.bankName}</Form.Text>}
            </Form.Group>

            <Row className="fw-bold mb-3">
              <Col>
                <Form.Group>
                  <Form.Label>Account Number</Form.Label>
                  <Form.Control
                    type="text"
                    name="accountNumber"
                    value={formData.accountNumber}
                    onChange={handleChange}
                  />
                  {errors.accountNumber && <Form.Text className="text-danger">{errors.accountNumber}</Form.Text>}
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Confirm Account Number</Form.Label>
                  <Form.Control
                    type="text"
                    name="confirmAccountNumber"
                    value={formData.confirmAccountNumber}
                    onChange={handleChange}
                  />
                  {errors.confirmAccountNumber && (
                    <Form.Text className="text-danger">{errors.confirmAccountNumber}</Form.Text>
                  )}
                </Form.Group>
              </Col>
            </Row>

            <Row className="fw-bold mb-3">
              <Col>
                <Form.Group>
                  <Form.Label>IFSC Code</Form.Label>
                  <Form.Control
                    type="text"
                    name="ifsc"
                    placeholder="e.g. HDFC0AAAA12"
                    maxLength={11}
                    value={formData.ifsc}
                    onChange={handleChange}
                  />
                  {errors.ifsc && <Form.Text className="text-danger">{errors.ifsc}</Form.Text>}
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Amount (₹)</Form.Label>
                  <Form.Control
                    type="number"
                    name="amount"
                    value={formData.amount}
                    onChange={handleChange}
                  />
                  {errors.amount && <Form.Text className="text-danger">{errors.amount}</Form.Text>}
                </Form.Group>
              </Col>
            </Row>

            {/* Remarks */}
            <Form.Group className="fw-bold mb-3">
              <Form.Label>Remarks (optional)</Form.Label>
              <Form.Control
                type="text"
                name="remarks"
                placeholder="e.g. Invoice Payment #123"
                value={formData.remarks}
                onChange={handleChange}
              />
            </Form.Group>

            <div className="d-flex justify-end gap-3 mt-4">
              <Button variant="outline-secondary" size="lg" onClick={() => navigate(-1)}>
                Cancel
              </Button>
              <Button variant="danger" size="lg" type="submit">
                Transfer
              </Button>
            </div>

            {submitted && <Alert variant="success" className="mt-4">✅ NEFT Transfer submitted successfully!</Alert>}
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default NEFTFormPage;
