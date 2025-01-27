import React, { useState } from 'react';
import styles from './css/SlotConfirmation.module.css'; // Import the module CSS
import { Link } from 'react-router-dom';

const SlotConfirmation: React.FC = () => {
  const [isOpen, ] = useState(true);

  

  return (
    <>
      {isOpen && (
        <div className={styles.container}>
          <div className={styles.confirmationBox}>
            <Link to="/you">
            <div className={styles.closeBtn}>
              ✕
            </div>
            </Link>
            <div className={styles.content}>
                <h2 className={styles.heading}><b>Your Slot is confirmed 🎉</b></h2>
                <hr style={{ width: "50%", }} />

              <div className={styles.details}>
                <h3 className={styles.detailsHeading}>Details</h3>
                <p className={styles.detailsText}>Location -</p>
                <p className={styles.detailsText}>Date -</p>
                <p className={styles.detailsText}>Timing -</p>
              </div>
              <p className={styles.wishes}>All The Best 😊</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SlotConfirmation;
