import React, { useState } from "react";
import "./css/application.module.css";
import { Link } from 'react-router-dom';

const RepairCard: React.FC = () => {
  const [serviceCount, setServiceCount] = useState<number>(0);

  const handleServiceSelect = () => {
    setServiceCount(serviceCount + 1);
  };

  const handleClose = () => {
    console.log("Close button clicked");
  };

  return (
    <div className="container">
      <div className="repair-card">
        <button className="close-btn" aria-label="Close" onClick={handleClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <h2>Appliances Repair</h2>
        <p>Select your expertise</p>
        <div className="service-grid">
          {/* Example service button */}
          <button onClick={handleServiceSelect}>Service 1</button>
          <button onClick={handleServiceSelect}>Service 2</button>
          {/* Dynamically insert additional service buttons */}
        </div>
        <div className="footer">
          <p className="service-count">Service selected: {serviceCount}</p>
            <Link to="/Form" >
          <button className="proceed-btn">Proceed to apply</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RepairCard;
