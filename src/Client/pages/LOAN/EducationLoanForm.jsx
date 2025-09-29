import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Alert } from "react-bootstrap";

function EducationLoanForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    mobileNumber: "",
    email: "",
    panAadhaar: "",
    address: "",
    courseName: "",
    courseType: "",
    instituteName: "",
    instituteAddress: "",
    courseDuration: "",
    annualFees: "",
    loanAmount: "",
    tenure: "",
    purpose: "",
    coApplicantName: "",
    relationship: "",
    coApplicantOccupation: "",
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
          <div className="card-body text-center p-5">
            <Alert variant="success">
              ✅ Your Education Loan Application has been submitted successfully!
            </Alert>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4" style={{ color: "#900603" }}>🎓 Education Loan Application Form</h2>

      <form className="p-4 border rounded shadow-sm" style={{ backgroundColor: "#fff0f0" }} onSubmit={handleSubmit}>

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

            {/* Course & Institute Details */}
            <h5 className="mb-3" style={{ color: "#900603" }}>Course & Institute Details</h5>
            <div className="row g-3 mb-4">
              <div className="col-md-6">
                <input
                  type="text"
                  name="courseName"
                  className="form-control"
                  placeholder="Course Name"
                  value={formData.courseName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <select
                  name="courseType"
                  className="form-select"
                  value={formData.courseType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Course Type</option>
                  <option>Undergraduate</option>
                  <option>Postgraduate</option>
                  <option>Diploma</option>
                  <option>PhD</option>
                </select>
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  name="instituteName"
                  className="form-control"
                  placeholder="Institute / University Name"
                  value={formData.instituteName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  name="instituteAddress"
                  className="form-control"
                  placeholder="Institute Address"
                  value={formData.instituteAddress}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <input
                  type="number"
                  name="courseDuration"
                  className="form-control"
                  placeholder="Course Duration (Years)"
                  value={formData.courseDuration}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <input
                  type="number"
                  name="annualFees"
                  className="form-control"
                  placeholder="Annual Course Fees (₹)"
                  value={formData.annualFees}
                  onChange={handleChange}
                  required
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
              <div className="col-md-6">
                <input
                  type="text"
                  name="purpose"
                  className="form-control"
                  placeholder="Purpose (Tuition, Hostel, Books)"
                  value={formData.purpose}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Co-Applicant / Parent Details */}
            <h5 className="mb-3" style={{ color: "#900603" }}>Co-Applicant / Parent Details</h5>
            <div className="row g-3 mb-4">
              <div className="col-md-6">
                <input
                  type="text"
                  name="coApplicantName"
                  className="form-control"
                  placeholder="Co-Applicant Full Name"
                  value={formData.coApplicantName}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <select
                  name="relationship"
                  className="form-select"
                  value={formData.relationship}
                  onChange={handleChange}
                >
                  <option value="">Relationship</option>
                  <option>Father</option>
                  <option>Mother</option>
                  <option>Guardian</option>
                </select>
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  name="coApplicantOccupation"
                  className="form-control"
                  placeholder="Occupation"
                  value={formData.coApplicantOccupation}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <input
                  type="number"
                  name="coApplicantIncome"
                  className="form-control"
                  placeholder="Annual Income (₹)"
                  value={formData.coApplicantIncome}
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

export default EducationLoanForm;
