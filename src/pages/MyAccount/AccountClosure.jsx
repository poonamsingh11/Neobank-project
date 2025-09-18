import React, { useState } from "react";
import {
  XCircle,
  CheckCircle,
  User,
  CreditCard,
  FileText,
  Shield,
  AlertTriangle,
  Download,
} from "lucide-react";
import { Container, Row, Col, Form, Button, Card, Alert } from "react-bootstrap";

function AccountClosure() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    accountType: "",
    accountNumber: "",
    confirmAccountNumber: "",
    fullName: "",
    mobileNumber: "",
    email: "",
    dateOfBirth: "",
    closureReason: "",
    otherReason: "",
    transferAccount: "",
    transferIfsc: "",
    transferBankName: "",
    hasOutstandingLoans: "",
    hasPendingTransactions: "",
    acknowledgment: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };
  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };
  const handleSubmit = () => setIsSubmitted(true);

  const closureReasons = [
    "Switching to another bank",
    "No longer needed",
    "Unsatisfactory service",
    "High charges/fees",
    "Moving to different location",
    "Account consolidation",
    "Other",
  ];

  if (isSubmitted) {
    return (
      <Container fluid className="py-5" style={{ backgroundColor: "#f9f4f0", minHeight: "100vh" }}>
        <Row className="justify-content-center">
          <Col md={8}>
            <Card className="p-5 shadow-lg text-center">
              <div className="d-flex justify-content-center align-items-center mb-4">
                <div className="bg-success bg-opacity-25 rounded-circle p-4">
                  <CheckCircle className="text-success" size={40} />
                </div>
              </div>
              <h2 className="fw-bold mb-3">Account Closure Request Submitted</h2>
              <p className="text-muted mb-4">
                Your account closure request has been received and is being processed. You'll receive updates via SMS and email.
              </p>

              <Alert variant="danger" className="text-start">
                <h5 className="fw-bold text-danger">Request Details:</h5>
                <p><strong>Request ID:</strong> AC{Math.random().toString().substr(2, 8)}</p>
                <p><strong>Account Number:</strong> ****{formData.accountNumber.slice(-4)}</p>
                <p><strong>Processing Time:</strong> 7-10 business days</p>
                <p><strong>Status:</strong> <span className="text-warning fw-semibold">Under Review</span></p>
              </Alert>

              <Alert variant="warning" className="text-start">
                <AlertTriangle className="me-2 text-warning" />
                <strong>Important:</strong> Please ensure all pending transactions are completed and maintain minimum balance until closure is confirmed.
              </Alert>

              <div className="d-flex gap-3 flex-wrap justify-content-center">
                <Button variant="light" onClick={() => window.print()}>
                  <Download size={16} className="me-2" /> Download Receipt
                </Button>
                <Button
                  variant="danger"
                  onClick={() => {
                    setIsSubmitted(false);
                    setCurrentStep(1);
                    setFormData({
                      accountType: "",
                      accountNumber: "",
                      confirmAccountNumber: "",
                      fullName: "",
                      mobileNumber: "",
                      email: "",
                      dateOfBirth: "",
                      closureReason: "",
                      otherReason: "",
                      transferAccount: "",
                      transferIfsc: "",
                      transferBankName: "",
                      hasOutstandingLoans: "",
                      hasPendingTransactions: "",
                      acknowledgment: false,
                    });
                  }}
                >
                  New Request
                </Button>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <Container fluid className="py-5" style={{ backgroundColor: "#f9f4f0", minHeight: "100vh" }}>
      <Row className="justify-content-center">
        <Col md={10} lg={8}>
          <div className="row shadow-lg rounded-3" style={{ backgroundColor: "#fff" }}>
            {/* Left Branding Panel */}
            <Col md={4} className="d-flex flex-column justify-content-center align-items-center p-4" style={{ backgroundColor: "#9e9191ff", color: "#fff", borderTopLeftRadius: "15px", borderBottomLeftRadius: "15px" }}>
              <img src="src/assets/neobank-logo.png" alt="Neo Bank Logo" className="img-fluid mb-3" style={{ maxHeight: 120 }} />
              <h4 className="fw-bold text-center">Neo Bank Account Closure</h4>
              <p className="text-light text-center mt-2" style={{ fontSize: "14px" }}>
                Secure and hassle-free account closure process in simple steps
              </p>
            </Col>

            {/* Right Form Panel */}
            <Col md={8} className="p-4">
              {/* Stepper */}
              <div className="d-flex justify-content-between align-items-center mb-4">
                {["Account Details", "Personal Info", "Closure Details", "Review"].map((label, index) => {
                  const stepNumber = index + 1;
                  const isActive = currentStep >= stepNumber;
                  return (
                    <div key={index} className="flex-fill text-center position-relative">
                      <div
                        className={`mx-auto rounded-circle d-flex align-items-center justify-content-center 
                          ${isActive ? "bg-danger text-white" : "bg-light text-muted"}`}
                        style={{ width: 50, height: 50, fontWeight: "bold", fontSize: "18px", zIndex: 1 }}
                      >
                        {stepNumber}
                      </div>
                      <small className={`d-block mt-2 ${isActive ? "fw-semibold text-dark" : "text-muted"}`}>
                        {label}
                      </small>
                      {index < 3 && (
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
                {/* Step 1 */}
                {currentStep === 1 && (
                  <>
                    <h4 className="fw-bold mb-3"><CreditCard className="me-2 text-danger" /> Account Information</h4>
                    <Form>
                      <Form.Group className="mb-3">
                        <Form.Label>Account Type</Form.Label>
                        <Form.Select name="accountType" value={formData.accountType} onChange={handleInputChange}>
                          <option value="">Select Account Type</option>
                          <option value="savings">Savings Account</option>
                          <option value="current">Current Account</option>
                          <option value="salary">Salary Account</option>
                          <option value="fixed-deposit">Fixed Deposit Account</option>
                        </Form.Select>
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Account Number</Form.Label>
                        <Form.Control type="text" name="accountNumber" value={formData.accountNumber} onChange={handleInputChange} />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Confirm Account Number</Form.Label>
                        <Form.Control type="text" name="confirmAccountNumber" value={formData.confirmAccountNumber} onChange={handleInputChange} />
                        {formData.confirmAccountNumber && formData.accountNumber !== formData.confirmAccountNumber && (
                          <small className="text-danger">Account numbers do not match</small>
                        )}
                      </Form.Group>
                      <Alert variant="danger">
                        <Shield size={16} className="me-2" />
                        <strong>Security Notice:</strong> Ensure you're on our official website. Never share PIN/OTP here.
                      </Alert>
                    </Form>
                  </>
                )}

                {/* Step 2 */}
                {currentStep === 2 && (
                  <>
                    <h4 className="fw-bold mb-3"><User className="me-2 text-danger" /> Personal Information</h4>
                    <Form>
                      <Form.Group className="mb-3">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Mobile Number</Form.Label>
                        <Form.Control type="tel" name="mobileNumber" value={formData.mobileNumber} onChange={handleInputChange} />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name="email" value={formData.email} onChange={handleInputChange} />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Date of Birth</Form.Label>
                        <Form.Control type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleInputChange} />
                      </Form.Group>
                      <Alert variant="info">
                        <AlertTriangle className="me-2 text-info" />
                        All information must match bank records. Verification may be required.
                      </Alert>
                    </Form>
                  </>
                )}

                {/* Step 3 */}
                {currentStep === 3 && (
                  <>
                    <h4 className="fw-bold mb-3"><FileText className="me-2 text-danger" /> Closure Details</h4>
                    <Form>
                      <Form.Group className="mb-3">
                        <Form.Label>Reason for Account Closure</Form.Label>
                        <Form.Select name="closureReason" value={formData.closureReason} onChange={handleInputChange}>
                          <option value="">Select reason</option>
                          {closureReasons.map((reason) => (<option key={reason}>{reason}</option>))}
                        </Form.Select>
                      </Form.Group>
                      {formData.closureReason === "Other" && (
                        <Form.Group className="mb-3">
                          <Form.Label>Please specify</Form.Label>
                          <Form.Control as="textarea" rows={3} name="otherReason" value={formData.otherReason} onChange={handleInputChange} />
                        </Form.Group>
                      )}
                      <h5 className="mt-4">Balance Transfer Details</h5>
                      <Form.Group className="mb-3">
                        <Form.Label>Transfer to Account Number</Form.Label>
                        <Form.Control type="text" name="transferAccount" value={formData.transferAccount} onChange={handleInputChange} />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>IFSC Code</Form.Label>
                        <Form.Control type="text" name="transferIfsc" value={formData.transferIfsc} onChange={handleInputChange} />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Bank Name</Form.Label>
                        <Form.Control type="text" name="transferBankName" value={formData.transferBankName} onChange={handleInputChange} />
                      </Form.Group>
                    </Form>
                  </>
                )}

                {/* Step 4 */}
                {currentStep === 4 && (
                  <>
                    <h4 className="fw-bold mb-3"><CheckCircle className="me-2 text-danger" /> Review & Confirmation</h4>
                    <div className="p-3 bg-light rounded mb-3">
                      <h6 className="fw-bold">Account Details</h6>
                      <p><strong>Type:</strong> {formData.accountType}</p>
                      <p><strong>Number:</strong> ****{formData.accountNumber.slice(-4)}</p>
                      <p><strong>Holder:</strong> {formData.fullName}</p>
                      <p><strong>Mobile:</strong> {formData.mobileNumber}</p>
                    </div>
                    <div className="p-3 bg-light rounded mb-3">
                      <h6 className="fw-bold">Closure Details</h6>
                      <p><strong>Reason:</strong> {formData.closureReason}</p>
                      {formData.otherReason && (<p><strong>Other:</strong> {formData.otherReason}</p>)}
                      <p><strong>Balance Transfer:</strong> {formData.transferBankName} (****{formData.transferAccount.slice(-4)})</p>
                    </div>
                    <Alert variant="danger">
                      <ul className="mb-0">
                        <li>Closure takes 7-10 business days</li>
                        <li>All pending transactions must be cleared</li>
                        <li>Remaining balance will be transferred</li>
                        <li>This action cannot be undone</li>
                      </ul>
                    </Alert>
                    <Form.Check type="checkbox" name="acknowledgment" checked={formData.acknowledgment} onChange={handleInputChange} label="I acknowledge all terms and authorize closure" />
                  </>
                )}

                {/* Navigation Buttons */}
                <div className="d-flex justify-content-between mt-4">
                  <Button variant="outline-secondary" disabled={currentStep === 1} onClick={prevStep} className="px-4 py-2 rounded-pill fw-semibold">
                    ← Previous
                  </Button>
                  {currentStep < 4 ? (
                    <Button style={{ background: "linear-gradient(90deg,#dc3545,#b02a37)", border: "none" }} className="px-4 py-2 rounded-pill fw-semibold" onClick={nextStep} disabled={currentStep === 1 && formData.accountNumber !== formData.confirmAccountNumber}>
                      Next Step →
                    </Button>
                  ) : (
                    <Button style={{ background: "linear-gradient(90deg,#198754,#0d6efd)", border: "none" }} className="px-4 py-2 rounded-pill fw-semibold" onClick={handleSubmit} disabled={!formData.acknowledgment}>
                      ✅ Submit Request
                    </Button>
                  )}
                </div>
              </Card>

              <div className="text-center text-muted small mt-3">Need help? Call 1800-XXX-XXXX (24/7 support)</div>
            </Col>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default AccountClosure;
