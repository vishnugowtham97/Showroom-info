import React, { useState, useEffect } from "react";
import "./Footer.css";

import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsLinkedin,
  BsYoutube,
  BsWhatsapp,
  BsFillArrowUpSquareFill,
} from "react-icons/bs";

function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    // Show the button when the user scrolls down 200px or more
    const toggleVisibility = () => {
      if (window.pageYOffset > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <footer>
      <div className="advanced-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <img
                src="../../Assets/124.png"
                alt="Logo"
                className="footer-logo"
              />
            </div>
            <div className="col-md-6">
              <ul className="footer-links">
                <li>
                  <a href="/">Worldwide</a>
                </li>
                <li>
                  <a href="/contact">Contact Us</a>
                </li>
                <li>
                  <a href="/legal">Legal Disclaimer</a>
                </li>
                <li>
                  <a href="/sitemap">Sitemap</a>
                </li>
                <li>
                  <a href="/suppliers">Hyundai Suppliers</a>
                </li>
                <li>
                  <a href="/dealer-application">Dealer Application</a>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <ul className="social-media">
                <li>
                  <a href="#">
                    <BsInstagram />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <BsFacebook />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <BsTwitter />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <BsLinkedin />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <BsYoutube />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <BsWhatsapp />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className={`scroll-to-top ${isVisible ? "visible" : ""}`}
          onClick={scrollToTop}
        >
          <BsFillArrowUpSquareFill className="uparrow" />
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>
            &copy; {new Date().getFullYear()} Hyundai Motor India. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
