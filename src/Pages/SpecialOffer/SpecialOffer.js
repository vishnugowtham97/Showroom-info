import React from "react";
import "./SpecialOffer.css";

import { Button } from "react-bootstrap";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const SpecialOffer = () => {
  return (
    <div className="specialoffer-contaniner">
      <Navbar />
      <img
        src=".././Assets/141.jpg"
        alt="offer-zone"
        className="specialoffer-img"
      />
      <h1 className="offer-head">Special Offers</h1>
      <div className="offerbtn-container">
        <Button className="offer-btn">Click to Buy</Button>
        <Button className="offer-btn">Test Drive</Button>
      </div>
      <Footer />
    </div>
  );
};

export default SpecialOffer;
