import React, { useState, useEffect } from 'react';
import Preloader from '../component/Preloader'; // Assuming Preloader is in the same folder
import { Link } from 'react-router-dom';
import logo from "../images/duzo.png"

const EligibilityForm: React.FC = () => {
  const [dob, setDob] = useState({
    day: '',
    month: '',
    year: ''
  });

  const [loading, setLoading] = useState(true); // State to manage preloader visibility

  useEffect(() => {
    // Simulate a delay before hiding the preloader
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the delay duration as needed

    return () => clearTimeout(timer); // Clean up the timer
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'day' | 'month' | 'year') => {
    setDob({
      ...dob,
      [type]: e.target.value
    });
  };

  const handlePreloaderComplete = () => {
    console.log("Preloader has completed");
    setLoading(false);
  };

  if (loading) {
    return <Preloader onComplete={handlePreloaderComplete} />;
  }

  return (
    <div style={{ margin: 0, padding: 0, minHeight: '100vh', backgroundColor: 'rgb(255, 235, 204)', display: 'flex', flexDirection: 'column', alignItems: 'center', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ marginTop: '50px', width: '162px', height: '105px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '30px' }}>
      <img src={logo} alt="Eligibility" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
      </div>
      <div style={{ background: 'white', width: '380px', borderRadius: '30px', padding: '25px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
        <h1 style={{ textAlign: 'center', margin: 0, paddingBottom: '15px', borderBottom: '1px solid rgb(0 0 0)', fontSize: '18px', fontWeight: 'normal' }}>ELIGIBILITY</h1>
        <p style={{ textAlign: 'center', margin: '30px 0', fontSize: '16px' }}>Enter your Date of Birth</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '30px' }}>
          <input 
            type="text" 
            style={{ background: '#FFE4C4', padding: '8px 12px', borderRadius: '8px', fontSize: '14px', minWidth: '35px', textAlign: 'center', border: 'none', outline: 'none' }} 
            placeholder="DD" 
            maxLength={2}
            value={dob.day}
            onChange={(e) => handleChange(e, 'day')}
          />
          <input 
            type="text" 
            style={{ background: '#FFE4C4', padding: '8px 12px', borderRadius: '8px', fontSize: '14px', minWidth: '35px', textAlign: 'center', border: 'none', outline: 'none' }} 
            placeholder="MM" 
            maxLength={2}
            value={dob.month}
            onChange={(e) => handleChange(e, 'month')}
          />
          <input 
            type="text" 
            style={{ background: '#FFE4C4', padding: '8px 12px', borderRadius: '8px', fontSize: '14px', minWidth: '50px', textAlign: 'center', border: 'none', outline: 'none' }} 
            placeholder="YYYY" 
            maxLength={4}
            value={dob.year}
            onChange={(e) => handleChange(e, 'year')}
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Link to="/login" className="action">
             
           
          <button style={{ background: '#333333', color: 'white', border: 'none', padding: '12px 30px', borderRadius: '25px', fontSize: '14px', cursor: 'pointer' }}>
            Continue
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EligibilityForm;
