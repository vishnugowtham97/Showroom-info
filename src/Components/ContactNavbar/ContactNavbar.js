import React, { useState } from "react";
import "./ContactNavbar.css";
import Dropdown from "react-bootstrap/Dropdown";
import { BsCart2 } from "react-icons/bs";
import { PiUserCircle } from "react-icons/pi";

const ContactNavbar = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };
  return (
    <div className="contactnav-container">
      <div className="brand-holder">
        <a href="/" className="brand-name">
          HYUNDAI
        </a>
      </div>
      <div className="nav-content">
        <ul className="content">
          <li>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                CTB Journey
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Buy Car Online</Dropdown.Item>
                <Dropdown.Item href="#/action-2">
                  Buy Pre-owned Car
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  Request Test Drive
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  Download e-Brochure
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">Special Offer</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Book a Car</Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  Hyundai Bluelink
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">Preowned Car</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>
          <li>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Mobility
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">
                  Hyundai Subscription
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">Hyundai Leasing</Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  Institutional sales
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>
          <li>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Connect to service
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Hyundai Service</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Warrenty Policy</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Maintenance</Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  Road side Assistant
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">Genuine Parts</Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  Service Calculator
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">Refer and Win</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>
          <li>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Hyundai story
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">
                  Hyundai Motor India
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">About Hyundai</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Media Center</Dropdown.Item>
                <Dropdown.Item href="#/action-3">CSR</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Career</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Export</Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  Apply for Hyundai Dealership
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">Technology</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>
          <li>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                IONIQ 5
              </Dropdown.Toggle>
            </Dropdown>
          </li>
        </ul>
      </div>
      <div className="icon-cart">
        <PiUserCircle className="PiUserCircle" onClick={togglePopup} />
        {isPopupVisible && (
          <div className="popup">
            <h4>Kindly Please Login</h4>
            <button className="close-btn" onClick={togglePopup}>
              Close
            </button>
          </div>
        )}
        <BsCart2 className="BsCart2" />
      </div>
    </div>
  );
};

export default ContactNavbar;
