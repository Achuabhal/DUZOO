import React, { useState } from 'react';
import './css/form.css';
import cover from '../images/cover2.jpg';
import logo from "../images/duzo.png";
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";

const App: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Dropdown animation variants
  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2 } }
  };

  // Section animation variants
  const sectionVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <header className="p-3">
        <motion.div 
          className="navbar d-flex justify-content-between align-items-center"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
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
              <button className="dropbtn" onClick={toggleDropdown}>☰</button>
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    className="dropdown-content"
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <a href="../Profile/profile.html">Profile</a>
                    <a href="#">Location</a>
                    <a href="#">FAQ</a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </header>

      <motion.div 
        className="container-fluid"
        style={{
          backgroundColor: '#FFBE5D',
          borderRadius: '15px',
          padding: '100px',
          width: '98%'
        }}
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <h2 className="text-center mb-4" style={{ fontFamily: 'cursive' }}>
          Thank you for Applying
        </h2>
        <div className="row">
          <div className="col-md-6">
            <h4>Meet our Trainer</h4>
            <hr style={{ width: "50%" }} />

            <div className="mb-3">
              <label className="form-label">Location of Store -</label>
              <p>-</p>
            </div>
            <div>
              <div className="mb-3">
                <label className="form-label">Select Date</label>
                <div className="d-flex">
                  <input type="text" className="form-control me-2" placeholder="dd" style={{ width: '50px' }} />
                  <input type="text" className="form-control me-2" placeholder="mm" style={{ width: '50px' }} />
                  <input type="text" className="form-control" placeholder="yyyy" style={{ width: '70px' }} />
                </div>
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Timing <small>(Choose your slot)</small></label>
              <div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="timing" id="time1" />
                  <label className="form-check-label" htmlFor="time1">3:00PM</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="timing" id="time2" />
                  <label className="form-check-label" htmlFor="time2">3:00PM</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="timing" id="time3" />
                  <label className="form-check-label" htmlFor="time3">3:00PM</label>
                </div>
              </div>
            </div>
            <Link to="/slot" state={{ background: location }} className="action">
              <motion.button 
                type="submit" 
                className="btn btn-dark"
                whileHover={{ scale: 1.1 }}
              >
                Submit
              </motion.button>
            </Link>
          </div>
          <div className="col-md-6">
            <div className="bg-light p-4 rounded mb-3" style={{ height: '200px' }}>
              <p className="text-center">Location of store</p>
            </div>
            <div>
              <p><i className="bi bi-telephone"></i> Phone number</p>
              <p><i className="bi bi-envelope"></i> E-mail address</p>
            </div>
          </div>
        </div>
      </motion.div>

      <footer className="text-white text-center p-3" style={{ backgroundColor: '#813902', fontSize: '27px' }}>
        <p>&copy; 2024 by DUZO</p>
      </footer>
    </motion.div>
  );
};

export default App;
