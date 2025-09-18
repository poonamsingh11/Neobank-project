import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

function GoldLoanForm() {
  const [formData, setFormData] = useState({
    applicantName: "",
    dob: "",
    gender: "",
    contact: "",
    email: "",
    address: "",
    goldType: "",
    goldWeight: "",
    goldPurity: "",
    tenure: "",
    idProof: "",
    addressProof: null,
  });

  const goldPricePerGram = 6000; // current gold price
  const ltv = 0.75; // Loan-to-Value

  const calculateLoanAmount = () => {
    if (!formData.goldWeight || !formData.goldPurity) return 0;
    const purityFactor = parseFloat(formData.goldPurity) / 24;
    const goldValue = parseFloat(formData.goldWeight) * purityFactor * goldPricePerGram;
    return Math.floor(goldValue * ltv);
  };

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `✅ Gold Loan Application Submitted!\nEligible Loan Amount: ₹${calculateLoanAmount().toLocaleString()}`
    );
    console.log(formData);
  };

  return (
    <div className="container my-4">
      <h2 className="mb-4 text-center">Gold Loan Application Form</h2>
      <Form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm bg-light">
        
        {/* Applicant Details */}
        <h5 className="mb-3 text-primary">Applicant Details</h5>
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

        {/* Gold Details */}
        <h5 className="mb-3 text-primary">Gold Details</h5>
        <Row className="mb-3">
          <Col md={4}>
            <Form.Group>
              <Form.Label>Gold Type</Form.Label>
              <Form.Select
                name="goldType"
                value={formData.goldType}
                onChange={handleChange}
                required
              >
                <option value="">Select</option>
                <option>Jewellery</option>
                <option>Coins</option>
                <option>Bullion</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group>
              <Form.Label>Gold Weight (grams)</Form.Label>
              <Form.Control
                type="number"
                name="goldWeight"
                value={formData.goldWeight}
                onChange={handleChange}
                min="1"
                required
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group>
              <Form.Label>Purity (karat)</Form.Label>
              <Form.Select
                name="goldPurity"
                value={formData.goldPurity}
                onChange={handleChange}
                required
              >
                <option value="">Select</option>
                <option value="18">18K</option>
                <option value="22">22K</option>
                <option value="24">24K</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        {/* Loan Calculation */}
        <div className="alert alert-info">
          <strong>Eligible Loan Amount: </strong> ₹{calculateLoanAmount().toLocaleString()}
        </div>

        {/* Tenure */}
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group>
              <Form.Label>Tenure (months)</Form.Label>
              <Form.Control
                type="number"
                name="tenure"
                value={formData.tenure}
                onChange={handleChange}
                min="1"
                required
              />
            </Form.Group>
          </Col>
        </Row>

        {/* Documents */}
        <h5 className="mb-3 text-primary">Documents</h5>
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

        <Form.Group className="mb-3">
          <Form.Label>Upload Address Proof</Form.Label>
          <Form.Control
            type="file"
            name="addressProof"
            onChange={handleChange}
          />
        </Form.Group>

        {/* Submit */}
        <div className="text-center">
          <Button
            type="submit"
            style={{
              backgroundColor: "#950606",
              border: "none",
              padding: "10px 20px",
              fontWeight: "500",
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#b30707")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#950606")}
          >
            Submit Application
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default GoldLoanForm;
