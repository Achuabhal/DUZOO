import React, { useState } from 'react';
import './css/automobile.module.css';
import { Link } from 'react-router-dom';


const AutomobileCleaning: React.FC = () => {
  const [selectedCount, setSelectedCount] = useState<number>(0);
  const [selectedServiceIds, setSelectedServiceIds] = useState<number[]>([]); // Store selected service IDs

  const handleServiceClick = (serviceId: number) => {
    if (selectedServiceIds.includes(serviceId)) {
      // If the service is already selected, deselect it
      setSelectedServiceIds(prevIds => prevIds.filter(id => id !== serviceId));
      setSelectedCount(prevCount => prevCount - 1);
    } else if (selectedCount < 2) {
      // If the service isn't selected and there are fewer than 2 selected services, select it
      setSelectedServiceIds(prevIds => [...prevIds, serviceId]);
      setSelectedCount(prevCount => prevCount + 1);
    }
  };

  const handleCloseButtonClick = () => {
    // Handle the close button functionality here, if required
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Automobile Cleaning</h1>
        <Link to="/homepage">
        <button id="closeButton" className="close-button" onClick={handleCloseButtonClick}>
          ✕
        </button>
        </Link>
      </div>
      <p className="subheader">Select your expertise</p>
      <div className="services-grid">
        <div
          className={`service-item ${selectedServiceIds.includes(1) ? 'selected' : ''}`}
          data-id="1"
          onClick={() => handleServiceClick(1)}
        >
          <div className="service-box">
            <img src="path/to/car-cleaning-image.jpg" alt="Car Cleaning" />
          </div>
          <span className="service-name">Car Cleaning</span>
        </div>
        <div
          className={`service-item ${selectedServiceIds.includes(2) ? 'selected' : ''}`}
          data-id="2"
          onClick={() => handleServiceClick(2)}
        >
          <div className="service-box">
            <img src="path/to/bike-cleaning-image.jpg" alt="Bike Cleaning" />
          </div>
          <span className="service-name">Bike Cleaning</span>
        </div>
      </div>
      <p className="service-count">
        Service selected: <span id="selectedCount">{selectedCount}</span>
      </p>
      <Link to="/Form" className="action">
                  
                 
      <button id="proceedButton" className="proceed-button">
        Proceed to apply
      </button>
      </Link> 
    </div>
  );
};

export default AutomobileCleaning;
