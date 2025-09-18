// import React from 'react';
// import { Home, CheckCircle } from 'lucide-react';

// function ActiveLoanCard() {
//   return (
//     <div className="mx-6 my-4 p-6 bg-white border border-gray-200 rounded-2xl shadow-md">
//       {/* Header Section */}
//       <div className="flex justify-between items-start mb-6">
//         <div>
//           <h2 className="text-xl font-semibold text-gray-900 mb-1">My Active Loan</h2>
//           <p className="text-gray-600 text-sm">Track your current loan details</p>
//         </div>
//         <div className="flex items-center gap-2 text-green-600 bg-green-50 px-3 py-1 rounded-full">
//           <CheckCircle size={16} />
//           <span className="text-sm font-medium">Active</span>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex flex-col lg:flex-row gap-8">
//         {/* Left Section - Loan Details */}
//         <div className="flex-1">
//           <div className="flex items-center gap-3 mb-6">
//             <div className="bg-orange-100 p-2 rounded-lg">
//               <Home className="text-orange-600" size={24} />
//             </div>
//             <div>
//               <h3 className="font-semibold text-gray-900">Home Loan</h3>
//               <p className="text-gray-600 text-sm">8.5% p.a. • 240 months</p>
//             </div>
//           </div>

//           <div className="space-y-3">
//             <div className="flex justify-between">
//               <span className="text-gray-600">Loan Amount</span>
//               <span className="font-medium">₹25,00,000.00</span>
//             </div>
//             <div className="flex justify-between">
//               <span className="text-gray-600">Outstanding</span>
//               <span className="font-medium">₹18,50,000.00</span>
//             </div>
//             <div className="flex justify-between">
//               <span className="text-gray-600">Monthly EMI</span>
//               <span className="font-medium">₹23,500.00</span>
//             </div>
//             <div className="flex justify-between">
//               <span className="text-gray-600">Next EMI Date</span>
//               <span className="font-medium">2/1/2025</span>
//             </div>
//           </div>
//         </div>

//         {/* Right Section - Progress and Actions */}
//         <div className="flex-1 ">
//           {/* Progress Section */}
//           <div className="mb-6">
//             <div className="flex justify-between items-center mb-2">
//               <span className="text-gray-700 font-medium">Loan Progress</span>
//               <span className="text-gray-900 font-semibold">25%</span>
//             </div>

//             <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
//               <div
//                 className="bg-orange-500 h-3 rounded-full transition-all duration-300"
//                 style={{ width: "25%" }}
//               ></div>
//             </div>

//             <div className="flex justify-between text-sm text-gray-500">
//               <span>60 months paid</span>
//               <span>180 months remaining</span>
//             </div>
//           </div>

//           {/* Action Buttons */}
//           <div className="flex gap-3">
//             <button className="flex-1 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors font-medium">
//               Make Payment
//             </button>
//             <button className="flex-1 border border-orange-500 text-orange-600 px-4 py-2 rounded-lg hover:bg-orange-50 transition-colors font-medium">
//               View Statement
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ActiveLoanCard;

import React from "react";
import { Home, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

function ActiveLoanCard() {
  const navigate=useNavigate();
  const handleStatement=()=>{
    navigate('/view-loan-statement');
  }
  return (
    <div className="container my-4">
      <div className="card shadow rounded-4 border-0 w-100">
        <div className="card-body p-4">
          {/* Header */}
          <div className="d-flex justify-content-between align-items-start mb-4">
            <div>
              <h5 className="fw-semibold mb-1">My Active Loan</h5>
              <p className="text-muted small mb-0">
                Track your current loan details
              </p>
            </div>
            {/* <div className="d-flex align-items-center gap-2 text-success bg-light px-3 py-1 rounded-pill">
              <CheckCircle size={16} />
              <span className="small fw-medium">Active</span>
            </div> */}
            <div className="d-flex align-items-center gap-2 bg-light px-3 py-1 rounded-pill">
              <CheckCircle size={16} color="#950606de" />
              <span className="small fw-medium" style={{ color: "#950606" }}>
                Active
              </span>
            </div>
          </div>

          <div className="row g-4">
            {/* Left section - loan details */}
            <div className="col-md-6">
              <div className="d-flex align-items-center gap-3 mb-4">
                <div
                  className="p-2 rounded"
                  style={{ backgroundColor: "#950505" }} // light tint of your custom red
                >
                  <Home size={24} color="#ffc107" />
                </div>

                <div>
                  <h6 className="fw-semibold mb-0">Home Loan</h6>
                  <small className="text-muted">8.5% p.a. • 240 months</small>
                </div>
              </div>

              <ul className="list-unstyled mb-0">
                <li className="d-flex justify-content-between mb-2">
                  <span className="text-muted">Loan Amount</span>
                  <span className="fw-medium">₹25,00,000.00</span>
                </li>
                <li className="d-flex justify-content-between mb-2">
                  <span className="text-muted">Outstanding</span>
                  <span className="fw-medium">₹18,50,000.00</span>
                </li>
                <li className="d-flex justify-content-between mb-2">
                  <span className="text-muted">Monthly EMI</span>
                  <span className="fw-medium">₹23,500.00</span>
                </li>
                <li className="d-flex justify-content-between">
                  <span className="text-muted">Next EMI Date</span>
                  <span className="fw-medium">2/1/2025</span>
                </li>
              </ul>
            </div>

            {/* Right section - progress + actions */}
            <div className="col-md-6">
              <div className="mb-4">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <span className="fw-medium">Loan Progress</span>
                  <span className="fw-semibold">25%</span>
                </div>
                <div className="progress" style={{ height: "8px" }}>
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "25%", backgroundColor: "#950606" }}
                  ></div>
                </div>
                <div className="d-flex justify-content-between small text-muted mt-2">
                  <span>60 months paid</span>
                  <span>180 months remaining</span>
                </div>
              </div>

              <div className="d-flex gap-3">
                <button
                  className="btn text-white fw-medium flex-fill background"
                  style={{ backgroundColor: "#950606" }}
                >
                  Make Payment
                </button>
                {/* <button className="btn btn-outline-warning fw-medium flex-fill">
                  View Statement
                </button> */}
                <button
                  className="btn fw-medium flex-fill"
                  style={{
                    borderColor: "#950606",
                    color: "#950606",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = "#950606";
                    e.currentTarget.style.color = "#fff";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = "#950606";
                  }}
                  onClick={() => handleStatement()}
                >
                  View Statement
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActiveLoanCard;
