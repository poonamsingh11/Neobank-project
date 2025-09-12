
import { Link } from "react-router-dom";
import { Bell, ChevronDown } from "lucide-react"; 

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 shadow-lg text-white">
     
      <div className="flex items-center space-x-3">
        <div className="bg-white text-orange-600 font-bold text-xl px-3 py-1 rounded-full shadow-md">
          N
        </div>
        <span className="font-bold text-xl tracking-wide">NeoBank</span>
        <span className="ml-2 text-xs bg-white/20 px-2 py-0.5 rounded-full">
          Dashboard
        </span>
      </div>



      {/* Links */}
      <div className="hidden md:flex space-x-8 font-medium">
        <Link to="/accounts" className="hover:text-yellow-300 transition">My Accounts</Link>
        <Link to="/deposits" className="hover:text-yellow-300 transition">Deposits</Link>
        <Link to="/loans" className="hover:text-yellow-300 transition">Loans</Link>
        <div className="relative group">
          <Link to="/money-transfer" className="flex items-center hover:text-yellow-300 transition">
            Money Transfer <ChevronDown size={16} className="ml-1" />
          </Link>
          {/* Dropdown */}
          <div className="absolute hidden group-hover:block bg-white text-gray-800 rounded shadow-md mt-2 w-40">
            <Link className="block px-4 py-2 hover:bg-gray-100" to="/money-transfer">Transfer Money</Link>
            <Link className="block px-4 py-2 hover:bg-gray-100" to="/history">Transfer History</Link>
          </div>
        </div>
        <Link to="/investment" className="hover:text-yellow-300 transition">Investment</Link>
        <Link to="/services" className="hover:text-yellow-300 transition">Services</Link>
        <Link to="/cards" className="hover:text-yellow-300 transition">Cards</Link>
        <div className="relative group">
          <Link to="/settings" className="flex items-center hover:text-yellow-300 transition">
            Settings <ChevronDown size={16} className="ml-1" />
          </Link>
          {/* Dropdown */}
          <div className="absolute hidden group-hover:block bg-white text-gray-800 rounded shadow-md mt-2 w-40">
            <Link className="block px-4 py-2 hover:bg-gray-100" to="/profile">Profile</Link>
            <Link className="block px-4 py-2 hover:bg-gray-100" to="/security">Security</Link>
          </div>
        </div>
        <Link to="/complaints" className="hover:text-yellow-300 transition">Complaint/Feedback</Link>
      </div>

      {/* Profile */}
      <div className="flex items-center space-x-4">
        <button className="relative hover:scale-110 transition">
          <Bell size={22} />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        <div className="flex items-center space-x-2">
          <img
            src="https://i.pravatar.cc/40"
            alt="profile"
            className="w-8 h-8 rounded-full border-2 border-white"
          />
          <span className="font-semibold">Sonali Jakapure</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
