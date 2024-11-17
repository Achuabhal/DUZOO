import React, { useState } from 'react';
import './css/form.css';
import cover from '../images/cover2.jpg';
import logo from "../images/duzo.png";

const App: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <header className="p-3">
        <div className="navbar d-flex justify-content-between align-items-center">
          <div className="logo d-flex align-items-center gap-3">
            <img src={logo} alt="Logo" className="img-fluid" />
            <a href="#">FAQ</a>
          </div>
          <div className="icons d-flex">
            <span className="location d-flex align-items-center gap-1">
              <img src="images/language_(1)[1].png" alt="Location Icon" className="img-fluid" /> Bangalore
            </span>
            <span className="language d-flex align-items-center gap-1">
              <img src="images/language_(1)[1].png" alt="Language Icon" className="img-fluid" /> English
            </span>
            <span className="cart-icon">
              <img src="../../images/user.png" alt="User Icon" className="img-fluid" />
            </span>
            <div className="dropdown">
              {isDropdownOpen && (
                <div className="dropdown-content">
                  <a href="../Profile/profile.html">Profile</a>
                  <a href="#">Location</a>
                  <a href="#">FAQ</a>
                </div>
              )}
              <button className="dropbtn" onClick={toggleDropdown}>☰</button>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="banner" style={{ backgroundImage: `url(${cover})`, backgroundSize: 'cover' }}>
          <h1>Apply</h1>
          <p>Role Name &nbsp;&nbsp;&nbsp; Location</p>
        </section>

        <section className="application-form  p-4 my-4 rounded">
          <h2>Applying For Role Name</h2>
          <hr />
          <form id="applicationForm">
            <h3>General Details</h3>
            <hr style={{ width: '70%', marginBottom: '4vw' }} />
            <div className="form-group">
              <div className="row">
                <div className="col-12 col-sm-6  col-md-4 custom-first-name">
                  <label >*First Name</label>
                  <input id="fname" type="text" name="firstName" className="form-control" required />
                </div>
                <div className="col-12 col-sm-6 col-md-6 custom-last-name">
                  <label>*Last Name</label>
                  <input id="lname" type="text" name="lastName" className="form-control" required />
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-sm-6 custom-last-name">
                  <label>*E-mail Address</label>
                  <input id="mail" type="email" name="email" className="form-control" required />
                </div>
                <div className="col-12 col-sm-6 custom-last-name">
                  <label>*Phone Number</label>
                  <input id="num" type="tel" name="phone" className="form-control" required />
                </div>
              
                <div className="col-12 col-sm-6 col-md-12 col-lg-12 custom-adress-name">
              <label>*Address</label>
              <input id="add" type="text" name="address" className="form-control" required />
              </div>
              </div>
              <div className="row">
                <div className="col-12 col-sm-6 col-lg-6 custom-city-name ">
                  <label>*City</label>
                  <input id="city" type="text" name="city" className="form-control" required />
                </div>
                <div className="col-12 col-sm-6 col-lg-6 custom-pincode-name">
                  <label>*Pin Code</label>
                  <input id="pincode" type="text" name="pincode" className="form-control" required />
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-sm-6 col-lg-6 custom-adu-name" >
                  <label >*Aadhar Card Number</label>
                  <input id="aadhar" type="text" name="aadhar" className="form-control" required />
                </div>
                <div className="col-12 col-sm-6  col-lg-6 custom-pan-name" style={{ marginTop: '5%' }}>
                  <label>*PAN Card Number</label>
                  <input id="pan" type="text" name="pan" className="form-control" required />
                </div>
              </div>

              <h3 style={{ marginTop: '5%' }}>Documentation</h3>
              <hr style={{ width: '70%' }} />
              <div className="form-group">
                <div className="row">
                  <div className="col-12 col-sm-12" >
                    <label className="file-input-label" style={{  width: '100%' }}>
                      <p>*Upload Aadhar Card</p>
                      <input type="file" name="aadharFile" required />
                      <p className="upload-file">Upload file</p>
                    </label>
                  </div>
                 
                  <div className="col-12 col-sm-12">
                    <label className="file-input-label"  style={{ width: '100%' }}>
                      <p>*Upload PAN Card</p>
                      <input type="file" name="panFile" required />
                      <p className="upload-file">Upload file</p>
                    </label>
                  </div>
                  <div className="col-12 col-md-12  ">
                    <label >*Offline Test will be conducted based on your role.</label>
                    <input type="checkbox" name="offlineTest" />
                  </div>
                </div>
              
            
              <div className="row">
              <div className="col-12 col-sm-6 col-md-12 col-lg-12 custom-submit-name">
                  <button type="submit" className="btn btn-dark w-100">Submit</button>
                </div>
              </div>
              </div>
            </div>
          </form>
        </section>
      </main>

      <div className="contact">
        <div className="site-map">
          <div className="mobile-logo">
            <img src="images/WhatsApp_Image_2024-09-25_at_21.12.00_b71b0b4a-removebg-preview.png" alt="Mobile Logo" className="img-fluid" />
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

      <footer className="bg-dark text-white text-center p-3">
        <p>&copy; 2024 by DUZO</p>
      </footer>
    </div>
  );
};

export default App;
