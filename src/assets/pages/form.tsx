import type React from "react"
import { useState, type ChangeEvent, type FormEvent } from "react"
import { Link, useLocation } from "react-router-dom"
import "./css/form.css"
import cover from "../images/cover2.jpg"
import logo from "../images/duzo.png"
import { VscAccount } from "react-icons/vsc";


// Define types
interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
  city: string
  pincode: string
  aadhar: string
  pan: string
  aadharFile: File | null
  panFile: File | null
  offlineTest: boolean
}

interface FormErrors {
  [key: string]: string
}

const App: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [openQuestions, setOpenQuestions] = useState<number[]>([])
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
    aadhar: "",
    pan: "",
    aadharFile: null,
    panFile: null,
    offlineTest: false,
  })

  const location = useLocation()
  const { data } = location.state || {}
  console.log(data)
  const { data1 } = location.state || {}
  console.log(data1)
  const { data2 } = location.state || {}
  console.log(data2)
  const { data3 } = location.state || {}
  console.log(data3)
  const { data4 } = location.state || {}
  console.log(data4)
  const { data5 } = location.state || {}
  console.log(data5)

  const [formErrors, setFormErrors] = useState<FormErrors>({})

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    if (type === "file") {
      const fileInput = e.target as HTMLInputElement
      setFormData((prev) => ({
        ...prev,
        [name]: fileInput.files ? fileInput.files[0] : null,
      }))
    } else if (type === "checkbox") {
      const checkboxInput = e.target as HTMLInputElement
      setFormData((prev) => ({
        ...prev,
        [name]: checkboxInput.checked,
      }))
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }))
    }
    setFormErrors((prev) => ({ ...prev, [name]: "" }))
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    let error = ""
    switch (name) {
      case "firstName":
        if (!value) error = "First Name is required"
        break
      case "lastName":
        if (!value) error = "Last Name is required"
        break
      case "email":
        if (!value) error = "Email is required"
        else if (!/\S+@\S+\.\S+/.test(value)) error = "Invalid email format"
        break
      case "phone":
        if (!value) error = "Phone number is required"
        else if (!/^\d{10}$/.test(value)) error = "Phone number must be exactly 10 digits"
        break
      case "address":
        if (!value) error = "Address is required"
        break
      case "city":
        if (!value) error = "City is required"
        break
      case "pincode":
        if (!value) error = "Pincode is required"
        else if (!/^\d{6}$/.test(value)) error = "Pincode must be exactly 6 digits"
        break
      case "aadhar":
        if (!value) error = "Aadhar number is required"
        break
      case "pan":
        if (!value) error = "PAN number is required"
        break
      case "offlineTest":
        if (!value) error = "Please select this option"
        break
      default:
        break
    }
    setFormErrors((prev) => ({ ...prev, [name]: error }))
  }

  const isFormComplete = (): boolean => {
    return (
      !!formData.firstName &&
      !!formData.lastName &&
      !!formData.email &&
      !!formData.phone &&
      !!formData.address &&
      !!formData.city &&
      !!formData.pincode &&
      !!formData.aadhar &&
      !!formData.pan &&
      formData.offlineTest
    )
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (isFormComplete()) {
      console.log("Form submitted:", formData)
      // Add your form submission logic here
    } else {
      alert("Please fill in all required fields before submitting.")
    }
  }

  const toggleQuestion = (index: number) => {
    setOpenQuestions((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  const faqs = [
    {
      question: "What are the hours of operation?",
      answer: "Our hours of operation are Monday to Friday, 9 AM to 5 PM.",
    },
    {
      question: "Do I need to have prior experience?",
      answer: "Prior experience is not always necessary. It depends on the specific position you're applying for.",
    },
    {
      question: "What are the documents required to apply?",
      answer: "Typically, you'll need a resume, cover letter, and any relevant certifications or portfolios.",
    },
    {
      question: "Is there a minimum age to apply in Duzo?",
      answer: "The minimum age to apply at Duzo is 18 years old.",
    },
    {
      question: "I'm facing issues with the site.",
      answer:
        "If you're experiencing issues with our site, please try clearing your browser cache or using a different browser. If problems persist, contact our support team.",
    },
  ]

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }
  const allData = [data, data1, data2, data3, data4, data5];

  // Filter only the available data
  const availableData = allData.filter(value => value);
  return (
    <div>
      <header className="heder col-12 col-sm-6 col-md-12 col-lg-12" style={{ width: "98%" }}>
        <div className="navbar d-flex justify-content-between align-items-center">
          <div className="logo d-flex align-items-center gap-3">
            <img src={logo || "/placeholder.svg"} alt="Logo" className="img-fluid" />
            <a href="#">FAQ</a>
          </div>
          <div className="icons d-flex">
          
            <span className="account-icon" style={{ width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <VscAccount style={{ width: '100%', height: '100%' }} />
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
        <section className="banner " style={{ backgroundImage: `url(${cover})`, backgroundSize: "cover" }}>
          <h1>Apply</h1>
         
{availableData.length > 0 ? (
  availableData.map((value, index) => (
    <p className="guva col-12 col-lg-12 " key={index}>{value}<br /></p>
  ))
) : null}
        </section>

        <section className="application-form  p-4  rounded">
          <h2>Applying For Role Name</h2>
          <hr />
          <form id="applicationForm" onSubmit={handleSubmit}>
            <h3>General Details</h3>
            <hr style={{ width: "70%", marginBottom: "1vw" }} />
            <div className="form-group">
              <div className="row">
                <div className="col-12 col-sm-6  col-md-4 col-lg-6 custom-first-name">
                  <label>*First Name</label>
                  <input
                 
                    id="fname"
                    type="text"
                    name="firstName"
                    className={`form-control ${formErrors.firstName ? "is-invalid" : ""}`}
                    value={formData.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                  />
                  {formErrors.firstName && <div className="invalid-feedback">{formErrors.firstName}</div>}
                </div>
                <div className="col-12 col-sm-6 col-md-6 custom-last-name">
                  <label>*Last Name</label>
                  <input
                    id="lname"
                    type="text"
                    name="lastName"
                    className={`form-control ${formErrors.lastName ? "is-invalid" : ""}`}
                    value={formData.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                  />
                  {formErrors.lastName && <div className="invalid-feedback">{formErrors.lastName}</div>}
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-sm-12 col-lg-6 custom-email-name">
                  <label>*E-mail Address</label>
                  <input
                    id="mail"
                    type="email"
                    name="email"
                    className={`form-control ${formErrors.email ? "is-invalid" : ""}`}
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                  />
                  {formErrors.email && <div className="invalid-feedback">{formErrors.email}</div>}
                </div>
                <div className="col-12 col-sm-6 custom-last-name">
                  <label>*Phone Number</label>
                  <input
                    id="num"
                    type="tel"
                    name="phone"
                    className={`form-control ${formErrors.phone ? "is-invalid" : ""}`}
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                  />
                  {formErrors.phone && <div className="invalid-feedback">{formErrors.phone}</div>}
                </div>

                <div className="col-12 col-sm-6 col-md-12 col-lg-12 custom-adress-name">
                  <label>*Address</label>
                  <input
                    id="add"
                    type="text"
                    name="address"
                    className={`form-control ${formErrors.address ? "is-invalid" : ""}`}
                    value={formData.address}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                  />
                  {formErrors.address && <div className="invalid-feedbackk">{formErrors.address}</div>}
                </div>
              </div>
              <div className="row" style={{ marginTop: "20px" }}>
                <div className="col-12 col-sm-6 col-lg-6 custom-city-name ">
                  <label style={{ marginLeft: "-85%" }}>*City</label>
                  <input
                    id="city"
                    type="text"
                    name="city"
                    className={`form-control ${formErrors.city ? "is-invalid" : ""}`}
                    value={formData.city}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                  />
                  {formErrors.city && <div className="invalid-feedback">{formErrors.city}</div>}
                </div>
                <div className="col-12 col-sm-6 col-lg-6 custom-pincode-name">
                  <label>*Pin Code</label>
                  <input
                    id="pincode"
                    type="text"
                    name="pincode"
                    className={`form-control ${formErrors.pincode ? "is-invalid" : ""}`}
                    value={formData.pincode}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                  />
                  {formErrors.pincode && <div className="invalid-feedback">{formErrors.pincode}</div>}
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-sm-6 col-lg-6 custom-adu-name">
                  <label>*Aadhar Card Number</label>
                  <input
                    id="aadhar"
                    type="text"
                    name="aadhar"
                    className={`form-control ${formErrors.aadhar ? "is-invalid" : ""}`}
                    value={formData.aadhar}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                  />
                  {formErrors.aadhar && <div className="invalid-feedback">{formErrors.aadhar}</div>}
                </div>
                <div className="col-12 col-sm-6  col-lg-6 custom-pan-name" style={{ marginTop: "5%" }}>
                  <label>*PAN Card Number</label>
                  <input
                    id="pan"
                    type="text"
                    name="pan"
                    className={`form-control ${formErrors.pan ? "is-invalid" : ""}`}
                    value={formData.pan}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                  />
                  {formErrors.pan && <div className="invalid-feedback">{formErrors.pan}</div>}
                </div>
              </div>

                <div className="col-12 col-md-12" style={{ marginTop: "50px" }}>
                <input
                  type="checkbox"
                  name="offlineTest"
                  className={`form-check-input ${formErrors.offlineTest ? "is-invalid" : ""}`}
                  checked={formData.offlineTest}
                  onChange={handleChange}
                />
                <label style={{ marginLeft: '10px' }}>*Offline Test will be conducted based on your role.</label>

                {formErrors.offlineTest && <div className="invalid-feedback">{formErrors.offlineTest}</div>}
              </div>

              <div className="row">
                <div className="col-12 col-sm-6 col-md-12 col-lg-12 custom-submit-name">
                  {isFormComplete() ? (
                    <Link to="/you" className="action">
                      <button type="submit" className="btn btn-dark w-100">
                        Submit
                      </button>
                    </Link>
                  ) : (
                    <button type="submit" className="btn btn-dark w-100" disabled>
                      Submit
                    </button>
                  )}
                </div>
              </div>
            </div>
          </form>
        </section>
      </main>
      <div className="faq-container2 col-12 col-sm-6 col-md-12 col-lg-12">
        <h1 className="faq-title2 col-12">Frequently Asked Questions (FAQ'S)</h1>
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question  col-12" onClick={() => toggleQuestion(index)} style={{ cursor: "pointer" }}>
              <div
                className="chevron"
                style={{
                  transform: openQuestions.includes(index) ? "rotate(180deg)" : "rotate(0deg)",
                }}
              ></div>
              {faq.question}
            </div>
            <div
              className="faq-answer"
              style={{
                maxHeight: openQuestions.includes(index) ? "1000px" : "0",
                overflow: "hidden",
                transition: "max-height 0.3s ease, padding 0.3s ease",
                paddingLeft: openQuestions.includes(index) ? "35px" : "0",
                paddingTop: openQuestions.includes(index) ? "10px" : "0",
              }}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>

      <div className="contact1">
        <div className="site-map">
          <div className="mobile-logo">
            <img src={logo || "/placeholder.svg"} alt="DUZO Logo" />
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
            <a style={{ color: "black" }} href="#">
              Link
            </a>
          </div>
          <div className="social-media">
            <p>Follow Us On</p>
            {/* Social media icons */}
          </div>
        </div>

        <div className="contact-info">
          <div className="logo">
            <img src={logo || "/placeholder.svg"} alt="DUZO Logo" />
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

      <footer className="text-white text-center p-3" style={{ backgroundColor: "#813902", fontSize: "27px" }}>
        <p>&copy; 2024 by DUZO</p>
      </footer>
    </div>
  )
}

export default App

