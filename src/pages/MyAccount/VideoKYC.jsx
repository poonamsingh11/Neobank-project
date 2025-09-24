import React, { useState, useRef } from 'react';

const VideoKYC = ({ prevStep }) => {
  const [isVerifying, setIsVerifying] = useState(false);
  const [kycStatus, setKycStatus] = useState("pending"); // pending, in_progress, completed, failed
  const [message, setMessage] = useState(""); // Status message
  const videoRef = useRef(null);

  const startKyc = () => {
    setIsVerifying(true);
    setKycStatus("in_progress");
    setMessage("Connecting with a verification officer... This is a simulated process.");

    setTimeout(() => {
      setIsVerifying(false);
      setKycStatus("completed");
      setMessage("🎉 Your Video KYC has been successfully completed!");
    }, 5000);
  };

  const getButtonText = () => {
    switch (kycStatus) {
      case "pending":
        return "Start KYC";
      case "in_progress":
        return "Verifying...";
      case "completed":
        return "KYC Completed";
      default:
        return "Start KYC";
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Video KYC</h2>
      <p className="mb-4 text-gray-600">
        Complete your video KYC to finish your account setup. This is a crucial step for identity verification.
      </p>

      <div className="relative bg-gray-200 aspect-video rounded-lg overflow-hidden flex items-center justify-center mb-4">
        <video 
          ref={videoRef} 
          autoPlay 
          playsInline 
          muted 
          className="w-full h-full object-cover"
        >
          <source 
            src="https://assets.mixkit.co/videos/preview/mixkit-online-learning-with-laptop-and-coffee-4161-large.mp4" 
            type="video/mp4" 
          />
        </video>
        {kycStatus === "pending" && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-70 text-white text-lg">
            <span className="animate-pulse">Click "Start KYC" to begin...</span>
          </div>
        )}
      </div>

      {/* Inline message */}
      {message && (
        <p className={`text-sm mb-4 ${kycStatus === "completed" ? "text-green-600" : "text-blue-600"}`}>
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
          onClick={startKyc}
          disabled={isVerifying || kycStatus === "completed"}
          className={`flex-1 px-4 py-2 rounded-lg transition text-white ${
            kycStatus === "completed"
              ? "bg-green-500 cursor-not-allowed"
              : isVerifying
              ? "bg-red-400 cursor-not-allowed"
              : "bg-[#900603] hover:bg-red-700"
          }`}
        >
          {getButtonText()}
        </button>
      </div>
    </div>
  );
};

export default VideoKYC;
