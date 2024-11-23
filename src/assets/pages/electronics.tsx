import React, { useState } from "react";
import "./css/electronic.css";
import { Link } from 'react-router-dom';
import e from "../images/Images for hiring page/Electrician,plumber and carpenter/electrician (1).png";
import e1 from "../images/Images for hiring page/Electrician,plumber and carpenter/plumber (1).png";
import e2 from "../images/Images for hiring page/Electrician,plumber and carpenter/carpenter.png";


const App: React.FC = () => {
  const [selectedCount, setSelectedCount] = useState<number>(0);
  const [selectedServices, setSelectedServices] = useState<Set<number>>(
    new Set()
  );

  const services = [
    { id: 1, name: "Electrician", image: e },
    { id: 2, name: "Plumber", image: e1 },
    { id: 3, name: "Carpenter", image: e2 },
  ];

  const toggleService = (id: number) => {
    const newSelectedServices = new Set(selectedServices);
    if (newSelectedServices.has(id)) {
      newSelectedServices.delete(id);
    } else {
      newSelectedServices.add(id);
    }
    setSelectedServices(newSelectedServices);
    setSelectedCount(newSelectedServices.size);
  };

  const handleClose = () => {
    alert("Close button clicked!");
  };

  const handleProceed = () => {
    alert(`Proceeding with ${selectedCount} selected service(s).`);
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Electrician, Plumber and Carpenter</h1>
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
            className={`service-item ${
              selectedServices.has(service.id) ? "selected" : ""
            }`}
            onClick={() => toggleService(service.id)}
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
      <button
        id="proceedButton"
        className="proceed-button"
        onClick={handleProceed}
        disabled={selectedCount === 0}
      >
        Proceed to apply
      </button>
      </Link>
    </div>
  );
};

export default App;
