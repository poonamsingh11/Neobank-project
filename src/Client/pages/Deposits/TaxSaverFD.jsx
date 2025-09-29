import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TaxSaverFD = () => {
  const navigate = useNavigate(); 
  const [amount, setAmount] = useState(10000);
  const rate = 7.75;
  const term = 5; // 5 Years Fixed

  const maturity = (amount * Math.pow(1 + rate / 100, term)).toFixed(2);

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section
        className="text-center text-white py-16"
        style={{ backgroundColor: "#900603" }}
      >
        <h1 className="text-4xl font-bold mb-4">Tax Saver Fixed Deposit</h1>
        <p className="mb-6">
          Save tax under Section 80C & earn guaranteed <strong>7.75% returns</strong>
        </p>
         <div className="flex justify-center gap-4">
          <button 
            className="bg-white text-[#900603] px-6 py-3 rounded-lg font-semibold"
            onClick={() => navigate("/Client/fixed-deposit", { 
              state: { 
                type: "Tax Saver FD", 
                amount,
                duration: 0,        // default 0
                interestRate: 0,    // default 0
                maturity: 0         // default 0
              } 
            })}
          >
            Open FD Account
          </button>
          <button className="border border-white px-6 py-3 rounded-lg font-semibold">
            Know More
          </button>
        </div>
      </section>
        
      {/* Calculator */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold text-[#900603] mb-6">Calculate Your Returns</h2>
        <input
          type="number"
          value={amount}
          min={100}
          onChange={(e) => setAmount(e.target.value)}
          className="border rounded-lg p-3 mb-6 w-1/2"
        />
        <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-bold">Interest Rate</h3>
            <p className="text-[#900603] font-semibold text-xl">{rate}%</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-bold">Tenure</h3>
            <p className="text-[#900603] font-semibold text-xl">{term} Years</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-bold">Maturity Value</h3>
            <p className="text-[#900603] font-semibold text-xl">₹{maturity}</p>
          </div>
        </div>
        <p className="mt-4 text-gray-500 text-sm">
          *Premature withdrawal not allowed
        </p>
      </section>

      {/* Benefits */}
      <section className="py-16 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#900603] mb-10">Why Choose Tax Saver FD?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Save tax upto ₹1.5 Lakh under 80C",
            "100% Guaranteed & Safe Returns",
            "Start with just ₹100"
          ].map((benefit, i) => (
            <div key={i} className="bg-white p-6 rounded shadow">
              <h3 className="font-semibold mb-2">{benefit}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        className="text-center text-white py-16"
        style={{ backgroundColor: "#900603" }}
      >
        <h2 className="text-3xl font-bold mb-4">Start your Tax Saver FD Today</h2>
        <button 
          className="bg-white text-[#900603] px-8 py-3 rounded-xl font-semibold flex items-center gap-2 mx-auto"
          onClick={() => navigate("/Client/fixed-deposit", { 
            state: { 
              type: "Tax Saver FD", 
              amount,
              duration: 0,        // default 0
              interestRate: 0,    // default 0
              maturity: 0         // default 0
            } 
          })}
        >
          Open FD Account <ArrowRight size={18} />
        </button>
      </section>
    </div>
  );
};

export default TaxSaverFD;
