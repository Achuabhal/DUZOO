import React, { useState } from "react";
import "./css/beuty.css";
import { Link } from 'react-router-dom';

const BeautySalon: React.FC = () => {
  const [selectedCount, setSelectedCount] = useState<number>(0);
  const [selectedServices, setSelectedServices] = useState<Set<number>>(new Set());

  const services = [
    { id: 1, image: "path/to/salon-women-image.jpg", name: "Salon for women" },
    { id: 2, image: "path/to/spa-women-image.jpg", name: "Spa for women" },
    { id: 3, image: "path/to/salon-men-image.jpg", name: "Salon for men" },
    { id: 4, image: "path/to/massage-men-image.jpg", name: "Massage for men" },
  ];

  const toggleServiceSelection = (id: number) => {
    const updatedServices = new Set(selectedServices);
    if (updatedServices.has(id)) {
      updatedServices.delete(id);
    } else {
      updatedServices.add(id);
    }
    setSelectedServices(updatedServices);
    setSelectedCount(updatedServices.size);
  };

  const closeHandler = () => {
    alert("Closing the selection!");
  };

  const proceedHandler = () => {
    if (selectedCount > 0) {
      alert(`You have selected ${selectedCount} services. Proceeding to apply!`);
    } else {
      alert("Please select at least one service before proceeding.");
    }
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Beauty and Salon</h1>
        <button id="closeButton" className="close-button" onClick={closeHandler}>
          ✕
        </button>
      </div>
      <p className="subheader">Select your expertise</p>
      <div className="services-grid">
        {services.map((service) => (
          <div
            key={service.id}
            className={`service-item ${selectedServices.has(service.id) ? "selected" : ""}`}
            onClick={() => toggleServiceSelection(service.id)}
          >
            <div className="service-box">
              <img src={service.image} alt={service.name} />
            </div>
            <span className="service-name">{service.name}</span>
          </div>
        ))}
      </div>
      <p className="service-count">
        Service selected : <span id="selectedCount">{selectedCount}</span>
      </p>
      <Link to="/Form" >
      <button id="proceedButton" className="proceed-button" onClick={proceedHandler}>
        Proceed to apply
      </button>
      </Link>
    </div>
  );
};

export default BeautySalon;
