import React, { useState } from "react";
import "./Gallery.css";

import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";

function Gallery() {
  const imgs = [
    { id: 0, value: "../../Assets/121.jpg" },
    { id: 1, value: "../../Assets/108.jpg" },
    { id: 2, value: "../../Assets/109.jpg" },
    { id: 3, value: "../../Assets/116.jpg" },
    { id: 4, value: "../../Assets/111.jpg" },
    { id: 5, value: "../../Assets/112.jpg" },
    { id: 6, value: "../../Assets/115.jpg" },
    { id: 7, value: "../../Assets/114.jpg" },
  ];
  const [wordData, setWordData] = useState(imgs[0]);
  const [val, setVal] = useState(0);
  const handleClick = (index) => {
    console.log(index);
    setVal(index);
    const wordSlider = imgs[index];
    setWordData(wordSlider);
  };
  const handleNext = () => {
    let index = val < imgs.length - 1 ? val + 1 : val;
    setVal(index);
    const wordSlider = imgs[index];
    setWordData(wordSlider);
  };
  const handlePrevious = () => {
    let index = val <= imgs.length - 1 && val > 0 ? val - 1 : val;
    setVal(index);
    const wordSlider = imgs[index];
    setWordData(wordSlider);
  };
  return (
    <div className="main">
      <button className="btns" onClick={handlePrevious}>
        <MdArrowBackIos />
      </button>
      <img src={wordData.value} className="gallery-img" alt="img" />
      <button className="btns" onClick={handleNext}>
        <MdArrowForwardIos />
      </button>
      <div className="flex_row">
        {imgs.map((data, i) => (
          <div className="thumbnail" key={i}>
            <img
              className={wordData.id === i ? "clicked" : ""}
              src={data.value}
              onClick={() => handleClick(i)}
              alt="img"
              height="100"
              width="100"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
