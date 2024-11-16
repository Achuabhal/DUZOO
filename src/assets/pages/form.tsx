import React, { useState } from 'react';
import './css/form.css';

const App: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <header>
        <div className="navbar">
          <div className="logo">
            <img src="images/WhatsApp_Image_2024-09-25_at_21.12.00_b71b0b4a-removebg-preview.png" alt="Logo" />
            <a href="#">FAQ</a>
          </div>
          <div className="icons">
            <span className="location">
              <img src="images/language_(1)[1].png" alt="Location Icon" /> Bangalore
            </span>
            <span className="language">
              <img src="images/language_(1)[1].png" alt="Language Icon" /> English
            </span>
            <span className="cart-icon">
              <img src="../../images/user.png" alt="User Icon" />
            </span>
            <div className="dropdown">
              {isDropdownOpen && (
                <div className="dropdown-content">
                  <a href="../Profile/profile.html">Profile</a>
                  <a href="#">Location</a>
                  <a href="#">FAQ</a>
                </div>
              )}
              <button className="dropbtn" onClick={toggleDropdown}>
                ☰
              </button>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="banner">
          <h1>Apply</h1>
          <p>Role Name &nbsp;&nbsp;&nbsp; Location</p>
        </section>

        <section className="application-form">
          <h2>Applying For Role Name</h2>
          <hr />
          <form id="applicationForm">
            <h3>General Details</h3>
            <hr style={{ width: '70%', marginBottom: '4vw' }} />
            <div className="form-group">
              <div className="form-grid">
                <label>*First Name</label>
                <label>*Last Name</label>
                <input id="fname" type="text" name="firstName" required />
                <input id="lname" type="text" name="lastName" required />
                <label>*E-mail Address</label>
                <label>*Phone Number</label>
                <input id="mail" type="email" name="email" required />
                <input id="num" type="tel" name="phone" required />
              </div>
              <label id="add-label">*Address</label>
              <input id="add" type="text" name="address" required />
              <br />
              <div className="form-grid">
                <label>*City</label>
                <label>*Pin Code</label>
                <input id="city" type="text" name="city" required />
                <input id="pincode" type="text" name="pincode" required />
                <label>*Aadhar Card Number</label>
                <label>*PAN Card Number</label>
                <input id="aadhar" type="text" name="aadhar" required />
                <input id="pan" type="text" name="pan" required />
              </div>

              <h3>Documentation</h3>
              <hr style={{ width: '70%' }} />
              <div className="form-group">
                <div className="form-grid">
                  <label className="file-input-label">
                    <p style={{ width: '80%' }}>*Upload Aadhar Card</p>
                    <input type="file" name="aadharFile" required />
                    <p className="upload-file">Upload file</p>
                  </label>
                  <label className="file-input-label">
                    <p style={{ width: '80%' }}>*Upload PAN Card</p>
                    <input type="file" name="panFile" required />
                    <p className="upload-file">Upload file</p>
                  </label>
                  <label>*Offline Test will be conducted based on your role.</label>
                  <input type="checkbox" name="offlineTest" required />
                </div>
              </div>
              <button type="submit" className="submit-button">Submit</button>
            </div>
          </form>
        </section>
      </main>

      <div className="contact">
        <div className="site-map">
          <div className="mobile-logo">
            <img src="images/WhatsApp_Image_2024-09-25_at_21.12.00_b71b0b4a-removebg-preview.png" alt="Mobile Logo" />
          </div>
          <p>Site Map</p>
          <a href="#">Services</a>
          <a href="#">Hiring</a>
          <a href="#">For Business</a>
          <a href="#">About Us</a>
          <a href="#">Contact Us</a>
        </div>
        <div className="app-download">
          <p>Download The App</p>
          <a style={{ color: 'black' }} href="#">Link</a>
        </div>
      </div>

      <footer>
        <p>&copy; 2024 by DUZO</p>
      </footer>
    </div>
  );
};

export default App;
