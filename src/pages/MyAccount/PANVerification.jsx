import React, { useState } from "react";

const PANVerification = ({ userData, updateUserData, nextStep, prevStep }) => {
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [enteredOtp, setEnteredOtp] = useState("");

  const handleChange = (e) => updateUserData({ [e.target.name]: e.target.value });

  const sendOtp = () => {
    if (userData.panNumber.length === 10) {
      const generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();
      setOtp(generatedOtp);
      setOtpSent(true);
      alert(`OTP Sent: ${generatedOtp}`); // Now alert shows the correct OTP
    } else {
      alert("Enter valid 10-character PAN number");
    }
  };

  const verifyOtp = () => {
    if (enteredOtp === otp) {
      alert("PAN Verified Successfully!");
      nextStep();
    } else {
      alert("Incorrect OTP. Try again!");
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">PAN Verification</h2>

      <div className="mb-4">
        <label className="block text-gray-600 mb-2">PAN Number</label>
        <input
          type="text"
          name="panNumber"
          value={userData.panNumber}
          onChange={handleChange}
          placeholder="Enter your PAN Number"
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none"
        />
      </div>

      {!otpSent ? (
        <button
          onClick={sendOtp}
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition"
        >
          Send OTP
        </button>
      ) : (
        <div className="mt-4">
          <input
            type="text"
            placeholder="Enter OTP"
            value={enteredOtp}
            onChange={(e) => setEnteredOtp(e.target.value)}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none mb-4"
          />
          <div className="flex justify-between">
            <button
              onClick={prevStep}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-6 py-2 rounded-lg transition"
            >
              Back
            </button>
            <button
              onClick={verifyOtp}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition"
            >
              Verify OTP
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PANVerification;
