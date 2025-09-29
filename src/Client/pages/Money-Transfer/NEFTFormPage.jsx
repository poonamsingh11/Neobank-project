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
    if (formData.accountNumber && formData.confirmAccountNumber && formData.accountNumber !== formData.confirmAccountNumber)
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
  };

  return (
    <Container fluid className="min-vh-100 d-flex align-items-center justify-content-center bg-light py-3">
      <Card className="shadow-lg p-3 rounded-4" style={{ maxWidth: "600px", width: "100%" }}>
        <Card.Body>
          <h4 className="text-center mb-3 text-danger fw-bold fs-4">
            NEFT Transfer
          </h4>

          <Form onSubmit={handleSubmit}>
            {/* Beneficiary Name */}
            <Form.Group className="mb-2">
              <Form.Label className="fw-semibold fs-6">Beneficiary Name</Form.Label>
              <Form.Control
                type="text"
                name="beneficiaryName"
                placeholder="e.g. Rajesh Kumar"
                value={formData.beneficiaryName}
                onChange={handleChange}
                className="fs-6 py-1"
              />
              {errors.beneficiaryName && <Form.Text className="text-danger">{errors.beneficiaryName}</Form.Text>}
            </Form.Group>

            {/* Bank Name */}
            <Form.Group className="mb-2">
              <Form.Label className="fw-semibold fs-6">Bank Name</Form.Label>
              <Form.Select
                name="bankName"
                value={formData.bankName}
                onChange={handleChange}
                className="fs-6 py-1"
              >
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

            <Row className="mb-2">
              <Col>
                <Form.Group>
                  <Form.Label className="fw-semibold fs-6">Account Number</Form.Label>
                  <Form.Control
                    type="text"
                    name="accountNumber"
                    value={formData.accountNumber}
                    onChange={handleChange}
                    className="fs-6 py-1"
                  />
                  {errors.accountNumber && <Form.Text className="text-danger">{errors.accountNumber}</Form.Text>}
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label className="fw-semibold fs-6">Confirm Account Number</Form.Label>
                  <Form.Control
                    type="text"
                    name="confirmAccountNumber"
                    value={formData.confirmAccountNumber}
                    onChange={handleChange}
                    className="fs-6 py-1"
                  />
                  {errors.confirmAccountNumber && <Form.Text className="text-danger">{errors.confirmAccountNumber}</Form.Text>}
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-2">
              <Col>
                <Form.Group>
                  <Form.Label className="fw-semibold fs-6">IFSC Code</Form.Label>
                  <Form.Control
                    type="text"
                    name="ifsc"
                    placeholder="e.g. HDFC0AAAA12"
                    maxLength={11}
                    value={formData.ifsc}
                    onChange={handleChange}
                    className="fs-6 py-1"
                  />
                  {errors.ifsc && <Form.Text className="text-danger">{errors.ifsc}</Form.Text>}
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label className="fw-semibold fs-6">Amount (₹)</Form.Label>
                  <Form.Control
                    type="number"
                    name="amount"
                    value={formData.amount}
                    onChange={handleChange}
                    className="fs-6 py-1"
                  />
                  {errors.amount && <Form.Text className="text-danger">{errors.amount}</Form.Text>}
                </Form.Group>
              </Col>
            </Row>

            {/* Remarks */}
            <Form.Group className="mb-2">
              <Form.Label className="fw-semibold fs-6">Remarks (optional)</Form.Label>
              <Form.Control
                type="text"
                name="remarks"
                placeholder="e.g. Invoice Payment #123"
                value={formData.remarks}
                onChange={handleChange}
                className="fs-6 py-1"
              />
            </Form.Group>

            <div className="d-grid gap-2 mt-3">
              <Button
                size="md"
                type="submit"
                style={{ backgroundColor: "#950606", borderColor: "#950606", color: "white" }}
              >
                Submit NEFT
              </Button>

              <Button
                size="md"
                onClick={() => navigate(-1)}
                style={{ backgroundColor: "#950606", borderColor: "#950606", color: "white" }}
              >
                Back
              </Button>
            </div>

            {submitted && <Alert variant="success" className="mt-3">✅ NEFT Transfer submitted successfully!</Alert>}
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default NEFTFormPage;
