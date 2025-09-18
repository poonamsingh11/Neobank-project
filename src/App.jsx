import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";

// Pages
import DashBoard from "./pages/DashBoard";
import Services from "./pages/Services"; // Services_Rameshwar branch
import DepositsPage from "./pages/Deposits/DepositsPage"; // main branch
import FixedDepositForm from "./pages/Deposits/FixedDepositForm";
import RDPage from "./pages/Deposits/RDPage";
import FdCalculator from "./pages/Deposits/FdCalculator";
import TaxSaverFD from "./pages/Deposits/TaxSaverFD";

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      {/* Navbar हर page पर common */}
      <Navbar />
      <Routes>
        {/* Home/Dashboard */}
        <Route path="/" element={<DashBoard />} />

        {/* Services */}
        <Route path="/Services" element={<Services />} />

        {/* Deposits Main Page */}
        <Route path="/deposit" element={<DepositsPage />} />

        {/* Fixed Deposit */}
        <Route path="/fd-calculator" element={<FdCalculator />} />
        <Route path="/fixed-deposit" element={<FixedDepositForm />} />

        {/* Recurring Deposit */}
        <Route path="/recurring-deposit" element={<RDPage />} />
        <Route path="/tax-saver-fd11" element={<TaxSaverFD />} />
      </Routes>
    </Router>
  );
};

export default App;
