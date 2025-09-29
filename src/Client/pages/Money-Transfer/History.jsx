import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Table,
  Card,
} from "react-bootstrap";

const History = () => {
  const [transactions, setTransactions] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("transactions")) || [];
    setTransactions(saved);
  }, []);

  const filtered = transactions.filter(
    (tx) =>
      tx.recipient?.toLowerCase().includes(search.toLowerCase()) ||
      tx.type?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container
      fluid
      className="bg-light min-vh-100  px-0"
      style={{ paddingTop: "0rem", paddingBottom: "0rem" }} 
    >
      {/* Title */}
      <Row className="justify-content-center text-center mb-4"> 
  <Col
 className="text-center p-3 rounded"
  style={{ backgroundColor: "#900603" }}
>
    <h1 className="h3 fw-bold text-white">
      Transaction History
    </h1>
    <p className="text-white mt-1">
      View all your past money transfers, bill payments, and recharges
    </p>
  </Col>
</Row>


      {/* Search */}
      <Row className="justify-content-center mb-5">
        <Col md={5}>
          <Form.Control
            type="text"
            placeholder="Search by recipient or type..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            size="sm"
            className="shadow-sm"
          />
        </Col>
      </Row>

      {/* Table inside Card */}
      <Row className="justify-content-center">
        <Col lg={9}>
          <Card className="shadow-lg rounded-4">
            <Card.Body className="p-0">
              <Table bordered hover responsive className="mb-0 align-middle"style={{ fontSize: "0.85rem" }}>
               <thead>
  <tr>
    <th
      className="text-center py-2"
      style={{
        backgroundColor: "#950606",
        color: "white",
        textTransform: "uppercase",
        fontSize: "0.75rem",
      }}
    >
      Date
    </th>
    <th
      className="text-center py-3"
      style={{
        backgroundColor: "#950606",
        color: "white",
        textTransform: "uppercase",
        fontSize: "0.75rem",
      }}
    >
      Recipient
    </th>
    <th
      className="text-center py-3"
      style={{
        backgroundColor: "#950606",
        color: "white",
        textTransform: "uppercase",
        fontSize: "0.75rem",
      }}
    >
      Type
    </th>
    <th
      className="text-center py-3"
      style={{
        backgroundColor: "#950606",
        color: "white",
        textTransform: "uppercase",
        fontSize: "0.75rem",
      }}
    >
      Amount
    </th>
    <th
      className="text-center py-3"
      style={{
        backgroundColor: "#950606",
        color: "white",
        textTransform: "uppercase",
        fontSize: "0.75rem",
      }}
    >
      Status
    </th>
  </tr>
</thead>

                <tbody>
                  {filtered.length > 0 ? (
                    filtered.map((tx, index) => (
                      <tr key={index}>
                        <td className="text-center py-2">{tx.date}</td>
                        <td className="text-center py-2">{tx.recipient}</td>
                        <td className="text-center py-2">{tx.type}</td>
                        <td className="fw-semibold text-dark text-center py-2">
                          ₹{tx.amount}
                        </td>
                        <td
                          className={`fw-bold text-center py-2 ${
                            tx.status === "Success"
                              ? "text-success"
                              : tx.status === "Pending"
                              ? "text-warning"
                              : "text-danger"
                          }`}
                        >
                          {tx.status}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan="5"
                        className="text-center py-4 text-muted "
                         style={{ fontSize: "0.9rem" }}
                      >
                        No transactions found
                      </td>
                    </tr>
                  )}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default History;
