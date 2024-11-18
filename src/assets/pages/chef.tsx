import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import firebaseConfig from "../../helper/firebaseConfig";
import "./css/chef.css";
import { Link } from 'react-router-dom';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const App: React.FC = () => {
  const [selectedCount, setSelectedCount] = useState<number>(0);

  const handleServiceClick = () => {
    setSelectedCount((prevCount) => prevCount + 1);
  };

  const handleClose = () => {
    console.log("Close button clicked");
  };

  const handleProceed = () => {
    console.log("Proceed to apply clicked");
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Chef Services</h1>
        <button
          id="closeButton"
          className="close-button"
          onClick={handleClose}
        >
          ✕
        </button>
      </div>
      <p className="subheader">Select your expertise</p>
      <div className="services-grid">
        <div className="service-item" data-id="1" onClick={handleServiceClick}>
          <div className="service-box">
            <img src="path/to/chef-image.jpg" alt="Chef Service" />
          </div>
          <span className="service-name">Chef Service</span>
        </div>
      </div>
      <p className="service-count">
        Service selected : <span id="selectedCount">{selectedCount}</span>
      </p>
      <Link to="/Form" >
      <button
        id="proceedButton"
        className="proceed-button"
        onClick={handleProceed}
      >
        Proceed to apply
      </button>
      </Link>
    </div>
  );
};

export default App;
