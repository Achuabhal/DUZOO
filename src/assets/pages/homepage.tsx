import React from 'react';
import './css/homapage.css';
import { Link } from 'react-router-dom';
import logo from '../images/duzo.png';
import Language from '../images/language.png';
import cover from "../images/cover.jpg"



const HiringPage: React.FC = () => {
  const toggleDropdown = () => {
    const dropdownContent = document.querySelector(".dropdown-content") as HTMLElement;
    if (dropdownContent.style.display === "flex") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "flex";
      dropdownContent.style.flexDirection = "column";
    }
  };

  return (
    <div>
      <header>
        <div className="navbar">
          <div className="logo">
            <img src={logo} alt="DUZO Logo" />
          </div>
          <nav>
            <a href="#join-steps">How To Join</a>
            <a href="#how-it-works">How It Works</a>
            <a href="../FAQ/faq.html">FAQ</a>
            <a href="../Profile/profile.html" className="profile-button">Profile</a>
          </nav>
          <div className="icons">
            <label>
              <input id="search" type="text" />
              <button className="location-icon">
                <img src="../../images/location.png" alt="Location" />
              </button>
            </label>
            <span className="lang-icon">
              <img src={Language} alt="Language" /> 
            </span>
            <span className="cart-icon">
              <img src="../../images/user.png" alt="User" />
            </span>
            <div className="dropdown">
              <div style={{ display: 'none' }} className="dropdown-content">
                <a href="../Profile/profile.html">Profile</a>
                <a href="#">Language</a>
                <a href="#">FAQ</a>
              </div>
            </div>
            <button className="dropbtn" onClick={toggleDropdown}>☰</button>
          </div>
        </div>
      </header>

      <main>
        <section className="hiring-banner" style={{ backgroundImage: `url(${cover})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <h1>WE ARE HIRING</h1>
          <button className="join-button">Join Us</button>
        </section>

        <section className="expertise-section">
          <div className="expertise-block">
            <div className="expertise-grid">
              <br />
              <h2>Your Expertise</h2>
              <br />
              {['Automobile Cleaning', 'Home Cleaning', 'Appliances Repair', 'Chef Services', 'Beauty and Salon', 'Electrician, Carpenter...'].map((expertise, index) => (
                <div className="expertise-card" key={index}>
                  <div className="icon-placeholder"></div>
                  <p>{expertise}</p>
                  <Link to="/Atomobile" className="action">
                  <button>Apply</button>
                  </Link>
                </div>
              ))}
            </div>
            <div className="ads_grid">
              <div>
                <div className="ads_60_animate"></div>
                <div className="ads_40_animate"></div>
              </div>
              <div>
                <div className="ads_40_animate"></div>
                <div className="ads_60_animate"></div>
              </div>
            </div>
          </div>
        </section>

        <section className="positions-section">
          <h2>Open Positions</h2>
          <div className="positions-list">
            {['Position Name', 'Position Name', 'Position Name'].map((position, index) => (
              <div className="position-card" key={index}>
                <div className="position-icon"></div>
                <div className="position-info">
                  <h3>{position}</h3>
                  <p>Description</p>
                </div>
                <button>Apply Now</button>
              </div>
            ))}
          </div>
          <button className="see-more-button">See More</button>
        </section>
      </main>

      <section className="join-steps" id="join-steps">
        <h2>Join Us In Few Simple Steps</h2>
        <div className="steps">
          {['Apply Online', 'Learn', 'Give a test', 'Start Earning'].map((step, index) => (
            <div className="step" key={index}>
              {index < 3 && <div id="line"></div>}
              <div className={`circle ${step === 'Start Earning' ? 'green-circle' : 'black-circle'}`}>{step}</div>
              
            </div>
          ))}
        </div>
      </section>

      <section className="how-it-works" id="how-it-works">
        <h2>How It Works</h2>
        <div className="how-it-works-content">
          <div className="steps-description">
            <p style={{ marginLeft: '107px' }}>Download The App</p>
            <div className="arrow">↓</div>
            <p>Work At Your Convenient Time</p>
            <div className="arrow">↓</div>
            <p style={{ marginLeft: '186px' }}>Earn</p>
          </div>
          <div className="app-image-placeholder"></div>
        </div>
      </section>

      <div className="contact">
        <div className="site-map">
          <div className="mobile-logo">
            <img src={logo} alt="DUZO Logo" />
          </div>
          <p>Site Map</p>
          <a href="#">Services</a>
          <a href="#">Hiring</a>
          <a href="#">For Business</a>
          <a href="#">About Us</a>
          <a href="#">Contact Us</a>
        </div>

        <div className="app-download">
          <div>
            <p>Download The App</p>
            <a style={{ color: 'black' }} href="#">Link</a>
          </div>
          <div className="social-media">
            <p>Follow Us On</p>
            {/* Social media icons */}
          </div>
        </div>

        <div className="contact-info">
          <div className="logo">
            <img src="../../images/duzo_logo.png" alt="DUZO Logo" />
          </div>
          <p>
            {/* Phone icon */}
            Phone number
          </p>
          <p>
            {/* Email icon */}
            E-mail address
          </p>
          <button className="book-now-button">BOOK NOW</button>
        </div>
      </div>

      <footer>
        <p>&copy; 2024 by DUZO</p>
      </footer>
    </div>
  );
};

export default HiringPage;
