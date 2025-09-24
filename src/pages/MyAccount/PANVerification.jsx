import React, { useState } from 'react';

const PANVerification = ({ userData, updateUserData, nextStep, prevStep }) => {
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [enteredOtp, setEnteredOtp] = useState("");
  const [message, setMessage] = useState(""); // for OTP & verification messages
  const [messageType, setMessageType] = useState(""); // "success" or "error"

  const handleChange = (e) => updateUserData({ [e.target.name]: e.target.value });

  const sendOtp = () => {
    if (userData.panNumber.length === 10) {
      const generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();
      setOtp(generatedOtp);
      setOtpSent(true);
      setMessage(`A test OTP has been sent: ${generatedOtp}`);
      setMessageType("success");
    } else {
      setMessage("Please enter a valid 10-character PAN number.");
      setMessageType("error");
    }
  };

  const verifyOtp = () => {
    if (enteredOtp === otp && enteredOtp !== "") {
      setMessage("PAN Verified Successfully!");
      setMessageType("success");
      setTimeout(() => nextStep(), 1000); // proceed to next step after 1s
    } else {
      setMessage("Incorrect OTP. Please try again.");
      setMessageType("error");
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
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none"
        />
      </div>

      {!otpSent ? (
        <button
          onClick={sendOtp}
          disabled={userData.panNumber.length !== 10}
          className={`w-full px-6 py-2 rounded-lg transition ${
            userData.panNumber.length === 10
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

          {/* Display OTP / Verification message */}
          {message && (
            <p
              className={`text-sm mb-4 ${
                messageType === "success" ? "text-green-600" : "text-red-600"
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

export default PANVerification;
