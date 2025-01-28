import React, { useState } from 'react';
import './css/automobile.module.css';
import { Link } from 'react-router-dom';
import bike from "../images/Images for hiring page/Automobile service/bike.png";
import car from "../images/Images for hiring page/Automobile service/car-service.png";

const serviceOptions: { [key: number]: string } = {
  1: 'Car Cleaning',
  2: 'Bike Cleaning',
};

const AutomobileCleaning: React.FC = () => {
  const [selectedServiceIds, setSelectedServiceIds] = useState<number[]>([]); // Store selected service IDs

  const handleServiceClick = (serviceId: number) => {
    if (selectedServiceIds.includes(serviceId)) {
      setSelectedServiceIds(prevIds => prevIds.filter(id => id !== serviceId));
    } else if (selectedServiceIds.length < 2) {
      setSelectedServiceIds(prevIds => [...prevIds, serviceId]);
    }
  };

  const handleCloseButtonClick = () => {
    // Handle the close button functionality here, if required
  };

  const selectedServices = selectedServiceIds.map(id => serviceOptions[id]).join(', ');

  const data4 = selectedServices;

  
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
            <img src={car} alt="Car Cleaning" />
          </div>
          <span className="service-name">Car Cleaning</span>
        </div>
        <div
          className={`service-item ${selectedServiceIds.includes(2) ? 'selected' : ''}`}
          data-id="2"
          onClick={() => handleServiceClick(2)}
        >
          <div className="service-box">
            <img src={bike} alt="Bike Cleaning" />
          </div>
          <span className="service-name">Bike Cleaning</span>
        </div>
      </div>
      <p className="service-count">
        Services selected: {selectedServices || 'None'}
      </p>
      <Link to="/Form" className="action" state={{data4}}>
        <button id="proceedButton" className="proceed-button">
          Proceed to apply
        </button>
      </Link> 
    </div>
  );
};

export default AutomobileCleaning;
