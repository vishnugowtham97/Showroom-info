import React from "react";

import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import CarList from "../../Components/CarList/CarList";

const FindCars = () => {
  return (
    <div className="findcars-container">
      <Navbar className="nav-con" />
      <CarList />
      <Footer />
    </div>
  );
};

export default FindCars;
