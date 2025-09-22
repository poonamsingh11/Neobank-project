import React from "react";
import { Link } from "react-router-dom";
import { 
  Container, Row, Col, Card, Button, Badge
} from "react-bootstrap";

const MoneyTransferPage = () => {
  return (
   <Container fluid className="bg-light min-vh-100 px-4">
     
      <div style={{ paddingTop: '7rem' }}></div>

      {/* Page Heading */}
      <Row className="justify-content-center mb-5">
        <Col className="text-center">
          <h1 className="display-4 fw-bold text-dark mb-3">Money Transfer</h1>
          <p className="lead text-muted">
            Send money instantly and securely to anyone, anywhere
          </p>
        </Col>
      </Row>

      {/* Main Feature Cards */}
      <Row className="justify-content-center mb-5">
        <Col xs={12} md={6} lg={4} className="mb-4">
          <FeatureCard
            title="Send Money"
            description="Transfer money to bank accounts, UPI, or mobile wallets"
            link="/send-money"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                className="text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            }
          />
        </Col>
              
        <Col xs={12} md={6} lg={4} className="mb-4">
          <FeatureCard
            title="KYC Verification"
            description="Complete your KYC for higher transaction limits"
            link="/kyc"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                className="text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.915a11.955 11.955 0 01-8.618 5.069m1.618 6.946A11.955 11.955 0 0112 21.085a11.955 11.955 0 01-8.618-5.069"
                />
              </svg>
            }
          />
        </Col>
        
        <Col xs={12} md={6} lg={4} className="mb-4">
          <FeatureCard
            title="Pay Bills"
            description="Pay utility bills, mobile recharge, and more"
            link="/pay-bills"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                className="text-purple"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            }
          />
        </Col>
        
        <Col xs={12} md={6} lg={4} className="mb-4">
          <FeatureCard
            title="Transaction Limit"
            description="View or upgrade your daily transaction limit"
            link="/transaction-limit"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                className="text-info"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 1.343-3 3v5h6v-5c0-1.657-1.343-3-3-3z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 20h14"
                />
              </svg>
            }
          />
        </Col>
        
        <Col xs={12} md={6} lg={4} className="mb-4">
          <DomesticTransferCard />
        </Col>
        
        <Col xs={12} md={6} lg={4} className="mb-4">
          <FeatureCard
            title="Transaction History"
            description="View all your money transfer transactions"
            link="/history"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                className="text-warning"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2"
                />
              </svg>
            }
          />
        </Col>
      </Row>

      {/* Quick Transfer Methods */}
      <Row className="mt-5">
        <Col>
          <h2 className="h1 fw-bold text-dark mb-3">
            Quick Transfer Methods
          </h2>
          <p className="text-muted fs-5 mb-4">
            Choose your preferred way to send money
          </p>
          
          <Row>
            <Col xs={12} md={4} className="mb-4">
              <QuickMethodCard
                title="UPI Transfer"
                description="Instant transfers using UPI"
                link="/send-money?type=upi"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="45"
                    height="45"
                    className="text-warning"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm-1-10v4h2v-4h4V9h-4V5h-2v4H7v3h4z"
                    />
                  </svg>
                }
              />
            </Col>
            
            <Col xs={12} md={4} className="mb-4">
              <QuickMethodCard
                title="NEFT/RTGS"
                description="Bank to bank transfers"
                link="/domestic-transfers"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="45"
                    height="45"
                    className="text-warning"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm-1-10v4h2v-4h4V9h-4V5h-2v4H7v3h4z"
                    />
                  </svg>
                }
              />
            </Col>
            
            <Col xs={12} md={4} className="mb-4">
              <QuickMethodCard
                title="International"
                description="Send money abroad"
                link="/international-transfer"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="45"
                    height="45"
                    className="text-warning"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"
                    />
                  </svg>
                }
              />
            </Col>
          </Row>
        </Col>
      </Row>
      
      {/* Recent Transfers Section */}
      <Row className="mt-5">
        <Col>
          <Card className="border-0 shadow-lg rounded-4">
            <Card.Body className="p-5">
              <div className="d-flex justify-content-between align-items-center mb-5">
                <div>
                  <h2 className="h1 fw-bold text-dark mb-2">Recent Transfers</h2>
                  <p className="text-muted fs-5">Your last money transfer activities</p>
                </div>
                <Button 
                  variant="danger" 
                  className="rounded-pill px-5 py-3 fw-semibold fs-5"
                  style={{
                    background: "linear-gradient(to right, #dc3545, #c82333)",
                    border: "none",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.2)"
                  }}
                >
                  View All
                </Button>
              </div>
              
              <div className="bg-light rounded-4 p-4 border">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h3 className="h3 fw-semibold text-dark mb-2">Rahul Sharma</h3>
                    <p className="text-muted mb-0 fs-5">12 Sep 2025 · UPI</p>
                  </div>
                  <div className="text-end">
                    <p className="h2 fw-bold text-success mb-1">₹2,500</p>
                    <p className="text-muted mb-0 fs-5">Completed</p>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
      {/* Limits & KYC Section */}
      <Row className="mt-5">
        <Col xs={12} md={4} className="mb-4">
          <LimitCard 
            title="Daily Limit" 
            limit="₹25,000" 
            used="₹5,000" 
          />
        </Col>
        <Col xs={12} md={4} className="mb-4">
          <LimitCard 
            title="Monthly Limit" 
            limit="₹2,00,000" 
            used="₹80,000" 
          />
        </Col>
        <Col xs={12} md={4} className="mb-4">
          <KYCCard />
        </Col>
      </Row>
    </Container>
  );
};

