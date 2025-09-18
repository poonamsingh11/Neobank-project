// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Button } from "react-bootstrap"; // ✅ Import Button

// function HomeLoanForm() {
//   return (
//     <div className="container my-5">
//       <style>{`
//         .submit-btn {
//           background-color: #950606 !important;
//           border: none !important;
//           padding: 10px 20px !important;
//           font-weight: 500 !important;
//           color: #fff !important;
//           transition: background-color 0.3s ease;
//         }
//         .submit-btn:hover {
//           background-color: #b30707 !important;
//         }
//       `}</style>

//       <div className="card shadow-lg border-0 rounded-4">
//         <div className="card-body p-5">
//           <h2 className="text-center mb-4">Home Loan Application Form</h2>
//           <form>
//             {/* Personal Details */}
//             <h5 className="mb-3 text-primary">Personal Details</h5>
//             <div className="row g-3 mb-4">
//               <div className="col-md-6">
//                 <input type="text" className="form-control" placeholder="Full Name" />
//               </div>
//               <div className="col-md-6">
//                 <input type="date" className="form-control" placeholder="Date of Birth" />
//               </div>
//               <div className="col-md-6">
//                 <input type="text" className="form-control" placeholder="Mobile Number" />
//               </div>
//               <div className="col-md-6">
//                 <input type="email" className="form-control" placeholder="Email Address" />
//               </div>
//               <div className="col-md-6">
//                 <input type="text" className="form-control" placeholder="PAN / Aadhaar Number" />
//               </div>
//               <div className="col-md-6">
//                 <input type="text" className="form-control" placeholder="Current Address" />
//               </div>
//             </div>

//             {/* Employment & Income */}
//             <h5 className="mb-3 text-primary">Employment & Income</h5>
//             <div className="row g-3 mb-4">
//               <div className="col-md-6">
//                 <select className="form-control">
//                   <option>Occupation Type</option>
//                   <option>Salaried</option>
//                   <option>Self-Employed</option>
//                   <option>Business</option>
//                 </select>
//               </div>
//               <div className="col-md-6">
//                 <input type="text" className="form-control" placeholder="Company / Business Name" />
//               </div>
//               <div className="col-md-6">
//                 <input type="number" className="form-control" placeholder="Monthly Income" />
//               </div>
//               <div className="col-md-6">
//                 <input type="number" className="form-control" placeholder="Work Experience (Years)" />
//               </div>
//             </div>

//             {/* Property Details */}
//             <h5 className="mb-3 text-primary">Property Details</h5>
//             <div className="row g-3 mb-4">
//               <div className="col-md-6">
//                 <input type="text" className="form-control" placeholder="Property Type (Flat/House/Plot)" />
//               </div>
//               <div className="col-md-6">
//                 <input type="text" className="form-control" placeholder="Property Location" />
//               </div>
//               <div className="col-md-6">
//                 <input type="number" className="form-control" placeholder="Property Value (₹)" />
//               </div>
//               <div className="col-md-6">
//                 <input type="text" className="form-control" placeholder="Builder / Seller Name" />
//               </div>
//             </div>

//             {/* Loan Details */}
//             <h5 className="mb-3 text-primary">Loan Details</h5>
//             <div className="row g-3 mb-4">
//               <div className="col-md-6">
//                 <input type="number" className="form-control" placeholder="Loan Amount (₹)" />
//               </div>
//               <div className="col-md-6">
//                 <input type="number" className="form-control" placeholder="Tenure (Months)" />
//               </div>
//             </div>

//             {/* Co-Applicant Details */}
//             <h5 className="mb-3 text-primary">Co-Applicant (Optional)</h5>
//             <div className="row g-3 mb-4">
//               <div className="col-md-6">
//                 <input type="text" className="form-control" placeholder="Co-Applicant Full Name" />
//               </div>
//               <div className="col-md-6">
//                 <input type="text" className="form-control" placeholder="Relationship with Applicant" />
//               </div>
//               <div className="col-md-6">
//                 <input type="number" className="form-control" placeholder="Co-Applicant Monthly Income" />
//               </div>
//             </div>

