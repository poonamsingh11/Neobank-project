import React, { useState } from "react";
import PersonalDetails from "./PersonalDetails";
import AadharVerification from "./AadharVerification";
import PANVerification from "./PANVerification";
import AccountTypeSelection from "./AccountTypeSelection";
import VideoKYC from "./VideoKYC";

const Welcome = () => {
  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState({
    mobileNumber: "",
    fullName: "",
    email: "",
    aadharNumber: "",
    panNumber: "",
    accountType: "",
    kycVerified: false,
  });

  const updateUserData = (data) =>
    setUserData((prev) => ({ ...prev, ...data }));

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const steps = ["Personal", "Aadhar", "PAN", "Account Type", "Video KYC"];

  return (
    <div className="min-h-screen bg-gradient-to-r from-red-50 to-red-100 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-8 border border-red-200">
        {/* Header */}
        <div className="text-center mb-6">
          <img
            src="src/assets/neobank-logo.png"
            alt="NeoBank"
            className="mx-auto mb-3 w-28"
          />
          <h1 className="text-3xl font-bold text-red-700">NeoBank Account Open</h1>
          <p className="text-gray-500 mt-1">Complete your account setup in easy steps</p>
        </div>

        {/* Stepper */}
        <div className="flex justify-between items-center mb-8 relative">
          {steps.map((label, index) => (
            <div key={index} className="flex-1 relative flex flex-col items-center">
              {index !== steps.length - 1 && (
                <div className="absolute top-1/2 left-1/2 w-full h-1 bg-red-200 z-0"></div>
              )}
              <div
                className={`z-10 w-10 h-10 flex items-center justify-center rounded-full font-bold text-white ${
                  step === index + 1
                    ? "bg-red-600 shadow-lg scale-110 transition-transform duration-300"
                    : "bg-red-200"
                }`}
              >
                {index + 1}
              </div>
              <span className="mt-2 text-xs text-gray-600">{label}</span>
            </div>
          ))}
        </div>

        {/* Step Content */}
        <div className="p-4">
          {step === 1 && (
            <PersonalDetails
              userData={userData}
              updateUserData={updateUserData}
              nextStep={nextStep}
            />
          )}
          {step === 2 && (
            <AadharVerification
              userData={userData}
              updateUserData={updateUserData}
              nextStep={nextStep}
              prevStep={prevStep}
            />
          )}
          {step === 3 && (
            <PANVerification
              userData={userData}
              updateUserData={updateUserData}
              nextStep={nextStep}
              prevStep={prevStep}
            />
          )}
          {step === 4 && (
            <AccountTypeSelection
              userData={userData}
              updateUserData={updateUserData}
              nextStep={nextStep}
              prevStep={prevStep}
            />
          )}
          {step === 5 && (
            <VideoKYC
              userData={userData}
              setUserData={setUserData}
              prevStep={prevStep}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Welcome;
