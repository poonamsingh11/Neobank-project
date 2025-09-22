import React, { useState } from "react";
import {
  Phone,
  Mail,
  MessageCircle,
  Loader,
  CheckCircle,
  AlertTriangle,
  Circle,
  ChevronUp,
  ChevronDown,
  MinusCircle,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import logo from "../../assets/neobank-logo.png"; // relative path

function ComplaintFeedback() {
  const [formData, setFormData] = useState({
    type: "",
    category: "",
    priority: "Low",
    subject: "",
    description: "",
    contactMethod: "",
  });

  const [tickets, setTickets] = useState([]); // State to store submitted tickets

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.subject || !formData.description || !formData.contactMethod) {
      alert("Please fill all required fields.");
      return;
    }

    const newTicket = {
      id: `TKT${Math.floor(100000 + Math.random() * 900000)}`,
      subject: formData.subject,
      type: formData.type,
      date: new Date().toISOString().slice(0, 10),
      status: "Pending",
      priority: formData.priority,
    };

    setTickets([newTicket, ...tickets]);

    setFormData({
      type: "",
      category: "",
      priority: "Low",
      subject: "",
      description: "",
      contactMethod: "",
    });
  };

  const renderTicketBadge = (ticket) => {
    let statusBadge, priorityBadge;

    if (ticket.status === "Pending")
      statusBadge = (
        <>
          <AlertTriangle size={14} className="me-1" /> Pending
        </>
      );
    else if (ticket.status === "Resolved")
      statusBadge = (
        <>
          <CheckCircle size={14} className="me-1" /> Resolved
        </>
      );
    else
      statusBadge = (
        <>
          <Loader size={14} className="me-1" /> In Progress
        </>
      );

    if (ticket.priority === "High")
      priorityBadge = (
        <>
          <ChevronUp size={14} className="me-1" /> High Priority
        </>
      );
    else if (ticket.priority === "Medium")
      priorityBadge = (
        <>
          <Circle size={14} className="me-1" /> Medium Priority
        </>
      );
    else
      priorityBadge = (
        <>
          <MinusCircle size={14} className="me-1" /> Low Priority
        </>
      );

    return { statusBadge, priorityBadge };
  };

  return (
    <div className="min-vh-100 bg-light">
      {/* Header */}
      <div
        className="py-5 text-center text-white"
        style={{ backgroundColor: "#A50034" }}
      >
        <div className="d-flex align-items-center justify-content-center gap-3">
          <img
            src={logo}
            alt="Neo Bank Logo"
            style={{ height: "50px", width: "50px", objectFit: "contain" }}
          />
          <h1 className="fw-bold mb-0">Neo Bank Complaint & Feedback</h1>
        </div>
        <p className="mb-0 text-white-50 mt-2">
          Fill in the details and we'll get back to you within the stipulated
          business hours
        </p>
      </div>

      <div className="container py-5">
        <div className="row g-4">
          {/* Left Column - Form */}
          <div className="col-lg-7">
            <div className="card shadow-sm border-0 rounded-3">
              <div
                className="card-header text-white rounded-top"
                style={{ backgroundColor: "#A50034" }}
              >
                <h2 className="h5 mb-0">Submit Your Concern</h2>
                <p className="small mb-0 text-white-50">
                  Fill out the form below and we'll get back to you as soon as
                  possible.
                </p>
              </div>
              <div className="card-body p-4">
                <form onSubmit={handleSubmit}>
                  {/* Type */}
                  <div className="mb-3">
                    <label className="form-label">Type</label>
                    <select
                      name="type"
                      value={formData.type}
                      onChange={handleChange}
                      className="form-select bg-light"
                      required
                    >
                      <option value="">Select type</option>
                      <option value="Complaint">Complaint</option>
                      <option value="Feedback">Feedback</option>
                      <option value="Suggestion">Suggestion</option>
                    </select>
                  </div>

                  {/* Category */}
                  <div className="mb-3">
                    <label className="form-label">Category</label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="form-select bg-light"
                      required
                    >
                      <option value="">Select category</option>
                      <option value="Account Issues">Account Issues</option>
                      <option value="Transaction Problems">
                        Transaction Problems
                      </option>
                      <option value="Card Related">Card Related</option>
                      <option value="Loan Services">Loan Services</option>
                      <option value="Investment Issues">
                        Investment Issues
                      </option>
                      <option value="Mobile/Internet Banking">
                        Mobile/Internet Banking
                      </option>
                      <option value="Customer Service">Customer Service</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Priority */}
                  <div className="mb-3">
                    <label className="form-label">Priority</label>
                    <select
                      name="priority"
                      value={formData.priority}
                      onChange={handleChange}
                      className="form-select bg-light"
                      required
                    >
                      <option value="Low">Low</option>
                      <option value="Medium">Medium</option>
                      <option value="High">High</option>
                    </select>
                  </div>

                  {/* Subject */}
                  <div className="mb-3">
                    <label className="form-label">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="form-control bg-light"
                      placeholder="Enter subject"
                      required
                    />
                  </div>

                  {/* Description */}
                  <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      className="form-control bg-light"
                      rows="4"
                      placeholder="Describe the issue or feedback"
                      required
                    />
                  </div>

                  {/* Contact Method */}
                  <div className="mb-4">
                    <label className="form-label">
                      Preferred Contact Method
                    </label>
                    <select
                      name="contactMethod"
                      value={formData.contactMethod}
                      onChange={handleChange}
                      className="form-select bg-light"
                      required
                    >
                      <option value="">Select preferred contact method</option>
                      <option value="Email">Email</option>
                      <option value="Phone">Phone</option>
                    </select>
                  </div>

                  <div className="d-grid">
                    <button
                      type="submit"
                      className="btn fw-bold py-2"
                      style={{ backgroundColor: "#A50034", color: "#fff" }}
                      onMouseOver={(e) =>
                        (e.currentTarget.style.backgroundColor = "#7A0033")
                      }
                      onMouseOut={(e) =>
                        (e.currentTarget.style.backgroundColor = "#A50034")
                      }
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="col-lg-5">
            {/* Recent Tickets */}
            <div className="card shadow-sm border-0 rounded-3 mb-4">
              <div className="card-body">
                <h3 className="h6 fw-bold mb-3">Your Recent Tickets</h3>
                <p className="text-muted small mb-4">
                  Track the status of your submitted concerns
                </p>

                {/* Render submitted tickets dynamically */}
                {tickets.map((ticket, idx) => {
                  const { statusBadge, priorityBadge } = renderTicketBadge(ticket);
                  return (
                    <div key={idx} className="bg-light rounded p-3 mb-3 border">
                      <div className="d-flex justify-content-between mb-2">
                        <div>
                          <p className="small fw-semibold mb-1">{ticket.subject}</p>
                          <p className="text-muted small mb-0">
                            {ticket.id} • {ticket.type} • {ticket.date}
                          </p>
                        </div>
                        <span className="badge d-flex align-items-center bg-danger-subtle text-danger">
                          {statusBadge}
                        </span>
                      </div>
                      <div className="d-flex justify-content-between">
                        <span className="badge d-flex align-items-center bg-warning-subtle text-warning">
                          {priorityBadge}
                        </span>
                        <button
                          className="btn btn-outline-danger btn-sm fw-semibold"
                          style={{
                            borderRadius: "6px",
                            transition: "all 0.2s ease-in-out",
                          }}
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  );
                })}

                {/* Existing hardcoded tickets */}
                {/* Ticket 1 */}
                <div className="bg-light rounded p-3 mb-3 border">
                  <div className="d-flex justify-content-between mb-2">
                    <div>
                      <p className="small fw-semibold mb-1">
                        Transaction failed but amount debited
                      </p>
                      <p className="text-muted small mb-0">
                        TKT001234 • Complaint • 2025-01-08
                      </p>
                    </div>
                    <span className="badge d-flex align-items-center bg-warning-subtle text-warning">
                      <Loader size={14} className="me-1" /> In Progress
                    </span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span className="badge d-flex align-items-center bg-danger-subtle text-danger">
                      <ChevronUp size={14} className="me-1" /> High Priority
                    </span>
                    <button
                      className="btn btn-outline-danger btn-sm fw-semibold"
                      style={{
                        borderRadius: "6px",
                        transition: "all 0.2s ease-in-out",
                      }}
                    >
                      View Details
                    </button>
                  </div>
                </div>

                {/* Ticket 2 */}
                <div className="bg-light rounded p-3 mb-3 border">
                  <div className="d-flex justify-content-between mb-2">
                    <div>
                      <p className="small fw-semibold mb-1">
                        Suggestion for mobile app improvement
                      </p>
                      <p className="text-muted small mb-0">
                        TKT001235 • Feedback • 2025-01-05
                      </p>
                    </div>
                    <span className="badge d-flex align-items-center bg-success-subtle text-success">
                      <CheckCircle size={14} className="me-1" /> Resolved
                    </span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span className="badge d-flex align-items-center bg-success-subtle text-success">
                      <MinusCircle size={14} className="me-1" /> Low Priority
                    </span>
                    <button
                      className="btn btn-outline-danger btn-sm fw-semibold"
                      style={{
                        borderRadius: "6px",
                        transition: "all 0.2s ease-in-out",
                      }}
                    >
                      View Details
                    </button>
                  </div>
                </div>

                {/* Ticket 3 */}
                <div className="bg-light rounded p-3 border">
                  <div className="d-flex justify-content-between mb-2">
                    <div>
                      <p className="small fw-semibold mb-1">
                        Card blocked without notification
                      </p>
                      <p className="text-muted small mb-0">
                        TKT001236 • Complaint • 2025-01-03
                      </p>
                    </div>
                    <span className="badge d-flex align-items-center bg-danger-subtle text-danger">
                      <AlertTriangle size={14} className="me-1" /> Pending
                    </span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span className="badge d-flex align-items-center bg-warning-subtle text-warning">
                      <Circle size={14} className="me-1" /> Medium Priority
                    </span>
                    <button
                      className="btn btn-outline-danger btn-sm fw-semibold"
                      style={{
                        borderRadius: "6px",
                        transition: "all 0.2s ease-in-out",
                      }}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Other Ways to Reach Us */}
            <div className="space-y-3">
              {/* Live Chat */}
              <button
                onClick={() => navigate("/Live-Chat")}
                className="w-100 d-flex align-items-center p-3 mb-2 bg-gradient-to-r from-green-50 to-emerald-50 rounded border border-success-subtle hover:shadow-sm transition"
              >
                <div className="position-relative me-3">
                  <MessageCircle className="text-success" size={20} />
                  <span className="position-absolute top-0 start-100 translate-middle p-1 bg-success border border-light rounded-circle"></span>
                </div>
                <div className="flex-grow-1 text-start">
                  <p className="small fw-semibold mb-0">Live Chat</p>
                  <p className="text-muted small mb-0">
                    Available 24x7 • Avg wait 2 mins
                  </p>
                </div>
                <span className="badge bg-success-subtle text-success">
                  Online
                </span>
              </button>

              {/* Email Support */}
              <button
                onClick={() => navigate("/email-support")}
                className="w-100 d-flex align-items-center p-3 mb-2 bg-gradient-to-r from-blue-50 to-indigo-50 rounded border border-primary-subtle hover:shadow-sm transition"
              >
                <Mail className="text-primary me-3" size={20} />
                <div className="flex-grow-1 text-start">
                  <p className="small fw-semibold mb-0">Email Support</p>
                  <p className="text-muted small mb-0">
                    Response within 4-6 hours
                  </p>
                </div>
                <span className="badge bg-primary-subtle text-primary">
                  Send Email
                </span>
              </button>

              {/* Phone */}
              <div className="d-flex align-items-center p-3 bg-gradient-to-r from-orange-50 to-red-50 rounded border border-warning-subtle">
                <Phone className="text-danger me-3" size={20} />
                <div>
                  <p className="small fw-semibold mb-0">Customer Care</p>
                  <p className="text-muted small mb-0">
                    1860-419-5555 • Mon-Sun 8AM-8PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-5">
          <h2 className="h5 fw-bold mb-3">Frequently Asked Questions</h2>
          <p className="text-muted small mb-4">Get answers to common questions</p>

          <div className="row g-3">
            <div className="col-md-6">
              <div className="card shadow-sm border-0 rounded-3 p-3 h-100">
                <h6 className="fw-semibold">
                  How long does it take to resolve a complaint?
                </h6>
                <p className="text-muted small mb-0">
                  Most complaints are resolved within 7 working days. For
                  complex issues, it may take up to 15 business days.
                </p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card shadow-sm border-0 rounded-3 p-3 h-100">
                <h6 className="fw-semibold">Can I track my complaint status?</h6>
                <p className="text-muted small mb-0">
                  Yes, you can track your complaint status using your ticket ID
                  provided when you submitted your complaint.
                </p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card shadow-sm border-0 rounded-3 p-3 h-100">
                <h6 className="fw-semibold">
                  What information should I include in my complaint?
                </h6>
                <p className="text-muted small mb-0">
                  Please include relevant details, dates, amounts, and any
                  relevant screenshots or documents.
                </p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card shadow-sm border-0 rounded-3 p-3 h-100">
                <h6 className="fw-semibold">Is there a fee for filing a complaint?</h6>
                <p className="text-muted small mb-0">
                  No, filing a complaint or providing feedback is completely
                  free of charge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComplaintFeedback;