//             {/* Documents Upload */}
//             <h5 className="mb-3 text-primary">Upload Documents</h5>
//             <div className="mb-4">
//               <label className="form-label">Identity Proof</label>
//               <input type="file" className="form-control mb-2" />
//               <label className="form-label">Address Proof</label>
//               <input type="file" className="form-control mb-2" />
//               <label className="form-label">Income Proof</label>
//               <input type="file" className="form-control mb-2" />
//               <label className="form-label">Property Documents</label>
//               <input type="file" className="form-control" />
//             </div>

//             {/* Declaration */}
//             <div className="form-check mb-4">
//               <input className="form-check-input" type="checkbox" />
//               <label className="form-check-label">
//                 I hereby declare that the information provided is true and correct.
//               </label>
//             </div>

//             {/* Submit */}
//             <div className="text-center">
//                          <Button
//                            type="submit"
//                            style={{
//                              backgroundColor: "#950606",
//                              border: "none",
//                              padding: "10px 20px",
//                              fontWeight: "500",
//                            }}
//                            onMouseOver={(e) =>
//                              (e.currentTarget.style.backgroundColor = "#b30707")
//                            }
//                            onMouseOut={(e) =>
//                              (e.currentTarget.style.backgroundColor = "#950606")
//                            }
//                          >
//                            Submit Application
//                          </Button>
//                          </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HomeLoanForm;

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Alert } from "react-bootstrap";

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

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // 🔹 Validation function
  const validateForm = () => {
    let newErrors = {};

    // Full name
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    } else if (!/^[A-Za-z ]+$/.test(formData.fullName)) {
      newErrors.fullName = "Full name must contain only letters";
    }

    // Mobile
    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = "Mobile number is required";
    } else if (!/^[0-9]+$/.test(formData.mobileNumber)) {
      newErrors.mobileNumber = "Mobile number must contain only digits";
    } else if (formData.mobileNumber.length !== 10) {
      newErrors.mobileNumber = "Mobile number must be 10 digits";
    }

    // Email
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    // PAN / Aadhaar
    if (!formData.panAadhaar.trim()) {
      newErrors.panAadhaar = "PAN/Aadhaar number is required";
    } else if (!/^[A-Za-z0-9]+$/.test(formData.panAadhaar)) {
      newErrors.panAadhaar = "PAN/Aadhaar must be alphanumeric";
    }

    // Numeric fields validation
    const numericFields = [
      "monthlyIncome",
      "workExperience",
      "propertyValue",
      "loanAmount",
      "tenure",
      "coApplicantIncome",
    ];
    numericFields.forEach((field) => {
      if (formData[field] && !/^[0-9]+$/.test(formData[field])) {
        newErrors[field] = "This field must contain only digits";
      }
    });

    // Co-applicant validations
    if (formData.coApplicantName && !/^[A-Za-z ]+$/.test(formData.coApplicantName)) {
      newErrors.coApplicantName = "Co-applicant name must contain only letters";
    }
    if (formData.relationship && !/^[A-Za-z ]+$/.test(formData.relationship)) {
      newErrors.relationship = "Relationship must contain only letters";
    }

    return newErrors;
  };

  // 🔹 Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 🔹 Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setSubmitted(true);
    }
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
    <div className="container my-5">
      <style>{`
        .submit-btn {
          background-color: #950606 !important;
          border: none !important;
          padding: 10px 20px !important;
          font-weight: 500 !important;
          color: #fff !important;
          transition: background-color 0.3s ease;
        }
        .submit-btn:hover {
          background-color: #b30707 !important;
        }
      `}</style>

      <div className="card shadow-lg border-0 rounded-4">
        <div className="card-body p-5">
          <h2 className="text-center mb-4">Home Loan Application Form</h2>
          <form onSubmit={handleSubmit}>
            {/* Personal Details */}
            <h5 className="mb-3 text-primary">Personal Details</h5>
            <div className="row g-3 mb-4">
              <div className="col-md-6">
                <input
                  type="text"
                  name="fullName"
                  className="form-control"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                />
                {errors.fullName && <small className="text-danger">{errors.fullName}</small>}
              </div>
              <div className="col-md-6">
                <input
                  type="date"
                  name="dob"
                  className="form-control"
                  value={formData.dob}
                  onChange={handleChange}
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
                />
                {errors.mobileNumber && <small className="text-danger">{errors.mobileNumber}</small>}
              </div>
              <div className="col-md-6">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <small className="text-danger">{errors.email}</small>}
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  name="panAadhaar"
                  className="form-control"
                  placeholder="PAN / Aadhaar Number"
                  value={formData.panAadhaar}
                  onChange={handleChange}
                />
                {errors.panAadhaar && <small className="text-danger">{errors.panAadhaar}</small>}
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  name="address"
                  className="form-control"
                  placeholder="Current Address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Employment & Income */}
            <h5 className="mb-3 text-primary">Employment & Income</h5>
            <div className="row g-3 mb-4">
              <div className="col-md-6">
                <select
                  name="occupation"
                  className="form-control"
                  value={formData.occupation}
                  onChange={handleChange}
                >
                  <option value="">Occupation Type</option>
                  <option value="Salaried">Salaried</option>
                  <option value="Self-Employed">Self-Employed</option>
                  <option value="Business">Business</option>
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
                  type="text"
                  name="monthlyIncome"
                  className="form-control"
                  placeholder="Monthly Income"
                  value={formData.monthlyIncome}
                  onChange={handleChange}
                />
                {errors.monthlyIncome && <small className="text-danger">{errors.monthlyIncome}</small>}
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  name="workExperience"
                  className="form-control"
                  placeholder="Work Experience (Years)"
                  value={formData.workExperience}
                  onChange={handleChange}
                />
                {errors.workExperience && <small className="text-danger">{errors.workExperience}</small>}
              </div>
            </div>

            {/* Property Details */}
            <h5 className="mb-3 text-primary">Property Details</h5>
            <div className="row g-3 mb-4">
              <div className="col-md-6">
                <input
                  type="text"
                  name="propertyType"
                  className="form-control"
                  placeholder="Property Type (Flat/House/Plot)"
                  value={formData.propertyType}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  name="propertyLocation"
                  className="form-control"
                  placeholder="Property Location"
                  value={formData.propertyLocation}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  name="propertyValue"
                  className="form-control"
                  placeholder="Property Value (₹)"
                  value={formData.propertyValue}
                  onChange={handleChange}
                />
                {errors.propertyValue && <small className="text-danger">{errors.propertyValue}</small>}
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  name="builderName"
                  className="form-control"
                  placeholder="Builder / Seller Name"
                  value={formData.builderName}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Loan Details */}
            <h5 className="mb-3 text-primary">Loan Details</h5>
            <div className="row g-3 mb-4">
              <div className="col-md-6">
                <input
                  type="text"
                  name="loanAmount"
                  className="form-control"
                  placeholder="Loan Amount (₹)"
                  value={formData.loanAmount}
                  onChange={handleChange}
                />
                {errors.loanAmount && <small className="text-danger">{errors.loanAmount}</small>}
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  name="tenure"
                  className="form-control"
                  placeholder="Tenure (Months)"
                  value={formData.tenure}
                  onChange={handleChange}
                />
                {errors.tenure && <small className="text-danger">{errors.tenure}</small>}
              </div>
            </div>

            {/* Co-Applicant Details */}
            <h5 className="mb-3 text-primary">Co-Applicant (Optional)</h5>
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
                {errors.coApplicantName && <small className="text-danger">{errors.coApplicantName}</small>}
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  name="relationship"
                  className="form-control"
                  placeholder="Relationship with Applicant"
                  value={formData.relationship}
                  onChange={handleChange}
                />
                {errors.relationship && <small className="text-danger">{errors.relationship}</small>}
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  name="coApplicantIncome"
                  className="form-control"
                  placeholder="Co-Applicant Monthly Income"
                  value={formData.coApplicantIncome}
                  onChange={handleChange}
                />
                {errors.coApplicantIncome && <small className="text-danger">{errors.coApplicantIncome}</small>}
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
              <Button type="submit" className="submit-btn" onClick={handleSubmit}>
                Submit Application
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default HomeLoanForm;
