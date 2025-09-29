
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Alert } from "react-bootstrap";

function BusinessLoanForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    panAadhaar: "",
    mobileNumber: "",
    email: "",
    address: "",
    businessName: "",
    businessType: "",
    registrationNumber: "",
    yearsInBusiness: "",
    businessAddress: "",
    annualTurnover: "",
    netProfit: "",
    existingLoans: "",
    emiObligations: "",
    loanAmount: "",
    tenure: "",
    purpose: "",
    collateral: "",
    guarantorName: "",
    guarantorRelationship: "",
    guarantorOccupation: "",
    guarantorIncome: "",
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
          <div className="card-body text-center p-5">
            <Alert variant="success">
              ✅ Your Business Loan Application has been submitted successfully!
            </Alert>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4" style={{ color: "#900603" }}>🏢 Business Loan Application Form</h2>

      <form className="p-4 border rounded shadow-sm"
        style={{ backgroundColor: "#fff0f0" }} onSubmit={handleSubmit}>

        {/* Applicant Details */}
            <h5 className="mb-3" style={{ color: "#900603" }}>Applicant Details</h5>
            <div className="row g-3 mb-4">
              <div className="col-md-6">
                <input
                  type="text"
                  name="fullName"
                  className="form-control"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  name="panAadhaar"
                  className="form-control"
                  placeholder="PAN / Aadhaar Number"
                  value={formData.panAadhaar}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  name="mobileNumber"
                  className="form-control"
                  placeholder="Mobile Number"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-12">
                <input
                  type="text"
                  name="address"
                  className="form-control"
                  placeholder="Current Address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Business Details */}
            <h5 className="mb-3" style={{ color: "#900603" }}>Business Details</h5>
            <div className="row g-3 mb-4">
              <div className="col-md-6">
                <input
                  type="text"
                  name="businessName"
                  className="form-control"
                  placeholder="Business Name"
                  value={formData.businessName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <select
                  name="businessType"
                  className="form-select"
                  value={formData.businessType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Business Type</option>
                  <option>Proprietorship</option>
                  <option>Partnership</option>
                  <option>Private Limited</option>
                  <option>LLP</option>
                </select>
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  name="registrationNumber"
                  className="form-control"
                  placeholder="Business Registration / GST Number"
                  value={formData.registrationNumber}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <input
                  type="number"
                  name="yearsInBusiness"
                  className="form-control"
                  placeholder="Years in Business"
                  value={formData.yearsInBusiness}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-12">
                <input
                  type="text"
                  name="businessAddress"
                  className="form-control"
                  placeholder="Business Address"
                  value={formData.businessAddress}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Financial Details */}
            <h5 className="mb-3" style={{ color: "#900603" }}>Financial Details</h5>
            <div className="row g-3 mb-4">
              <div className="col-md-6">
                <input
                  type="number"
                  name="annualTurnover"
                  className="form-control"
                  placeholder="Annual Turnover (₹)"
                  value={formData.annualTurnover}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <input
                  type="number"
                  name="netProfit"
                  className="form-control"
                  placeholder="Net Profit (₹)"
                  value={formData.netProfit}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  name="existingLoans"
                  className="form-control"
                  placeholder="Existing Loans (if any)"
                  value={formData.existingLoans}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <input
                  type="number"
                  name="emiObligations"
                  className="form-control"
                  placeholder="EMI Obligations (₹)"
                  value={formData.emiObligations}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Loan Requirements */}
            <h5 className="mb-3" style={{ color: "#900603" }}>Loan Requirements</h5>
            <div className="row g-3 mb-4">
              <div className="col-md-6">
                <input
                  type="number"
                  name="loanAmount"
                  className="form-control"
                  placeholder="Loan Amount Required (₹)"
                  value={formData.loanAmount}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <input
                  type="number"
                  name="tenure"
                  className="form-control"
                  placeholder="Tenure (Months)"
                  value={formData.tenure}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-12">
                <input
                  type="text"
                  name="purpose"
                  className="form-control"
                  placeholder="Purpose of Loan (Expansion, Working Capital, etc.)"
                  value={formData.purpose}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Collateral / Security */}
            <h5 className="mb-3" style={{ color: "#900603" }}>Collateral / Security</h5>
            <div className="row g-3 mb-4">
              <div className="col-md-12">
                <input
                  type="text"
                  name="collateral"
                  className="form-control"
                  placeholder="Collateral Details (Property, Assets, etc.)"
                  value={formData.collateral}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Guarantor Details */}
            <h5 className="mb-3" style={{ color: "#900603" }}>Guarantor Details</h5>
            <div className="row g-3 mb-4">
              <div className="col-md-6">
                <input
                  type="text"
                  name="guarantorName"
                  className="form-control"
                  placeholder="Guarantor Full Name"
                  value={formData.guarantorName}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  name="guarantorRelationship"
                  className="form-control"
                  placeholder="Relationship with Applicant"
                  value={formData.guarantorRelationship}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  name="guarantorOccupation"
                  className="form-control"
                  placeholder="Guarantor Occupation"
                  value={formData.guarantorOccupation}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <input
                  type="number"
                  name="guarantorIncome"
                  className="form-control"
                  placeholder="Guarantor Annual Income (₹)"
                  value={formData.guarantorIncome}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Declaration */}
            <div className="form-check mb-4">
              <input className="form-check-input" type="checkbox" required />
              <label className="form-check-label">
                I hereby declare that the information provided is true and correct.
              </label>
            </div>

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
          </form>
        </div>
      
  );
}

export default BusinessLoanForm;
