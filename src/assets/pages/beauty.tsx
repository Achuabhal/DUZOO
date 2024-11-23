import React, { useState } from "react";
import "./css/beuty.css";
import { Link } from 'react-router-dom';
import sw from "../images/Images for hiring page/Saloon/salon for women.png";
import sw1 from "../images/Images for hiring page/Saloon/spa for women.png";
import sw2 from "../images/Images for hiring page/Saloon/salon for men.png";
import sw3 from "../images/Images for hiring page/Saloon/massage for men.png";



const BeautySalon: React.FC = () => {
  const [selectedCount, setSelectedCount] = useState<number>(0);
  const [selectedServices, setSelectedServices] = useState<Set<number>>(new Set());

  const services = [
    { id: 1, image: sw, name: "Salon for women" },
    { id: 2, image: sw1, name: "Spa for women" },
    { id: 3, image: sw2, name: "Salon for men" },
    { id: 4, image: sw3, name: "Massage for men" },
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
        <Link to="/homepage">
        <button id="closeButton" className="close-button" onClick={closeHandler}>
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
