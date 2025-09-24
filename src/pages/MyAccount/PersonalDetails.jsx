import React from 'react';

const PersonalDetails = ({ userData, updateUserData, nextStep }) => {
  const handleChange = (e) => {
    updateUserData({ [e.target.name]: e.target.value });
  };

  const isFormValid = userData.fullName && userData.mobileNumber && userData.email;

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Personal Details</h2>
      <div className="mb-4">
        <label className="block text-gray-600 mb-2">Full Name</label>
        <input
          type="text"
          name="fullName"
          value={userData.fullName}
          onChange={handleChange}
          placeholder="Enter your full name"
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-600 mb-2">Mobile Number</label>
        <input
          type="text"
          name="mobileNumber"
          value={userData.mobileNumber}
          onChange={handleChange}
          placeholder="Enter your mobile number"
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-600 mb-2">Email</label>
        <input
          type="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none"
        />
      </div>
      <div className="flex justify-end mt-6">
        <button
          onClick={nextStep}
          disabled={!isFormValid}
          className={`px-6 py-2 rounded-lg transition ${
            isFormValid ? 'bg-red-600 hover:bg-red-700 text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};
export default PersonalDetails;
