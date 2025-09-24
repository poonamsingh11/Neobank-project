import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Card, Button, Row, Col } from "react-bootstrap";

const DomesticTransfer = () => {
  const navigate = useNavigate();

  const handleTransfer = (type) => {
    if (type === "NEFT") {
      navigate("/neft"); 
    } else if (type === "RTGS") {
      navigate("/rtgs");
    } else if (type === "IMPS") {
      navigate("/imps"); 
    } else if (type === "UPI") {
      
      navigate("/send-money?type=upi");
    } else {
      alert(`You selected ${type}. This will open the ${type} transfer form.`);
    }
  };

  const buttonStyle = { backgroundColor: "#950606", border: "none" };

  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center"
      style={{ background: "#f9fafb", minHeight: "100vh", padding: "60px 20px" }}
    >
      <Card
        className="p-5 shadow-lg rounded-4 d-flex flex-column align-items-center text-center"
        style={{ minHeight: "650px", width: "100%", maxWidth: "700px" }}
      >
        {/* Icon */}
        <div className="d-flex justify-content-center align-items-center rounded-circle bg-light mb-4" style={{ width: "110px", height: "110px" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="90"
            height="90"
            fill="currentColor"
            className="text-warning"
            viewBox="0 0 16 16"
          >
            <path d="M12 1a1 1 0 0 1 1 1v2h-1V2H5v1H4V2a1 1 0 0 1 1-1h7zM3 4h10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4zm3 2a.5.5 0 0 0-.5.5V8H4v1h1v1h1V9h1V8H7V6.5A.5.5 0 0 0 6 6z" />
          </svg>
        </div>

        {/* Title */}
        <h2 className="fw-bold fs-2 text-dark">Domestic Transfers</h2>

        {/* Description */}
       <p className="text-muted small mb-5" style={{ lineHeight: "1.6" }}>
      Choose from NEFT, IMPS, RTGS, or UPI for sending money within India
    </p>


        {/* Transfer Buttons */}
        <Row className="g-4 w-100" style={{ maxWidth: "500px" }}>
          <Col xs={6}>
            <Button
              onClick={() => handleTransfer("NEFT")}
              style={buttonStyle}
              className="w-100 py-3 rounded-4 fw-bold"
            >
              NEFT
            </Button>
          </Col>
          <Col xs={6}>
            <Button
              onClick={() => handleTransfer("IMPS")}
              style={buttonStyle}
              className="w-100 py-3 rounded-4 fw-bold"
            >
              IMPS
            </Button>
          </Col>
          <Col xs={6}>
            <Button
              onClick={() => handleTransfer("RTGS")}
              style={buttonStyle}
              className="w-100 py-3 rounded-4 fw-bold"
            >
              RTGS
            </Button>
          </Col>
          <Col xs={6}>
            <Button
              onClick={() => handleTransfer("UPI")}
              style={buttonStyle}
              className="w-100 py-3 rounded-4 fw-bold"
            >
              UPI
            </Button>
          </Col>
        </Row>

        {/* Back Button */}
        <Button
          onClick={() => navigate(-1)}
          className="mt-5 fw-semibold"
          style={{
            backgroundColor: "#950606",
            borderColor: "#950606",
            padding: "15px 120px",
            borderRadius: "25px",
          }}
        >
           Back
        </Button>
      </Card>
    </Container>
  );
};

export default DomesticTransfer;
