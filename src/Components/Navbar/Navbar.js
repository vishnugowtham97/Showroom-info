import React, { useState } from "react";
import "./Navbar.css";

import { RiContactsLine } from "react-icons/ri";
import {
  BiShareAlt,
  BiLogoFacebookCircle,
  BiLogoLinkedin,
  BiSearchAlt,
} from "react-icons/bi";
import { MdOutlineMail } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import { FaWhatsapp, FaInstagram, FaYoutube } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [showIcons, setShowIcons] = useState(false);

  const toggleIcons = () => {
    setShowIcons(!showIcons);
  };
  const [isPopupVisible, setPopupVisible] = useState(false);

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  const navigate = useNavigate();

  const handleClick = (event) => {
    event.preventDefault();
    navigate("/location");
  };

  const handleContact = (event) => {
    event.preventDefault();
    navigate("/contact");
  };

  const handleHome = (event) => {
    event.preventDefault();
    navigate("/");
  };

  const handleCars = (event) => {
    event.preventDefault();
    navigate("/findcars");
  };

  const handleConn = (event) => {
    event.preventDefault();
    navigate("/connect");
  };

  const handleMobility = (event) => {
    event.preventDefault();
    navigate("/mobility");
  };

  return (
    <div className="nav-container">
      <div className="brand-holder">
        <a href="/" onClick={handleHome} className="brand-name">
          HYUNDAI
        </a>
      </div>
      <div className="nav-content">
        <ul className="content">
          <li>
            <a href="/findcars" onClick={handleCars}>
              Find a Car
            </a>
          </li>
          <li>
            <a href="/connect" onClick={handleConn}>
              Cl!ck to connect
            </a>
          </li>
          <li>
            <a href="/location" onClick={handleClick}>
              Connect to serv!ce
            </a>
          </li>
          <li>
            <a href="/mobility" onClick={handleMobility}>
              Mobility solution
            </a>
          </li>
          <li>
            <a href="/contact" onClick={handleContact}>
              Contact us
            </a>
          </li>
        </ul>
      </div>
      <div className="social-media">
        <RiContactsLine className="contact-icon" onClick={togglePopup} />
        {isPopupVisible && (
          <div className="popup">
            <h2>Contact Information</h2>
            <p>Customer Care: +63954-88745</p>
            <p>Email: hyundaicustomercare@hyundai.in</p>
            <button className="close-btn" onClick={togglePopup}>
              Close
            </button>
          </div>
        )}

        <div className="share-container">
          <button id="share-button" onClick={toggleIcons}>
            <BiShareAlt className="share-icon" />
          </button>
          {showIcons && (
            <div className="icon-container">
              <a href="#" className="icon-link">
                <BiLogoFacebookCircle />
              </a>
              <a href="#" className="icon-link">
                <BiLogoLinkedin />
              </a>
              <a href="#" className="icon-link">
                <MdOutlineMail />
              </a>
              <a href="#" className="icon-link">
                <FaWhatsapp />
              </a>
              <a href="#" className="icon-link">
                <FaInstagram />
              </a>
              <a href="#" className="icon-link">
                <FaYoutube />
              </a>
            </div>
          )}
        </div>
        <GrLocation onClick={handleClick} className="nav-location" />
        <div className="search">
          <input type="text" id="searchInput" className="search-box" />
          <BiSearchAlt className="searchbox-icon" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
