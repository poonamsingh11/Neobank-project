import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Form, Button, Badge } from 'react-bootstrap';
import { Sun, Moon, Display, ChevronLeft, ArrowCounterclockwise, Check2Circle } from 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const GeneralSettings = () => {
    const navigate = useNavigate();

    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'Light');
    const [compactView, setCompactView] = useState(JSON.parse(localStorage.getItem('compactView')) || false);
    const [animations, setAnimations] = useState(JSON.parse(localStorage.getItem('animations')) ?? true);
    const [soundEffects, setSoundEffects] = useState(JSON.parse(localStorage.getItem('soundEffects')) ?? true);

    const [pushNotifications, setPushNotifications] = useState(JSON.parse(localStorage.getItem('pushNotifications')) ?? true);
    const [emailNotifications, setEmailNotifications] = useState(JSON.parse(localStorage.getItem('emailNotifications')) ?? true);
    const [smsNotifications, setSmsNotifications] = useState(JSON.parse(localStorage.getItem('smsNotifications')) ?? false);

    const [language, setLanguage] = useState(localStorage.getItem('language') || 'English');
    const [currency, setCurrency] = useState(localStorage.getItem('currency') || '₹ INR');
    const [dateFormat, setDateFormat] = useState(localStorage.getItem('dateFormat') || 'DD/MM/YYYY');
    const [timeFormat, setTimeFormat] = useState(localStorage.getItem('timeFormat') || '12-hour');

    const [analytics, setAnalytics] = useState(JSON.parse(localStorage.getItem('analytics')) ?? true);
    const [crashReporting, setCrashReporting] = useState(JSON.parse(localStorage.getItem('crashReporting')) ?? true);

    const [resetHover, setResetHover] = useState(false);

    const handleSaveSettings = () => {
        localStorage.setItem('theme', theme);
        localStorage.setItem('compactView', compactView);
        localStorage.setItem('animations', animations);
        localStorage.setItem('soundEffects', soundEffects);

        localStorage.setItem('pushNotifications', pushNotifications);
        localStorage.setItem('emailNotifications', emailNotifications);
        localStorage.setItem('smsNotifications', smsNotifications);

        localStorage.setItem('language', language);
        localStorage.setItem('currency', currency);
        localStorage.setItem('dateFormat', dateFormat);
        localStorage.setItem('timeFormat', timeFormat);

        localStorage.setItem('analytics', analytics);
        localStorage.setItem('crashReporting', crashReporting);

        alert('Settings applied successfully!');
    };

    const handleBack = () => {
        navigate('/Setting');
    };

    useEffect(() => {
        if (theme === 'Dark') {
            document.body.style.backgroundColor = '#121212';
            document.body.style.color = '#f1f1f1';
        } else {
            document.body.style.backgroundColor = '#f8f9fa';
            document.body.style.color = '#212529';
        }
    }, [theme]);

    const cardStyle = {
        backgroundColor: theme === 'Dark' ? '#1e1e1e' : '#fff',
        color: theme === 'Dark' ? '#f1f1f1' : '#212529',
    };

    const subtitleColor = theme === 'Dark' ? '#cfcfcf' : '#6c757d';

    return (
        <>
            {/* Header */}
            <div className={`py-5 text-center position-relative`} style={{ backgroundColor: '#900603', color: '#fff' }}>
                <Button
                    variant="link"
                    className="text-white position-absolute top-0 start-0 p-3 d-flex align-items-center text-decoration-none"
                    onClick={handleBack}
                >
                    <ChevronLeft className="me-2" /> Back to Settings
                </Button>
                <h2 className="fw-semibold">General Settings</h2>
                <p className="opacity-75 mb-0">Customize your app experience and preferences</p>
            </div>

            <Container fluid className="py-4">
                <Row className="g-4">
                    {/* Left Column */}
                    <Col md={6} className="d-flex flex-column">
                        {/* Theme & Appearance */}
                        <Card className="shadow-sm flex-grow-1 rounded-3 border" style={cardStyle}>
                            <Card.Body style={{ color: cardStyle.color }}>
                                <Card.Title className="fw-semibold">🎨 Theme & Appearance</Card.Title>
                                <Card.Subtitle className="mb-3" style={{ color: subtitleColor }}>
                                    Customize the look and feel of your app
                                </Card.Subtitle>

                                <h6>App Theme</h6>
                                {[
                                    { name: 'Light', icon: <Sun className="me-3 fs-4 text-warning" /> },
                                    { name: 'Dark', icon: <Moon className="me-3 fs-4" /> },
                                    { name: 'Auto', icon: <Display className="me-3 fs-4" /> },
                                ].map((item) => (
                                    <div
                                        key={item.name}
                                        className={`d-flex align-items-center p-3 border rounded mb-2 ${theme === item.name ? 'border-danger shadow-sm' : 'border-secondary'}`}
                                        style={{
                                            cursor: 'pointer',
                                            backgroundColor: theme === 'Dark' ? '#2c2c2c' : theme === item.name ? '#f8d7da' : cardStyle.backgroundColor,
                                            color: theme === 'Dark' ? '#f1f1f1' : '#212529',
                                        }}
                                        onClick={() => setTheme(item.name)}
                                    >
                                        {item.icon}
                                        <div>
                                            <strong>{item.name} Theme</strong>
                                            <div style={{ color: subtitleColor, fontSize: '0.875rem' }}>
                                                {item.name === 'Light'
                                                    ? 'Clean and bright interface'
                                                    : item.name === 'Dark'
                                                        ? 'Easy on the eyes in low light'
                                                        : 'Follows your device settings'}
                                            </div>
                                        </div>
                                        {theme === item.name && <Badge bg="danger" className="ms-auto">Active</Badge>}
                                    </div>
                                ))}

                                <hr style={{ borderColor: theme === 'Dark' ? '#444' : '' }} />
                                <h6>Display Options</h6>
                                <Form.Group className="d-flex align-items-center justify-content-between mb-3">
                                    <div>
                                        <Form.Label className="mb-0 fw-medium">Compact View</Form.Label>
                                        <Form.Text style={{ color: subtitleColor, display: 'block' }}>Reduce spacing and padding</Form.Text>
                                    </div>
                                    <Form.Check type="switch" checked={compactView} onChange={() => setCompactView(!compactView)} />
                                </Form.Group>

                                <Form.Group className="d-flex align-items-center justify-content-between mb-3">
                                    <div>
                                        <Form.Label className="mb-0 fw-medium">Animations</Form.Label>
                                        <Form.Text style={{ color: subtitleColor, display: 'block' }}>Enable smooth transitions</Form.Text>
                                    </div>
                                    <Form.Check type="switch" checked={animations} onChange={() => setAnimations(!animations)} />
                                </Form.Group>

                                <Form.Group className="d-flex align-items-center justify-content-between">
                                    <div>
                                        <Form.Label className="mb-0 fw-medium">Sound Effects</Form.Label>
                                        <Form.Text style={{ color: subtitleColor, display: 'block' }}>Play sounds for actions</Form.Text>
                                    </div>
                                    <Form.Check type="switch" checked={soundEffects} onChange={() => setSoundEffects(!soundEffects)} />
                                </Form.Group>
                            </Card.Body>
                        </Card>

                        {/* Notification Preferences */}
                        <Card className="shadow-sm flex-grow-1 rounded-3 border mt-4" style={cardStyle}>
                            <Card.Body style={{ color: cardStyle.color }}>
                                <Card.Title className="fw-semibold">🔔 Notification Preferences</Card.Title>
                                <Card.Subtitle className="mb-4" style={{ color: subtitleColor }}>
                                    Choose how you want to receive notifications
                                </Card.Subtitle>

                                {[
                                    { label: 'Push Notifications', state: pushNotifications, setter: setPushNotifications },
                                    { label: 'Email Notifications', state: emailNotifications, setter: setEmailNotifications },
                                    { label: 'SMS Notifications', state: smsNotifications, setter: setSmsNotifications },
                                ].map(({ label, state, setter }, idx) => (
                                    <Form.Group key={idx} className="d-flex align-items-center justify-content-between mb-3">
                                        <div>
                                            <Form.Label className="mb-0 fw-medium">{label}</Form.Label>
                                        </div>
                                        <Form.Check type="switch" checked={state} onChange={() => setter(!state)} />
                                    </Form.Group>
                                ))}
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* Right Column */}
                    <Col md={6} className="d-flex flex-column">
                        {/* Language & Regional */}
                        <Card className="shadow-sm flex-grow-1 rounded-3 border" style={cardStyle}>
                            <Card.Body style={{ color: cardStyle.color }}>
                                <Card.Title className="fw-semibold">🌐 Language & Regional</Card.Title>
                                <Card.Subtitle className="mb-3" style={{ color: subtitleColor }}>
                                    Set your language, currency, and format preferences
                                </Card.Subtitle>

                                <Form.Group className="mb-3">
                                    <Form.Label>Language</Form.Label>
                                    <Form.Select value={language} onChange={(e) => setLanguage(e.target.value)} style={{ backgroundColor: theme === 'Dark' ? '#2c2c2c' : '#fff', color: theme === 'Dark' ? '#f1f1f1' : '#212529' }}>
                                        <option value="English">US English</option>
                                        <option value="UK English">UK English</option>
                                        <option value="Hindi">Hindi</option>
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Currency</Form.Label>
                                    <Form.Select value={currency} onChange={(e) => setCurrency(e.target.value)} style={{ backgroundColor: theme === 'Dark' ? '#2c2c2c' : '#fff', color: theme === 'Dark' ? '#f1f1f1' : '#212529' }}>
                                        <option value="₹ INR">₹ Indian Rupee (₹)</option>
                                        <option value="$ USD">$ US Dollar ($)</option>
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Date Format</Form.Label>
                                    <Form.Select value={dateFormat} onChange={(e) => setDateFormat(e.target.value)} style={{ backgroundColor: theme === 'Dark' ? '#2c2c2c' : '#fff', color: theme === 'Dark' ? '#f1f1f1' : '#212529' }}>
                                        <option value="DD/MM/YYYY">DD/MM/YYYY (31/12/2025)</option>
                                        <option value="MM/DD/YYYY">MM/DD/YYYY (12/31/2025)</option>
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Time Format</Form.Label>
                                    <Form.Select value={timeFormat} onChange={(e) => setTimeFormat(e.target.value)} style={{ backgroundColor: theme === 'Dark' ? '#2c2c2c' : '#fff', color: theme === 'Dark' ? '#f1f1f1' : '#212529' }}>
                                        <option value="12-hour">12-hour (2:30 PM)</option>
                                        <option value="24-hour">24-hour (14:30)</option>
                                    </Form.Select>
                                </Form.Group>
                            </Card.Body>
                        </Card>

                        {/* Privacy & Data */}
                        <Card className="shadow-sm flex-grow-1 rounded-3 border mt-4" style={cardStyle}>
                            <Card.Body style={{ color: cardStyle.color }}>
                                <Card.Title className="fw-semibold">🔒 Privacy & Data</Card.Title>
                                <Card.Subtitle className="mb-4" style={{ color: subtitleColor }}>
                                    Control how your data is used and shared
                                </Card.Subtitle>

                                {[
                                    { label: 'Analytics & Usage Data', state: analytics, setter: setAnalytics },
                                    { label: 'Crash Reporting', state: crashReporting, setter: setCrashReporting },
                                ].map(({ label, state, setter }, idx) => (
                                    <Form.Group key={idx} className="d-flex align-items-center justify-content-between mb-3">
                                        <div>
                                            <Form.Label className="mb-0 fw-medium">{label}</Form.Label>
                                        </div>
                                        <Form.Check type="switch" checked={state} onChange={() => setter(!state)} />
                                    </Form.Group>
                                ))}
                            </Card.Body>
                        </Card>

                        {/* Settings Preview */}
                        <Card className="shadow-sm flex-grow-1 rounded-3 border mt-4" style={cardStyle}>
                            <Card.Body style={{ color: cardStyle.color }}>
                                <Card.Title className="fw-semibold">📊 Settings Preview</Card.Title>
                                <Card.Subtitle className="mb-3" style={{ color: subtitleColor }}>
                                    A preview of your current settings
                                </Card.Subtitle>

                                <div className="d-flex justify-content-between mb-2">
                                    <span>Theme</span>
                                    <span className="fw-medium">{theme} Theme</span>
                                </div>
                                <div className="d-flex justify-content-between mb-2">
                                    <span>Language</span>
                                    <span className="fw-medium">{language}</span>
                                </div>
                                <div className="d-flex justify-content-between mb-2">
                                    <span>Currency</span>
                                    <span className="fw-medium">{currency}</span>
                                </div>
                                <div className="d-flex justify-content-between mb-2">
                                    <span>Date Format</span>
                                    <span className="fw-medium">{dateFormat}</span>
                                </div>
                                <div className="d-flex justify-content-between mb-2">
                                    <span>Time Format</span>
                                    <span className="fw-medium">{timeFormat}</span>
                                </div>
                                <div className="d-flex justify-content-between mb-2">
                                    <span>Notifications</span>
                                    <span className="fw-medium">
                                        {[
                                            pushNotifications && 'Push',
                                            emailNotifications && 'Email',
                                            smsNotifications && 'SMS',
                                        ].filter(Boolean).join(', ')}
                                    </span>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                {/* Footer Buttons */}
                <Row>
                    <Col className="d-flex justify-content-end gap-2 mt-3">
                        <Button
                            variant="outline-danger"
                            onMouseEnter={() => setResetHover(true)}
                            onMouseLeave={() => setResetHover(false)}
                            style={{
                                color: resetHover ? '#fff' : '#dc3545',
                                backgroundColor: resetHover ? '#dc3545' : 'transparent',
                                borderColor: '#dc3545',
                            }}
                            onClick={() => window.location.reload()}
                        >
                            <ArrowCounterclockwise className="me-2" /> Reset to Defaults
                        </Button>
                        <Button variant="danger" onClick={handleSaveSettings}>
                            <Check2Circle className="me-2" /> Save Settings
                        </Button>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default GeneralSettings;
