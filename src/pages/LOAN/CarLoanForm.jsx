

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

function CarLoanForm() {
  return (
    <div className="container my-5">
      {/* ✅ Direct CSS inside the same file */}
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
          <h2 className="text-center mb-4">Car Loan Application Form</h2>
          <form>
            {/* Personal Details */}
            <h5 className="mb-3 text-primary">Personal Details</h5>
            <div className="row g-3 mb-4">
              <div className="col-md-6">
                <input type="text" className="form-control" placeholder="Full Name" />
              </div>
              <div className="col-md-6">
                <input type="date" className="form-control" placeholder="Date of Birth" />
              </div>
              <div className="col-md-6">
                <input type="text" className="form-control" placeholder="Mobile Number" />
              </div>
              <div className="col-md-6">
                <input type="email" className="form-control" placeholder="Email Address" />
              </div>
              <div className="col-md-6">
                <input type="text" className="form-control" placeholder="PAN / Aadhaar Number" />
              </div>
              <div className="col-md-6">
                <input type="text" className="form-control" placeholder="Current Address" />
              </div>
            </div>

            {/* Employment & Income */}
            <h5 className="mb-3 text-primary">Employment & Income</h5>
            <div className="row g-3 mb-4">
              <div className="col-md-6">
                <select className="form-control">
                  <option>Occupation Type</option>
                  <option>Salaried</option>
                  <option>Self-Employed</option>
                  <option>Business</option>
                </select>
              </div>
              <div className="col-md-6">
                <input type="text" className="form-control" placeholder="Company / Business Name" />
              </div>
              <div className="col-md-6">
                <input type="number" className="form-control" placeholder="Monthly Income" />
              </div>
              <div className="col-md-6">
                <input type="number" className="form-control" placeholder="Work Experience (Years)" />
              </div>
            </div>

            {/* Vehicle Details */}
            <h5 className="mb-3 text-primary">Vehicle Details</h5>
            <div className="row g-3 mb-4">
              <div className="col-md-6">
                <input type="text" className="form-control" placeholder="Car Make & Model" />
              </div>
              <div className="col-md-6">
                <input type="text" className="form-control" placeholder="Variant / Fuel Type" />
              </div>
              <div className="col-md-6">
                <input type="number" className="form-control" placeholder="Ex-Showroom Price (₹)" />
              </div>
              <div className="col-md-6">
                <input type="number" className="form-control" placeholder="On-Road Price (₹)" />
              </div>
              <div className="col-md-6">
                <input type="text" className="form-control" placeholder="Dealer Name" />
              </div>
            </div>

            {/* Loan Details */}
            <h5 className="mb-3 text-primary">Loan Details</h5>
            <div className="row g-3 mb-4">
              <div className="col-md-6">
                <input type="number" className="form-control" placeholder="Loan Amount (₹)" />
              </div>
              <div className="col-md-6">
                <input type="number" className="form-control" placeholder="Down Payment (₹)" />
              </div>
              <div className="col-md-6">
                <input type="number" className="form-control" placeholder="Tenure (Months)" />
              </div>
            </div>

            {/* Documents Upload */}
            <h5 className="mb-3 text-primary">Upload Documents</h5>
            <div className="mb-4">
              <label className="form-label">Identity Proof</label>
              <input type="file" className="form-control mb-2" />
              <label className="form-label">Address Proof</label>
              <input type="file" className="form-control mb-2" />
              <label className="form-label">Income Proof</label>
              <input type="file" className="form-control mb-2" />
              <label className="form-label">Car Quotation / Proforma Invoice</label>
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
              <Button type="submit" className="submit-btn">
                Submit Application
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CarLoanForm;
