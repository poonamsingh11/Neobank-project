import React, { useState } from "react";
import {
  CreditCard,
  Home,
  Building,
  User,
  MapPin,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { Container, Row, Col, Form, Button, Card, Alert } from "react-bootstrap";

function ChequeBookRequest() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    accountType: "",
    accountNumber: "",
    numberOfBooks: "1",
    deliveryType: "home",
    fullName: "",
    mobileNumber: "",
    email: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    landmark: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const nextStep = () => currentStep < 3 && setCurrentStep(currentStep + 1);
  const prevStep = () => currentStep > 1 && setCurrentStep(currentStep - 1);
  const handleSubmit = () => setIsSubmitted(true);

  if (isSubmitted) {
    return (
      <Container fluid className="py-5" style={{ backgroundColor: "#ffffff", minHeight: "100vh" }}>
        <Row className="justify-content-center">
          <Col md={6}>
            <Card className="p-5 shadow-lg text-center">
              <div className="bg-success bg-opacity-25 rounded-circle p-4 mb-3 d-inline-flex justify-content-center align-items-center">
                <CheckCircle className="text-success" size={40} />
              </div>
              <h3 className="fw-bold">Request Submitted Successfully!</h3>
              <p className="text-muted">
                Your cheque book request has been received. You will receive a confirmation SMS and email shortly.
              </p>
              <Alert variant="danger" className="text-start">
                <p><strong>Request ID:</strong> CB{Math.random().toString().substr(2, 8)}</p>
                <p><strong>Expected delivery:</strong> 3-5 business days</p>
              </Alert>
              <Button
                variant="danger"
                className="w-100 rounded-pill fw-semibold"
                onClick={() => {
                  setIsSubmitted(false);
                  setCurrentStep(1);
                  setFormData({
                    accountType: "",
                    accountNumber: "",
                    numberOfBooks: "1",
                    deliveryType: "home",
                    fullName: "",
                    mobileNumber: "",
                    email: "",
                    address: "",
                    city: "",
                    state: "",
                    pincode: "",
                    landmark: "",
                  });
                }}
              >
                Make Another Request
              </Button>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <Container fluid className="py-5" style={{ backgroundColor: "#ffffff", minHeight: "100vh" }}>
      <Row className="justify-content-center">
        <Col md={10} lg={9}>
          <div className="row shadow-lg rounded-3 w-100" style={{ backgroundColor: "#fff", margin: "0 auto" }}>
            {/* Left Branding Panel */}
            <Col md={4} className="d-flex flex-column justify-content-center align-items-center p-4" style={{ backgroundColor: "#e60000", color: "#fff", borderTopLeftRadius: "15px", borderBottomLeftRadius: "15px" }}>
              <img src="src/assets/neobank-logo.png" alt="Neo Bank Logo" className="img-fluid mb-3" style={{ maxHeight: 120 }} />
              <h4 className="fw-bold text-center">Neo Bank Cheque Book</h4>
              <p className="text-light text-center mt-2" style={{ fontSize: "14px" }}>
                Quick and secure cheque book ordering in just a few steps
              </p>
            </Col>

            {/* Right Form Panel */}
            <Col md={8} className="p-4">
              {/* Stepper */}
              <div className="d-flex justify-content-between align-items-center mb-4 position-relative">
                {["Account Details", "Personal Info", "Delivery"].map((label, index) => {
                  const stepNumber = index + 1;
                  const isActive = currentStep >= stepNumber;
                  return (
                    <div key={index} className="flex-fill text-center position-relative">
                      <div
                        className={`mx-auto rounded-circle d-flex align-items-center justify-content-center ${isActive ? "bg-danger text-white" : "bg-light text-muted"}`}
                        style={{ width: 50, height: 50, fontWeight: "bold", fontSize: "18px", zIndex: 1 }}
                      >
                        {stepNumber}
                      </div>
                      <small className={`d-block mt-2 ${isActive ? "fw-semibold text-dark" : "text-muted"}`}>{label}</small>
                      {index < 2 && (
                        <div
                          style={{
                            position: "absolute",
                            top: "25px",
                            right: "-50%",
                            width: "100%",
                            height: "4px",
                            backgroundColor: currentStep > stepNumber ? "#e60000" : "#d1d1d1",
                            zIndex: 0,
                          }}
                        />
                      )}
                    </div>
                  );
                })}
              </div>

              <Card className="shadow-lg p-4">
                {/* STEP 1 */}
                {currentStep === 1 && (
                  <>
                    <h4 className="fw-bold mb-3 text-danger"><CreditCard className="me-2" size={20} /> Account Details</h4>
                    <Form>
                      <Form.Group className="mb-3">
                        <Form.Label>Account Type</Form.Label>
                        <Form.Select name="accountType" value={formData.accountType} onChange={handleInputChange}>
                          <option value="">Select Account Type</option>
                          <option value="savings">Savings Account</option>
                          <option value="current">Current Account</option>
                          <option value="salary">Salary Account</option>
                        </Form.Select>
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Label>Account Number</Form.Label>
                        <Form.Control type="text" name="accountNumber" value={formData.accountNumber} onChange={handleInputChange} placeholder="Enter your account number" />
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Label>Number of Cheque Books</Form.Label>
                        <Form.Select name="numberOfBooks" value={formData.numberOfBooks} onChange={handleInputChange}>
                          <option value="1">1 Book (25 leaves)</option>
                          <option value="2">2 Books (50 leaves)</option>
                          <option value="3">3 Books (75 leaves)</option>
                        </Form.Select>
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Label>Delivery Type</Form.Label>
                        <div className="d-flex gap-3">
                          <Form.Check type="radio" id="home" name="deliveryType" value="home" checked={formData.deliveryType === "home"} onChange={handleInputChange} label={<><Home className="me-2 text-danger" /> Home Delivery</>} />
                          <Form.Check type="radio" id="branch" name="deliveryType" value="branch" checked={formData.deliveryType === "branch"} onChange={handleInputChange} label={<><Building className="me-2 text-danger" /> Branch Collection</>} />
                        </div>
                      </Form.Group>
                    </Form>
                  </>
                )}

                {/* STEP 2 */}
                {currentStep === 2 && (
                  <>
                    <h4 className="fw-bold mb-3 text-danger"><User className="me-2" size={20} /> Personal Information</h4>
                    <Form>
                      <Form.Group className="mb-3">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} placeholder="Enter your full name" />
                      </Form.Group>

                      <Row>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Label>Mobile Number</Form.Label>
                            <Form.Control type="tel" name="mobileNumber" value={formData.mobileNumber} onChange={handleInputChange} placeholder="Enter mobile number" />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Enter email address" />
                          </Form.Group>
                        </Col>
                      </Row>

                      <Alert variant="info">
                        <AlertCircle className="me-2" size={18} />
                        <strong>Important:</strong> Please ensure your contact details are up to date for delivery notifications.
                      </Alert>
                    </Form>
                  </>
                )}

                {/* STEP 3 */}
                {currentStep === 3 && (
                  <>
                    <h4 className="fw-bold mb-3 text-danger"><MapPin className="me-2" size={20} /> Delivery Address</h4>
                    <Form>
                      <Form.Group className="mb-3">
                        <Form.Label>Complete Address</Form.Label>
                        <Form.Control as="textarea" rows={3} name="address" value={formData.address} onChange={handleInputChange} placeholder="Enter your complete address" />
                      </Form.Group>

                      <Row>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Label>City</Form.Label>
                            <Form.Control type="text" name="city" value={formData.city} onChange={handleInputChange} />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Label>State</Form.Label>
                            <Form.Control type="text" name="state" value={formData.state} onChange={handleInputChange} />
                          </Form.Group>
                        </Col>
                      </Row>

                      <Row>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Label>PIN Code</Form.Label>
                            <Form.Control type="text" name="pincode" value={formData.pincode} onChange={handleInputChange} />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Label>Landmark (Optional)</Form.Label>
                            <Form.Control type="text" name="landmark" value={formData.landmark} onChange={handleInputChange} />
                          </Form.Group>
                        </Col>
                      </Row>

                      <Card className="p-3 mt-3 bg-light">
                        <h6 className="fw-bold">Request Summary</h6>
                        <p><strong>Account Type:</strong> {formData.accountType}</p>
                        <p><strong>Number of Books:</strong> {formData.numberOfBooks} Book(s)</p>
                        <p><strong>Delivery Type:</strong> {formData.deliveryType === "home" ? "Home Delivery" : "Branch Collection"}</p>
                        <p><strong>Mobile:</strong> {formData.mobileNumber}</p>
                      </Card>
                    </Form>
                  </>
                )}

                {/* Navigation Buttons */}
                <div className="d-flex justify-content-between mt-4">
                  <Button variant="outline-secondary" disabled={currentStep === 1} onClick={prevStep} className="px-4 py-2 rounded-pill fw-semibold">← Previous</Button>
                  {currentStep < 3 ? (
                    <Button style={{ background: "linear-gradient(90deg,#dc3545,#b02a37)", border: "none" }} className="px-4 py-2 rounded-pill fw-semibold" onClick={nextStep}>Next Step →</Button>
                  ) : (
                    <Button style={{ background: "linear-gradient(90deg,#198754,#0d6efd)", border: "none" }} className="px-4 py-2 rounded-pill fw-semibold" onClick={handleSubmit}>✅ Submit Request</Button>
                  )}
                </div>
              </Card>

              <div className="text-center text-muted mt-3">
                <small>Need help? Contact our customer support at 1800-XXX-XXXX <br /> Available 24/7 for your assistance</small>
              </div>
            </Col>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ChequeBookRequest;
