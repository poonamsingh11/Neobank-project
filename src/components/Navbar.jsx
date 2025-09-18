import { Link, NavLink } from "react-router-dom";
import {
  Bell, Banknote, User, CreditCard, DollarSign,
  Repeat, TrendingUp, Settings, AlertCircle, LayoutDashboard, Menu
} from "lucide-react";

import neoBankLogo from "../assets/neobank-logo.png";
import { useState } from "react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [secondaryOpen, setSecondaryOpen] = useState(false);

  const menuItems = [
    { name: "Dashboard", icon: <LayoutDashboard size={18} />, path: "/" },
    { name: "My Account", icon: <User size={18} />, path: "/myaccount" },
    { name: "Deposit", icon: <CreditCard size={18} />, path: "/deposit" },
    { name: "Loan", icon: <DollarSign size={18} />, path: "/loan" },
    { name: "Money Transfer", icon: <Repeat size={18} />, path: "/money-transfer" },
    { name: "Investment", icon: <TrendingUp size={18} />, path: "/investment" },
    { name: "Cards", icon: <CreditCard size={18} />, path: "/cards" },
    { name: "Service", icon: <Settings size={18} />, path: "/Services" },
    { name: "Setting", icon: <Settings size={18} />, path: "/setting" },
    { name: "Complaint", icon: <AlertCircle size={18} />, path: "/complaint" },
  ];

  return (
    <>
      {/* Main Navbar */}
      <nav className="navbar navbar-expand-md navbar-light bg-white shadow-sm fixed-top">
        <div className="container-fluid">
          <Link
            to="/homepage"
            className="navbar-brand d-flex align-items-center fw-bold text-danger"
          >
            <div style={{ height: '40px', width: '40px' }}>
              <img
                src={neoBankLogo}
                alt="NeoBank Logo"
                className="me-2"
              />
            </div>
            <span className="ms-3 fw-bold fs-4 text-uppercase" style={{ color: "#950606" }}>
              NeoBank John
            </span>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu size={24} />
          </button>

          <form className="d-none d-md-flex flex-grow-1 mx-md-3">
            <input
              type="text"
              className="form-control"
              style={{ maxWidth: "500px", marginLeft: '30px' }}
              placeholder="Search users, transactions..."
            />
          </form>

          <div className="d-flex align-items-center ms-auto">
            <button className="btn position-relative me-3">
              <Bell size={22} />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                3
              </span>
            </button>

            <div className="d-flex align-items-center">
              <div
                className="rounded-circle bg-danger text-white d-flex align-items-center justify-content-center fw-bold me-2"
                style={{ width: "32px", height: "32px" }}
              >
                JD
              </div>
              <span className="fw-semibold text-dark me-2">John Doe</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Secondary Navbar (Menu Items) */}
      <div className="bg-light pt-2 shadow-sm border-top mt-3">
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm border-top border-bottom border-dark mt-5">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              onClick={() => setSecondaryOpen(!secondaryOpen)}
            >
              <Menu size={22} />
            </button>

            <div className={`navbar-collapse ${secondaryOpen ? "show" : ""}`} id="secondaryNav">
              <ul className="navbar-nav mx-auto flex-wrap">
                {menuItems.map((item) => (
                  <li className="nav-item" key={item.name}>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `nav-link d-flex align-items-center fw-bold px-3 py-2 rounded `
                      }
                      style={({ isActive }) => ({
                        backgroundColor: isActive ? "#950606" : "transparent",
                        color: isActive ? "white" : "#333",
                        transition: "all 0.3s ease",
                      })}
                      onClick={() => setSecondaryOpen(false)}
                    >
                      <span className="me-2">{item.icon}</span>
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="bg-light shadow-lg border-top d-lg-none"
          style={{
            position: 'absolute',
            top: '70px',
            left: 0,
            right: 0,
            zIndex: 9999,
            borderRadius: '0 0 10px 10px',
            overflow: 'hidden',
            animation: 'slideDown 0.3s ease'
          }}>
          <div className="container-fluid py-3">
            <ul className="nav flex-column">
              {menuItems.map((item) => (
                <li className="nav-item mb-2" key={item.name}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `nav-link d-flex align-items-center fw-semibold px-3 py-2 rounded shadow-sm`
                    }
                    style={({ isActive }) => ({
                      backgroundColor: isActive ? "#e0e0e0" : "#fff",
                      color: isActive ? "#000" : "#333",
                      transition: "all 0.3s ease",
                    })}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="me-3">{item.icon}</span>
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>

            <style>
              {`
                @keyframes slideDown {
                  0% { transform: translateY(-20px); opacity: 0; }
                  100% { transform: translateY(0); opacity: 1; }
                }
              `}
            </style>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
