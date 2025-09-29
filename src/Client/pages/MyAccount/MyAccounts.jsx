import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  TrendingUp,
  TrendingDown,
  ArrowUpRight,
  ArrowDownLeft,
  Download,
  CheckCircle,
  FileText,
  BookOpen,
} from "lucide-react";

const MyAccountsPage = () => {
  const [showNewAccountMenu, setShowNewAccountMenu] = useState(false);
  const [showCloseAccountMenu, setShowCloseAccountMenu] = useState(false);
  const navigate = useNavigate();

  // Accounts data
  const accounts = [
    {
      type: "Savings Account",
      balance: "₹1,25,480.75",
      accountNumber: "****3456",
      ifsc: "NEOB0001567",
      status: "Active",
      statusColor: "bg-success text-white",

    },
    {
      type: "Current Account",
      balance: "₹89,250.50",
      accountNumber: "****7890",
      ifsc: "NEOB0001234",
      status: "Inactive",
      statusColor: "bg-secondary text-white",

    },
    {
      type: "Fixed Deposit",
      balance: "₹2,00,000.00",
      accountNumber: "****9123",
      ifsc: "NEOB0001289",
      status: "Active",
      statusColor: "bg-success text-white",

    },
    {
      type: "Joint Account",
      balance: "₹1,50,750.00",
      accountNumber: "****4567",
      ifsc: "NEOB0001456",
      status: "Active",
      statusColor: "bg-success text-white",

    },
  ];

  // Transactions data
  const transactions = [
    {
      type: "credit",
      title: "Salary Credit",
      account: "Savings Account",
      reference: "TXN123456789",
      amount: "+₹75,000.00",
      date: "2025-01-10",
      icon: ArrowDownLeft,
      amountColor: "text-green-600",
      bgColor: "bg-danger",
    },
    {
      type: "debit",
      title: "Online Shopping - Amazon",
      account: "Current Account",
      reference: "TXN123456784",
      amount: "-₹2,500.00",
      date: "2025-01-09",
      icon: ArrowUpRight,
      amountColor: "text-red-600",
      bgColor: "bg-danger",
    },
    {
      type: "credit",
      title: "Interest Credit",
      account: "Fixed Deposit",
      reference: "TXN123456783",
      amount: "+₹1,250.00",
      date: "2025-01-08",
      icon: ArrowDownLeft,
      amountColor: "text-green-600",
      bgColor: "bg-danger",
    },
    {
      type: "debit",
      title: "ATM Withdrawal",
      account: "Savings Account",
      reference: "TXN123456782",
      amount: "-₹5,000.00",
      date: "2025-01-07",
      icon: ArrowUpRight,
      amountColor: "text-red-600",
      bgColor: "bg-danger",
    },
  ];

  // Monthly stats
  const monthlyStats = [
    {
      title: "Monthly Inflow",
      amount: "₹85,000",
      change: "+5%",
      changeText: "from last month",
      changeColor: "text-green-600",
      amountColor: "text-green-600",
      icon: TrendingUp,
    },
    {
      title: "Monthly Outflow",
      amount: "₹32,500",
      change: "-12%",
      changeText: "from last month",
      changeColor: "text-red-600",
      amountColor: "text-red-600",
      icon: TrendingDown,
    },
    {
      title: "Net Savings",
      amount: "₹52,500",
      change: "+15%",
      changeText: "from last month",
      changeColor: "text-green-600",
      amountColor: "text-green-600",
      icon: TrendingUp,
    },
  ];

  const accountOptions = [
    { name: "Savings", icon: "bi-wallet2" },
    { name: "Current", icon: "bi-bank" },
    { name: "Salary", icon: "bi-cash-stack" },
    { name: "Joint Accounts", icon: "bi-people" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* 🔴 Header full width, nav se chipka hua */}
      {/* Header */}
     <div
        className="d-flex justify-content-between align-items-center px-4"
        style={{
          backgroundColor: "#900603",
          padding: "25px 0",
          position: "sticky",
          top: 0,
          zIndex: 1000,
        }}
      >
        
        
          {/* Left side (Heading + Text) */}
          <div>
            <h1 className="fw-bold fs-2 text-white">My Accounts</h1>
            <p className="text-light mb-0">
              App preferences, language, and display settings
            </p>
          </div>

          {/* Right side (Open/Close Account buttons) */}
          <div className="d-flex gap-2 position-relative mt-3 mt-md-0 justify-content-end">
            {/* Open Account */}
            <div className="position-relative">
              <button
                onClick={() => {
                  setShowNewAccountMenu(!showNewAccountMenu);
                  setShowCloseAccountMenu(false);
                }}
                className="btn text-white px-4 py-2 fw-medium shadow d-flex align-items-center gap-2"
                style={{ backgroundColor: "#900603", border: "2px solid white" }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundColor = "#6e0102")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor = "#900603")
                }
              >
                <i className="bi bi-person-plus"></i> Open New Account
              </button>
              {showNewAccountMenu && (
                <div
                  onMouseLeave={() => setShowNewAccountMenu(false)}
                  className="position-absolute end-0 mt-2 bg-white rounded shadow border z-3"
                  style={{ width: "220px" }}
                >
                  <ul className="list-group list-group-flush">
                    {accountOptions.map((accountType, index) => (
                      <Link
                        to="/Client/welcome"
                        key={index}
                        className="text-decoration-none"
                      >
                        <li className="list-group-item list-group-item-action d-flex align-items-center gap-2">
                          <i className={`bi ${accountType.icon}`}></i>
                          {accountType.name}
                        </li>
                      </Link>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Close Account */}
            <div className="position-relative">
              <button
                onClick={() => {
                  setShowCloseAccountMenu(!showCloseAccountMenu);
                  setShowNewAccountMenu(false);
                }}
                className="btn text-white px-4 py-2 fw-medium shadow d-flex align-items-center gap-2"
                style={{ backgroundColor: "#900603", border: "2px solid white" }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundColor = "#6e0102")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor = "#900603")
                }
              >
                <i className="bi bi-person-dash"></i> Close Account
              </button>
              {showCloseAccountMenu && (
                <div
                  onMouseLeave={() => setShowCloseAccountMenu(false)}
                  className="position-absolute end-0 mt-2 bg-white rounded shadow border z-3"
                  style={{ width: "180px" }}
                >
                  <ul className="list-group list-group-flush">
                    {accountOptions.map((accountType, index) => (
                      <li
                        key={index}
                        className="list-group-item list-group-item-action d-flex align-items-center gap-2"
                        style={{ cursor: "pointer" }}
                        onClick={() => navigate("/Client/close-account")}
                      >
                        <i className={`bi ${accountType.icon}`}></i>
                        {accountType.name}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        
      </div>



      {/* 🔴 Main Content full width */}
      <div className="w-100 px-3 px-md-4 mt-4">
        {/* Accounts Grid */}
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3 mb-4">
          {accounts.map((account, index) => (
            <div
              className="col"
              key={index}
              onClick={() => navigate("/Client/account-details")}
              style={{ cursor: "pointer" }}
            >
              <div
                className="card h-100 shadow-sm border-0 account-card"
                style={{
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "scale(1.03)";
                  e.currentTarget.style.boxShadow =
                    "0 6px 18px rgba(0,0,0,0.15)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow =
                    "0 2px 6px rgba(0,0,0,0.1)";
                }}
              >
                <div className="card-body p-4 d-flex flex-column justify-content-between h-100">
                  <div>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div
                        className={`rounded d-flex align-items-center justify-content-center ${account.bgColor}`}
                        style={{ width: "40px", height: "40px" }}
                      >
                        {/* 👇 Icon ka color #900603 */}
                        <i
                          className="bi bi-bank"
                          style={{ color: "#900603", fontSize: "20px" }}
                        ></i>
                      </div>
                      <span
                        className={`badge ${account.statusColor} px-2 py-1`}
                        style={{ fontSize: "0.75rem" }}
                      >
                        {account.status}
                      </span>
                    </div>
                    <h5 className="fw-bold text-dark mb-3">{account.type}</h5>
                    <div className="small text-muted mb-1">Available Balance</div>
                    <p className="h4 fw-bold text-danger mb-3">
                      {account.balance}
                    </p>
                    <div className="small text-muted mb-3">
                      <div className="d-flex justify-content-between">
                        <span>Account Number</span>
                        <span className="fw-semibold text-dark">
                          {account.accountNumber}
                        </span>
                      </div>
                      <div className="d-flex justify-content-between">
                        <span>IFSC Code</span>
                        <span className="fw-semibold text-dark">
                          {account.ifsc}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex gap-2 mt-3">
                    {/* 👇 Hover pe background #900603 */}
                    <button
                      className="btn btn-outline-danger flex-fill py-2 small"
                      style={{
                        transition: "all 0.3s ease",
                        borderColor: "#900603",
                        color: "#900603",
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.backgroundColor = "#900603";
                        e.currentTarget.style.color = "white";
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.backgroundColor = "transparent";
                        e.currentTarget.style.color = "#900603";
                      }}
                    >
                      View Details
                    </button>

                    <button
                      className="btn btn-outline-danger px-3 py-2"
                      style={{
                        borderColor: "#900603",
                        color: "#900603",
                        transition: "all 0.3s ease",
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.backgroundColor = "#900603";
                        e.currentTarget.style.color = "white";
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.backgroundColor = "transparent";
                        e.currentTarget.style.color = "#900603";
                      }}
                    >
                      <Download size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Banking Services */}

        <div className="row row-cols-1 row-cols-md-3 g-4 mb-6">

          {/* Update KYC */}
          <div className="col">
            <div
              className="bg-white rounded-lg shadow-sm border p-6 text-center"
              style={{ transition: "transform 0.2s ease, box-shadow 0.2s ease", cursor: "pointer" }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "scale(1.03)";
                e.currentTarget.style.boxShadow = "0 6px 18px rgba(0,0,0,0.15)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 2px 6px rgba(0,0,0,0.1)";
              }}
              onClick={() => navigate("/update-kyc")}
            >
              <div className="mb-4">
                <div className="bg-blue-50 rounded-lg p-3 d-inline-block">
                  <CheckCircle size={32} className="text-blue-600" />
                </div>
              </div>
              <h5 className="font-bold text-gray-900 mb-2">Update KYC</h5>
              <p className="text-gray-600 text-sm mb-4">
                Keep your KYC documents updated for seamless banking
              </p>
              <button
                className="px-6 py-2 text-white rounded-md"
                style={{ backgroundColor: "#900603" }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundColor = "#6e0102")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor = "#900603")
                }
                onClick={(e) => {
                  e.stopPropagation(); // 👈 button click se card ke onClick trigger na ho
                  navigate("/Client/update-kyc");
                }}
              >
                Update Now
              </button>
            </div>
          </div>

          {/* Account Statement */}
          <div className="col">
            <div
              className="bg-white rounded-lg shadow-sm border p-6 text-center"
              style={{ transition: "transform 0.2s ease, box-shadow 0.2s ease", cursor: "pointer" }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "scale(1.03)";
                e.currentTarget.style.boxShadow = "0 6px 18px rgba(0,0,0,0.15)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 2px 6px rgba(0,0,0,0.1)";
              }}
              onClick={() => navigate("/Client/account-statement")}
            >
              <div className="mb-4">
                <div className="bg-green-50 rounded-lg p-3 d-inline-block">
                  <FileText size={32} className="text-green-600" />
                </div>
              </div>
              <h5 className="font-bold text-gray-900 mb-2">Account Statement</h5>
              <p className="text-gray-600 text-sm mb-4">
                Download your account statements instantly
              </p>
              <button
                className="px-6 py-2 text-white rounded-md"
                style={{ backgroundColor: "#900603" }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundColor = "#6e0102")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor = "#900603")
                }
                onClick={(e) => {
                  e.stopPropagation();
                  navigate("/Client/account-statement");
                }}
              >
                Download
              </button>
            </div>
          </div>

          {/* Cheque Book */}
          <div className="col">
            <div
              className="bg-white rounded-lg shadow-sm border p-6 text-center"
              style={{ transition: "transform 0.2s ease, box-shadow 0.2s ease", cursor: "pointer" }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "scale(1.03)";
                e.currentTarget.style.boxShadow = "0 6px 18px rgba(0,0,0,0.15)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 2px 6px rgba(0,0,0,0.1)";
              }}
              onClick={() => navigate("/Client/chequebook")}
            >
              <div className="mb-4">
                <div className="bg-amber-50 rounded-lg p-3 d-inline-block">
                  <BookOpen size={32} className="text-amber-600" />
                </div>
              </div>
              <h5 className="font-bold text-gray-900 mb-2">Cheque Book</h5>
              <p className="text-gray-600 text-sm mb-4">
                Request new cheque book for your account
              </p>
              <button
                className="px-6 py-2 text-white rounded-md"
                style={{ backgroundColor: "#900603" }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundColor = "#6e0102")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor = "#900603")
                }
                onClick={(e) => {
                  e.stopPropagation();
                  navigate("/chequebook");
                }}
              >
                Request
              </button>
            </div>
          </div>
        </div>
        {/* Recent Transactions */}
        <div className="card shadow-sm border-0 mb-4 w-100">
          <div className="card-body p-4">
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-4">
              <div>
                <h4 className="fw-bold text-dark mb-1">Recent Transactions</h4>
                <p className="text-muted mb-0">
                  Latest transactions across all accounts
                </p>
              </div>
              <button
                className="btn text-white btn-sm mt-3 mt-md-0"
                style={{ backgroundColor: "#900603" }}
              >
                View All
              </button>
            </div>

            <div className="row g-2">
              {transactions.map((transaction, index) => {
                const IconComponent = transaction.icon;
                return (
                  <div className="col-12" key={index}>
                    <div className="d-flex justify-content-between align-items-center p-2 rounded border">
                      <div className="d-flex align-items-center">
                        <div
                          className={`rounded d-flex align-items-center justify-content-center me-3 ${transaction.iconBg}`}
                          style={{ width: "32px", height: "32px" }}
                        >
                          <IconComponent
                            size={14}
                            className={transaction.amountColor}
                          />
                        </div>
                        <div>
                          <p className="fw-semibold text-dark mb-0 small">
                            {transaction.title}
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "0.75rem" }}
                          >
                            {transaction.account}
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "0.7rem" }}
                          >
                            Ref: {transaction.reference}
                          </p>
                        </div>
                      </div>
                      <div className="text-end">
                        <p
                          className={`fw-bold mb-0 ${transaction.amountColor}`}
                          style={{ fontSize: "0.9rem" }}
                        >
                          {transaction.amount}
                        </p>
                        <p
                          className="text-muted mb-0"
                          style={{ fontSize: "0.75rem" }}
                        >
                          {transaction.date}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Monthly Stats */}
        <div className="row row-cols-1 row-cols-md-3 g-3 w-100">
          {monthlyStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div className="col" key={index}>
                <div className="card shadow-sm border-0 text-center h-100">
                  <div className="card-body p-4">
                    <div className="d-flex justify-content-center mb-3">
                      <div className="bg-light rounded p-3">
                        <IconComponent
                          size={24}
                          className={stat.amountColor}
                        />
                      </div>
                    </div>
                    <h5 className="fw-bold text-dark mb-3">{stat.title}</h5>
                    <p className={`h4 fw-bold mb-2 ${stat.amountColor}`}>
                      {stat.amount}
                    </p>
                    <p className={`small fw-medium mb-0 ${stat.changeColor}`}>
                      {stat.change} {stat.changeText}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};

export default MyAccountsPage;
