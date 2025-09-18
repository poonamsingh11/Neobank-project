import React from "react";
import { BrowserRouter } from "react-router-dom";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Navbar from "./components/Navbar";
import DashBoard from "./pages/dashboard/DashBoard";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from "./pages/dashboard/HomePage";
import AddMoney from "./pages/dashboard/AddMoney";
import SendMoney from "./pages/dashboard/SendMoney";
import PayBills from "./pages/dashboard/PayBills";
import Investments from "./pages/dashboard/Investments";

const App=()=>{
  return(
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route  path="/" element={<DashBoard/>}/>
        <Route path="/homepage" element={<HomePage /> } />
        <Route path="/add-money" element={<AddMoney /> } />
        <Route path="/send-money" element={<SendMoney />}  />
        <Route path="/pay-bills" element={<PayBills />} />
        <Route path="/investments" element={<Investments /> } />
      </Routes>
    </Router>
    </>
  )
}
export default App;