import React from "react";
import { Link } from "react-router-dom";
import { 
  Container, Row, Col, Card, Button, Badge
} from "react-bootstrap";

const MoneyTransferPage = () => {
  return (
   <Container fluid className="bg-light min-vh-100 px-0">
<Row className="justify-content-center mb-5">
  <Col
  className="text-center p-3 rounded"
  style={{ backgroundColor: "#900603" }}
>
    <h1 className="h3 fw-bold text-white">Money Transfer</h1>
    <p className="text-white mt-1">
      Send money instantly and securely to anyone, anywhere
    </p>
  </Col>
</Row>

{/* Main Feature Cards */}
<div className="px-3 px-md-5">
  <Row className="g-4 mb-5">

    {/* Send Money */}
    <Col xs={12} sm={6} md={4} lg={3}>

        <FeatureCard
          title="Send Money"
         description="Transfer money to bank accounts, UPI, or mobile wallets"
          link="/Client/send-money"
          icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"
                  className="text-primary"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
          }
        /> 
    </Col>

    {/* KYC Verification */}
   <Col xs={12} sm={6} md={4} lg={3}>
           <FeatureCard
              title="KYC Verification"
              description="Complete your KYC for higher transaction limits"
              link="/Client/kyc"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"
                  className="text-success"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 
                       11.955 0 0112 2.915a11.955 
                       11.955 0 01-8.618 5.069m1.618 
                       6.946A11.955 11.955 0 0112 21.085a11.955 
                       11.955 0 01-8.618-5.069"
                  />
                </svg>
              }
            />
    </Col>

    {/* Pay Bills */}
   <Col xs={12} sm={6} md={4} lg={3}>
          <FeatureCard
              title="Pay Bills"
              description="Pay utility bills, mobile recharge, and more"
              link="/Client/pay-bills"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"
                  className="text-purple"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              }
            />
    </Col>

    {/* Transaction Limit */}
   <Col xs={12} sm={6} md={4} lg={3}>
        <FeatureCard
              title="Transaction Limit"
              description="View or upgrade your daily transaction limit"
              link="/Client/transaction-limit"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"
                  className="text-info"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M12 8c-1.657 0-3 1.343-3 3v5h6v-5c0-1.657-1.343-3-3-3z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M5 20h14" />
                </svg>
              }
            />
    </Col>

    {/* Domestic Transfer */}
    <Col xs={12} sm={6} md={4} lg={3}>
        <DomesticTransferCard />
    </Col>

    {/* Transaction History */}
    <Col xs={12} sm={6} md={4} lg={3}>
      <FeatureCard
              title="Transaction History"
              description="View all your money transfer transactions"
              link="/Client/history"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"
                  className="text-warning"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 
                       2 0 002 2h10a2 2 0 002-2V7a2 
                       2 0 00-2-2h-2M9 5a2 2 0 
                       002 2h2a2 2 0 002-2" />
                </svg>
              }
                style={{ minHeight: "280px", maxHeight: "280px" }}
            />
    </Col>

  </Row>
</div>
      <Row className="mt-5">
        <Col>
          <div className="px-3 px-md-5">
            <h5 className="fw-bold text-dark mb-1">
              Quick Transfer Methods
            </h5>
            <p className="text-muted fs-11 mb-0">
              Choose your preferred way to send money
            </p>

            <Row className="mt-3">
            <Col xs={3} md={4} className="mb-4">
  <QuickMethodCard
    title="UPI Transfer"
    description="Instant transfers using UPI"
    link="/Client/send-money?type=upi"
    icon={
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        className="text-warning"
        fill="none"
        viewBox="0 0 15 15"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 22c5.523 0 10-4.477 10-10S17.523 
             2 12 2 2 6.477 2 12s4.477 10 10 
             10zm-1-10v4h2v-4h4V9h-4V5h-2v4H7v3h4z"
        />
      </svg>
    }
    style={{
      maxWidth: "100px", 
      padding: "9px",    
      fontSize: "0.45rem",
    }}
  />
</Col>



              <Col xs={3} md={4} className="mb-4">
                <QuickMethodCard
                  title="NEFT/RTGS"
                  description="Bank to bank transfers"
                  link="/Client/domestic-transfers"
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      className="text-warning"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 22c5.523 0 10-4.477 
                     10-10S17.523 2 12 2 2 6.477 
                     2 12s4.477 10 10 10zm-1-10v4h2v-4h4V9h-4V5h-2v4H7v3h4z"
                      />
                    </svg>
                  }
                />
              </Col>
            
            <Col xs={3} md={4} className="mb-4">
              <QuickMethodCard
            title="International"
            description="Send money abroad"
                link="/Client/international-transfer"
                            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                className="text-warning"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 2C6.48 2 2 6.48 2 
                     12s4.48 10 10 10 10-4.48 
                     10-10S17.52 2 12 2z"
                />
              </svg>
            }
              />
            </Col>
          </Row>
          </div>
        </Col>
      </Row>
      
