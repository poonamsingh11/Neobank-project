import React, { useState } from "react";
import PersonalDetails from "./PersonalDetails";
import AadharVerification from "./AadharVerification";
import PANVerification from "./PANVerification";
import VideoKYC from "./VideoKYC";

const Welcome = () => {
  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState({
    mobileNumber: "",
    fullName: "",
    email: "",
    aadharNumber: "",
    panNumber: "",
    kycVerified: false,
  });
  const [modal, setModal] = useState(null); // For OTP messages

  const updateUserData = (data) =>
    setUserData((prev) => ({ ...prev, ...data }));

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const steps = ["Personal", "Aadhar", "PAN", "Video KYC"];

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
        {/* Header */}
        <div className="text-center mb-6">
          <img
            src="src/assets/neobank-logo.png"
            alt="NeoBank"
            className="mx-auto mb-3 w-24"
          />
          <h1 className="text-2xl font-bold text-red-700">
            NeoBank Account Open
          </h1>
          <p className="text-gray-500 mt-1 text-sm">
            Complete your account setup in easy steps
          </p>
        </div>

        {/* Stepper */}
        <div className="flex justify-between items-center mb-6 relative">
          {steps.map((label, index) => (
            <div
              key={index}
              className="flex-1 relative flex flex-col items-center"
            >
              {index !== steps.length - 1 && (
                <div className="absolute top-1/2 left-1/2 w-full h-1 bg-gray-200 z-0"></div>
              )}
              <div
                className={`z-10 w-9 h-9 flex items-center justify-center rounded-full font-bold text-white text-sm ${
                  step === index + 1
                    ? "bg-red-600 shadow-md scale-110 transition-transform duration-300"
                    : "bg-gray-300"
                }`}
              >
                {index + 1}
              </div>
              <span className="mt-2 text-xs text-gray-600">{label}</span>
            </div>
          ))}
        </div>

        {/* Step Content */}
        <div className="p-3">
          {step === 1 && (
            <PersonalDetails
              userData={userData}
              updateUserData={updateUserData}
              nextStep={nextStep}
              inputSize="sm"
            />
          )}
          {step === 2 && (
            <AadharVerification
              userData={userData}
              updateUserData={updateUserData}
              nextStep={nextStep} // Moves to PAN after verification
              prevStep={prevStep}
              setModal={setModal}
              inputSize="sm"
            />
          )}
          {step === 3 && (
            <PANVerification
              userData={userData}
              updateUserData={updateUserData}
              nextStep={nextStep} // Moves to Video KYC after verification
              prevStep={prevStep}
              setModal={setModal}
              inputSize="sm"
            />
          )}
          {step === 4 && (
            <VideoKYC
              userData={userData}
              setUserData={setUserData}
              prevStep={prevStep}
              inputSize="sm"
            />
          )}
        </div>

        {/* Modal for OTP / verification messages */}
        {modal && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-96">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                {modal.title}
              </h3>
              <p className="text-gray-700 mb-6">{modal.message}</p>
              <button
                onClick={() => setModal(null)}
                className="w-full bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
              >
                OK
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Welcome;
