import React from "react";
import { BrowserRouter } from "react-router-dom";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Navbar from "./components/Navbar";
import DashBoard from "./pages/DashBoard";
import Services from "./pages/Services";
import 'bootstrap/dist/css/bootstrap.min.css';

const App=()=>{
  return(
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route  path="/" element={<DashBoard/>}/>
        <Route  path="/Services" element={<Services/>}/>
      </Routes>
    </Router>
    </>
  )
}
export default App;