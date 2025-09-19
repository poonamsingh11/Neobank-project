import React, { useState } from "react";

const VideoKYC = ({ userData, setUserData, prevStep }) => {
  const [isVerified, setIsVerified] = useState(false);

  const handleVerification = () => {
    setIsVerified(true);
    setUserData({ ...userData, kycVerified: true });
    alert("KYC Completed Successfully!");
    navigate("/myAccount");
  };
  const navigate = useNavigate();

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Video KYC</h2>
      <p className="mb-4 text-gray-600">Complete your video KYC to finish account setup.</p>
      <div className="flex justify-between">
        <button
          onClick={prevStep}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-6 py-2 rounded-lg transition"
        >
          Back
        </button>
        <button
          onClick={handleVerification}
          disabled={isVerified}
          className={`px-6 py-2 rounded-lg text-white ${
            isVerified
              ? "bg-green-500 cursor-not-allowed"
              : "bg-red-600 hover:bg-red-700"
          } transition`}
        >
          {isVerified ? "Verified" : "Start KYC"}
        </button>
      </div>
    </div>
  );
};

export default VideoKYC;
