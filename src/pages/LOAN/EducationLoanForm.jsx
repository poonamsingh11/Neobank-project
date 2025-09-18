import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap"; // ✅ Import Button

function EducationLoanForm() {
  return (
    <div className="container my-5">
      <div className="card shadow-lg border-0 rounded-4">
        <div className="card-body p-5">
          <h2 className="text-center mb-4">Education Loan Application Form</h2>
          <form>
            {/* Personal Details */}
            <h5 className="mb-3 text-primary">Personal Details</h5>
            <div className="row g-3 mb-4">
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Full Name"
                />
              </div>
              <div className="col-md-6">
                <input
                  type="date"
                  className="form-control"
                  placeholder="Date of Birth"
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Mobile Number"
                />
              </div>
              <div className="col-md-6">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email Address"
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="PAN / Aadhaar Number"
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Current Address"
                />
              </div>
            </div>

            {/* Course & Institute Details */}
            <h5 className="mb-3 text-primary">Course & Institute Details</h5>
            <div className="row g-3 mb-4">
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Course Name"
                />
              </div>
              <div className="col-md-6">
                <select className="form-control">
                  <option>Course Type</option>
                  <option>Undergraduate</option>
                  <option>Postgraduate</option>
                  <option>Diploma</option>
                  <option>PhD</option>
                </select>
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Institute / University Name"
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Institute Address"
                />
              </div>
              <div className="col-md-6">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Course Duration (Years)"
                />
              </div>
              <div className="col-md-6">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Annual Course Fees (₹)"
                />
              </div>
            </div>

            {/* Loan Details */}
            <h5 className="mb-3 text-primary">Loan Details</h5>
            <div className="row g-3 mb-4">
              <div className="col-md-6">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Loan Amount Required (₹)"
                />
              </div>
              <div className="col-md-6">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Tenure (Months)"
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Purpose (Tuition, Hostel, Books)"
                />
              </div>
            </div>

            {/* Co-Applicant / Parent Details */}
            <h5 className="mb-3 text-primary">Co-Applicant / Parent Details</h5>
            <div className="row g-3 mb-4">
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Co-Applicant Full Name"
                />
              </div>
              <div className="col-md-6">
                <select className="form-control">
                  <option>Relationship</option>
                  <option>Father</option>
                  <option>Mother</option>
                  <option>Guardian</option>
                </select>
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Occupation"
                />
              </div>
              <div className="col-md-6">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Annual Income (₹)"
                />
              </div>
            </div>

            {/* Documents Upload */}
            <h5 className="mb-3 text-primary">Upload Documents</h5>
            <div className="mb-4">
              <label className="form-label">Identity Proof</label>
              <input type="file" className="form-control mb-2" />
              <label className="form-label">Address Proof</label>
              <input type="file" className="form-control mb-2" />
              <label className="form-label">Admission Letter</label>
              <input type="file" className="form-control mb-2" />
              <label className="form-label">Fee Structure from Institute</label>
              <input type="file" className="form-control mb-2" />
              <label className="form-label">Co-Applicant Income Proof</label>
              <input type="file" className="form-control" />
            </div>

            {/* Declaration */}
            <div className="form-check mb-4">
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label">
                I hereby declare that the information provided is true and
                correct.
              </label>
            </div>

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
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundColor = "#b30707")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor = "#950606")
                }
              >
                Submit Application
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EducationLoanForm;
