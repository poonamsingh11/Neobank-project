import React, { useState, useMemo } from "react";
import { PiggyBank, PlusSquare } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function DepositsPage() {
  const navigate = useNavigate();

  const [deposits] = useState([
    {
      id: 1,
      type: "Fixed Deposit",
      rate: 7.5,
      amount: 100000,
      start: "2022-12-15",
      maturityDate: "2025-12-15",
      maturityAmount: 107500,
    },
    {
      id: 2,
      type: "Recurring Deposit",
      rate: 7.0,
      amount: 5000,
      start: "2025-06-30",
      maturityDate: "2026-06-30",
      maturityAmount: 65000,
    },
    {
      id: 3,
      type: "Tax Saver FD",
      rate: 7.75,
      amount: 150000,
      start: "2023-03-20",
      maturityDate: "2028-03-20",
      maturityAmount: 187500,
    },
  ]);

  const [principal, setPrincipal] = useState("");
  const [termYears, setTermYears] = useState("");
  const [interestRate, setInterestRate] = useState(7.5);

  const maturity = useMemo(() => {
    const P = parseFloat(principal) || 0;
    const r = parseFloat(interestRate) / 100;
    const t = parseFloat(termYears) || 0;
    if (!P || !t) return 0;
    return Math.round(P * Math.pow(1 + r, t));
  }, [principal, interestRate, termYears]);

  const totalDeposits = deposits.reduce((s, d) => s + d.amount, 0);
  const expectedReturns = deposits.reduce(
    (s, d) => s + (d.maturityAmount - d.amount),
    0
  );
  const avgInterest = (
    deposits.reduce((s, d) => s + d.rate, 0) / deposits.length
  ).toFixed(2);

  return (
    <div className="bg-light min-vh-100">
      {/* Sticky Header */}
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
        <div>
          <h1 className="fw-bold fs-2 text-white mb-0">Deposits</h1>
          <p className="text-white small">
            Secure your future with guaranteed returns
          </p>
        </div>

        {/* Hover Dropdown Button */}
        <div className="relative inline-block text-left group">
          <button
            className="inline-flex items-center gap-2 text-white px-3 py-2 rounded shadow-sm transition"
            style={{
              backgroundColor: "#900603",
              border: "2px solid white",
            }}
            type="button"
          >
            <PlusSquare size={16} /> Open New Deposit
          </button>

          {/* Dropdown menu */}
          <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow border z-20 hidden group-hover:block">
            <button
              onClick={() => navigate("/fd-calculator")}
              className="d-block w-100 text-start px-3 py-2 text-dark small hover:bg-[#900603] hover:text-white rounded border-0 bg-transparent"
            >
              Fixed Deposit
            </button>
            <button
              onClick={() => navigate("/recurring-deposit")}
              className="d-block w-100 text-start px-3 py-2 text-dark small hover:bg-[#900603] hover:text-white rounded border-0 bg-transparent"
            >
              Recurring Deposit
            </button>
            <button
              onClick={() => navigate("/tax-saver-fd11")}
              className="d-block w-100 text-start px-3 py-2 text-dark small hover:bg-[#900603] hover:text-white rounded border-0 bg-transparent"
            >
              Tax Saver FD
            </button>
          </div>
        </div>
      </div>

      {/* Page Content */}
      <div className="container-fluid p-3">
        {/* Deposit Calculator Card */}
        <div className="card mb-4 border-0 shadow-sm">
          <div className="card-body">
            <h3 className="fw-bold fs-5 mb-4" style={{ color: " #140505ff" }}>
              Deposit Calculator
            </h3>
            <div className="row g-3 align-items-center">
              <div className="col-md">
                <input
                  type="number"
                  value={principal}
                  onChange={(e) => setPrincipal(e.target.value)}
                  placeholder="Enter amount"
                  className="form-control form-control-sm"
                />
              </div>
              <div className="col-md">
                <select
                  value={termYears}
                  onChange={(e) => setTermYears(e.target.value)}
                  className="form-select form-select-sm"
                >
                  <option value="">Select term</option>
                  <option value="1">1 year</option>
                  <option value="2">2 years</option>
                  <option value="3">3 years</option>
                  <option value="5">5 years</option>
                  <option value="10">10 years</option>
                </select>
              </div>
              <div className="col-md">
                <input
                  type="number"
                  step="0.01"
                  value={interestRate}
                  onChange={(e) => setInterestRate(e.target.value)}
                  className="form-control form-control-sm"
                />
              </div>
              <div className="col-md">
                <div
                  className="p-2 rounded text-end small"
                  style={{ backgroundColor: "rgba(144,6,3,0.1)" }}
                >
                  <div className="text-muted">Maturity Amount</div>
                  <div className="fw-bold" style={{ color: "#900603" }}>
                    ₹{maturity.toLocaleString()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Deposit Options */}
        <div className="card mb-4 border-0 shadow-sm">
          <div className="card-body">
            <h3 className="fw-bold fs-5 mb-3" style={{ color: "#900603" }}>
              Deposit Options
            </h3>
            <div className="row">
              <div className="col-md-4 mb-3">
                <PlanCard
                  title="Fixed Deposit"
                  rate={7.5}
                  minAmount={1000}
                  term="10 years"
                />
              </div>
              <div className="col-md-4 mb-3">
                <PlanCard
                  title="Recurring Deposit"
                  rate={7.0}
                  minAmount={500}
                  term="10 years"
                />
              </div>
              <div className="col-md-4 mb-3">
                <PlanCard
                  title="Tax Saver FD"
                  rate={7.75}
                  minAmount={100}
                  term="5 years"
                />
              </div>
            </div>
          </div>
        </div>

        {/* My Deposits */}
        <div className="card mb-4 border-0 shadow-sm">
          <div className="card-body">
            <h3 className="fw-bold fs-5 mb-3" style={{ color: "#900603" }}>
              My Deposits
            </h3>
            <div className="list-group">
              {deposits.map((d) => (
                <div
                  key={d.id}
                  className="list-group-item d-flex justify-content-between align-items-center small"
                >
                  <div className="d-flex align-items-center gap-3">
                    <div
                      className="p-2 rounded"
                      style={{ backgroundColor: "rgba(144,6,3,0.1)" }}
                    >
                      <PiggyBank size={18} style={{ color: "#900603" }} />
                    </div>
                    <div>
                      <div className="fw-semibold">{d.type}</div>
                      <div className="text-muted small">
                        {d.rate}% p.a. · Matures on {formatDate(d.maturityDate)}
                      </div>
                    </div>
                  </div>
                  <div className="text-end">
                    <div className="fw-semibold">
                      ₹{d.amount.toLocaleString()}
                    </div>
                    <div className="small" style={{ color: "green" }}>
                      Maturity: ₹{d.maturityAmount.toLocaleString()}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="row g-3">
          <div className="col-md-3">
            <SummaryCard
              title="Total Deposits"
              value={`₹${totalDeposits.toLocaleString()}`}
              subtitle={`Across ${deposits.length} accounts`}
            />
          </div>
          <div className="col-md-3">
            <SummaryCard
              title="Expected Returns"
              value={`₹${expectedReturns.toLocaleString()}`}
              subtitle="Total interest earned"
            />
          </div>
          <div className="col-md-3">
            <SummaryCard
              title="Next Maturity"
              value="Dec 2025"
              subtitle="Fixed Deposit"
            />
          </div>
          <div className="col-md-3">
            <SummaryCard
              title="Avg. Interest"
              value={`${avgInterest}%`}
              subtitle="Weighted average"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function PlanCard({ title, rate, minAmount, term }) {
  const navigate = useNavigate();

  const handleOpen = () => {
    if (title === "Fixed Deposit") {
      navigate("/fd-calculator");
    } else if (title === "Recurring Deposit") {
      navigate("/recurring-deposit");
    } else if (title === "Tax Saver FD") {
      navigate("/tax-saver-fd11");
    }
  };

  return (
    <div className="card h-100 border-0 shadow-sm">
      <div className="card-body d-flex flex-column small">
        <div className="d-flex justify-content-between align-items-start">
          <div className="d-flex gap-2 align-items-center">
            <div
              className="p-2 rounded"
              style={{ backgroundColor: "rgba(144,6,3,0.1)" }}
            >
              <PiggyBank size={18} style={{ color: "#900603" }} />
            </div>
            <div>
              <div className="fw-semibold">{title}</div>
              <div className="text-muted small">
                Guaranteed returns with fixed interest rate
              </div>
            </div>
          </div>
          <div
            className="px-2 py-1 rounded small fw-semibold"
            style={{ backgroundColor: "rgba(144,6,3,0.1)", color: "#900603" }}
          >
            {rate}%
          </div>
        </div>

        <div className="mt-2 small text-muted">
          <div>
            <strong>Min Amount</strong> ₹{minAmount.toLocaleString()}
          </div>
          <div>
            <strong>Max Term</strong> {term}
          </div>
        </div>

        <ul className="mt-2 small text-muted ps-3">
          <li>Guaranteed returns</li>
          <li>Flexible tenure</li>
          <li>Premature withdrawal</li>
        </ul>

        <button
          onClick={handleOpen}
          className="btn btn-sm mt-auto fw-semibold"
          style={{ backgroundColor: "#900603", color: "white" }}
        >
          Open Account
        </button>
      </div>
    </div>
  );
}

function SummaryCard({ title, value, subtitle }) {
  return (
    <div className="card border-0 shadow-sm p-3 small">
      <div className="text-muted">{title}</div>
      <div className="h6 mt-1 fw-bold" style={{ color: "#900603" }}>
        {value}
      </div>
      <div className="text-secondary small">{subtitle}</div>
    </div>
  );
}

function formatDate(dateStr) {
  try {
    const d = new Date(dateStr);
    return d.toLocaleDateString();
  } catch {
    return dateStr;
  }
}
