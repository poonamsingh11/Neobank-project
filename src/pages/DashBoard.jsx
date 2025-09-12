const DashBoard = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Welcome Card */}
      <div className="bg-white rounded-lg shadow p-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Welcome Back, Sonali Jakapure!</h1>
          <p className="text-gray-600">Here's your financial overview for today</p>
        </div>
        <div className="text-right">
          <p className="text-gray-500">Total Balance</p>
          <p className="text-2xl font-bold text-orange-600">₹3,73,731.00</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-6 bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold">Quick Actions</h2>
        <p className="text-gray-500 mb-4">Frequently used banking services</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { label: "Send Money", color: "bg-blue-500", icon: "✈️" },
            { label: "Pay Bills", color: "bg-green-500", icon: "📱" },
            { label: "Add Money", color: "bg-purple-500", icon: "➕" },
            { label: "Investments", color: "bg-orange-500", icon: "📈" },
            { label: "Fixed Deposit", color: "bg-pink-500", icon: "🐷" },
            { label: "Cards", color: "bg-indigo-500", icon: "💳" },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center p-4 border rounded hover:shadow cursor-pointer">
              <div className={`${item.color} text-white w-12 h-12 flex items-center justify-center rounded-lg text-xl mb-2`}>
                {item.icon}
              </div>
              <p className="text-sm font-medium">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
