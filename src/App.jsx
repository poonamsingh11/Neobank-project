import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";

// Dashboard
import DashBoard from "./pages/DashBoard";

// MyAccounts Pages
import MyAccounts from "./pages/MyAccount/MyAccounts";
import Welcome from "./pages/MyAccount/welcome";
import UpdateKYC from "./pages/MyAccount/UpdateKYC";
import AccountStatementForm from "./pages/MyAccount/AccountStatement";
import AccountClosure from "./pages/MyAccount/AccountClosure";
import Chequebook from "./pages/MyAccount/Chequebook";

// Loan Pages
import Loan from "./pages/LOAN/Loan";
import LoanApplicationForm from "./pages/LOAN/LoanApplicationForm";
import PersonalLoanForm from "./pages/LOAN/PersonalLoanForm";
import HomeLoanForm from "./pages/LOAN/HomeLoanForm";
import CarLoanForm from "./pages/LOAN/CarLoanForm";
import EducationLoanForm from "./pages/LOAN/EducationLoanForm";
import GoldLoanForm from "./pages/LOAN/GoldLoanForm";
import BusinessLoanForm from "./pages/LOAN/BusinessLoanForm";
import ViewLoanStatement from "./pages/LOAN/ViewLoanStatement";

// Services & Deposits Pages
import Services from "./pages/Services";
import DepositsPage from "./pages/Deposits/DepositsPage";
import FixedDepositForm from "./pages/Deposits/FixedDepositForm";
import RDPage from "./pages/Deposits/RDPage";
import FdCalculator from "./pages/Deposits/FdCalculator";
import TaxSaverFD from "./pages/Deposits/TaxSaverFD";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <Router>
      {/* Navbar हर page पर common */}
      <Navbar />
      <Routes>
        {/* Home/Dashboard */}
        <Route path="/" element={<DashBoard />} />

        {/* My Accounts */}
        <Route path="/myAccount" element={<MyAccounts />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/update-kyc" element={<UpdateKYC />} />
        <Route path="/account-statement" element={<AccountStatementForm />} />
        <Route path="/close-account" element={<AccountClosure />} />
        <Route path="/chequebook" element={<Chequebook />} />

        {/* Loan Pages */}
        <Route path="/loan" element={<Loan />} />
        <Route path="/apply-loan" element={<LoanApplicationForm />} />
        <Route path="/personal-loan" element={<PersonalLoanForm />} />
        <Route path="/home-loan" element={<HomeLoanForm />} />
        <Route path="/car-loan" element={<CarLoanForm />} />
        <Route path="/education-loan" element={<EducationLoanForm />} />
        <Route path="/gold-loan" element={<GoldLoanForm />} />
        <Route path="/business-loan" element={<BusinessLoanForm />} />
        <Route path="/view-loan-statement" element={<ViewLoanStatement />} />

        {/* Services */}
        <Route path="/Services" element={<Services />} />

        {/* Deposits Main Page */}
        <Route path="/deposit" element={<DepositsPage />} />
        <Route path="/fd-calculator" element={<FdCalculator />} />
        <Route path="/fixed-deposit" element={<FixedDepositForm />} />
        <Route path="/recurring-deposit" element={<RDPage />} />
        <Route path="/tax-saver-fd11" element={<TaxSaverFD />} />
      </Routes>
    </Router>
  );
};

export default App;
