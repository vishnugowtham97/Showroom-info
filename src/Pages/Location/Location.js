import React from "react";
import "./Location.css";

import Form from "react-bootstrap/Form";

import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { Button } from "react-bootstrap";

const CompanyMap = () => {
  return (
    <div className="location-container">
      <Navbar />
      <div className="img-holder">
        <div className="side-heading">
          <h2 className="dealer-site">Find a Dealer and Website</h2>
          <h5 className="dealer-site">Select a Service You Want</h5>
        </div>
        <div className="location-imgholder">
          <img
            src="../../Assets/122.jpg"
            alt="img-place"
            className="location-img"
          />
        </div>
      </div>
      <div className="select-flex">
        <Form.Select
          aria-label="Default select example"
          size="sm"
          className="select-menu"
        >
          <option>Select Dealership</option>
          <option value="1">Sales Showroom</option>
          <option value="2">Service Workshop</option>
          <option value="3">Used Car</option>
        </Form.Select>
        <Form.Select
          aria-label="Default select example"
          size="sm"
          className="select-menu"
        >
          <option>Select a Model</option>
          <option value="1">I10 Grand Nios</option>
          <option value="2">All New I20 </option>
          <option value="3">verna</option>
          <option value="3">Venue</option>
          <option value="3">Creta</option>
        </Form.Select>

        <Form.Select
          aria-label="Default select example"
          size="sm"
          className="select-menu"
        >
          <option>Select State</option>
          <option value="3">Andra Pradesh</option>
          <option value="3">Bangalore</option>
          <option value="3">Delhi</option>
          <option value="2">Kerala</option>
          <option value="3">Mumbai</option>
          <option value="1">Tamil Nadu</option>
        </Form.Select>
      </div>
      <div className="select-btn">
        <Button>Submit</Button>
      </div>

      <Footer />
    </div>
  );
};

export default CompanyMap;
