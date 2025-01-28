import React, { useState } from "react";
import "./css/homeclean.css";
import { Link } from 'react-router-dom';
import s from "../images/Images for hiring page/Home cleaning/sweeping.png"
import m from "../images/Images for hiring page/Home cleaning/mop (1).png"
import u from "../images/Images for hiring page/Home cleaning/clean-dishes.png"
import w from "../images/Images for hiring page/Home cleaning/water-closet.png"
import so from "../images/Images for hiring page/Home cleaning/sofa.png"
import f from "../images/Images for hiring page/Home cleaning/cleaning.png"

interface Service {
  id: number;
  name: string;
  imagePath: string;
  altText: string;
}

const HomeCleaning: React.FC = () => {
  const [selectedServices, setSelectedServices] = useState<Set<number>>(
    new Set()
  );

  const services: Service[] = [
    { id: 1, name: "Sweeping", imagePath: s, altText: "Sweeping" },
    { id: 2, name: "Mopping", imagePath: m, altText: "Mopping" },
    { id: 3, name: "Utensil Cleaning", imagePath: u, altText: "Utensil Cleaning" },
    { id: 4, name: "Washroom Cleaning", imagePath: w, altText: "Washroom Cleaning" },
    { id: 5, name: "Sofa and Carpet Cleaning", imagePath: so, altText: "Sofa and Carpet Cleaning" },
    { id: 6, name: "Full House Cleaning", imagePath: f, altText: "Full House Cleaning" },
  ];

  const toggleServiceSelection = (id: number) => {
    const updatedServices = new Set(selectedServices);
    if (updatedServices.has(id)) {
      updatedServices.delete(id);
    } else {
      updatedServices.add(id);
    }
    setSelectedServices(updatedServices);
  };

  const handleClose = () => {
    console.log("Close button clicked");
  };

  const handleProceed = () => {
    console.log("Proceed to apply clicked");
  };

  const selectedServiceNames = Array.from(selectedServices)
    .map(id => services.find(service => service.id === id)?.name)
    .filter(name => name)
    .join(', ');


    const data5 = services
  .filter(service => selectedServices.has(service.id))
  .map(service => service.name);
  return (
    <div className="container" style={{ width: "100%" }}>
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
      <p className="service-selected">
        Services selected: {selectedServiceNames || "None"}
      </p>
      <Link to="/form" className="action"  state={{data5}}>
        <button id="proceedButton" className="proceed-button" onClick={handleProceed}>
          Proceed to apply
        </button>
      </Link>
    </div>
  );
};

export default HomeCleaning;
