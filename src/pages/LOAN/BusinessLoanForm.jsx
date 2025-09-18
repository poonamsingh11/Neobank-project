import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap"; // ✅ Import Button

function BusinessLoanForm() {
  return (
    <div className="container my-5">
      <div className="card shadow-lg border-0 rounded-4">
        <div className="card-body p-5">
          <h2 className="text-center mb-4">Business Loan Application Form</h2>
          <form>
            {/* Applicant Details */}
            <h5 className="mb-3 text-primary">Applicant Details</h5>
            <div className="row g-3 mb-4">
              <div className="col-md-6">
                <input type="text" className="form-control" placeholder="Full Name" />
              </div>
              <div className="col-md-6">
                <input type="text" className="form-control" placeholder="PAN / Aadhaar Number" />
              </div>
              <div className="col-md-6">
                <input type="text" className="form-control" placeholder="Mobile Number" />
              </div>
              <div className="col-md-6">
                <input type="email" className="form-control" placeholder="Email Address" />
              </div>
              <div className="col-md-12">
                <input type="text" className="form-control" placeholder="Current Address" />
              </div>
            </div>

            {/* Business Details */}
            <h5 className="mb-3 text-primary">Business Details</h5>
            <div className="row g-3 mb-4">
              <div className="col-md-6">
                <input type="text" className="form-control" placeholder="Business Name" />
              </div>
              <div className="col-md-6">
                <select className="form-control">
                  <option>Business Type</option>
                  <option>Proprietorship</option>
                  <option>Partnership</option>
                  <option>Private Limited</option>
                  <option>LLP</option>
                </select>
              </div>
              <div className="col-md-6">
                <input type="text" className="form-control" placeholder="Business Registration / GST Number" />
              </div>
              <div className="col-md-6">
                <input type="number" className="form-control" placeholder="Years in Business" />
              </div>
              <div className="col-md-12">
                <input type="text" className="form-control" placeholder="Business Address" />
              </div>
            </div>

            {/* Financial Details */}
            <h5 className="mb-3 text-primary">Financial Details</h5>
            <div className="row g-3 mb-4">
              <div className="col-md-6">
                <input type="number" className="form-control" placeholder="Annual Turnover (₹)" />
              </div>
              <div className="col-md-6">
                <input type="number" className="form-control" placeholder="Net Profit (₹)" />
              </div>
              <div className="col-md-6">
                <input type="text" className="form-control" placeholder="Existing Loans (if any)" />
              </div>
              <div className="col-md-6">
                <input type="number" className="form-control" placeholder="EMI Obligations (₹)" />
              </div>
            </div>

            {/* Loan Requirements */}
            <h5 className="mb-3 text-primary">Loan Requirements</h5>
            <div className="row g-3 mb-4">
              <div className="col-md-6">
                <input type="number" className="form-control" placeholder="Loan Amount Required (₹)" />
              </div>
              <div className="col-md-6">
                <input type="number" className="form-control" placeholder="Tenure (Months)" />
              </div>
              <div className="col-md-12">
                <input type="text" className="form-control" placeholder="Purpose of Loan (Expansion, Working Capital, etc.)" />
              </div>
            </div>

            {/* Collateral / Security */}
            <h5 className="mb-3 text-primary">Collateral / Security</h5>
            <div className="row g-3 mb-4">
              <div className="col-md-12">
                <input type="text" className="form-control" placeholder="Collateral Details (Property, Assets, etc.)" />
              </div>
            </div>

            {/* Guarantor Details */}
            <h5 className="mb-3 text-primary">Guarantor Details</h5>
            <div className="row g-3 mb-4">
              <div className="col-md-6">
                <input type="text" className="form-control" placeholder="Guarantor Full Name" />
              </div>
              <div className="col-md-6">
                <input type="text" className="form-control" placeholder="Relationship with Applicant" />
              </div>
              <div className="col-md-6">
                <input type="text" className="form-control" placeholder="Guarantor Occupation" />
              </div>
              <div className="col-md-6">
                <input type="number" className="form-control" placeholder="Guarantor Annual Income (₹)" />
              </div>
            </div>

            {/* Documents Upload */}
            <h5 className="mb-3 text-primary">Upload Documents</h5>
            <div className="mb-4">
              <label className="form-label">Identity Proof</label>
              <input type="file" className="form-control mb-2" />
              <label className="form-label">Address Proof</label>
              <input type="file" className="form-control mb-2" />
              <label className="form-label">Business Registration / GST Certificate</label>
              <input type="file" className="form-control mb-2" />
              <label className="form-label">ITR / Financial Statements (last 2 years)</label>
              <input type="file" className="form-control mb-2" />
              <label className="form-label">Collateral Documents</label>
              <input type="file" className="form-control" />
            </div>

            {/* Declaration */}
            <div className="form-check mb-4">
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label">
                I hereby declare that the information provided is true and correct.
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
      fontWeight: "500" 
    }}
    onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#b30707"}
    onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#950606"}
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

export default BusinessLoanForm;
