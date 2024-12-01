import React from "react";
import "./css/loc.css";
import { Link } from 'react-router-dom';

const LocationSelector: React.FC = () => {
  return (
    <div className="location-selector-body">
      <div className="location-selector-logo">
        <div className="location-selector-logo-circle"></div>
        <div className="location-selector-logo-text">DUZO</div>
      </div>
      <div className="location-selector-card">
        <h1 className="location-selector-header">LOCATION</h1>
        <div className="location-selector-zone-title">Choose your zone</div>
        <div className="location-selector-zone-subtitle">
          (Choose the zone where you want to work)
        </div>
        <div className="location-selector-select-container">
          <select className="location-selector-select-zone" defaultValue="">
            <option value="" disabled>
              Select zone
            </option>
            <option value="jp-nagar">BLR - JP Nagar</option>
            <option value="jaynagar">BLR - Jaynagar</option>
            <option value="hulimavu">BLR - Hulimavu</option>
            <option value="bannerghatta">BLR - Bannerghatta</option>
            <option value="electronic-city">BLR - Electronic City</option>
            <option value="hsr-layout">BLR - HSR Layout</option>
            <option value="koramangala">BLR - Koramangala</option>
            <option value="btm-layout">BLR - BTM Layout</option>
          </select>
          <span className="location-selector-select-arrow"></span>
        </div>

        <Link to="/homepage" className="action">
        
           
        <button className="location-selector-continue-btn">Continue</button>
        </Link>
      </div>
    </div>
  );
};

export default LocationSelector;
