

import React, { useState } from "react";
import { Form, Button, Row, Col, Alert } from "react-bootstrap";

function HomeLoanForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    mobileNumber: "",
    email: "",
    panAadhaar: "",
    address: "",
    occupation: "",
    company: "",
    monthlyIncome: "",
    workExperience: "",
    propertyType: "",
    propertyLocation: "",
    propertyValue: "",
    builderName: "",
    loanAmount: "",
    tenure: "",
    coApplicantName: "",
    relationship: "",
    coApplicantIncome: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="container my-5">
        <div className="card shadow-lg border-0 rounded-4">
          <div className="card-body p-5 text-center">
            <Alert variant="success">
              ✅ Your Home Loan Application has been submitted successfully!
            </Alert>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container my-4">
      <h2 className="mb-4 text-center" style={{ color: "#900603" }}>
        Home Loan Application Form
      </h2>
      <Form
        onSubmit={handleSubmit}
        className="p-4 border rounded shadow-sm"
        style={{ backgroundColor: "#fff0f0" }}
      >
        {/* Personal Details */}
        <h5 className="mb-3" style={{ color: "#900603" }}>
          Personal Details
        </h5>
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group>
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                name="fullName"
                value={formData.fullName}
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
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control
                type="tel"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                pattern="[0-9]{10}"
                placeholder="10-digit number"
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
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
          <Col md={6}>
            <Form.Group>
              <Form.Label>PAN / Aadhaar</Form.Label>
              <Form.Control
                type="text"
                name="panAadhaar"
                value={formData.panAadhaar}
                onChange={handleChange}
                required
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
              />
            </Form.Group>
          </Col>
          <Col md={2}>
            <Form.Group>
              <Form.Label>Monthly Income (₹)</Form.Label>
              <Form.Control
                type="number"
                name="monthlyIncome"
                value={formData.monthlyIncome}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col md={2}>
            <Form.Group>
              <Form.Label>Work Exp (Years)</Form.Label>
              <Form.Control
                type="number"
                name="workExperience"
                value={formData.workExperience}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>

        {/* Property Details */}
        <h5 className="mb-3" style={{ color: "#900603" }}>
          Property Details
        </h5>
        <Row className="mb-3">
          <Col md={4}>
            <Form.Group>
              <Form.Label>Property Type</Form.Label>
              <Form.Control
                type="text"
                name="propertyType"
                value={formData.propertyType}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group>
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                name="propertyLocation"
                value={formData.propertyLocation}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group>
              <Form.Label>Property Value (₹)</Form.Label>
              <Form.Control
                type="number"
                name="propertyValue"
                value={formData.propertyValue}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <Form.Group>
              <Form.Label>Builder / Seller Name</Form.Label>
              <Form.Control
                type="text"
                name="builderName"
                value={formData.builderName}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>

        {/* Loan Details */}
        <h5 className="mb-3" style={{ color: "#900603" }}>
          Loan Details
        </h5>
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group>
              <Form.Label>Loan Amount (₹)</Form.Label>
              <Form.Control
                type="number"
                name="loanAmount"
                value={formData.loanAmount}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Tenure (Months)</Form.Label>
              <Form.Control
                type="number"
                name="tenure"
                value={formData.tenure}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>

        {/* Co-Applicant Details */}
        <h5 className="mb-3" style={{ color: "#900603" }}>
          Co-Applicant (Optional)
        </h5>
        <Row className="mb-3">
          <Col md={4}>
            <Form.Group>
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                name="coApplicantName"
                value={formData.coApplicantName}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group>
              <Form.Label>Relationship</Form.Label>
              <Form.Control
                type="text"
                name="relationship"
                value={formData.relationship}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group>
              <Form.Label>Monthly Income (₹)</Form.Label>
              <Form.Control
                type="number"
                name="coApplicantIncome"
                value={formData.coApplicantIncome}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>

        {/* Declaration */}
        <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
            label="I hereby declare that the information provided is true and correct."
            required
          />
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
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = "#780606")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = "#900603")
            }
          >
            Submit Application
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default HomeLoanForm;

