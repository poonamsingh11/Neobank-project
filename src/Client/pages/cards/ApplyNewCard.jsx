


import React, { useState } from "react";
import "../cards/NewCardForm.css";

const initialFormData = {
  fullName: "",
  email: "",
  phone: "",
  dob: "",
  address: "",
  income: "",
  employment: "",
  accountNumber: "",
  accountType: "",
  branch: "",
  cibil: "",
  pan: "",
  aadhaar: "",
  creditLimit: "",
  existingCard: "",
};

function ApplyNewCard() {
  const [selectedCard, setSelectedCard] = useState(""); // "Credit Card" or "Debit Card"
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`✅ Application submitted for ${selectedCard}!\n\nName: ${formData.fullName}`);
    setSelectedCard("");
    setFormData(initialFormData);
  };

  const renderDebitFields = () => (
    <>
      <div className="form-group">
        <label lassName="label">Bank Account Number:</label>
        <input type="text" name="accountNumber" value={formData.accountNumber} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label lassName="label">Account Type:</label>
        <select name="accountType" value={formData.accountType} onChange={handleChange} required>
          <option value="">-- Select --</option>
          <option value="Savings">Savings</option>
          <option value="Current">Current</option>
        </select>
      </div>
      <div className="form-group">
        <label lassName="label">Branch Name:</label>
        <input type="text" name="branch" value={formData.branch} onChange={handleChange} required />
      </div>
    </>
  );

  const renderCreditFields = () => (
    <>
      <div className="form-group">
        <label className="label">Annual Income:</label>
        <input type="number" name="income" value={formData.income} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label className="label">Employment Type:</label>
        <select name="employment" value={formData.employment} onChange={handleChange} required>
          <option value="">-- Select --</option>
          <option value="Salaried">Salaried</option>
          <option value="Self-Employed">Self-Employed</option>
          <option value="Student">Student</option>
          <option value="Retired">Retired</option>
        </select>
      </div>
      <div className="form-group">
        <label className="label">PAN Number:</label>
        <input type="text" name="pan" value={formData.pan} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label className="label">Aadhaar Number (Optional):</label>
        <input type="text" name="aadhaar" value={formData.aadhaar} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label className="label">CIBIL Score:</label>
        <input
          type="number"
          name="cibil"
          value={formData.cibil}
          onChange={handleChange}
          min="300"
          max="900"
          placeholder="300 - 900"
        />
      </div>
      <div className="form-group">
        <label className="label">Credit Limit Required (Optional):</label>
        <input type="number" name="creditLimit" value={formData.creditLimit} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label className="label">Existing Credit Card Holder?</label>
        <select name="existingCard" value={formData.existingCard} onChange={handleChange}>
          <option value="">-- Select --</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>
    </>
  );

  return (
    <div className="cards-container">
    <h1 className="text-center mb-4 fs-2 font-bold" style={{ color: "#950606" }}>
  {selectedCard ? `Apply for ${selectedCard}` : "Choose a Card to Apply"}
</h1>

      {!selectedCard ? (
        <div className="card-options d-flex justify-content-center gap-3 flex-wrap " style={{ color: "#950606" }}>
          <button className="apply-btn credit" onClick={() => setSelectedCard("Credit Card")}>
            Apply for Credit Card
          </button>
          <button className="apply-btn debit" onClick={() => setSelectedCard("Debit Card")}>
            Apply for Debit Card
          </button>
        </div>
      ) : (
        <form className="apply-form" onSubmit={handleSubmit}>
          {/* <h3 className="mb-4">Apply for {selectedCard}</h3> */}

          {/* Common Fields */}
          <div className="form-group">
            <label className="label">Full Name:</label>
            <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label className="label">Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label className="label">Phone Number:</label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label className="label">Date of Birth:</label>
            <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label className="label">Address:</label>
            <textarea name="address" value={formData.address} onChange={handleChange} required></textarea>
          </div>

          {/* Conditional Fields */}
          {selectedCard === "Debit Card" && renderDebitFields()}
          {selectedCard === "Credit Card" && renderCreditFields()}

          {/* Form Buttons */}
          <div className="form-buttons d-flex justify-content-center gap-3 mt-4">
            <button type="button" className="cancel-btn" onClick={() => setSelectedCard("")}>
              Cancel
            </button>
            <button type="submit" className={`submit-btn ${selectedCard.toLowerCase().replace(" ", "-")}`}>
              Submit
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default ApplyNewCard;
