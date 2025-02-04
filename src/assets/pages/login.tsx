import { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate , useLocation } from 'react-router-dom';
import logo from '../images/duzo.png';

export default function Component() {

  const location = useLocation();
  const { dob } = location.state || {};
  console.log(dob);
  // Access the `state` object and extract `dob`
 
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState<'phone' | 'otp'>('phone');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handlePhoneSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phoneNumber)) {
      setError('Enter a valid 10-digit phone number.');
    } else {
      setError('');
      // Simulate OTP request
      console.log('Requesting OTP for:', phoneNumber);
      setStep('otp');
    }
  };

  const handleOtpSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (otp === '123456') { // Simulate OTP verification
      navigate('/LOC');
    } else {
      setError('Invalid OTP.');
    }
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
          
          {error && <Alert variant="danger">{error}</Alert>}
          
          {step === 'phone' && (
            <Form onSubmit={handlePhoneSubmit}>
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
                  placeholder="10-digit number"
                  required
                />
              </Form.Group>

              <div className="text-center">
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
                  Request OTP
                  
                </Button>
              </div>
            </Form>
          )}

          {step === 'otp' && (
            <Form onSubmit={handleOtpSubmit}>
              <Form.Group className="mb-4">
                <Form.Label>Enter OTP</Form.Label>
                <Form.Control
                  type="text"
                  value={otp}
                  onChange={(e) => {
                    const numericValue = e.target.value.replace(/\D/g, '');
                    setOtp(numericValue);
                  }}
                  style={{
                    border: '1px solid #DDD',
                    borderRadius: '20px',
                    padding: '0.5rem'
                  }}
                  required
                />
              </Form.Group>
              <div className="text-center">
                <Button
                  type="submit"
                  className="w-50"
                  style={{
                    backgroundColor: '#000',
                    border: 'none',
                    borderRadius: '20px',
                    padding: '0.5rem',
                    fontSize: '1rem'
                  }}
                >
                  Submit
                </Button>
              </div>
            </Form>
          )}

        </div>
      </div>
    </Container>
  );
}
