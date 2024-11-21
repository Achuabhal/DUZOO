import React, { useState } from 'react';
import './css/slot.css';
import { Link } from 'react-router-dom';
const SlotConfirmation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className="confirmation-box">

          <div className="close-btn">✕</div>
          <div className="content">
            <h2>Your Slot is confirmed 🎉</h2>
            <div className="details">
              <h3>Details</h3>
              <p>Location -</p>
              <p>Date -</p>
              <p>Timing -</p>
            </div>
            <p className="wishes">All The Best 😊</p>
          </div>
        </div>
      )}
    </>
  );
};

export default SlotConfirmation;