{/* Recent Transfers Section */}
<Row className="mt-3">
  <Col>
    <div className="px-3 px-md-5">
      <Card className="border-0 shadow-lg rounded-4" style={{ fontSize: "0.85rem" }}>
        <Card.Body className="p-3"> {/* reduced padding */}
          <div className="d-flex justify-content-between align-items-center mb-2">
            <div>
              <h5 className="fw-bold text-dark mb-0">Recent Transfers</h5> {/* smaller title */}
              <p className="text-muted fs-7 mb-0">
                Your last money transfer activities
              </p>
            </div>
            <Button
              variant="danger"
              className="rounded-pill px-3 py-1 fw-semibold fs-7" // smaller button
              style={{
                background: "#900603",
                border: "none",
                boxShadow: "0 3px 10px rgba(0,0,0,0.2)",
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#780606")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#900603")}
            >
              View All
            </Button>
          </div>

          <div className="bg-light rounded-4 p-2 border"> {/* smaller padding */}
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h6 className="fw-bold text-dark mb-1">Rahul Sharma</h6> {/* smaller name */}
                <p className="text-muted fs-7 mb-0">12 Sep 2025 · UPI</p>
              </div>
              <div className="text-end">
                <p className="fw-bold fs-6 text-success mb-0">₹2,500</p> {/* smaller amount */}
                <p className="text-muted mb-0">Completed</p>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  </Col>
</Row>


      
  {/* Limits & KYC Section */}
<div className="px-3 px-md-5">
  <Row className="mt-3 g-4 "> 
    <Col xs={12} md={4}>
      <LimitCard 
        title="Daily Limit" 
        limit="₹25,000" 
        used="₹5,000" 
      />
    </Col>
    <Col xs={12} md={4}>
      <LimitCard 
        title="Monthly Limit" 
        limit="₹2,00,000" 
        used="₹80,000" 
      />
    </Col>
    <Col xs={12} md={4}>
      <KYCCard />
    </Col>
  </Row>
</div>

    </Container>
  );
};

const FeatureCard = ({ title, description, link, icon }) => (
  <Card className="shadow-lg rounded-4 p-4 h-100 d-flex flex-column">
  <div className="mb-3 d-flex align-items-center justify-content-center">
      {icon}
    </div>
    <div className="flex-grow-1 d-flex flex-column">
    <h5 className="font-bold text-gray-900 mb-2">{title}</h5>
    <p className="text-gray-600 text-sm mb-4">{description}</p></div>
    <Link to={link} className="mt-auto">
      <Button
        variant="danger"
        className="rounded-pill fw-semibold py-2 px-4 fs-6 w-100 "
        style={{ backgroundColor: "#900603", border: "none" }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = "#780606")}
        onMouseLeave={(e) => (e.target.style.backgroundColor = "#900603")}
      >
        Get Started →
      </Button>
    </Link>
  </Card>
);

const DomesticTransferCard = () => (
  <Card className="shadow-lg rounded-4 p-4 h-100 d-flex flex-column"
    style={{ minHeight: "280px", maxHeight: "280px" }}>
<div className="mb-3 d-flex align-items-center justify-content-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"
        className="text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M12 8c-1.657 0-3 1.343-3 3v5h6v-5c0-1.657-1.343-3-3-3z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M5 20h14" />
      </svg>
    </div>
    <div className="flex-grow-1 d-flex flex-column">
   <h5 className="font-bold text-gray-900 mb-2">Domestic Transfers</h5>
<p className="text-gray-600 text-sm flex-grow-1">
  Choose from NEFT, IMPS, RTGS, or UPI for sending money within India
</p>
    <div className="d-flex justify-content-start gap-2 mb-3 flex-wrap">
      <Badge bg="primary" className="px-2 py-1 fs-7">NEFT</Badge>
      <Badge bg="success" className="px-2 py-1 fs-7">IMPS</Badge>
      <Badge bg="secondary" className="px-2 py-1 fs-7">RTGS</Badge>
      <Badge bg="warning" className="px-2 py-1 fs-7">UPI</Badge>
    </div>
    </div>
   <Link to="/domestic-transfers" className="mt-auto">
      <Button
        variant="danger"
        className="rounded-pill fw-semibold py-2 px-4 fs-6 w-100"
        style={{ backgroundColor: "#900603", border: "none" }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = "#780606")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#900603")}
      >
        Get Started →
      </Button>
    </Link>
  </Card>
);

const QuickMethodCard = ({ title, description, icon, link }) => (
  <Link to={link} className="text-decoration-none">
    <Card
      className="h-100 border-0 shadow-lg rounded-4 quick-card"
      style={{ transition: "all 0.3s ease", minHeight: "100px" }} // smaller height
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-3px)";
        e.currentTarget.style.boxShadow = "0 6px 15px rgba(0,0,0,0.25)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";
      }}
    >
      <Card.Body className="d-flex align-items-center p-2"> {/* reduced padding */}
        <div className="bg-light rounded-circle p-2 me-3" style={{ width: "35px", height: "35px" }}>
          {icon}
        </div>
        <div>
          <h6 className="fw-bold text-dark mb-1" style={{ fontSize: "0.85rem" }}>{title}</h6>
          <p className="text-muted fs-7 mb-0">{description}</p> {/* smaller font */}
        </div>
      </Card.Body>
    </Card>
  </Link>
);



const LimitCard = ({ title, limit, used }) => (
  <Card className="shadow-lg rounded-4 p-4 h-100">
    <h6 className="fw-bold mb-2">{title}</h6>
    <p className="h5 fw-bold text-danger mb-1">{limit}</p>
    <p className="text-muted fs-6 mb-0">
      Used Today: <span className="fw-semibold text-danger">{used}</span>
    </p>
  </Card>
);

const KYCCard = () => (
  <Card className="shadow-lg rounded-4 p-4 h-100">
    <h6 className="fw-bold mb-2">KYC Status</h6>
    <p className="h5 fw-bold text-success mb-1">Verified</p>
    <p className="text-muted fs-6 mb-0">Full limits available</p>
  </Card>
);


export default MoneyTransferPage;