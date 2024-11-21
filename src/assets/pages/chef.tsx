import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import firebaseConfig from "../../helper/firebaseConfig";
import "./css/chef.css";
import { Link } from "react-router-dom";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const App: React.FC = () => {
  const [selectedServices, setSelectedServices] = useState<Set<string>>(new Set());

  const handleServiceClick = (id: string) => {
    setSelectedServices((prevSelected) => {
      const updatedSelected = new Set(prevSelected);
      if (updatedSelected.has(id)) {
        updatedSelected.delete(id); // Deselect the service
      } else {
        updatedSelected.add(id); // Select the service
      }
      return updatedSelected;
    });
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
        <Link to="/homepage">
     
        <button id="closeButton" className="close-button" onClick={handleClose}>
          ✕
        </button>
         
      </Link>
      </div>
      <p className="subheader">Select your expertise</p>
      <div className="services-grid">
        {/* Example of multiple services */}
        {["1", "2", "3"].map((id) => (
          <div
            key={id}
            className={`service-item ${
              selectedServices.has(id) ? "selected" : ""
            }`}
            data-id={id}
            onClick={() => handleServiceClick(id)}
          >
            <div className="service-box">
              <img src="path/to/chef-image.jpg" alt="Chef Service" />
            </div>
            <span className="service-name">Chef Service {id}</span>
          </div>
        ))}
      </div>
      <p className="service-count">
        Services selected: <span id="selectedCount">{selectedServices.size}</span>
      </p>
      <Link to="/Form">
        <button id="proceedButton" className="proceed-button" onClick={handleProceed}>
          Proceed to apply
        </button>
      </Link>
    </div>
  );
};

export default App;

  