import React from "react";
import ContactNavbar from "../../Components/ContactNavbar/ContactNavbar";
import { Button } from "react-bootstrap";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact">
        <ContactNavbar />
        <div className="contact-body">
          <div className="contact-content">
            <p className="top-line">
              Just enter your mobile number to get started.
            </p>
            <div className="input">
              <input
                className="input-box"
                type="number"
                placeholder="Please enter mobile number"
              />
            </div>
            <p className="ctr-line">
              Don't worry, if you are already registered your journey will start
              from your last saved step.
            </p>
            <div className="contact-btn">
              <Button className="btn">Verify</Button>
            </div>
          </div>
        </div>
        <p className="bottom-line">
          Please click here to <a href="/login">Login with Email Id</a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
