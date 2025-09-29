import React, { Suspense, lazy } from "react";
import { Routes, Route, Link } from "react-router-dom";

const ClientApp = lazy(() => import("./Client/ClientApp")); // User side App
const AdminApp = lazy(() => import("./Admin/AdminApp")); 

function Home() {
  return (
    <div style={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
      {/* Hero Section */}
      <header 
        className="text-white text-center py-5" 
        style={{ backgroundColor: "#900603" }}
      >
        <h1 className="display-4 fw-bold">Welcome to NeoBank</h1>
        <p className="lead">Secure, Fast, and Trusted Banking at Your Fingertips</p>
        <div className="mt-4">
          <Link to="/client" className="btn btn-light btn-lg me-3">
            Open User App
          </Link>
          <Link to="/Admin" className="btn btn-outline-light btn-lg">
            Open Admin App
          </Link>
        </div>
      </header>

      {/* Features Section */}
      <section className="container py-5">
        <h2 className="text-center mb-5" style={{ color: "#900603" }}>Why Choose NeoBank?</h2>
        <div className="row text-center g-4">
          <div className="col-md-4">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title text-primary">Secure Banking</h5>
                <p className="card-text">Your money is protected with state-of-the-art security protocols.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title text-primary">Fast Transactions</h5>
                <p className="card-text">Transfer funds instantly with minimal charges and maximum convenience.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title text-primary">24/7 Support</h5>
                <p className="card-text">Our dedicated team is always here to help you with any banking needs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section 
        className="text-center py-5 text-white" 
        style={{ backgroundColor: "#900603" }}
      >
        <h3 className="mb-3">Ready to Get Started?</h3>
        <p className="mb-4">Join thousands of happy customers using NeoBank every day.</p>
        <Link to="/client" className="btn btn-light btn-lg me-3">
          Open User App
        </Link>
        <Link to="/Admin" className="btn btn-outline-light btn-lg">
          Open Admin App
        </Link>
      </section>
    </div>
  );
}

export default function App() {
  return (
    <Suspense fallback={<div className="text-center py-5">Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/client/*" element={<ClientApp />} />
        <Route path="/Admin/*" element={<AdminApp />} />
      </Routes>
    </Suspense>
  );
}
