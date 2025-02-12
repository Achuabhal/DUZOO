"use client"

import type React from "react"
import { useState } from "react"
import "./css/thank.css"
import { VscAccount } from "react-icons/vsc"
import logo from "../images/duzo.png"
import { Link, useLocation } from "react-router-dom"

const ThankYouPage: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const location = useLocation()
  const [date, setDate] = useState("")
  const [error, setError] = useState("")

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputDate = e.target.value
    setDate(inputDate)

    // Validate the date
    const selectedDate = new Date(inputDate)
    const today = new Date()
    today.setHours(0, 0, 0, 0) // Reset time to start of day for accurate comparison

    if (isNaN(selectedDate.getTime())) {
      setError("Please enter a valid date")
    } else if (selectedDate <= today) {
      setError("Please select a future date")
    } else {
      setError("")
    }
  }

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  return (
    <div>
      <header className="p-3">
        <div className="navbar d-flex justify-content-between align-items-center">
          <div className="logo d-flex align-items-center gap-3">
            <img src={logo || "/placeholder.svg"} alt="Logo" className="img-fluid" />
            <a href="#">FAQ</a>
          </div>
          <div className="icons d-flex">
            <span
              className="account-icon"
              style={{ width: "60px", height: "60px", display: "flex", alignItems: "center", justifyContent: "center" }}
            >
              <VscAccount style={{ width: "100%", height: "100%" }} />
            </span>
            <div className="dropdown">
              <button className="dropbtn" onClick={toggleDropdown}>
                ☰
              </button>
              {isDropdownOpen && (
                <div className="dropdown-content">
                  <a href="../Profile/profile.html">Profile</a>
                  <a href="#">Location</a>
                  <a href="#">FAQ</a>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <div
        className="container-fluid contu"
        style={{
          backgroundColor: "#FFBE5D",
          borderRadius: "15px",
          padding: "100px",
          width: "98%",
          marginTop: "15px",
        }}
      >
        <h2 className="text-center mb-4" style={{ fontFamily: "cursive" }}>
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
            <div className="date-picker mb-3">
              <label htmlFor="datepicker" className="form-label">
                Select a future date:
              </label>
              <input
                type="date"
                id="datepicker"
                className="form-control"
                value={date}
                onChange={handleDateChange}
                min={new Date().toISOString().split("T")[0]}
              />
              {error && <p className="error text-danger">{error}</p>}
            </div>
            <div className="mb-3">
              <label className="form-label">
                Timing <small>(Choose your slot)</small>
              </label>
              <div>
                <input type="time" className="form-control" id="google" />
              </div>
            </div>
            <Link to="/slot" state={{ background: location }} className="action">
              <button type="submit" className="btn btn-dark" disabled={!date || !!error}>
                Submit
              </button>
            </Link>
          </div>
          <div className="col-md-6">
            <div className="bg-light p-4 rounded mb-3" style={{ height: "200px" }}>
              <p className="text-center">Location of store</p>
            </div>
            <div>
              <p>
                <i className="bi bi-telephone"></i> Phone number
              </p>
              <p>
                <i className="bi bi-envelope"></i> E-mail address
              </p>
            </div>
          </div>
        </div>
      </div>

      <footer className="text-white text-center p-3" style={{ backgroundColor: "#813902", fontSize: "27px" }}>
        <p>&copy; 2024 by DUZO</p>
      </footer>
    </div>
  )
}

export default ThankYouPage

