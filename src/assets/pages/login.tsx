import { useState, useEffect } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Preloader from '../component/Preloader'; // Assuming Preloader is in the same folder
import { Link } from 'react-router-dom';
import logo from '../images/duzo.png';

export default function Component() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating a delay (e.g., fetching data, or processing tasks) before showing the form
    const timer = setTimeout(() => {
      setLoading(false); // After the delay, hide the preloader and show the form
    }, 2000);

    return () => clearTimeout(timer); // Clean up timer on component unmount
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Phone:', phoneNumber, 'OTP:', otp);
  };

  const handlePreloaderComplete = () => {
    console.log("Preloader has completed");
    setLoading(false);
  };

  if (loading) {
    return <Preloader onComplete={handlePreloaderComplete} />;
  }

  return (
    <Container fluid className="p-0 m-0" style={{ height: '100vh', width: '100vw', backgroundColor: '#FFEBCC' }}> 
      <div className="d-flex flex-column align-items-center justify-content-center h-100">
        <div className="text-center ">
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
                  borderRadius: '20px', // Make the input curved
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
                  borderRadius: '20px', // Make the input curved
                  padding: '0.5rem'
                }}
              />
            </Form.Group>

            <Link to="/homepage" className="action">
            <div style={{ marginLeft: '124px' }}>
                <Button 
                type="submit"
                className="w-50" // Added margin-left using Bootstrap class
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
