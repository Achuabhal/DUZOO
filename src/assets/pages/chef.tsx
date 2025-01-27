import React, { useState } from "react";

import "./css/chef.css";
import { Link } from "react-router-dom";
import c from "../images/Images for hiring page/Chef and cook/cook for month.png"
import c1 from "../images/Images for hiring page/Chef and cook/cook for one meal.png"
import c2 from "../images/Images for hiring page/Chef and cook/cook for party.png"


//

// Example services data
const services = [
  {
    id: "1",
    image: c,
    name: "Cook for month",
  },
  {
    id: "2",
    image: c1,
    name: "Japanese Cuisine",
  },
  {
    id: "3",
    image: c2,
    name: "Indian Cuisine",
  },
];

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
        {/* Map through the services array */}
        {services.map((service) => (
          <div
            key={service.id}
            className={`service-item ${
              selectedServices.has(service.id) ? "selected" : ""
            }`}
            data-id={service.id}
            onClick={() => handleServiceClick(service.id)}
          >
            <div className="service-box">
              <img src={service.image} alt={service.name} />
            </div>
            <span className="service-name">{service.name}</span>
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
