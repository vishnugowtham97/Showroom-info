import React, { useState } from "react";
import "./Details.css";

function Details() {
  const [formData, setFormData] = useState({
    title: "Mr",
    name: "",
    email: "",
    mobile: "",
    otp: "",
    model: "",
    city: "",
    state: "",
    comment: "",
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="my-form">
      <div className="test-drive">
        <h2 className="section-head">Request a Test drive</h2>
        <div className="form-group">
          <label className="salutation">
            Salutation:
            <input
              type="radio"
              name="title"
              value="Mr"
              className="title"
              checked={formData.title === "Mr"}
              onChange={handleChange}
            />
            Mr
            <input
              type="radio"
              name="title"
              value="Mrs"
              className="title"
              checked={formData.title === "Mrs"}
              onChange={handleChange}
            />
            Mrs
          </label>
        </div>
        <div className="form-group">
          <label>
            Name:
            <input
              type="text"
              name="name"
              className="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Email:
            <input
              type="email"
              name="email"
              className="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Mobile Number:
            <input
              type="tel"
              name="mobile"
              className="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div className="form-group">
          <button className="send-otp">Send OTP</button>
        </div>
        <div className="form-group">
          <label>
            Enter OTP:
            <input
              type="text"
              name="otp"
              className="otp"
              value={formData.otp}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Model Selection:
            <input
              type="text"
              name="model"
              className="model"
              value={formData.model}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            City:
            <input
              type="text"
              name="city"
              className="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            State:
            <input
              type="text"
              name="state"
              className="state"
              value={formData.state}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Comment:
            <textarea
              name="comment"
              className="comment"
              value={formData.comment}
              onChange={handleChange}
              rows="4"
            />
          </label>
        </div>
        <div className="form-group">
          <label className="terms">
            <input
              type="checkbox"
              name="termsAccepted"
              className="terms"
              checked={formData.termsAccepted}
              onChange={handleChange}
              required
            />
            I accept the terms and conditions
          </label>
        </div>
        <div className="form-group">
          <button type="submit" className="submit-button">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default Details;
