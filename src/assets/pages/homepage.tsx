import React, { useEffect } from "react";
import "./css/homapage.css";
import Cover from '../images/cover.jpg';
import { Link, useLocation } from "react-router-dom";
import logo from "../images/duzo.png";
import pic from "../images/Images for hiring page/mainhire/Picsart_24-11-17_11-31-57-523-removebg-preview.png";
import pic1 from "../images/Images for hiring page/mainhire/Picsart_24-11-17_17-40-48-844-removebg-preview.png";
import pic2 from "../images/Images for hiring page/mainhire/Picsart_24-11-17_18-15-59-703-removebg-preview.png";
import pic3 from "../images/Images for hiring page/mainhire/Picsart_24-11-17_18-17-26-327-removebg-preview.png";
import img from "../images/Images for hiring page/mainhire/Hiring main page images/air-conditioner.png";
import img1 from "../images/Images for hiring page/mainhire/Hiring main page images/automobile.png";
import img2 from "../images/Images for hiring page/mainhire/Hiring main page images/chef.png";
import img3 from "../images/Images for hiring page/mainhire/Hiring main page images/housekeeping.png";
import img4 from "../images/Images for hiring page/mainhire/Hiring main page images/massage.png";
import img5 from "../images/Images for hiring page/mainhire/Hiring main page images/repair-tools.png";
import im from "../images/placeholder.png"
import FAQ from "../component/faq";
import { VscAccount } from "react-icons/vsc";

const HiringPage: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="overflow-hidden">
      <header className="allu">
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
                <img src={im} alt="Location" />
              </button>
            </label>
            
            <span className="account-icon" style={{ width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <VscAccount style={{ width: '100%', height: '100%' }} />
                        </span>
            <div className="dropdown">
              <div style={{ display: "none" }} className="dropdown-contents">
                <a href="../Profile/profile.html">Profile</a>
                
                <a href="#">FAQ</a>
              </div>
            </div>
            <button className="dropbtn" onClick={() => {
              const dropdownContent = document.querySelector(".dropdown-contents") as HTMLElement;
              if (dropdownContent) {
                dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
              }
            }}>☰</button>
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
            <div style={{ display: "flex" }}>
              <div className="expertise-space">
                <h2>Your Expertise</h2>
                <div className="expertise-grid">
                  <div className="col-12 col-md-6 col-lg-12 mb-4">
                    <div className="expertise-card" style={{ width: "100%", height: "100%" }}>
                      <img src={img1} alt="Automobile Cleaning" className="img-fluid col-12" style={{ width: "150px", height: "150px" }} />
                      <p>Automobile<br /> Cleaning</p>
                      <Link to="/Atomobile" state={{ background: location }}>
                        <button className="apply-btn12 col-12">Apply Now</button>
                      </Link>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-12 mb-4">
                    <div className="expertise-card" style={{ width: "100%", height: "100%" }}>
                      <img src={img3} alt="Home Cleaning" className="img-fluid col-12" style={{ width: "150px", height: "150px" }} />
                      <p>Home <br />Cleaning</p>
                      <Link to="/homecleaning" state={{ background: location }}>
                        <button className="apply-btn12 col-12">Apply Now</button>
                      </Link>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-12 mb-4">
                    <div className="expertise-card" style={{ width: "100%", height: "100%" }}>
                      <img src={img} alt="appliances Repair" className="img-fluid col-12" style={{ width: "150px", height: "150px" }} />
                      <p>Appliances <br />Repair</p>
                      <Link to="/applicationrepair" state={{ background: location }}>
                        <button className="apply-btn12 col-12">Apply Now</button>
                      </Link>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-12 mb-4">
                    <div className="expertise-card" style={{ width: "100%", height: "100%" }}>
                      <img src={img2} alt="Chef Services" className="img-fluid col-12" style={{ width: "150px", height: "150px" }} />
                      <p>Chef <br />Services</p>
                      <Link to="/chef" state={{ background: location }}>
                        <button className="apply-btn12 col-12">Apply Now</button>
                      </Link>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-12 mb-4">
                    <div className="expertise-card" style={{ width: "100%", height: "100%" }}>
                      <img src={img4} alt="Beauty and Salon" className="img-fluid col-12" style={{ width: "150px", height: "150px" }} />
                      <p>Beauty<br /> and Salon</p>
                      <Link to="/beauty" state={{ background: location }}>
                        <button className="apply-btn12 col-12">Apply Now</button>
                      </Link>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-12 mb-4">
                    <div className="expertise-card" style={{ width: "100%", height: "100%" }}>
                      <img src={img5} alt="Electrician, Carpenter..." className="img-fluid col-12" style={{ width: "150px", height: "150px" }} />
                      <p>Electrician,<br /> Carpenter...</p>
                      <Link to="/electronic" state={{ background: location }}>
                        <button className="apply-btn12 col-12">Apply Now</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="ads_grid" style={{ marginTop: "14px" }}>
                <div>
                  <div className="ads_60_animate">
                    <img src={pic} alt="ads" style={{ width: "100%", height: "100%" }} />
                  </div>
                  <div className="ads_40_animate">
                    <img src={pic1} alt="ads" style={{ width: "100%", height: "100%" }} />
                  </div>
                </div>
                <div>
                  <div className="ads_40_animate">
                    <img src={pic2} alt="ads" style={{ width: "100%", height: "100%" }} />
                  </div>
                  <div className="ads_60_animate">
                    <img src={pic3} alt="ads" style={{ width: "100%", height: "100%" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <section className="join-steps" id="join-steps">
        <h2>Join Us In Few Simple Steps</h2>
        <div className="steps">
          <div className="step">
            <div className="1 circle black-circle">Apply Online</div>
            <div className="mobile_view_steps">Apply Online</div>
          </div>
          <div id="line"></div>
          <div className="step">
            <div className="2 circle black-circle">Learn</div>
            <div className="mobile_view_steps">Learn</div>
          </div>
          <div id="line"></div>
          <div className="step">
            <div className="3 circle black-circle">Give a test</div>
            <div className="mobile_view_steps">Give a test</div>
          </div>
          <div id="line"></div>
          <div className="step">
            <div className="4 circle green-circle">Start Earning</div>
            <div className="mobile_view_steps">Start Earning</div>
          </div>
        </div>
      </section>

      
      <div>
        <FAQ />
      </div>

      

      <div className="footerinfo">
        <p>&copy; 2024 by DUZO</p>
      </div>
    </div>
  );
};

export default HiringPage;
