import React from "react";
import { Button, Row, Col, Card } from "react-bootstrap";
import {
  FaCog,
  FaUser,
  FaShieldAlt,
  FaBell,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // ✅ import for navigation
import QuickSettings from "./QuickSettings";
import AccountInfo from "./Accoutnfo";
import SecurityOptions from "./SecurityOptions";

const settings = [
  {
    title: "General Settings",
    description: "App preferences, language, and display settings",
    icon: <FaCog className="text-white" />,
    bg: "bg-primary",
       path: "/GeneralSettings",
  },
  {
    title: "Personal Details",
    description: "Update your profile information and contact details",
    icon: <FaUser className="text-white" />,
    bg: "bg-success",
      path: "/personal-details",
  },
  {
    title: "Security",
    description: "Password, 2FA, and security preferences",
    icon: <FaShieldAlt className="text-white" />,
    bg: "bg-danger",
  },
  {
    title: "Notifications",
    description: "Manage email, SMS, and push notifications",
    icon: <FaBell className="text-white" />,
    bg: "bg-info",
    path: "/notifications", // ✅ route path to navigate
  },
];

const Setting = () => {
  const navigate = useNavigate(); // ✅ useNavigate hook

  return (
    <>
      {/* Header */}
      <div className="bg-light p-4 shadow-sm">
        <h1 className="fw-bold fs-2 text-dark">Settings</h1>
        <p className="text-muted mb-0">
          Manage your account preferences and security
        </p>
      </div>

      {/* Cards Grid */}
      <div className="bg-light p-4 shadow-sm">
        <Row className="g-4">
          {settings.map((item, index) => (
            <Col md={6} lg={4} key={index}>
              <Card
                className="h-100 shadow-sm border-0 rounded-3"
                style={{ minHeight: "250px", cursor: item.path ? "pointer" : "default" }}
                onClick={() => item.path && navigate(item.path)} // ✅ card click navigates if path exists
              >
                <Card.Body>
                  {/* Icon box */}
                  <div
                    className={`${item.bg} d-inline-flex align-items-center justify-content-center rounded mb-3`}
                    style={{ width: "40px", height: "40px" }}
                  >
                    {item.icon}
                  </div>

                  {/* Title & Description */}
                  <h5 className="fw-bold mb-2">{item.title}</h5>
                  <p
                    className="text-muted small mb-3"
                    style={{ lineHeight: "1.6" }}
                  >
                    {item.description}
                  </p>

                  {/* Configure button */}
                  <Button
                    variant="outline-warning"
                    className="w-100 mt-3 d-flex justify-content-between align-items-center"
                    onClick={(e) => {
                      e.stopPropagation(); // prevent card click duplicate
                      item.path && navigate(item.path); // ✅ navigate on button click
                    }}
                  >
                    Configure <span>→</span>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      <QuickSettings />
      <AccountInfo />
      <SecurityOptions />
    </>
  );
};

export default Setting;
