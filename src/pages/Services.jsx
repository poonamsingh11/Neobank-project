import React, { useState } from "react";
import "./services.css";

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  // 🔹 Categories with services
  const serviceCategories = [
    {
      category: "Accounts",
      services: [
        { label: "Open Savings Account", icon: "🏦" },
        { label: "Fixed Deposit", icon: "💰" },
        { label: "Recurring Deposit (RD)", icon: "🗓️" },
        { label: "Government Schemes (PPF/SSY)", icon: "🏦" },
      ],
    },
    {
      category: "Loans",
      services: [
        { label: "Loan Services", icon: "📄" },
        { label: "Loan Eligibility Check", icon: "📌" },
        { label: "EMI Calculator", icon: "🧮" },
      ],
    },
    {
      category: "Cards",
      services: [
        { label: "Credit Card Services", icon: "💳" },
        { label: "Block / Unblock Card", icon: "🛑" },
        { label: "Change Card PIN", icon: "🔐" },
        { label: "Set Spending Limit", icon: "📉" },
      ],
    },
    {
      category: "Payments",
      services: [
        { label: "Fund Transfer", icon: "💸" },
        { label: "UPI Payments", icon: "📲" },
        { label: "Bill Payments", icon: "🧾" },
        { label: "Add Beneficiary", icon: "👤" },
      ],
    },
    {
      category: "Digital Banking",
      services: [
        { label: "Mobile Banking Registration", icon: "📱" },
        { label: "Internet Banking Activation", icon: "🖥️" },
        { label: "Reset / Change Password", icon: "🔑" },
        { label: "e-Statement Subscription", icon: "🧾" },
      ],
    },
    {
      category: "Security & Support",
      services: [
        { label: "Report Fraud", icon: "⚠️" },
        { label: "Raise Service Request", icon: "🗣️" },
        { label: "Feedback / Complaint", icon: "✉️" },
        { label: "Stop Cheque Payment", icon: "❌" },
        { label: "Cheque Book Request", icon: "📜" },
      ],
    },
  ];

  // 🔹 Popular services
  const popularServices = [
    { label: "UPI Payments", icon: "📲" },
    { label: "Fund Transfer", icon: "💸" },
    { label: "Bill Payments", icon: "🧾" },
    { label: "Mobile Banking", icon: "📱" },
  ];

  // 🔹 Handle Proceed
  const handleProceed = (service) => {
    alert(`Proceeding with ${service}`);
    // In future: navigate(`/service/${service.toLowerCase().replace(/\s+/g, '-')}`);
  };

  return (
    <div className="services-container">
      <h1 className="services-title">Our Services</h1>
      <p className="services-subtitle">
        Explore all the banking services we provide
      </p>

      {/* Category-wise services */}
      {serviceCategories.map((cat, i) => (
        <div key={i} className="category-section">
          <h2 className="category-title">{cat.category}</h2>
          <div className="services-grid">
            {cat.services.map((service, j) => (
              <div
                key={j}
                className="service-card"
                onClick={() => setSelectedService(service.label)}
              >
                <span className="service-icon">{service.icon}</span>
                <p className="service-label">{service.label}</p>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Popular Services */}
      <div className="popular-services">
        <h2 className="popular-title">Popular Services</h2>
        <div className="popular-grid">
          {popularServices.map((service, index) => (
            <div
              key={index}
              className="popular-card"
              onClick={() => setSelectedService(service.label)}
            >
              <span className="popular-icon">{service.icon}</span>
              <p className="popular-label">{service.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedService && (
        <div className="modal-overlay" onClick={() => setSelectedService(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedService}</h2>
            <p>
              You have selected <strong>{selectedService}</strong>. Proceed
              further…
            </p>

            <div className="modal-actions">
              <button
                className="close-btn"
                onClick={() => setSelectedService(null)}
              >
                Close
              </button>
              <button
                className="proceed-btn"
                onClick={() => handleProceed(selectedService)}
              >
                Proceed
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="footer-container">
        <div className="footer-top">
          {/* Company Info */}
          <div className="footer-company">
            <div className="footer-logo"><img src="neobank-logo.png" alt="Neobank Logo" /></div>
            <h2>NeoBank</h2>
            <p>Your trusted digital bank for all financial needs.</p>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="/">Accounts</a>
              </li>
              <li>
                <a href="/">Loans</a>
              </li>
              <li>
                <a href="/">Cards</a>
              </li>
              <li>
                <a href="/">Services</a>
              </li>
              <li>
                <a href="/">Support</a>
              </li>
            </ul>
          </div>

          {/* Customer Support */}
          <div className="footer-support">
            <h3>Customer Support</h3>
            <ul>
              <li>
                <a href="/">Help Center</a>
              </li>
              <li>
                <a href="/">FAQs</a>
              </li>
              <li>
                <a href="/">Report an Issue</a>
              </li>
              <li>
                <a href="/">Feedback</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-contact">
            <h3>Contact</h3>
            <p>Email: support@neobank.com</p>
            <p>Phone: +91 12345 67890</p>
            <p>Address: Mumbai, India</p>
          </div>

          {/* Social Media */}
          <div className="footer-socials">
            <h3>Follow Us</h3>
            <span>🐦</span>
            <span>📘</span>
            <span>📸</span>
            <span>💼</span>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <p>&copy; 2025 NeoBank. All rights reserved.</p>
          <div className="footer-legal">
            <a href="/">Privacy Policy</a> |<a href="/"> Terms of Service</a> |
            <a href="/"> Security</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Services;
