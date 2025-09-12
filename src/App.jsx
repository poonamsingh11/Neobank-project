import React from "react";
import { BrowserRouter } from "react-router-dom";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Navbar from "./components/Navbar";
import DashBoard from "./pages/DashBoard";
const App=()=>{
  return(
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route  path="/" element={<DashBoard/>}/>
      </Routes>
    </Router>
    </>
  )
}
export default App;