const FeatureCard = ({ title, description, link, icon, children }) => (
  <Card className="h-100 border-0 shadow-lg rounded-4 text-center feature-card">
    <Card.Body className="d-flex flex-column justify-content-between p-5">
      <div className="d-flex flex-column align-items-center">
        <div className="bg-light rounded-circle p-4 mb-4">{icon}</div>
        <Card.Title className="h3 fw-semibold mb-3">{title}</Card.Title>
        <Card.Text className="text-muted fs-5">{description}</Card.Text>
        {children}
      </div>
      <Link to={link} className="mt-4 w-100">
        <Button 
          variant="danger" 
          className="w-100 rounded-pill py-3 fw-semibold fs-5"
          style={{
            background: "linear-gradient(to right, #dc3545, #c82333)",
            border: "none",
            boxShadow: "0 4px 15px rgba(0,0,0,0.2)"
          }}
        >
          Get Started →
        </Button>
      </Link>
    </Card.Body>
  </Card>
);

const DomesticTransferCard = () => (
  <Card className="h-100 border-0 shadow-lg rounded-4 text-center feature-card">
    <Card.Body className="d-flex flex-column justify-content-between p-5">
      <div className="d-flex flex-column align-items-center">
        <div className="bg-light rounded-circle p-4 mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            className="text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8c-1.657 0-3 1.343-3 3v5h6v-5c0-1.657-1.343-3-3-3z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 20h14"
            />
          </svg>
        </div>
        <Card.Title className="h3 fw-semibold mb-3">Domestic Transfers</Card.Title>
        <Card.Text className="text-muted fs-5">
          Choose from NEFT, IMPS, RTGS, or UPI for sending money within India
        </Card.Text>
        
        <div className="d-flex justify-content-center gap-3 mt-3 flex-wrap">
          <Badge bg="primary" className="px-3 py-2 fs-6">NEFT</Badge>
          <Badge bg="success" className="px-3 py-2 fs-6">IMPS</Badge>
          <Badge bg="purple" className="px-3 py-2 fs-6">RTGS</Badge>
          <Badge bg="warning" className="px-3 py-2 fs-6">UPI</Badge>
        </div>
      </div>
      <Link to="/domestic-transfers" className="mt-4 w-100">
        <Button 
          variant="danger" 
          className="w-100 rounded-pill py-3 fw-semibold fs-5"
          style={{
            background: "linear-gradient(to right, #dc3545, #c82333)",
            border: "none",
            boxShadow: "0 4px 15px rgba(0,0,0,0.2)"
          }}
        >
          Get Started →
        </Button>
      </Link>
    </Card.Body>
  </Card>
);

const QuickMethodCard = ({ title, description, icon, link }) => (
  <Link to={link} className="text-decoration-none">
    <Card className="h-100 border-0 shadow-lg rounded-4 quick-card">
      <Card.Body className="d-flex align-items-center p-4">
        <div className="bg-light rounded-circle p-3 me-4">{icon}</div>
        <div>
          <Card.Title className="h4 fw-semibold mb-2 text-dark">{title}</Card.Title>
          <Card.Text className="text-muted fs-5 mb-0">{description}</Card.Text>
        </div>
      </Card.Body>
    </Card>
  </Link>
);

const LimitCard = ({ title, limit, used }) => (
  <Card className="h-100 border-0 shadow-lg rounded-4">
    <Card.Body className="p-5">
      <Card.Title className="h4 fw-bold mb-4">{title}</Card.Title>
      <p className="h1 fw-bold text-danger mb-4">{limit}</p>
      <p className="text-muted fs-5 mb-0">
        Used Today: <span className="fw-semibold text-danger">{used}</span>
      </p>
    </Card.Body>
  </Card>
);

const KYCCard = () => (
  <Card className="h-100 border-0 shadow-lg rounded-4">
    <Card.Body className="p-5">
      <Card.Title className="h4 fw-bold mb-4">KYC Status</Card.Title>
      <p className="h1 fw-bold text-success mb-4">Verified</p>
      <p className="text-muted fs-5 mb-0">Full limits available</p>
    </Card.Body>
  </Card>
);

export default MoneyTransferPage;