
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import {
  Bell, Banknote, User, CreditCard, DollarSign,
  Repeat, TrendingUp, Settings, AlertCircle, LayoutDashboard, Menu

} from "lucide-react";

import neoBankLogo from "../assets/neobank-logo.png";
import { useState } from "react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const menuItems = [
    { name: "Dashboard", icon: <LayoutDashboard size={18} />, path: "/dashboard" },
    { name: "My Account", icon: <User size={18} />, path: "/myaccount" },
    { name: "Deposit", icon: <CreditCard size={18} />, path: "/deposit" },
    { name: "Loan", icon: <DollarSign size={18} />, path: "/loan" },
    { name: "Money Transfer", icon: <Repeat size={18} />, path: "/money-transfer" },
    { name: "Investment", icon: <TrendingUp size={18} />, path: "/Investment" },
    { name: "Cards", icon: <CreditCard size={18} />, path: "/cards" },
    { name: "Service", icon: <Settings size={18} />, path: "/service" },
    { name: "Setting", icon: <Settings size={18} />, path: "/setting" },
    { name: "Complaint", icon: <AlertCircle size={18} />, path: "/complaint" },
  ];

  return (
    <>

      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
        <div className="container-fluid">

          <Link
            to="/homepage"
            className="navbar-brand d-flex align-items-center fw-bold text-danger"
            style={{ width: "300px" }}
          >

            <div style={{ height: '40px', width: '40px', marginLeft: '50px' }}>
              <img
                src={neoBankLogo}
                alt="NeoBank Logo"
                className="me-30"
              />
            </div>


            <span className="ms-3 fw-bold text-red fs-4 text-uppercase">
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



          <form className="d-none d-md-flex flex-grow-1 me-15 ">
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
              <span className="fw-semibold text-dark me-20">John Doe</span>
            </div>

          </div>
        </div>

      </nav>


      <div className="bg-light pt-2 shadow-sm border-top d-none d-lg-block mt-15">
        <div className="container-fluid">
          <ul className="nav justify-content-center">
            {menuItems.map((item) => (
              <li className="nav-item" key={item.name}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `nav-link d-flex align-items-center fw-semibold px-4 py-3 me-2 rounded `
                  }
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? "#d3d3d3" : "transparent",
                    color: isActive ? "#000" : "#333",
                    transition: "all 0.3s ease",
                  })}
                >
                  <span className="me-2">{item.icon}</span>
                  {item.name}
                </NavLink>

              </li>
            ))}
          </ul>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="bg-light pt-2 shadow-sm border-top d-lg-none">
          <div className="container-fluid">
            <ul className="nav flex-column">
              {menuItems.map((item) => (
                <li className="nav-item mb-1" key={item.name}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `nav-link d-flex align-items-center fw-semibold px-3 py-2 rounded`
                    }
                    style={({ isActive }) => ({
                      backgroundColor: isActive ? "#d3d3d3" : "transparent",
                      color: isActive ? "#000" : "#333",
                      transition: "all 0.3s ease",
                      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                    })}
                  >
                    <span className="me-2">{item.icon}</span>
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

