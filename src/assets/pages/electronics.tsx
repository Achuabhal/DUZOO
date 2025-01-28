import React, { useState } from "react";
import "./css/electronic.css";
import { Link } from 'react-router-dom';
import e from "../images/Images for hiring page/Electrician,plumber and carpenter/electrician (1).png";
import e1 from "../images/Images for hiring page/Electrician,plumber and carpenter/plumber (1).png";
import e2 from "../images/Images for hiring page/Electrician,plumber and carpenter/carpenter.png";


const App: React.FC = () => {
  const [selectedServices, setSelectedServices] = useState<Set<number>>(
    new Set()
  );

  const services = [
    { id: 1, name: "Electrician", image: e },
    { id: 2, name: "Plumber", image: e1 },
    { id: 3, name: "Carpenter", image: e2 },
  ];
  const data3 = services
  .filter(service => selectedServices.has(service.id))
  .map(service => service.name);
  const toggleService = (id: number) => {
    const newSelectedServices = new Set(selectedServices);
    if (newSelectedServices.has(id)) {
      newSelectedServices.delete(id);
    } else {
      newSelectedServices.add(id);
    }
    setSelectedServices(newSelectedServices);
  };

  const handleClose = () => {
    alert("Close button clicked!");
  };

  const handleProceed = () => {
    alert(`Proceeding with ${selectedServices.size} selected service(s).`);
  };

  const selectedServiceNames = services
    .filter(service => selectedServices.has(service.id))
    .map(service => service.name)
    .join(", ");

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
      <p className="service-selected">
        Selected Services: <span id="selectedServices">{selectedServiceNames || "None"}</span>
      </p>
      <Link to="/Form" state={{data3}} >
        <button
          id="proceedButton"
          className="proceed-button"
          onClick={handleProceed}
          disabled={selectedServices.size === 0}
        >
          Proceed to apply
        </button>
      </Link>
    </div>
  );
};

export default App;
