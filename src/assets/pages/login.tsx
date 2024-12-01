import { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import logo from '../images/duzo.png';

export default function Component() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');

  // Corrected type for event
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Phone:', phoneNumber, 'OTP:', otp);
  };

  return (
    <Container fluid className="p-0 m-0" style={{ height: '100vh', width: '100vw', backgroundColor: '#FFEBCC' }}>
      <div className="d-flex flex-column align-items-center justify-content-center h-100">
        <div className="text-center">
          <img 
            src={logo}
            alt="Logo" 
            style={{ width: '162px', height: '105px' }} 
          />
        </div>

        <div style={{ width: '100%', maxWidth: '400px', padding: '0 15px' }}>
          <h2 className="text-center mb-4" style={{ fontSize: '1.5rem' }}>Login</h2>
          
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Enter Phone Number</Form.Label>
              <Form.Control
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                style={{
                  border: '1px solid #DDD',
                  borderRadius: '20px',
                  padding: '0.5rem'
                }}
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label>Enter OTP</Form.Label>
              <Form.Control
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                style={{
                  border: '1px solid #DDD',
                  borderRadius: '20px',
                  padding: '0.5rem'
                }}
              />
            </Form.Group>

            <Link to="/LOC" className="action">
              <div style={{ marginLeft: '124px' }}>
                <Button 
                  type="submit"
                  className="w-50"
                  style={{
                    backgroundColor: '#000',
                    border: 'none',
                    borderRadius: '20px',
                    padding: '0.5rem',
                    fontSize: '1rem',
                  }}
                >
                  Submit
                </Button>
              </div>
            </Link>
          </Form>
        </div>
      </div>
    </Container>
  );
}
