// import React from "react";
// import {
//   FaUserTie,
//   FaHome,
//   FaCar,
//   FaGraduationCap,
//   FaBriefcase,
//   FaCoins,
// } from "react-icons/fa";

// const loans = [
//   {
//     "Loan Type": "Personal Loan",
//     Icon: <FaUserTie className="text-orange-600 text-2xl" />,
//     "Interest Rate": "10.5% p.a.",
//     Tenure: "60 months",
//     Purpose: "Weddings, travel, or medical emergencies",
//     "Max Amount": "₹15,00,000.00",
//     "Processing Time": "24-48 hours",
//   },
//   {
//     "Loan Type": "Home Loan",
//     Icon: <FaHome className="text-orange-600 text-2xl" />,
//     "Interest Rate": "7.2% p.a.",
//     Tenure: "360 months",
//     Purpose: "Purchasing or constructing a new home",
//     "Max Amount": "₹1,00,00,000.00",
//     "Processing Time": "24-48 hours",
//   },
//   {
//     "Loan Type": "Car Loan",
//     Icon: <FaCar className="text-orange-600 text-2xl" />,
//     "Interest Rate": "8.9% p.a.",
//     Tenure: "84 months",
//     Purpose: "Finance your dream car",
//     "Max Amount": "₹25,00,000.00",
//     "Processing Time": "24-48 hours",
//   },
//   {
//     "Loan Type": "Education Loan",
//     Icon: <FaGraduationCap className="text-orange-600 text-2xl" />,
//     "Interest Rate": "9.8% p.a.",
//     Tenure: "120 months",
//     Purpose: "Higher education in India or abroad",
//     "Max Amount": "₹75,00,000.00",
//     "Processing Time": "24-48 hours",
//   },
//   {
//     "Loan Type": "Small Business Loan",
//     Icon: <FaBriefcase className="text-orange-600 text-2xl" />,
//     "Interest Rate": "12% p.a.",
//     Tenure: "48 months",
//     Purpose: "Business expansion",
//     "Max Amount": "₹50,00,000.00",
//     "Processing Time": "24-48 hours",
//   },
//   {
//     "Loan Type": "Gold Loan",
//     Icon: <FaCoins className="text-orange-600 text-2xl" />,
//     "Interest Rate": "9.5% p.a.",
//     Tenure: "24 months",
//     Purpose: "Liquidity against gold ornaments",
//     "Max Amount": "₹20,00,000.00",
//     "Processing Time": "24-48 hours",
//   },
// ];

// function LoanProducts() {
//   return (
//     <div className="mx-6 my-4 p-6 bg-white border border-gray-200 rounded-2xl shadow-md">
//       <p className="text-xl font-semibold">Available Loan Products</p>
//       <h3 className="text-gray-600">
//         Choose from our range of competitive loan options
//       </h3>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
//         {loans.map((loan, index) => (
//           <div
//             key={index}
//             className="bg-white border border-gray-200 rounded-2xl shadow-md p-5 hover:shadow-lg transition-all"
//           >
//             {/* Icon + Loan Type */}
//             <div className="flex items-center gap-3 mb-3">
//               <div className="bg-orange-50 p-3 rounded-lg">{loan.Icon}</div>
//               <h2 className="text-lg font-bold text-gray-800">
//                 {loan["Loan Type"]}
//               </h2>
//             </div>

//             <p className="text-sm text-gray-600 mb-3">{loan.Purpose}</p>

//             <div className="space-y-2 text-sm text-gray-700">
//               <p>
//                 <span className="font-medium text-gray-600">
//                   Interest Rate:
//                 </span>{" "}
//                 {loan["Interest Rate"]}
//               </p>
//               <p>
//                 <span className="font-medium text-gray-600">Tenure:</span>{" "}
//                 {loan.Tenure}
//               </p>
//               <p>
//                 <span className="font-medium text-gray-600">Max Amount:</span>{" "}
//                 {loan["Max Amount"]}
//               </p>
//               <p>
//                 <span className="font-medium text-gray-600">
//                   Processing Time:
//                 </span>{" "}
//                 {loan["Processing Time"]}
//               </p>
//             </div>

