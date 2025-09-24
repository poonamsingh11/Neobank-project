import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Alert } from "react-bootstrap";

function CarLoanForm() {
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
    carModel: "",
    variantFuel: "",
    exShowroomPrice: "",
    onRoadPrice: "",
    dealerName: "",
    loanAmount: "",
    downPayment: "",
    tenure: "",
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
              ✅ Your Car Loan Application has been submitted successfully!
            </Alert>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4" style={{ color: "#900603" }}>🚗 Car Loan Application Form</h2>
  
          <form className="p-4 border rounded shadow-sm" style={{ backgroundColor: "#fff0f0" }}>
            {/* Personal Details */}
            <h5 className="mb-3" style={{ color: "#900603" }}>Personal Details</h5>
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
                  type="date"
                  name="dob"
                  className="form-control"
                  value={formData.dob}
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
                  name="address"
                  className="form-control"
                  placeholder="Current Address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Employment & Income */}
            <h5 className="mb-3" style={{ color: "#900603" }}>Employment & Income</h5>
            <div className="row g-3 mb-4">
              <div className="col-md-6">
                <select
                  name="occupation"
                  className="form-select"
                  value={formData.occupation}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Occupation</option>
                  <option>Salaried</option>
                  <option>Self-Employed</option>
                  <option>Business</option>
                </select>
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  name="company"
                  className="form-control"
                  placeholder="Company / Business Name"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <input
                  type="number"
                  name="monthlyIncome"
                  className="form-control"
                  placeholder="Monthly Income (₹)"
                  value={formData.monthlyIncome}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <input
                  type="number"
                  name="workExperience"
                  className="form-control"
                  placeholder="Work Experience (Years)"
                  value={formData.workExperience}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Vehicle Details */}
            <h5 className="mb-3" style={{ color: "#900603" }}>Vehicle Details</h5>
            <div className="row g-3 mb-4">
              <div className="col-md-6">
                <input
                  type="text"
                  name="carModel"
                  className="form-control"
                  placeholder="Car Make & Model"
                  value={formData.carModel}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  name="variantFuel"
                  className="form-control"
                  placeholder="Variant / Fuel Type"
                  value={formData.variantFuel}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <input
                  type="number"
                  name="exShowroomPrice"
                  className="form-control"
                  placeholder="Ex-Showroom Price (₹)"
                  value={formData.exShowroomPrice}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <input
                  type="number"
                  name="onRoadPrice"
                  className="form-control"
                  placeholder="On-Road Price (₹)"
                  value={formData.onRoadPrice}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  name="dealerName"
                  className="form-control"
                  placeholder="Dealer Name"
                  value={formData.dealerName}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Loan Details */}
            <h5 className="mb-3" style={{ color: "#900603" }}>Loan Details</h5>
            <div className="row g-3 mb-4">
              <div className="col-md-6">
                <input
                  type="number"
                  name="loanAmount"
                  className="form-control"
                  placeholder="Loan Amount (₹)"
                  value={formData.loanAmount}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <input
                  type="number"
                  name="downPayment"
                  className="form-control"
                  placeholder="Down Payment (₹)"
                  value={formData.downPayment}
                  onChange={handleChange}
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
                onClick={handleSubmit}
              >
                Submit Application
              </Button>
            </div>
          </form>
      
    </div>
  );
}

export default CarLoanForm;
