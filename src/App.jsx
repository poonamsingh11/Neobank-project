import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import DashBoard from "./pages/DashBoard";
import Loan from "./pages/LOAN/Loan";
import LoanApplicationForm from "./pages/LOAN/LoanApplicationForm";
import PersonalLoanForm from "./pages/LOAN/PersonalLoanForm";
import HomeLoanForm from "./pages/LOAN/HomeLoanForm";
import CarLoanForm from "./pages/LOAN/CarLoanForm";
import EducationLoanForm from "./pages/LOAN/EducationLoanForm";
import GoldLoanForm from "./pages/LOAN/GoldLoanForm";
import BusinessLoanForm from "./pages/LOAN/BusinessLoanForm";
import ViewLoanStatement from "./pages/LOAN/ViewLoanStatement";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Main Dashboard */}
        <Route path="/" element={<DashBoard />} />

        {/* Loan Overview & Generic Form */}
        <Route path="/loan" element={<Loan />} />
        <Route path="/apply-loan" element={<LoanApplicationForm />} />

        {/* Individual Loan Forms */}
        <Route path="/personal-loan" element={<PersonalLoanForm />} />
        <Route path="/home-loan" element={<HomeLoanForm />} />
        <Route path="/car-loan" element={<CarLoanForm />} />
        <Route path="/education-loan" element={<EducationLoanForm />} />
        <Route path="/gold-loan" element={<GoldLoanForm />} />
        <Route path="/business-loan" element={<BusinessLoanForm />} />
        <Route path="/view-loan-statement" element={<ViewLoanStatement />} />
      </Routes>
    </Router>
  );
};

export default App;