//             <button
//               type="button"
//               className="mt-4 w-full px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition"
//             >
//               Apply Now
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default LoanProducts;
import React from "react";
import {
  FaUserTie,
  FaHome,
  FaCar,
  FaGraduationCap,
  FaBriefcase,
  FaCoins,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const loans = [
  {
    "Loan Type": "Personal Loan",
    Icon: <FaUserTie className="text-warning fs-4" />,
    "Interest Rate": "10.5% p.a.",
    Tenure: "60 months",
    Purpose: "Weddings, travel, or medical emergencies",
    "Max Amount": "₹15,00,000.00",
    "Processing Time": "24-48 hours",
    url: "/personal-loan"
  },
  {
    "Loan Type": "Home Loan",
    Icon: <FaHome className="text-warning fs-4" />,
    "Interest Rate": "7.2% p.a.",
    Tenure: "360 months",
    Purpose: "Purchasing or constructing a new home",
    "Max Amount": "₹1,00,00,000.00",
    "Processing Time": "24-48 hours",
    url: "/home-loan"
  },
  {
    "Loan Type": "Car Loan",
    Icon: <FaCar className="text-warning fs-4" />,
    "Interest Rate": "8.9% p.a.",
    Tenure: "84 months",
    Purpose: "Finance your dream car",
    "Max Amount": "₹25,00,000.00",
    "Processing Time": "24-48 hours",
    url: "/car-loan"
  },
  {
    "Loan Type": "Education Loan",
    Icon: <FaGraduationCap className="text-warning fs-4" />,
    "Interest Rate": "9.8% p.a.",
    Tenure: "120 months",
    Purpose: "Higher education in India or abroad",
    "Max Amount": "₹75,00,000.00",
    "Processing Time": "24-48 hours",
    url: "/education-loan"
  },
  {
    "Loan Type": "Small Business Loan",
    Icon: <FaBriefcase className="text-warning fs-4" />,
    "Interest Rate": "12% p.a.",
    Tenure: "48 months",
    Purpose: "Business expansion",
    "Max Amount": "₹50,00,000.00",
    "Processing Time": "24-48 hours",
    url: "/business-loan"
  },
  {
    "Loan Type": "Gold Loan",
    Icon: <FaCoins className="text-warning fs-4" />,
    "Interest Rate": "9.5% p.a.",
    Tenure: "24 months",
    Purpose: "Liquidity against gold ornaments",
    "Max Amount": "₹20,00,000.00",
    "Processing Time": "24-48 hours",
    url: "/gold-loan"
  },
];


function LoanProducts() {
  const navigate=useNavigate();
  return (
    <div className="container my-4">
      <div className="card shadow rounded-4 border-0">
        <div className="card-body p-4">
          <p className="h5 fw-semibold">Available Loan Products</p>
          <h6 className="text-muted">
            Choose from our range of competitive loan options
          </h6>

          <div className="row g-4 mt-3">
            {loans.map((loan, index) => (
              <div className="col-md-6" key={index}>
                <div className="card h-100 shadow-sm border-0 rounded-4 p-3 hover-shadow">
                  {/* Icon + Loan Type */}
                  <div className="d-flex align-items-center gap-3 mb-3">
                    {/* <div className="bg-warning bg-opacity-25 p-3 rounded" >
                      {loan.Icon}
                    </div> */}
                    <div
                      className="p-3 rounded"
                      style={{ backgroundColor: "#950606d9" }} // 20 = 12% opacity
                    >
                      {loan.Icon}
                    </div>

                    <h6 className="fw-bold mb-0">{loan["Loan Type"]}</h6>
                  </div>

                  <p className="small text-muted mb-3">{loan.Purpose}</p>

                  <ul className="list-unstyled small text-dark mb-3">
                    <li>
                      <span className="fw-medium text-muted">
                        Interest Rate:
                      </span>{" "}
                      {loan["Interest Rate"]}
                    </li>
                    <li>
                      <span className="fw-medium text-muted">Tenure:</span>{" "}
                      {loan.Tenure}
                    </li>
                    <li>
                      <span className="fw-medium text-muted">Max Amount:</span>{" "}
                      {loan["Max Amount"]}
                    </li>
                    <li>
                      <span className="fw-medium text-muted">
                        Processing Time:
                      </span>{" "}
                      {loan["Processing Time"]}
                    </li>
                  </ul>

                  <button
                    className="btn btn-warning text-white w-100 fw-medium"
                    style={{ backgroundColor: "#950606" }}
                    onClick={() => navigate(loan.url)}
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoanProducts;
