import React, { useState } from 'react';
import './css/application.module.css';
import { Link } from 'react-router-dom';
import im1 from "../images/Images for hiring page/Appliances repair/air-conditioner.png";
import im2 from "../images/Images for hiring page/Appliances repair/box.png";
import im3 from "../images/Images for hiring page/Appliances repair/connection.png";
import im5 from "../images/Images for hiring page/Appliances repair/dishwasher.png";
import im6 from "../images/Images for hiring page/Appliances repair/food (1).png";
import im7 from "../images/Images for hiring page/Appliances repair/induction-stove.png";
import im8 from "../images/Images for hiring page/Appliances repair/mixer-blender.png";
import im9 from "../images/Images for hiring page/Appliances repair/oven.png";
import im10 from "../images/Images for hiring page/Appliances repair/refrigrator.png";
import im11 from "../images/Images for hiring page/Appliances repair/smart-tv.png";
import im12 from "../images/Images for hiring page/Appliances repair/stove (1).png";
import im13 from "../images/Images for hiring page/Appliances repair/water-boiler.png";
import im14 from "../images/Images for hiring page/Appliances repair/water-filter.png";

const AutomobileCleaning: React.FC = () => {
  const [selectedServiceIds, setSelectedServiceIds] = useState<number[]>([]);

  const handleServiceClick = (serviceId: number) => {
    if (selectedServiceIds.includes(serviceId)) {
      setSelectedServiceIds(prevIds => prevIds.filter(id => id !== serviceId));
    } else {
      setSelectedServiceIds(prevIds => [...prevIds, serviceId]);
    }
  };

  const handleCloseButtonClick = () => {
    // Handle close button action
  };




  const services = [
    { id: 1, name: 'Air Condition', img: im1 },
    { id: 2, name: 'Connection', img: im3 },
    { id: 3, name: 'Dishwasher', img: im5 },
    { id: 4, name: 'Food', img: im6 },
    { id: 5, name: 'Induction Stove', img: im7 },
    { id: 6, name: 'Mixer Blender', img: im8 },
    { id: 7, name: 'Oven', img: im9 },
    { id: 8, name: 'Refrigerator', img: im10 },
    { id: 9, name: 'Smart TV', img: im11 },
    { id: 10, name: 'Stove', img: im12 },
    { id: 11, name: 'Iron repair', img: im2 },
    { id: 12, name: 'Water Boiler', img: im13 },
    { id: 13, name: 'Water Filter', img: im14 },
  ];

  const selectedServices = services.filter(service => selectedServiceIds.includes(service.id));
  const data = Array.from(new Set(selectedServices.map(service => service.name)));

console.log(selectedServices.map(service => service.name));
  return (
    <div className="hi">
      <div className="container">
        <div className="header">
          <h1>Application Repair</h1>
          <Link to="/homepage">
            <button id="closeButton" className="close-button" onClick={handleCloseButtonClick}>
              ✕
            </button>
          </Link>
        </div>
        <div className="services-grid">
          {services.map(service => (
            <div
              key={service.id}
              className={`service-item ${selectedServiceIds.includes(service.id) ? 'selected' : ''}`}
              onClick={() => handleServiceClick(service.id)}
            >
              <div className="service-box">
                {service.img ? <img src={service.img} alt={service.name} /> : null}
              </div>
              <span className="service-name">{service.name}</span>
            </div>
          ))}
        </div>
        <p className="service-selected">
          Selected Services: {selectedServices.map(s => s.name).join(', ') || 'None'}
        </p>
        <Link to="/Form" className="action"  state={{ data }}>
          <button
            id="proceedButton"
            className="proceed-button"
            disabled={selectedServiceIds.length === 0}
          >
            Proceed to apply
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AutomobileCleaning;
