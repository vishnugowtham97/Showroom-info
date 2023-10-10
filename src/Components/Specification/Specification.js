import React, { useState, useEffect } from "react";
import "./Specification.css";

function Specification() {
  const [selectedImage, setSelectedImage] = useState("../../Assets/103.jpg");
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(0);
  const [heading, setHeading] = useState("");
  const [paragraph, setParagraph] = useState("");

  const images = [
    "../../Assets/103.jpg",
    "../../Assets/104.jpg",
    "../../Assets/105.jpg",
  ];

  const buttonLabels = [
    {
      heading: "Oxyboost air purifier",
      paragraph:
        "Air purifying while traviling inside the cabin new features with advanced AI technology",
    },
    {
      heading: "Wireless charging coolpad",
      paragraph:
        "The new Hyundai i20 comes with the convenience of wireless phone charging so that your phone never runs out of battery while travelling.",
    },
    {
      heading: "Soothing Blue ambient lighting",
      paragraph:
        "Blue ambient lighting complements the luxurious and sophisticated interior. Ambient lighting elevate your senses to a new high",
    },
  ];

  const handleButtonClick = (image, index) => {
    setSelectedImage(image);
    setSelectedButtonIndex(index);
    setHeading(buttonLabels[index].heading);
    setParagraph(buttonLabels[index].paragraph);
  };

  const buttons = images.map((image, index) => (
    <button
      key={index}
      onClick={() => handleButtonClick(image, index)}
      className={selectedButtonIndex === index ? "selected-button" : ""}
    >
      {buttonLabels[index].heading}
    </button>
  ));

  useEffect(() => {
    setHeading(buttonLabels[0].heading);
    setParagraph(buttonLabels[0].paragraph);
  }, []);
  return (
    <div className="specification-container">
      <div className="buttons">{buttons}</div>
      <div className="selected-image">
        <img src={selectedImage} alt="Selected" />
        <div className="img-content">
          <h3>{heading}</h3>
          <p>{paragraph}</p>
        </div>
      </div>
    </div>
  );
}

export default Specification;
