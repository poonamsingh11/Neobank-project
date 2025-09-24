// src/components/Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-dark mt-5 pt-5">
      <div className="container">
        <div className="row g-4 mb-4">
          {/* Company Info */}
          <div className="col-md-3 text-start">
            <div className="d-flex align-items-center mb-2">
              <img src="neobank-logo.png" alt="Neobank Logo" style={{ width: "50px", height: "50px" }} />
              <h2 className="ms-2 mb-0" style={{ color: "#b22222", fontSize: "1.5rem" }}>NeoBank</h2>
            </div>
            <p className="text-secondary">Your trusted digital bank for all financial needs.</p>
          </div>

          {/* Quick Links */}
          <div className="col-md-2">
            <h5 style={{ color: "#b22222" }}>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-dark text-decoration-none">Accounts</a></li>
              <li><a href="/" className="text-dark text-decoration-none">Loans</a></li>
              <li><a href="/" className="text-dark text-decoration-none">Cards</a></li>
              <li><a href="/" className="text-dark text-decoration-none">Services</a></li>
              <li><a href="/" className="text-dark text-decoration-none">Support</a></li>
            </ul>
          </div>

          {/* Customer Support */}
          <div className="col-md-2">
            <h5 style={{ color: "#b22222" }}>Customer Support</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-dark text-decoration-none">Help Center</a></li>
              <li><a href="/" className="text-dark text-decoration-none">FAQs</a></li>
              <li><a href="/" className="text-dark text-decoration-none">Report an Issue</a></li>
              <li><a href="/" className="text-dark text-decoration-none">Feedback</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-3">
            <h5 style={{ color: "#b22222" }}>Contact</h5>
            <p className="text-secondary mb-1">Email: support@neobank.com</p>
            <p className="text-secondary mb-1">Phone: +91 12345 67890</p>
            <p className="text-secondary mb-0">Address: Mumbai, India</p>
          </div>

          {/* Social Media */}
          <div className="col-md-2">
            <h5 style={{ color: "#b22222" }}>Follow Us</h5>
            <div className="d-flex gap-2">
              <span style={{ fontSize: "1.4rem", cursor: "pointer" }}>🐦</span>
              <span style={{ fontSize: "1.4rem", cursor: "pointer" }}>📘</span>
              <span style={{ fontSize: "1.4rem", cursor: "pointer" }}>📸</span>
              <span style={{ fontSize: "1.4rem", cursor: "pointer" }}>💼</span>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center border-top pt-3">
          <p className="mb-2 mb-md-0 text-secondary">&copy; 2025 NeoBank. All rights reserved.</p>
          <div className="d-flex gap-2">
            <a href="/" className="text-secondary text-decoration-none">Privacy Policy</a>|
            <a href="/" className="text-secondary text-decoration-none">Terms of Service</a>|
            <a href="/" className="text-secondary text-decoration-none">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
