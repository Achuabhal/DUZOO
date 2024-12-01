import React, { useState } from 'react';
import './css/application.module.css';
import { Link } from 'react-router-dom';

const AutomobileCleaning: React.FC = () => {
  const [selectedServiceIds, setSelectedServiceIds] = useState<number[]>([]);

  const handleServiceClick = (serviceId: number) => {
    if (selectedServiceIds.includes(serviceId)) {
      // Deselect the service if it is already selected
      setSelectedServiceIds(prevIds => prevIds.filter(id => id !== serviceId));
    } else {
      // Select the service
      setSelectedServiceIds(prevIds => [...prevIds, serviceId]);
    }
  };

  const handleCloseButtonClick = () => {
    // Handle close button action
  };

  const services = [
    { id: 3, name: 'Chimney Repair', img: 'path/to/chimney-repair-image.jpg' },
    { id: 4, name: 'Water-purifier Repair', img: 'path/to/water-purifier-repair-image.jpg' },
    { id: 5, name: 'Gas Stove Repair', img: 'path/to/gas-stove-repair-image.jpg' },
    { id: 6, name: 'AC Repair', img: 'path/to/ac-repair-image.jpg' },
    { id: 7, name: 'Washing Machine Repair', img: 'path/to/washing-machine-repair-image.jpg' },
    { id: 8, name: 'Refrigerator Repair', img: 'path/to/refrigerator-repair-image.jpg' },
    { id: 9, name: 'Fan Repair', img: 'path/to/fan-repair-image.jpg' },
    { id: 10, name: 'Mixer Repair', img: 'path/to/mixer-repair-image.jpg' },
    { id: 11, name: 'Microwave Repair', img: 'path/to/microwave-repair-image.jpg' },
    { id: 12, name: 'Induction Repair', img: 'path/to/induction-repair-image.jpg' },
    { id: 13, name: 'Geyser Repair', img: 'path/to/geyser-repair-image.jpg' },
    { id: 14, name: 'TV Repair', img: 'path/to/tv-repair-image.jpg' },
    { id: 15, name: 'Dishwasher Repair', img: 'path/to/dishwasher-repair-image.jpg' },
    { id: 16, name: 'Inverter Repair', img: 'path/to/inverter-repair-image.jpg' },
    { id: 17, name: 'Laptops and Mobiles Repair', img: 'path/to/laptops-mobiles-repair-image.jpg' },
    { id: 18, name: 'Iron Repair', img: 'path/to/iron-repair-image.jpg' },
  ];

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
        <p className="subheader">Select your expertise</p>
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
        <p className="service-count">
          Service selected: <span id="selectedCount">{selectedServiceIds.length}</span>
        </p>
        <Link to="/Form" className="action">
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
