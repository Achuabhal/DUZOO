import React, { useState, useEffect } from 'react';
import Preloader from '../component/Preloader'; // Assuming Preloader is in the same folder
import { Link } from 'react-router-dom';
import logo from "../images/duzo.png"

const EligibilityForm: React.FC = () => {
  const [dob, setDob] = useState('');
  const [isAdult, setIsAdult] = useState(false);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = e.target.value;
    setDob(selectedDate);
    const today = new Date();
    const birthDate = new Date(selectedDate);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    setIsAdult(age >= 18);
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
            type="date" 
            style={{ background: '#FFE4C4', padding: '8px 12px', borderRadius: '8px', fontSize: '14px', minWidth: '200px', textAlign: 'center', border: 'none', outline: 'none' }} 
            value={dob}
            onChange={handleChange}
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Link to="/login" state={{ dob }}  className="action ">
            <button 
              style={{ 
                background: isAdult ? '#333333' : '#999999', 
                color: 'white', 
                border: 'none', 
                padding: '12px 30px', 
                borderRadius: '25px', 
                fontSize: '14px', 
                cursor: isAdult ? 'pointer' : 'not-allowed' 
              }}
              disabled={!isAdult}
            >
              Continue
            </button>
          </Link>
        </div>
        {!isAdult && dob && (
          <p style={{ color: 'red', textAlign: 'center', marginTop: '10px' }}>
            You must be at least 18 years old to continue.
          </p>
        )}
      </div>
    </div>
  );
};

export default EligibilityForm;
