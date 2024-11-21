import React, { useState } from "react";
import "./css/thank.css";

const ThankYou: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState({
    day: "",
    month: "",
    year: "",
  });

  const [selectedSlot, setSelectedSlot] = useState<string>("");

  const handleDateChange = (field: "day" | "month" | "year", value: string) => {
    setSelectedDate({ ...selectedDate, [field]: value });
  };

  const handleSlotChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedSlot(event.target.value);
  };

  const handleSubmit = () => {
    console.log("Date Selected:", selectedDate);
    console.log("Slot Selected:", selectedSlot);
    // Implement your form submission logic here
  };

  return (
    <div>
      <header>
        <div className="navbar">
          <div className="logo">
            <img src="/images/duzo_logo.png" alt="DUZO" />
            <span>FAQ</span>
          </div>
          <div className="nav-right">
            <div className="location-btn">
              <img src="/images/location.png" alt="Location" />
              Bangalore
            </div>
            <div className="language-btn">
              <img src="/images/language.png" alt="Language" />
              English
            </div>
            <div className="profile-icon">
              <img src="/images/user.png" alt="Profile" />
            </div>
          </div>
        </div>
      </header>

      <main>
        <h1>Thank you for Applying</h1>

        <div className="content-container">
          <div className="left-section">
            <div className="input-group">
              <label>Meet our Trainer</label>
              <div className="input-line">-</div>
            </div>

            <div className="input-group">
              <label>Location of Store</label>
              <div className="input-line">-</div>
            </div>

            <div className="input-group">
              <label>Select Date</label>
              <div className="date-inputs">
                <input
                  type="text"
                  placeholder="dd"
                  maxLength={2}
                  value={selectedDate.day}
                  onChange={(e) => handleDateChange("day", e.target.value)}
                />
                <input
                  type="text"
                  placeholder="mm"
                  maxLength={2}
                  value={selectedDate.month}
                  onChange={(e) => handleDateChange("month", e.target.value)}
                />
                <input
                  type="text"
                  placeholder="yyyy"
                  maxLength={4}
                  value={selectedDate.year}
                  onChange={(e) => handleDateChange("year", e.target.value)}
                />
              </div>
            </div>

            <div className="input-group">
              <label>
                Timing <span>(Choose your slot)</span>
              </label>
              <div className="timing-options">
                {["10:00 AM", "2:00 PM", "5:00 PM"].map((slot) => (
                  <label key={slot}>
                    <input
                      type="radio"
                      name="timing"
                      value={slot}
                      checked={selectedSlot === slot}
                      onChange={handleSlotChange}
                    />
                    {slot}
                  </label>
                ))}
              </div>
            </div>

            <button className="submit-btn" onClick={handleSubmit}>
              Submit
            </button>
          </div>

          <div className="right-section">
            <div className="map-box">
              Location of store
              <img src="/images/map-marker.png" alt="Map Marker" />
            </div>
            <div className="contact-details">
              <div>
                <img src="/images/phone.png" alt="Phone" /> Phone number
              </div>
              <div>
                <img src="/images/email.png" alt="Email" /> E-mail address
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="footer-container">
        <div className="footer-content">
          <div className="site-map">
            <h2>Site Map</h2>
            <a href="#">Services</a>
            <a href="#">Hiring</a>
            <a href="#">For Business</a>
            <a href="#">About Us</a>
            <a href="#">Contact Us</a>
          </div>

          <div className="app-section">
            <h2>Download The App</h2>
            <a href="#" className="app-link">
              Link
            </a>
            <div className="social">
              <h2>Follow Us On</h2>
              <div className="social-icons">
                <img src="/images/instagram.png" alt="Instagram" />
                <img src="/images/facebook.png" alt="Facebook" />
                <img src="/images/twitter.png" alt="Twitter" />
              </div>
            </div>
          </div>

          <div className="contact-section">
            <img
              src="/images/duzo_logo.png"
              alt="DUZO"
              className="footer-logo"
            />
            <div className="contact-details">
              <p>
                <img src="/images/phone.png" alt="Phone" />
                Phone number
              </p>
              <p>
                <img src="/images/email.png" alt="Email" />
                E-mail address
              </p>
            </div>
            <button className="book-now">BOOK NOW</button>
          </div>
        </div>

        <div className="copyright">
          <p>&copy; 2024 by DUZO</p>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
