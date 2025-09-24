import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowDownLeft, ArrowUpRight, CreditCard, PiggyBank, Wallet } from "lucide-react";

const DashBoard = () => {
  const navigate = useNavigate();

  const actions = [
    { label: "Send Money", color: "bg-primary", icon: "✈️", path: "/send-money" },
    { label: "Pay Bills", color: "bg-success", icon: "📱", path: "/pay-bills" },
    { label: "Add Money", color: "bg-purple", icon: "➕", path: "/add-money" },
    { label: "Investments", color: "bg-warning", icon: "📈", path: "/investment" },
    { label: "Fixed Deposit", color: "bg-pink", icon: "🐷", path: "/deposit" },
    { label: "Cards", color: "bg-info", icon: "💳", path: "/cards" },
  ];

  return (
    // ✅ Navbar se chipakane ke liye "pt-0 mt-0" aur padding hata diya
    <div className="bg-light min-vh-100 m-0 p-0">

      {/* Header Card */}
      <div className="card text-white mb-4 shadow rounded-0" style={{ backgroundColor: "#950606" }}>
        <div className="card-body d-flex justify-content-between align-items-center">
          <div>
            <h1 className="h3 fw-bold">Welcome Back, PoonamSingh!</h1>
            <p className="mb-0 opacity-75">Here's your financial overview for today</p>
          </div>
          <div className="text-end">
            <p className="small opacity-75 mb-1">Total Balance</p>
            <p className="h2 fw-bold mb-0">₹3,73,731.00</p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="card mb-4 shadow rounded-0">
        <div className="card-body">
          <h5 className="fw-bold">Quick Actions</h5>
          <p className="text-muted mb-4 fw-semibold">Frequently used banking services</p>
          <div className="row g-3">
            {actions.map((item, i) => (
              <div key={i} className="col-6 col-md-4 col-lg-2">
                <div
                  onClick={() => navigate(item.path)}
                  className="border rounded text-center p-3 h-100 d-flex flex-column align-items-center justify-content-center shadow-sm"
                  style={{ cursor: "pointer" }}
                >
                  <div
                    className={`rounded-circle d-flex align-items-center justify-content-center text-white mb-2 shadow ${item.color}`}
                    style={{ width: "48px", height: "48px" }}
                  >
                    <span>{item.icon}</span>
                  </div>
                  <p className="small fw-medium mb-0">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Accounts & Transactions */}
      <div className="row g-4 mx-0">
        <div className="col-lg-6">
          <div className="card shadow h-100">
            <div className="card-body">
              <h5 className="fw-bold">My Accounts</h5>
              <p className="text-muted mb-3 fw-semibold">Overview of all your accounts</p>
              {[
                { title: "Primary Savings", type: "Savings Account", number: "****1234", balance: "₹1,25,450.75", icon: <Wallet className="text-warning" /> },
                { title: "Current Account", type: "Current Account", number: "****5678", balance: "₹48,280.25", icon: <CreditCard className="text-primary" /> },
                { title: "Fixed Deposit", type: "Fixed Deposit", number: "****9012", balance: "₹2,00,000.00", icon: <PiggyBank className="text-danger" /> },
              ].map((acc, i) => (
                <div key={i} className="d-flex justify-content-between align-items-center border rounded p-3 mb-3">
                  <div className="d-flex align-items-center">
                    <div className="rounded-circle bg-light d-flex align-items-center justify-content-center me-3" style={{ width: "40px", height: "40px" }}>
                      {acc.icon}
                    </div>
                    <div>
                      <p className="fw-semibold mb-0">{acc.title}</p>
                      <p className="text-muted small mb-0">{acc.type}</p>
                      <p className="text-secondary small mb-0">{acc.number}</p>
                    </div>
                  </div>
                  <p className="fw-bold text-danger mb-0">{acc.balance}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="card shadow h-100">
            <div className="card-body">
              <h5 className="fw-bold">Recent Transactions</h5>
              <p className="text-muted mb-3 fw-semibold">Your latest financial activities</p>
              {[
                { label: "Salary Credit", type: "Income", amount: "+₹75,000.00", date: "2025-01-10", color: "text-success", icon: <ArrowDownLeft />, iconBg: "bg-success bg-opacity-10" },
                { label: "Online Shopping", type: "Shopping", amount: "-₹2,500.00", date: "2025-01-09", color: "text-danger", icon: <ArrowUpRight />, iconBg: "bg-danger bg-opacity-10" },
                { label: "Electricity Bill", type: "Utilities", amount: "-₹1,200.00", date: "2025-01-08", color: "text-danger", icon: <ArrowUpRight />, iconBg: "bg-danger bg-opacity-10" },
                { label: "Investment Returns", type: "Investment", amount: "+₹5,000.00", date: "2025-01-07", color: "text-success", icon: <ArrowDownLeft />, iconBg: "bg-success bg-opacity-10" },
              ].map((tx, i) => (
                <div key={i} className="d-flex justify-content-between align-items-center border rounded p-3 mb-3">
                  <div className="d-flex align-items-center">
                    <div className={`rounded-circle d-flex align-items-center justify-content-center me-3 ${tx.iconBg}`} style={{ width: "40px", height: "40px" }}>
                      {tx.icon}
                    </div>
                    <div>
                      <p className="fw-medium mb-0">{tx.label}</p>
                      <p className="text-muted small mb-0">{tx.type}</p>
                    </div>
                  </div>
                  <div className="text-end">
                    <p className={`fw-bold mb-0 ${tx.color}`}>{tx.amount}</p>
                    <p className="text-secondary small mb-0">{tx.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Extra Widgets */}
      <div className="row g-4 mx-0 mt-2">
        <div className="col-md-4">
          <div className="card shadow h-100 text-center">
            <div className="card-body">
              <h5 className="fw-bold">Monthly Spending</h5>
              <p className="h4 fw-bold text-danger mt-2">₹15,750</p>
              <p className="text-success fw-semibold mb-0">↓ 12% from last month</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow h-100 text-center">
            <div className="card-body">
              <h5 className="fw-bold">Investment Growth</h5>
              <p className="h4 fw-bold text-danger mt-2">₹2,45,000</p>
              <p className="text-success fw-semibold mb-0">↑ 8.5% this quarter</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow h-100 text-center">
            <div className="card-body">
              <h5 className="fw-bold">Credit Score</h5>
              <p className="h4 fw-bold text-danger mt-2">785</p>
              <p className="text-success fw-semibold mb-0">Excellent</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
