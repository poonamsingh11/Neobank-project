import React, { useState } from "react";
import { Form, Button, Row, Col, Alert } from "react-bootstrap";

function PersonalLoanForm() {
  const [formData, setFormData] = useState({
    applicantName: "",
    dob: "",
    gender: "",
    contact: "",
    email: "",
    address: "",
    occupation: "",
    company: "",
    income: "",
    loanAmount: "",
    tenure: "",
    purpose: "",
    idProof: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="container my-4">
      <h2 className="mb-4 text-center" style={{ color: "#900603" }}>
        Personal Loan Application Form
      </h2>

      {/* Success Alert */}
      {submitted && (
        <Alert variant="success" className="text-center">
          ✅ Personal Loan Application Submitted! <br />
          Name: {formData.applicantName}
        </Alert>
      )}

      <Form
        onSubmit={handleSubmit}
        className="p-4 border rounded shadow-sm"
        style={{ backgroundColor: "#fff0f0" }}
      >
        {/* Applicant Details */}
        <h5 className="mb-3" style={{ color: "#900603" }}>
          Applicant Details
        </h5>
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group>
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                name="applicantName"
                value={formData.applicantName}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Label>Gender</Form.Label>
              <Form.Select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="">Select</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <Form.Group>
              <Form.Label>Contact Number</Form.Label>
              <Form.Control
                type="tel"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                pattern="[0-9]{10}"
                placeholder="10-digit number"
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Email ID</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3">
          <Form.Label>Address</Form.Label>
          <Form.Control
            as="textarea"
            rows={2}
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </Form.Group>

        {/* Employment & Income */}
        <h5 className="mb-3" style={{ color: "#900603" }}>
          Employment & Income
        </h5>
        <Row className="mb-3">
          <Col md={4}>
            <Form.Group>
              <Form.Label>Occupation</Form.Label>
              <Form.Select
                name="occupation"
                value={formData.occupation}
                onChange={handleChange}
                required
              >
                <option value="">Select</option>
                <option>Salaried</option>
                <option>Self-Employed</option>
                <option>Business</option>
                <option>Other</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group>
              <Form.Label>Company / Business Name</Form.Label>
              <Form.Control
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group>
              <Form.Label>Monthly Income (₹)</Form.Label>
              <Form.Control
                type="number"
                name="income"
                value={formData.income}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        {/* Loan Details */}
        <h5 className="mb-3" style={{ color: "#900603" }}>
          Loan Details
        </h5>
        <Row className="mb-3">
          <Col md={4}>
            <Form.Group>
              <Form.Label>Loan Amount (₹)</Form.Label>
              <Form.Control
                type="number"
                name="loanAmount"
                value={formData.loanAmount}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group>
              <Form.Label>Tenure (Months)</Form.Label>
              <Form.Control
                type="number"
                name="tenure"
                value={formData.tenure}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group>
              <Form.Label>Purpose of Loan</Form.Label>
              <Form.Control
                type="text"
                name="purpose"
                value={formData.purpose}
                onChange={handleChange}
                placeholder="e.g. Wedding, Travel, Medical"
                required
              />
            </Form.Group>
          </Col>
        </Row>

        {/* Documents */}
        <h5 className="mb-3" style={{ color: "#900603" }}>
          Documents
        </h5>
        <Form.Group className="mb-3">
          <Form.Label>Identity Proof</Form.Label>
          <Form.Select
            name="idProof"
            value={formData.idProof}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option>Aadhar Card</option>
            <option>PAN Card</option>
            <option>Passport</option>
            <option>Voter ID</option>
            <option>Driving License</option>
          </Form.Select>
        </Form.Group>

        {/* Submit */}
        <div className="text-center">
          <Button
            type="submit"
            style={{
              backgroundColor: "#900603",
              border: "none",
              padding: "10px 20px",
              fontWeight: "500",
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#780606")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#900603")}
          >
            Submit Application
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default PersonalLoanForm;
