import React, { useState } from 'react';

const AadharVerification = ({ userData, updateUserData, nextStep, prevStep }) => {
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [enteredOtp, setEnteredOtp] = useState("");
  const [message, setMessage] = useState(""); // Inline message
  const [messageType, setMessageType] = useState(""); // 'success' | 'error' | 'info'

  const handleChange = (e) => updateUserData({ [e.target.name]: e.target.value });

  const sendOtp = () => {
    if (userData.aadharNumber.length === 12) {
      const generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();
      setOtp(generatedOtp);
      setOtpSent(true);
      setMessage(`A test OTP has been sent: ${generatedOtp}`);
      setMessageType('info');
    } else {
      setMessage("Please enter a valid 12-digit Aadhar number.");
      setMessageType('error');
    }
  };

  const verifyOtp = () => {
    if (enteredOtp === otp && enteredOtp !== "") {
      setMessage("✅ Aadhar Verified Successfully!");
      setMessageType('success');
      setTimeout(() => nextStep(), 1000); // Move to next step after 1s
    } else {
      setMessage("❌ Incorrect OTP. Please try again.");
      setMessageType('error');
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Aadhar Verification</h2>
      <div className="mb-4">
        <label className="block text-gray-600 mb-2">Aadhar Number</label>
        <input
          type="text"
          name="aadharNumber"
          value={userData.aadharNumber}
          onChange={handleChange}
          placeholder="Enter your 12-digit Aadhar Number"
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none"
        />
      </div>

      {!otpSent ? (
        <button
          onClick={sendOtp}
          disabled={userData.aadharNumber.length !== 12}
          className={`w-full px-6 py-2 rounded-lg transition ${
            userData.aadharNumber.length === 12
              ? 'bg-[#900603] hover:bg-red-700 text-white'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
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
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none mb-2"
          />

          {/* Inline message */}
          {message && (
            <p
              className={`text-sm mb-4 ${
                messageType === 'success'
                  ? 'text-green-600'
                  : messageType === 'error'
                  ? 'text-red-600'
                  : 'text-blue-600'
              }`}
            >
              {message}
            </p>
          )}

          <div className="flex justify-between gap-2">
            <button
              onClick={prevStep}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 flex-1 px-4 py-2 rounded-lg transition"
            >
              Back
            </button>
            <button
              onClick={sendOtp}
              className="bg-[#900603] hover:bg-red-700 text-white flex-1 px-4 py-2 rounded-lg transition"
            >
              Resend OTP
            </button>
            <button
              onClick={verifyOtp}
              disabled={enteredOtp.length !== 6}
              className={`flex-1 px-4 py-2 rounded-lg transition ${
                enteredOtp.length === 6
                  ? 'bg-[#900603] hover:bg-red-700 text-white'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              Verify OTP
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AadharVerification;
