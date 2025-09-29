import React, { useState } from "react";
import {
  Container,
  Card,
  Row,
  Col,
  Button,
  Form,
  ProgressBar,
} from "react-bootstrap";

const Bills = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    category: "",
    biller: "",
    accountId: "",
    billAmount: "",
    dueDate: "",
    paymentMethod: "",
    status: "",
  });

  const categories = [
    { name: "Electricity", icon: "⚡" },
    { name: "Mobile Recharge", icon: "📱" },
    { name: "DTH", icon: "📺" },
    { name: "Gas", icon: "⛽" },
    { name: "Water", icon: "💧" },
    { name: "Broadband & Landline", icon: "📞" },
  ];

  const billers = {
    Electricity: ["MSEB", "BSES", "Tata Power"],
    "Mobile Recharge": ["Jio", "Airtel", "VI"],
    DTH: ["Tata Sky", "Dish TV", "Airtel Digital"],
    Gas: ["Indane", "HP Gas", "Bharat Gas"],
    Water: ["Mumbai Water Board", "Delhi Jal Board"],
    "Broadband & Landline": ["BSNL", "Airtel Broadband", "Jio Fiber"],
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <Container
  fluid
  className="d-flex justify-content-center align-items-center"
  style={{ background: "#f9fafb", minHeight: "100vh" }}
>
  <Container style={{ maxWidth: "900px" }}>
    <Card className="p-5 shadow-lg rounded-4" style={{ minHeight: "650px" }}>
          {/* Step Indicator */}
          <Row className="mb-5 text-center fw-bold fs-4">
            {["Category", "Biller", "Summary", "Payment", "Done"].map(
              (label, i) => (
                <Col
                  key={i}
                  className={
                    step === i + 1
                      ? "text-warning fw-bold"
                      : "text-muted fw-bold"
                  }
                >
                  {label}
                </Col>
              )
            )}
          </Row>

          {/* Step 1: Category */}
          {step === 1 && (
            <>
              <h2 className="fw-bold mb-4">Select Bill Category</h2>
              <Row className="g-4">
                {categories.map((cat) => (
                  <Col xs={6} key={cat.name}>
                    <Button
                      variant="light"
                      className="w-100 p-4 border rounded-4 d-flex flex-column align-items-center justify-content-center"
                      onClick={() => {
                        setFormData((prev) => ({ ...prev, category: cat.name }));
                        nextStep();
                      }}
                    >
                      <span className="fs-1 fw-bold mb-2">{cat.icon}</span>
                      <span className="fw-bold fs-5">{cat.name}</span>
                    </Button>
                  </Col>
                ))}
              </Row>
            </>
          )}

          {/* Step 2: Biller & Inputs */}
          {step === 2 && (
            <>
              <h2 className="fw-bold mb-4">{formData.category} - Select Biller</h2>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label className="fw-bold">Choose a Biller</Form.Label>
                  <Form.Select
                    name="biller"
                    value={formData.biller}
                    onChange={handleChange}
                    size="lg"
                  >
                    <option value="">Choose a Biller</option>
                    {billers[formData.category]?.map((biller) => (
                      <option key={biller} value={biller}>
                        {biller}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className="fw-bold">Consumer/Account ID</Form.Label>
                  <Form.Control
                    type="text"
                    name="accountId"
                    placeholder="Consumer/Account ID"
                    value={formData.accountId}
                    onChange={handleChange}
                    size="lg"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className="fw-bold">Bill Amount</Form.Label>
                  <Form.Control
                    type="number"
                    name="billAmount"
                    placeholder="Bill Amount"
                    value={formData.billAmount}
                    onChange={handleChange}
                    size="lg"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className="fw-bold">Due Date</Form.Label>
                  <Form.Control
                    type="date"
                    name="dueDate"
                    value={formData.dueDate}
                    onChange={handleChange}
                    size="lg"
                  />
                </Form.Group>
              </Form>

              <div className="d-flex justify-content-between mt-4">
                <Button
                  onClick={prevStep}
                  style={{ backgroundColor: "#950606", border: "none" }}
                >
                  ← Back
                </Button>
                <Button
                  onClick={nextStep}
                  style={{ backgroundColor: "#950606", border: "none" }}
                >
                  Next →
                </Button>
              </div>
            </>
          )}

          {/* Step 3: Summary */}
          {step === 3 && (
            <>
              <h2 className="fw-bold mb-4">Payment Summary</h2>
              <div className="fs-5 text-muted">
                <p>
                  <strong>Category:</strong> {formData.category}
                </p>
                <p>
                  <strong>Biller:</strong> {formData.biller}
                </p>
                <p>
                  <strong>Account ID:</strong> {formData.accountId}
                </p>
                <p>
                  <strong>Amount:</strong> ₹{formData.billAmount}
                </p>
                <p>
                  <strong>Due Date:</strong> {formData.dueDate}
                </p>
              </div>
              <div className="d-flex justify-content-between mt-5">
                <Button
                  onClick={prevStep}
                  style={{ backgroundColor: "#950606", border: "none" }}
                >
                  ← Back
                </Button>
                <Button
                  onClick={nextStep}
                  style={{ backgroundColor: "#950606", border: "none" }}
                >
                  Proceed to Pay →
                </Button>
              </div>
            </>
          )}

          {/* Step 4: Payment Method */}
          {step === 4 && (
            <>
              <h2 className="fw-bold mb-4">Select Payment Method</h2>
              <Form.Select
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleChange}
                size="lg"
                className="mb-4"
              >
                <option value="">Choose Payment Method</option>
                <option value="Bank Account">Bank Account</option>
                <option value="UPI">UPI</option>
                <option value="Wallet">Wallet</option>
              </Form.Select>

              <div className="d-flex justify-content-between">
                <Button
                  onClick={prevStep}
                  style={{ backgroundColor: "#950606", border: "none" }}
                >
                  ← Back
                </Button>
                <Button
                  onClick={() => {
                    setFormData((prev) => ({ ...prev, status: "success" }));
                    nextStep();
                  }}
                  style={{ backgroundColor: "#950606", border: "none" }}
                >
                  Pay Now ✔
                </Button>
              </div>
            </>
          )}

          {/* Step 5: Confirmation */}
          {step === 5 && (
            <div className="text-center">
              {formData.status === "success" ? (
                <>
                  <h2 className="text-success fw-bold fs-2 mb-3">
                    ✅ Payment Successful!
                  </h2>
                  <p className="fs-5 text-muted">
                    Transaction ID: TXN{Math.floor(Math.random() * 1000000)}
                  </p>
                  <p className="fs-5 text-muted">
                    You have successfully paid{" "}
                    <strong>₹{formData.billAmount}</strong> to{" "}
                    <strong>{formData.biller}</strong>.
                  </p>
                </>
              ) : (
                <>
                  <h2 className="text-danger fw-bold fs-2 mb-3">
                    ❌ Payment Failed
                  </h2>
                  <p className="fs-5 text-muted">
                    Something went wrong. Please try again later.
                  </p>
                </>
              )}
              <Button
                onClick={() => setStep(1)}
                className="mt-4"
                style={{ backgroundColor: "#950606", border: "none" }}
              >
                Pay Another Bill
              </Button>
            </div>
          )}
        </Card>
      </Container>
    </Container>
  );
};

export default Bills;
