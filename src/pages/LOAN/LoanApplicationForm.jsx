


import React, { useState } from "react";
import { Form, Button, Row, Col, Alert } from "react-bootstrap";

function LoanApplicationForm() {
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
    experience: "",
    employmentType: "",
    loanType: "",
    loanAmount: "",
    tenure: "",
    purpose: "",
    existingLoans: "",
    emiObligations: "",
    bankName: "",
    accountNumber: "",
    ifscCode: "",
    idProof: "",
    addressProof: null,
    incomeProof: null,
    // Co-applicant
    coApplicantName: "",
    relationship: "",
    coApplicantIncome: "",
    // Gold-specific
    goldType: "",
    goldWeight: "",
    goldPurity: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const goldPricePerGram = 6000;
  const ltv = 0.75;

  const handleChange = (e) => {
    const { name, value, files, type } = e.target;
    setFormData({ ...formData, [name]: type === "file" ? files[0] : value });
    if (errors[name]) setErrors({ ...errors, [name]: "" });
  };

  const calculateLoanAmount = () => {
    if (!formData.goldWeight || !formData.goldPurity) return formData.loanAmount || 0;
    const purityFactor = parseFloat(formData.goldPurity) / 24;
    const goldValue = parseFloat(formData.goldWeight) * purityFactor * goldPricePerGram;
    return Math.floor(goldValue * ltv);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.applicantName.trim()) newErrors.applicantName = "Full name is required";
    if (!formData.dob) newErrors.dob = "Date of birth is required";
    if (!formData.gender) newErrors.gender = "Gender is required";
    if (!formData.contact.trim()) newErrors.contact = "Contact number is required";
    else if (!/^\d{10}$/.test(formData.contact)) newErrors.contact = "Contact number must be 10 digits";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.loanType) newErrors.loanType = "Loan type is required";
    if (!formData.loanAmount && formData.loanType !== "Gold Loan") newErrors.loanAmount = "Loan amount is required";
    if (!formData.tenure) newErrors.tenure = "Tenure is required";
    if (!formData.purpose.trim()) newErrors.purpose = "Purpose is required";
    if (!formData.idProof) newErrors.idProof = "ID proof is required";
    if (!formData.addressProof) newErrors.addressProof = "Address proof is required";
    if (!formData.incomeProof) newErrors.incomeProof = "Income proof is required";

    // Co-applicant validation
    if (formData.coApplicantName && !/^[A-Za-z ]+$/.test(formData.coApplicantName)) {
      newErrors.coApplicantName = "Co-applicant name must contain only letters";
    }
    if (formData.relationship && !/^[A-Za-z ]+$/.test(formData.relationship)) {
      newErrors.relationship = "Relationship must contain only letters";
    }

    // Gold loan fields
    if (formData.loanType === "Gold Loan") {
      if (!formData.goldType) newErrors.goldType = "Gold type is required";
      if (!formData.goldWeight || parseFloat(formData.goldWeight) <= 0)
        newErrors.goldWeight = "Valid gold weight is required";
      if (!formData.goldPurity) newErrors.goldPurity = "Gold purity is required";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) setErrors(validationErrors);
    else setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="container my-5">
        <div className="card shadow-lg border-0 rounded-4">
          <div className="card-body p-5 text-center">
            <Alert variant="success">
              ✅ Your Loan Application has been submitted successfully!
            </Alert>
            <p>
              Applicant: <strong>{formData.applicantName}</strong>
            </p>
            {formData.loanType === "Gold Loan" && (
              <p>
                Eligible Loan Amount: <strong>₹{calculateLoanAmount().toLocaleString()}</strong>
              </p>
            )}
            <Button
              onClick={() => setSubmitted(false)}
              style={{ backgroundColor: "#950606", border: "none", padding: "10px 20px", fontWeight: "500" }}
            >
              Submit Another Application
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container my-4">
      <h2 className="mb-4 text-center">Loan Application Form</h2>
      <Form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm bg-light">
        {/* Applicant Details */}
        <h5 className="mb-3 text-primary">Applicant Details</h5>
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group>
              <Form.Label>Full Name *</Form.Label>
              <Form.Control type="text" name="applicantName" value={formData.applicantName} onChange={handleChange} />
              {errors.applicantName && <p className="text-danger">{errors.applicantName}</p>}
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Label>Date of Birth *</Form.Label>
              <Form.Control type="date" name="dob" value={formData.dob} onChange={handleChange} />
              {errors.dob && <p className="text-danger">{errors.dob}</p>}
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Label>Gender *</Form.Label>
              <Form.Select name="gender" value={formData.gender} onChange={handleChange}>
                <option value="">Select</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </Form.Select>
              {errors.gender && <p className="text-danger">{errors.gender}</p>}
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <Form.Group>
              <Form.Label>Contact Number *</Form.Label>
              <Form.Control type="tel" name="contact" value={formData.contact} onChange={handleChange} />
              {errors.contact && <p className="text-danger">{errors.contact}</p>}
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Email ID</Form.Label>
              <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3">
          <Form.Label>Address *</Form.Label>
          <Form.Control as="textarea" rows={2} name="address" value={formData.address} onChange={handleChange} />
          {errors.address && <p className="text-danger">{errors.address}</p>}
        </Form.Group>

        {/* Employment & Income */}
        <h5 className="mb-3 text-primary">Employment & Income</h5>
        <Row className="mb-3">
          <Col md={4}>
            <Form.Group>
              <Form.Label>Occupation</Form.Label>
              <Form.Select name="occupation" value={formData.occupation} onChange={handleChange}>
                <option value="">Select</option>
                <option>Salaried</option>
                <option>Self-Employed</option>
                <option>Business</option>
                <option>Student</option>
                <option>Other</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group>
              <Form.Label>Company / Business Name</Form.Label>
              <Form.Control type="text" name="company" value={formData.company} onChange={handleChange} />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group>
              <Form.Label>Monthly Income (₹)</Form.Label>
              <Form.Control type="number" name="income" value={formData.income} onChange={handleChange} />
            </Form.Group>
          </Col>
        </Row>

        {/* Co-Applicant */}
        <h5 className="mb-3 text-primary">Co-Applicant (Optional)</h5>
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group>
              <Form.Label>Co-Applicant Name</Form.Label>
              <Form.Control type="text" name="coApplicantName" value={formData.coApplicantName} onChange={handleChange} />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Label>Relationship</Form.Label>
              <Form.Control type="text" name="relationship" value={formData.relationship} onChange={handleChange} />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Label>Income (₹)</Form.Label>
              <Form.Control type="number" name="coApplicantIncome" value={formData.coApplicantIncome} onChange={handleChange} />
            </Form.Group>
          </Col>
        </Row>

        {/* Loan Details */}
        <h5 className="mb-3 text-primary">Loan Details</h5>
        <Row className="mb-3">
          <Col md={4}>
            <Form.Group>
              <Form.Label>Loan Type *</Form.Label>
              <Form.Select name="loanType" value={formData.loanType} onChange={handleChange}>
                <option value="">Select</option>
                <option>Personal Loan</option>
                <option>Home Loan</option>
                <option>Car Loan</option>
                <option>Education Loan</option>
                <option>Business Loan</option>
                <option>Gold Loan</option>
              </Form.Select>
              {errors.loanType && <p className="text-danger">{errors.loanType}</p>}
            </Form.Group>
          </Col>
          {formData.loanType !== "Gold Loan" && (
            <>
              <Col md={4}>
                <Form.Group>
                  <Form.Label>Loan Amount (₹) *</Form.Label>
                  <Form.Control type="number" name="loanAmount" value={formData.loanAmount} onChange={handleChange} />
                  {errors.loanAmount && <p className="text-danger">{errors.loanAmount}</p>}
                </Form.Group>
              </Col>
            </>
          )}
          <Col md={4}>
            <Form.Group>
              <Form.Label>Tenure (Months) *</Form.Label>
              <Form.Control type="number" name="tenure" value={formData.tenure} onChange={handleChange} />
              {errors.tenure && <p className="text-danger">{errors.tenure}</p>}
            </Form.Group>
          </Col>
        </Row>

        {formData.loanType === "Gold Loan" && (
          <>
            <h5 className="mb-3">Gold Loan Details</h5>
            <Row className="mb-3">
              <Col md={4}>
                <Form.Group>
                  <Form.Label>Gold Type *</Form.Label>
                  <Form.Select name="goldType" value={formData.goldType} onChange={handleChange}>
                    <option value="">Select</option>
                    <option>Jewellery</option>
                    <option>Coins</option>
                    <option>Bullion</option>
                  </Form.Select>
                  {errors.goldType && <p className="text-danger">{errors.goldType}</p>}
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group>
                  <Form.Label>Gold Weight (grams) *</Form.Label>
                  <Form.Control type="number" name="goldWeight" value={formData.goldWeight} onChange={handleChange} />
                  {errors.goldWeight && <p className="text-danger">{errors.goldWeight}</p>}
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group>
                  <Form.Label>Gold Purity (K) *</Form.Label>
                  <Form.Select name="goldPurity" value={formData.goldPurity} onChange={handleChange}>
                    <option value="">Select</option>
                    <option value="18">18K</option>
                    <option value="22">22K</option>
                    <option value="24">24K</option>
                  </Form.Select>
                  {errors.goldPurity && <p className="text-danger">{errors.goldPurity}</p>}
                </Form.Group>
              </Col>
            </Row>
            {formData.goldWeight && formData.goldPurity && (
              <Alert variant="info">
                Eligible Loan Amount: <strong>₹{calculateLoanAmount().toLocaleString()}</strong>
              </Alert>
            )}
          </>
        )}

        <Form.Group className="mb-3">
          <Form.Label>Purpose of Loan *</Form.Label>
          <Form.Control type="text" name="purpose" value={formData.purpose} onChange={handleChange} />
          {errors.purpose && <p className="text-danger">{errors.purpose}</p>}
        </Form.Group>

        {/* Financial & Banking Details */}
        <h5 className="mb-3 text-primary">Financial & Banking Details</h5>
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group>
              <Form.Label>Existing Loans</Form.Label>
              <Form.Control type="text" name="existingLoans" value={formData.existingLoans} onChange={handleChange} />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Current EMI Obligations (₹)</Form.Label>
              <Form.Control type="number" name="emiObligations" value={formData.emiObligations} onChange={handleChange} />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={4}>
            <Form.Group>
              <Form.Label>Bank Name</Form.Label>
              <Form.Control type="text" name="bankName" value={formData.bankName} onChange={handleChange} />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group>
              <Form.Label>Account Number</Form.Label>
              <Form.Control type="text" name="accountNumber" value={formData.accountNumber} onChange={handleChange} />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group>
              <Form.Label>IFSC Code</Form.Label>
              <Form.Control type="text" name="ifscCode" value={formData.ifscCode} onChange={handleChange} />
            </Form.Group>
          </Col>
        </Row>

        {/* Documents */}
        <h5 className="mb-3 text-primary">Documents</h5>
        <Form.Group className="mb-3">
          <Form.Label>Identity Proof *</Form.Label>
          <Form.Select name="idProof" value={formData.idProof} onChange={handleChange}>
            <option value="">Select</option>
            <option>Aadhar Card</option>
            <option>PAN Card</option>
            <option>Passport</option>
            <option>Voter ID</option>
            <option>Driving License</option>
          </Form.Select>
          {errors.idProof && <p className="text-danger">{errors.idProof}</p>}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Upload Address Proof *</Form.Label>
          <Form.Control type="file" name="addressProof" onChange={handleChange} />
          {errors.addressProof && <p className="text-danger">{errors.addressProof}</p>}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Upload Income Proof *</Form.Label>
          <Form.Control type="file" name="incomeProof" onChange={handleChange} />
          {errors.incomeProof && <p className="text-danger">{errors.incomeProof}</p>}
        </Form.Group>

        <div className="text-center">
          <Button
            type="submit"
            style={{ backgroundColor: "#950606", border: "none", padding: "10px 20px", fontWeight: "500" }}
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

export default LoanApplicationForm;
