import React from "react";
import "./css/homapage.css";
import Cover from '../images/cover.jpg';
import { Link, useLocation } from "react-router-dom";
import logo from "../images/duzo.png"



const HiringPage: React.FC = () => {
  const location = useLocation();
  return (
    <div  className="overflow-hidden">
      <header >
        <div className="navbar">
          <div className="logo">
            <img src={logo} alt="DUZO Logo" />
          </div>
          <nav>
            <a href="#join-steps">How To Join</a>
            <a href="#how-it-works">How It Works</a>
            <a href="../FAQ/faq.html">FAQ</a>
            <a href="../Profile/profile.html" className="profile-button">
              Profile
            </a>
          </nav>
          <div className="icons">
            <label>
              <input id="search" type="text" />
              <button className="location-icon">
                <img src="../../images/location.png" alt="Location" />
              </button>
            </label>
            <span className="lang-icon">
              <img src="../../images/language.png" alt="Language" />
            </span>
            <span className="cart-icon">
              <img src="../../images/user.png" alt="User" />
            </span>
            <div className="dropdown">
              <div style={{ display: "none" }} className="dropdown-content">
                <a href="../Profile/profile.html">Profile</a>
                <a href="#">Language</a>
                <a href="#">FAQ</a>
              </div>
            </div>
            <button className="dropbtn">☰</button>
          </div>
        </div>
      </header>

      <main>
      <div className="col-12 custom-wearehiring">
        <section className="hiring-banner" style={{ backgroundImage: `url(${Cover})` }}>
       <div>
            <h1>WE ARE HIRING</h1>
            <button className="join-button">Join Us</button>
            </div>
        </section>
        </div>

        <section className="expertise-section">
      <div className="expertise-block">
        <div className="expertise-space">
          <h2>Your Expertise</h2>
          <div className="expertise-grid">
            {[
              {
                service: "Atomobile",
                img: "../assets/images/auto.png",
                text: "Automobile Cleaning",
              },
              {
                service: "homecleaning",
                img: "../assets/images/clean.png",
                text: "Home Cleaning",
              },
              {
                service: "applicationrepair",
                img: "../assets/images/appliance.png",
                text: "Appliances Repair",
              },
              {
                service: "chef",
                img: "../assets/images/chef.png",
                text: "Chef Services",
              },
              {
                service: "beauty",
                img: "../assets/images/beauty.png",
                text: "Beauty and Salon",
              },
              {
                service: "electronic",
                img: "../assets/images/epc.png",
                text: "Electrician, Carpenter...",
              },
            ].map(({ service, img, text }) => (
              <div key={service} className="expertise-card" data-service={service}>
                <img src={img} alt={text} />
                <p>{text}</p>
                {/* Link with state to trigger modal */}
                <Link
                  to={`/${service}`}
                  state={{ background: location }}
                >
                  <button className="apply-btn">Apply Now</button>
                </Link>
              </div>
            ))}
          </div>
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
            {Array(3)
              .fill(null)
              .map((_, idx) => (
                <div key={idx} className="position-card">
                  <div className="position-icon"></div>
                  <div className="position-info">
                    <h3>Position Name</h3>
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
          {[
            { step: "Apply Online", color: "black-circle" },
            { step: "Learn", color: "black-circle" },
            { step: "Give a test", color: "black-circle" },
            { step: "Start Earning", color: "green-circle" },
          ].map(({ step, color }, idx) => (
            <React.Fragment key={idx}>
              <div className="step">
                <div className={`${idx + 1} circle ${color}`}>{step}</div>
                <div className="mobile_view_steps">{step}</div>
              </div>
              {idx < 3 && <div id="line"></div>}
            </React.Fragment>
          ))}
        </div>
      </section>

      <section className="how-it-works" id="how-it-works">
        <h2>How It Works</h2>
        <div className="how-it-works-content">
          <div className="steps-description">
            {["Download The App", "Work At Your Convenient Time", "Earn"].map((step, idx) => (
              <React.Fragment key={idx}>
                <p>{step}</p>
                {idx < 2 && <div className="arrow">↓</div>}
              </React.Fragment>
            ))}
          </div>
          <div className="app-image-placeholder"></div>
        </div>
      </section>

      <div className="contact">
        <div className="site-map">
          <div className="mobile-logo">
            <img src="../../images/duzo_logo.png" alt="DUZO Logo" />
          </div>
          <p>Site Map</p>
          {["Services", "Hiring", "For Business", "About Us"].map((link, idx) => (
            <a key={idx} href="#">
              {link}
            </a>
          ))}
        </div>

        <div className="social-media-section">
          <p>Follow Us On</p>
          <div className="social-icons">
            {[
              { href: "https://www.instagram.com/duzopartners.in", icon: "fab fa-instagram" },
              { href: "https://www.facebook.com", icon: "fab fa-facebook-f" },
              { href: "https://www.youtube.com/@Duzoindia", icon: "fab fa-youtube" },
            ].map(({ href, icon }, idx) => (
              <a key={idx} href={href}>
                <i className={icon}></i>
              </a>
            ))}
          </div>
        </div>

        <div className="contact-info">
          <div className="logo">
            <img src="../../images/duzo_logo.png" alt="DUZO Logo" />
          </div>
          <p>+917709466592</p>
          <p>duzo.services@gmail.com</p>
        </div>
      </div>

      <footer>
        <p>&copy; 2024 by DUZO</p>
      </footer>
    </div>
  );
};

export default HiringPage;
