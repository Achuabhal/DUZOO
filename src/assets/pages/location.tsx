import React, { useState } from "react";
import "./css/loc.css";
import { Link } from 'react-router-dom';
import logo from "../images/duzo.png"

const LocationSelector: React.FC = () => {
  const [selectedZone, setSelectedZone] = useState("");

  const handleZoneChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedZone(e.target.value);
  };

  return (
    <div className="location-selector-body">
      <div className="location-selector-logo">
        <div style={{ marginTop: '40px', width: '162px', height: '105px', display: 'flex', justifyContent: 'center', alignItems: 'center',  }}>
          <img src={logo} alt="Eligibility" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
        </div>
      </div>
      <div className="location-selector-card">
        <h1 className="location-selector-header">LOCATION</h1>
        <div className="location-selector-zone-title">Choose your zone</div>
        <div className="location-selector-zone-subtitle">
          (Choose the zone where you want to work)
        </div>
        <div className="location-selector-select-container">
          <select 
            className="location-selector-select-zone" 
            value={selectedZone}
            onChange={handleZoneChange}
          >
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

        {selectedZone ? (
          <Link to="/homepage" className="action">
            <button className="location-selector-continue-btn">Continue</button>
          </Link>
        ) : (
          <button className="location-selector-continue-btn" disabled>
            Continue
          </button>
        )}
      </div>
    </div>
  );
};

export default LocationSelector;
