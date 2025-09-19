import React from "react";
import { BrowserRouter } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import DashBoard from "./pages/DashBoard";
import Investment from "./pages/Investment/Investment";
import AddGoal from "./pages/Investment/AddGoal";
const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route path="/Investment" element={<Investment />} />
          <Route path="/add-goal" element={<AddGoal />} />
        </Routes>
      </Router>
    </>
  )
}
export default App;