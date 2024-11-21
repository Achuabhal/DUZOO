import React, { useState } from "react";
import "./css/homeclean.css";
import { Link } from 'react-router-dom';

interface Service {
  id: number;
  name: string;
  imagePath: string;
  altText: string;
}

const HomeCleaning: React.FC = () => {
  const [selectedCount, setSelectedCount] = useState<number>(0);
  const [selectedServices, setSelectedServices] = useState<Set<number>>(
    new Set()
  );

  const services: Service[] = [
    { id: 1, name: "Sweeping", imagePath: "path/to/sweeping-image.jpg", altText: "Sweeping" },
    { id: 2, name: "Mopping", imagePath: "path/to/mopping-image.jpg", altText: "Mopping" },
    { id: 3, name: "Utensil Cleaning", imagePath: "path/to/utensil-cleaning-image.jpg", altText: "Utensil Cleaning" },
    { id: 4, name: "Washroom Cleaning", imagePath: "path/to/washroom-cleaning-image.jpg", altText: "Washroom Cleaning" },
    { id: 5, name: "Sofa and Carpet Cleaning", imagePath: "path/to/sofa-carpet-cleaning-image.jpg", altText: "Sofa and Carpet Cleaning" },
    { id: 6, name: "Full House Cleaning", imagePath: "path/to/full-house-cleaning-image.jpg", altText: "Full House Cleaning" },
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

  const handleClose = () => {
    // Add logic to handle close button action
    console.log("Close button clicked");
  };

  const handleProceed = () => {
    // Add logic to handle proceed button action
    console.log("Proceed to apply clicked");
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Home Cleaning</h1>
        <Link to="/homepage">
        <button id="closeButton" className="close-button" onClick={handleClose}>
          ✕
        </button>
        </Link>
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
              <img src={service.imagePath} alt={service.altText} />
            </div>
            <span className="service-name">{service.name}</span>
          </div>
        ))}
      </div>
      <p className="service-count">
        Service selected : <span id="selectedCount">{selectedCount}</span>
      </p>
      <Link to="/form" className="action">
                 
               
      <button id="proceedButton" className="proceed-button" onClick={handleProceed}>
        Proceed to apply
      </button>
      </Link>
    </div>
  );
};

export default HomeCleaning;
