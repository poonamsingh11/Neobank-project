import React from "react";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Navbar from "./components/Navbar";
import DashBoard from "./pages/DashBoard";
import MyAccounts from "./pages/MyAccount/MyAccounts";
import Welcome from "./pages/MyAccount/welcome";
import UpdateKYC from "./pages/MyAccount/UpdateKYC";
import AccountStatementForm from "./pages/MyAccount/AccountStatement";
import AccountClosure from "./pages/MyAccount/AccountClosure";
import Chequebook from "./pages/MyAccount/Chequebook";



const App=()=>{
  return(
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<DashBoard/>}/>
        <Route path="/myAccount" element={<MyAccounts/>}/>
        <Route path="/welcome" element={<Welcome/>}/>
        <Route path="/update-kyc" element={<UpdateKYC />} />
        <Route path="/account-statement" element={<AccountStatementForm />} />
        <Route path="/close-account" element={<AccountClosure />} />
        <Route path="/chequebook" element={<Chequebook />} />
      </Routes>
    </Router>
    </>
  )
}
export default App;