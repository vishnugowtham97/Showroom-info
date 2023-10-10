import React, { useState } from "react";
import "./Highlight.css";

const ImageCardSlider = () => {
  const rowsData = [
    {
      imageSrc: "../../Assets/143.jpg",
      heading: "Voice enabled smart electric sunroof",
      paragraph:
        "Electrically controlled smart sunroof with one touch operation for added convenience",
    },
    {
      imageSrc: "../../Assets/144.jpg",
      heading:
        "26.03 cm HD touchscreen infotainment & navigation system (Best in segment)",
      paragraph:
        "26.03cm HD touchscreen infotainment with Blue Link comes equipped with on board Navigation, Smartphone connectivity-Apple carplay & Android auto",
    },
    {
      imageSrc: "../../Assets/145.jpg",
      heading: "Bose premium 7 speaker system",
      paragraph:
        "The new Hyundai i20 brings together the best in class technology to make your drives unforgettable. Feel every note of your favourite tunes, powered by the high-end Bose sound system",
    },
    {
      imageSrc: "../../Assets/146.jpg",
      heading: "Over-the-air (OTA) updates for infotainment and map",
      paragraph:
        "The new Hyundai i20 comes with the convenience of OTA updates for the map features.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handlePaginationClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="image-card-slider">
      {rowsData.map((row, index) => (
        <div
          key={index}
          className={`slider-row ${index === activeIndex ? "active" : ""}`}
        >
          <img src={row.imageSrc} alt={`Image ${index + 1}`} />
          <h2>{row.heading}</h2>
          <p>{row.paragraph}</p>
        </div>
      ))}
      <div className="pagination">
        {rowsData.map((_, index) => (
          <span
            key={index}
            className={`pagination-circle ${
              index === activeIndex ? "active" : ""
            }`}
            onClick={() => handlePaginationClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCardSlider;
