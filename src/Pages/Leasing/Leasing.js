import React from "react";
import "./Leasing.css";

import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const Leasing = () => {
  return (
    <div className="leasing-container">
      <Navbar />
      <img
        src="../../Assets/142.jpg"
        alt="img-carbanner"
        className="leasing-banner"
      />
      <div className="lease-content">
        <h1 className="lease-head">Hyundai Leasing</h1>
        <p className="lease-para">
          Hyundai Leasing is the easiest way to have a car. Wouldn’t it be nice
          if the hassles of ownership, car maintenance, repairs, breakdown
          assistance, and insurance were all handled by someone else? We have
          news for you - In case of Hyundai leasing, we offer you just that!
          What’s more, you only need to pay for as much as you use the car. So
          have a worry-free drive and leave the rest to us. We are here to take
          care of your drive.
        </p>
        <p className="lease-para">
          To know more about Hyundai Leasing , please call toll free no.
          <span className="bold-num">1800114645</span>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Leasing;
