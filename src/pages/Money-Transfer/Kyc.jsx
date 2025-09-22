import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

const Kyc = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    address: "",
    phone: "",
    email: "",
    idProof: null,
    addressProof: null,
    selfie: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const buttonStyle = { backgroundColor: "#950606", borderColor: "#950606", fontSize: "1.1rem", padding: "0.75rem 2rem" };
  const inputStyle = { fontSize: "1.05rem", padding: "0.75rem" };

  return (
    <Container fluid className="p-4 bg-light min-vh-100 d-flex align-items-center justify-content-center">
      <Card className="w-100" style={{ maxWidth: "900px", borderRadius: "1rem", minHeight: "600px" }}>
        <Card.Body className="p-5 d-flex flex-column">

          {/* Step Indicator */}
          <Row className="mb-4 text-center">
            {["Intro", "Info", "Documents", "Review", "Done"].map((label, i) => (
              <Col key={i}>
                <span
                  style={{
                    fontWeight: step === i + 1 ? "800" : "500",
                    fontSize: "1.2rem",
                    color: step === i + 1 ? "orange" : "gray",
                  }}
                >
                  {label}
                </span>
              </Col>
            ))}
          </Row>

          {/* Step Content */}
          <div className="flex-grow-1 mt-4">
            {/* Step 1: Intro */}
            {step === 1 && (
              <>
                <div className="text-center">
                  <h1 className="fw-bold display-4 text-dark">KYC Verification</h1>
                  <p className="text-secondary fs-5 mx-auto" style={{ maxWidth: "600px" }}>
                    To increase your transaction limits and secure your account, we need to verify your identity. Please keep the following documents ready:
                  </p>
                </div>
                <ul className="mt-4 fs-5 fw-medium text-secondary mx-auto" style={{ maxWidth: "500px" }}>
                  <li>Government-issued Photo ID (Aadhar, PAN, Passport)</li>
                  <li>Proof of Address (Utility Bill, Bank Statement)</li>
                  <li>A recent Selfie/Photo</li>
                </ul>
                <div className="text-center mt-5">
                  <Button onClick={nextStep} style={buttonStyle} size="lg">
                    Start KYC →
                  </Button>
                </div>
              </>
            )}

            {/* Step 2: Personal Info */}
            {step === 2 && (
              <>
                <h2 className="fw-bold text-dark">Personal Information</h2>
                <Form className="mt-4">
                  <Row className="g-3">
                    <Col md={6}>
                      <Form.Control
                        type="text"
                        name="fullName"
                        placeholder="Full Legal Name"
                        value={formData.fullName}
                        onChange={handleChange}
                        size="lg"
                        style={inputStyle}
                      />
                    </Col>
                    <Col md={6}>
                      <Form.Control
                        type="date"
                        name="dob"
                        value={formData.dob}
                        onChange={handleChange}
                        size="lg"
                        style={inputStyle}
                      />
                    </Col>
                    <Col md={12}>
                      <Form.Control
                        type="text"
                        name="address"
                        placeholder="Address"
                        value={formData.address}
                        onChange={handleChange}
                        size="lg"
                        style={inputStyle}
                      />
                    </Col>
                    <Col md={6}>
                      <Form.Control
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        size="lg"
                        style={inputStyle}
                      />
                    </Col>
                    <Col md={6}>
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        size="lg"
                        style={inputStyle}
                      />
                    </Col>
                  </Row>
                </Form>
                <div className="d-flex justify-content-between mt-4">
                  <Button onClick={prevStep} style={buttonStyle} size="lg">
                    ← Back
                  </Button>
                  <Button onClick={nextStep} style={buttonStyle} size="lg">
                    Next →
                  </Button>
                </div>
              </>
            )}

            {/* Step 3: Document Upload */}
            {step === 3 && (
              <>
                <h2 className="fw-bold text-dark">Upload Documents</h2>
                <Form className="mt-4">
                  <Form.Group className="mb-3">
                    <Form.Label>Photo ID</Form.Label>
                    <Form.Control
                      type="file"
                      name="idProof"
                      accept="image/*,application/pdf"
                      onChange={handleChange}
                      size="lg"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Address Proof</Form.Label>
                    <Form.Control
                      type="file"
                      name="addressProof"
                      accept="image/*,application/pdf"
                      onChange={handleChange}
                      size="lg"
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Selfie</Form.Label>
                    <Form.Control
                      type="file"
                      name="selfie"
                      accept="image/*"
                      onChange={handleChange}
                      size="lg"
                    />
                  </Form.Group>
                </Form>
                <div className="d-flex justify-content-between mt-4">
                  <Button onClick={prevStep} style={buttonStyle} size="lg">
                    ← Back
                  </Button>
                  <Button onClick={nextStep} style={buttonStyle} size="lg">
                    Next →
                  </Button>
                </div>
              </>
            )}

            {/* Step 4: Review */}
            {step === 4 && (
              <>
                <h2 className="fw-bold text-dark">Review Your Details</h2>
                <div className="mt-3 text-secondary fs-5">
                  <p><strong>Name:</strong> {formData.fullName}</p>
                  <p><strong>DOB:</strong> {formData.dob}</p>
                  <p><strong>Address:</strong> {formData.address}</p>
                  <p><strong>Phone:</strong> {formData.phone}</p>
                  <p><strong>Email:</strong> {formData.email}</p>
                  <p><strong>ID Proof:</strong> {formData.idProof?.name}</p>
                  <p><strong>Address Proof:</strong> {formData.addressProof?.name}</p>
                  <p><strong>Selfie:</strong> {formData.selfie?.name}</p>
                </div>
                <div className="d-flex justify-content-between mt-4">
                  <Button onClick={prevStep} style={buttonStyle} size="lg">
                    ← Back
                  </Button>
                  <Button onClick={nextStep} style={buttonStyle} size="lg">
                    Submit ✔
                  </Button>
                </div>
              </>
            )}

            {/* Step 5: Done */}
            {step === 5 && (
              <div className="text-center mt-4">
                <h2 className="fw-bold text-success">✅ KYC Submitted!</h2>
                <p className="text-secondary fs-5 mx-auto" style={{ maxWidth: "600px" }}>
                  Your documents have been submitted successfully. Verification may take up to 24–48 hours. You can track your KYC status in your profile.
                </p>
                <Button onClick={() => setStep(1)} style={buttonStyle} size="lg" className="mt-3">
                  Go to Dashboard
                </Button>
              </div>
            )}
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Kyc;
