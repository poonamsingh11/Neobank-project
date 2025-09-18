
import { FaHandHoldingUsd } from "react-icons/fa";
import React from "react";
import LoanCalculator from "./LoanCalculator";
import ActiveLoanCard from "./ActiveLoanCard";
import LoanProducts from "./LoanProducts";
import LoanCard from "./LoanCard";
import { useNavigate } from "react-router-dom";

const Loan = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Header Section */}
      <div className="container my-4 px-3">
        <div className="row align-items-center justify-content-between">
          {/* Left side: Title & Subtitle */}
          <div className="col-md-8 mb-3 mb-md-0">
            <p className="h3 fw-semibold mb-1">Loans</p>
            <h2 className="text-muted fs-5">
              Achieve your dreams with flexible loan options
            </h2>
          </div>

          {/* Right side: Button */}
          <div className="col-md-4 d-flex justify-content-md-end">
            <button
              onClick={() => navigate("/apply-loan")}
              className="btn d-flex align-items-center gap-2 px-4 py-2 fw-semibold text-white shadow"
              style={{ backgroundColor: "#950606e2" }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#c2410c")}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#950606e2")}
            >
              <FaHandHoldingUsd className="fs-5" />
              Apply for Loan
            </button>
          </div>
        </div>
      </div>

      {/* Other Sections */}
      <LoanCalculator />
      <ActiveLoanCard />
      <LoanProducts />
      <LoanCard />
    </>
  );
};

export default Loan;
