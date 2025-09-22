// src/pages/Setting/PersonalDetails.jsx
import React, { useState, useRef } from 'react';
import {
  Container, Row, Col, Card, Button, Tab, Nav, Image,
  OverlayTrigger, Tooltip, Toast, Form, Modal
} from 'react-bootstrap';
import {
  FaUser, FaPhone, FaFileAlt, FaCreditCard, FaEdit,
  FaBell, FaEye, FaEyeSlash, FaCopy, FaUpload
} from 'react-icons/fa';

const PersonalDetails = () => {
  const [showSensitive, setShowSensitive] = useState({
    account: false,
    pan: false,
    aadhar: false,
  });
  const [copySuccess, setCopySuccess] = useState(false);
  const [activeTab, setActiveTab] = useState('personal');
  const [editMode, setEditMode] = useState({
    personal: false,
    contact: false,
  });

  // Profile image
  const [profileImage, setProfileImage] = useState(
    "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
  );
  const fileInputRef = useRef(null);

  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setProfileImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  // Document upload & preview
  const [uploadedDocs, setUploadedDocs] = useState({});
  const [viewDoc, setViewDoc] = useState(null);

  const handleDocUpload = (e, docType) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setUploadedDocs((prev) => ({ ...prev, [docType]: url }));
    }
  };

  // Profile data
  const [profileData, setProfileData] = useState({
    firstName: 'Rajesh',
    middleName: '',
    lastName: 'Sharma',
    dateOfBirth: '1990-05-15',
    gender: 'Male',
    maritalStatus: 'Married',
    nationality: 'Indian',
    accountNumber: '123456789012',
    accountType: 'Premium Savings',
    balance: '₹1,25,000',
    status: 'Active',
    lastLogin: 'Today',
    email: 'rajesh.sharma@email.com',
    phoneNumber: '9876543210',
    alternateNumber: '9876543211',
    address: '123, MG Road, Sector 14, Near City Mall, Gurgaon, Haryana - 122001',
    emergencyName: 'Priya Sharma',
    emergencyRelation: 'Spouse',
    emergencyPhone: '9876543212',
    panNumber: 'ABCPK1234F',
    aadharNumber: '123456789012',
    passportNumber: 'A1234567',
  });

  const maskData = (value, type) => {
    if (showSensitive[type]) return value;
    if (type === 'pan') return value.slice(0, 2) + '******' + value.slice(-1);
    if (type === 'aadhar') return '********' + value.slice(-4);
    if (type === 'account') return '********' + value.slice(-4);
    return value;
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prev => ({ ...prev, [name]: value }));
  };

  const toggleEdit = (tab) => {
    setEditMode(prev => ({ ...prev, [tab]: !prev[tab] }));
  };

  return (
    <Container fluid className="p-4" style={{ backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      {/* Toast */}
      <Toast
        show={copySuccess}
        onClose={() => setCopySuccess(false)}
        delay={2000}
        autohide
        style={{ position: 'fixed', bottom: 20, right: 20, zIndex: 9999 }}
        bg="success"
      >
        <Toast.Body className="text-white">Copied to clipboard!</Toast.Body>
      </Toast>

      {/* Document View Modal */}
      <Modal show={!!viewDoc} onHide={() => setViewDoc(null)} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>View Document</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          {viewDoc && <img src={viewDoc} alt="document" style={{ maxWidth: '100%', maxHeight: '80vh' }} />}
        </Modal.Body>
      </Modal>

      {/* Header */}
      <Card className="mb-4 shadow-sm" style={{ borderRadius: '10px' }}>
        <Card.Body className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <div className="position-relative">
              <Image src={profileImage} roundedCircle width={80} height={80} />
              <Button
                variant="light"
                size="sm"
                className="position-absolute bottom-0 end-0 rounded-circle border"
                style={{ padding: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                onClick={() => fileInputRef.current.click()}
              >
                <FaEdit color="#c30c0c" />
              </Button>
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: 'none' }}
                accept="image/*"
                onChange={handleProfileImageChange}
              />
            </div>
            <div className="ms-3">
              <h4 className="mb-1">{profileData.firstName} {profileData.middleName} {profileData.lastName}</h4>
              <p className="mb-1">{profileData.accountType}</p>
              <small>
                <span className="me-2 text-success">✅ Verified Account</span>
                <span className="text-warning">⭐ Premium Member</span>
              </small>
            </div>
          </div>
          <div className="d-flex align-items-center gap-2">
            <Button variant="outline-light" className="d-flex align-items-center gap-1 rounded-pill">
              <FaEdit /> Edit Profile
            </Button>
            <Button variant="danger" className="d-flex align-items-center gap-1 rounded-pill">
              <FaBell /> Notifications
            </Button>
          </div>
        </Card.Body>
      </Card>

      {/* Tabs */}
      <Tab.Container activeKey={activeTab} onSelect={(k) => setActiveTab(k)}>
        <Nav variant="tabs" className="mb-3 bg-white p-2 rounded shadow-sm">
          {[
            { key: 'personal', label: 'Personal Info', icon: <FaUser /> },
            { key: 'contact', label: 'Contact Details', icon: <FaPhone /> },
            { key: 'documents', label: 'Documents', icon: <FaFileAlt /> },
            { key: 'financial', label: 'Financial Info', icon: <FaCreditCard /> },
          ].map(tab => (
            <Nav.Item key={tab.key}>
              <Nav.Link
                eventKey={tab.key}
                style={{
                  color: activeTab === tab.key ? '#fff' : '#c30c0c',
                  backgroundColor: activeTab === tab.key ? '#c30c0c' : 'transparent',
                  borderRadius: '10px',
                  marginRight: '5px',
                  fontWeight: '500',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  padding: '8px 16px',
                }}
              >
                {tab.icon} {tab.label}
              </Nav.Link>
            </Nav.Item>
          ))}
        </Nav>

        <Tab.Content>
          {/* 🔹 Personal Info */}
          <Tab.Pane eventKey="personal">
            <Card className="shadow-sm p-3">
              {editMode.personal ? (
                <>
                  {/* Edit Form */}
                  <Form>
                    <Row>
                      <Col md={4}>
                        <Form.Group className="mb-2">
                          <Form.Label>First Name</Form.Label>
                          <Form.Control name="firstName" value={profileData.firstName} onChange={handleInputChange} />
                        </Form.Group>
                      </Col>
                      <Col md={4}>
                        <Form.Group className="mb-2">
                          <Form.Label>Middle Name</Form.Label>
                          <Form.Control name="middleName" value={profileData.middleName} onChange={handleInputChange} />
                        </Form.Group>
                      </Col>
                      <Col md={4}>
                        <Form.Group className="mb-2">
                          <Form.Label>Last Name</Form.Label>
                          <Form.Control name="lastName" value={profileData.lastName} onChange={handleInputChange} />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row>
                      <Col md={4}>
                        <Form.Group className="mb-2">
                          <Form.Label>Date of Birth</Form.Label>
                          <Form.Control type="date" name="dateOfBirth" value={profileData.dateOfBirth} onChange={handleInputChange} />
                        </Form.Group>
                      </Col>
                      <Col md={4}>
                        <Form.Group className="mb-2">
                          <Form.Label>Gender</Form.Label>
                          <Form.Select name="gender" value={profileData.gender} onChange={handleInputChange}>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>
                      <Col md={4}>
                        <Form.Group className="mb-2">
                          <Form.Label>Marital Status</Form.Label>
                          <Form.Select name="maritalStatus" value={profileData.maritalStatus} onChange={handleInputChange}>
                            <option value="Single">Single</option>
                            <option value="Married">Married</option>
                            <option value="Other">Other</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-2">
                          <Form.Label>Nationality</Form.Label>
                          <Form.Control name="nationality" value={profileData.nationality} onChange={handleInputChange} />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-2">
                          <Form.Label>PAN Number</Form.Label>
                          <Form.Control name="panNumber" value={profileData.panNumber} onChange={handleInputChange} />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-2">
                          <Form.Label>Aadhar Number</Form.Label>
                          <Form.Control name="aadharNumber" value={profileData.aadharNumber} onChange={handleInputChange} />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-2">
                          <Form.Label>Passport Number</Form.Label>
                          <Form.Control name="passportNumber" value={profileData.passportNumber} onChange={handleInputChange} />
                        </Form.Group>
                      </Col>
                    </Row>
                  </Form>
                  <Button
                    variant="warning"
                    className="d-flex align-items-center justify-content-center gap-1 mt-3 mx-auto"
                    style={{ width: 140, height: 36, borderRadius: 24, fontSize: '0.9rem' }}
                    onClick={() => toggleEdit('personal')}
                  >
                    <FaEdit size={16} /> Save
                  </Button>
                </>
              ) : (
                <>
                  {/* Display Info with proper spacing */}
                  {[
                    { label: 'Name', value: `${profileData.firstName} ${profileData.middleName} ${profileData.lastName}` },
                    { label: 'Date of Birth', value: profileData.dateOfBirth },
                    { label: 'Gender', value: profileData.gender },
                    { label: 'Marital Status', value: profileData.maritalStatus },
                    { label: 'Nationality', value: profileData.nationality },
                    { label: 'PAN', value: maskData(profileData.panNumber, 'pan') },
                    { label: 'Aadhar', value: maskData(profileData.aadharNumber, 'aadhar') },
                    { label: 'Passport', value: profileData.passportNumber },
                  ].map((item, idx) => (
                    <div key={idx} className="d-flex justify-content-between mb-2">
                      <strong style={{ minWidth: '180px' }}>{item.label}:</strong>
                      <span>{item.value}</span>
                    </div>
                  ))}

                  <Button
                    variant="warning"
                    className="d-flex align-items-center justify-content-center gap-1 mt-3 mx-auto"
                    style={{ width: 140, height: 36, borderRadius: 24, fontSize: '0.9rem' }}
                    onClick={() => toggleEdit('personal')}
                  >
                    <FaEdit size={16} /> Edit
                  </Button>
                </>
              )}
            </Card>
          </Tab.Pane>

          {/* 🔹 Contact Info */}
          <Tab.Pane eventKey="contact">
            <Card className="shadow-sm p-3">
              {editMode.contact ? (
                <>
                  <Form>
                    <Form.Group className="mb-2">
                      <Form.Label>Email</Form.Label>
                      <Form.Control name="email" value={profileData.email} onChange={handleInputChange} />
                    </Form.Group>
                    <Form.Group className="mb-2">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control name="phoneNumber" value={profileData.phoneNumber} onChange={handleInputChange} />
                    </Form.Group>
                    <Form.Group className="mb-2">
                      <Form.Label>Alternate Number</Form.Label>
                      <Form.Control name="alternateNumber" value={profileData.alternateNumber} onChange={handleInputChange} />
                    </Form.Group>
                    <Form.Group className="mb-2">
                      <Form.Label>Address</Form.Label>
                      <Form.Control name="address" value={profileData.address} onChange={handleInputChange} />
                    </Form.Group>
                  </Form>
                  <Button
                    variant="warning"
                    className="d-flex align-items-center justify-content-center gap-1 mt-3 mx-auto"
                    style={{ width: 140, height: 36, borderRadius: 24, fontSize: '0.9rem' }}
                    onClick={() => toggleEdit('contact')}
                  >
                    <FaEdit size={16} /> Save
                  </Button>
                </>
              ) : (
                <>
                  {[
                    { label: 'Email', value: profileData.email },
                    { label: 'Phone', value: profileData.phoneNumber },
                    { label: 'Alternate', value: profileData.alternateNumber },
                    { label: 'Address', value: profileData.address },
                  ].map((item, idx) => (
                    <div key={idx} className="d-flex justify-content-between mb-2">
                      <strong style={{ minWidth: '180px' }}>{item.label}:</strong>
                      <span>{item.value}</span>
                    </div>
                  ))}

                  <Button
                    variant="warning"
                    className="d-flex align-items-center justify-content-center gap-1 mt-3 mx-auto"
                    style={{ width: 140, height: 36, borderRadius: 24, fontSize: '0.9rem' }}
                    onClick={() => toggleEdit('contact')}
                  >
                    <FaEdit size={16} /> Edit
                  </Button>
                </>
              )}
            </Card>
          </Tab.Pane>

          {/* 🔹 Documents */}
          <Tab.Pane eventKey="documents">
            <Row className="g-3">
              <Col md={6}>
                <Card className="shadow-sm">
                  <Card.Header className="text-white" style={{ backgroundColor: '#c30c0c' }}>Identity Documents</Card.Header>
                  <Card.Body>
                    {[{ label: 'PAN Number', value: profileData.panNumber, type: 'pan' },
                      { label: 'Aadhar Number', value: profileData.aadharNumber, type: 'aadhar' },
                      { label: 'Passport Number', value: profileData.passportNumber, type: 'passport' }].map((doc, idx) => (
                      <p key={idx} className="d-flex align-items-center gap-2">
                        <strong style={{ minWidth: '140px' }}>{doc.label}:</strong>
                        <span>{doc.type === 'passport' ? doc.value : maskData(doc.value, doc.type)}</span>
                        {doc.type !== 'passport' && (
                          <>
                            <OverlayTrigger placement="top" overlay={<Tooltip>Show/Hide</Tooltip>}>
                              <Button variant="outline-secondary" size="sm" onClick={() => setShowSensitive(prev => ({ ...prev, [doc.type]: !prev[doc.type] }))}>
                                {showSensitive[doc.type] ? <FaEyeSlash /> : <FaEye />}
                              </Button>
                            </OverlayTrigger>
                            <OverlayTrigger placement="top" overlay={<Tooltip>Copy</Tooltip>}>
                              <Button variant="outline-secondary" size="sm" onClick={() => copyToClipboard(doc.value)}>
                                <FaCopy />
                              </Button>
                            </OverlayTrigger>
                          </>
                        )}
                      </p>
                    ))}
                  </Card.Body>
                </Card>
              </Col>

              <Col md={6}>
                <Card className="shadow-sm">
                  <Card.Header className="text-white" style={{ backgroundColor: '#c30c0c' }}>Document Upload</Card.Header>
                  <Card.Body className="d-flex flex-column gap-3">
                    {['PAN Card', 'Aadhar Card', 'Passport', 'Signature'].map((doc, idx) => (
                      <div key={idx} className="d-flex justify-content-between align-items-center p-2 bg-light rounded">
                        <span className="fw-bold">{doc}</span>
                        <div className="d-flex gap-2">
                          <OverlayTrigger placement="top" overlay={<Tooltip>View</Tooltip>}>
                            <Button variant="outline-primary" size="sm" onClick={() => setViewDoc(uploadedDocs[doc])} disabled={!uploadedDocs[doc]}>
                              <FaEye />
                            </Button>
                          </OverlayTrigger>
                          <OverlayTrigger placement="top" overlay={<Tooltip>Upload</Tooltip>}>
                            <>
                              <Button variant="outline-success" size="sm" onClick={() => document.getElementById(`upload-${doc}`).click()}>
                                <FaUpload />
                              </Button>
                              <input type="file" id={`upload-${doc}`} accept="image/*" style={{ display: 'none' }} onChange={(e) => handleDocUpload(e, doc)} />
                            </>
                          </OverlayTrigger>
                        </div>
                      </div>
                    ))}
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Tab.Pane>

          {/* 🔹 Financial Info */}
          <Tab.Pane eventKey="financial">
            <Card className="shadow-sm p-3">
              {[
                { label: 'Account Number', value: maskData(profileData.accountNumber, 'account') },
                { label: 'Account Type', value: profileData.accountType },
                { label: 'Balance', value: profileData.balance },
                { label: 'Status', value: profileData.status },
                { label: 'Last Login', value: profileData.lastLogin },
              ].map((item, idx) => (
                <div key={idx} className="d-flex justify-content-between mb-2">
                  <strong style={{ minWidth: '180px' }}>{item.label}:</strong>
                  <span>{item.value}</span>
                </div>
              ))}
            </Card>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </Container>
  );
};

export default PersonalDetails;
