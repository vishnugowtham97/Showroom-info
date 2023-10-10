import React from "react";
import "./Home.css";

import Navbar from "../../Components/Navbar/Navbar";
import Carousel from "../../Components/Carousel/Carousel";
import Specification from "../../Components/Specification/Specification";
import Gallery from "../../Components/Gallery/Gallery";
import Details from "../../Components/Details/Details";
import Footer from "../../Components/Footer/Footer";
import Highlight from "../../Components/Highlight/Highlight";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <Carousel />
      <div className="home-body">
        <div className="home-content">
          <h2 className="home-head">
            The all-new i20 - With its ‘BORN MAGNETIC’ attributes leaving an
            unforgettable impression
          </h2>
          <p className="home-para">
            The all-new i20 has been inspired from Hyundai’s design DNA of
            “sensuous sportiness” with a dynamic look on the outside & luxurious
            feeling on the inside. Its breathtaking presence casts a magnetic
            charm; while its connected and intuitive features enhance your
            comfort and convenience. Truly a class above the rest.
          </p>
        </div>
        <div className="image-contain">
          <img className="import-img" src="../../Assets/102.jpg" alt="" />
        </div>
      </div>
      <div className="spec-container">
        <Specification />
      </div>
      <div className="gallery-container">
        <Gallery />
      </div>
      <div className="highlight-container">
        <Highlight />
      </div>

      <div className="video-container">
        <video
          src="../../Assets/i20.mkv"
          typeof="video/mp4"
          autoPlay
          loop
          muted
        />
      </div>
      <div className="details-container">
        <Details />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
