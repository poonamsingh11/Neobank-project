import React from "react";

const AccountTypeSelection = ({ userData, updateUserData, nextStep, prevStep }) => {
  const selectAccount = (type) => {
    updateUserData({ accountType: type });
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Select Account Type</h2>

      <div className="grid grid-cols-2 gap-4 mb-6">
        {["Savings", "Current", "Salary", "Joint"].map((type) => (
          <button
            key={type}
            onClick={() => selectAccount(type)}
            className={`p-4 rounded-lg border transition hover:shadow-lg font-semibold ${
              userData.accountType === type
                ? "bg-red-100 border-red-400"
                : "bg-white border-gray-300"
            }`}
          >
            {type} Account
          </button>
        ))}
      </div>

      <div className="flex justify-between mt-4">
        <button
          onClick={prevStep}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-6 py-2 rounded-lg transition"
        >
          Back
        </button>
        <button
          onClick={nextStep}
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AccountTypeSelection;
