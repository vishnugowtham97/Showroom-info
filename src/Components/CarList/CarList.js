import React from "react";
import "./CarList.css";

const hatchbackCars = [
  {
    name: "Grand I10 Nios",
    image: "../../Assets/126.png",
  },
  {
    name: "All New i20",
    image: "../../Assets/127.png",
  },
  {
    name: "i20 N Line",
    image: "../../Assets/128.png",
  },
];

const electricCars = [
  {
    name: "IONIQ 5",
    image: "../../Assets/129.png",
  },
  {
    name: "KONA Electric",
    image: "../../Assets/130.png",
  },
];

const sedanCars = [
  {
    name: "Aura",
    image: "../../Assets/131.png",
  },
  {
    name: "Verna",
    image: "../../Assets/132.png",
  },
];

const suvCars = [
  {
    name: "EXTER",
    image: "../../Assets/133.png",
  },
  {
    name: "Venue N Line",
    image: "../../Assets/134.png",
  },
  {
    name: "Venue",
    image: "../../Assets/135.png",
  },
  {
    name: "Creta",
    image: "../../Assets/136.png",
  },
  {
    name: "Alcazar",
    image: "../../Assets/139.png",
  },
  {
    name: "Tucson",
    image: "../../Assets/140.png",
  },
];

function CarList() {
  return (
    <div className="carlist-containet">
      <h2 className="head-line">Hatchback Cars</h2>
      <div className="hatchcar-list">
        {hatchbackCars.map((car, index) => (
          <div className="car-item" key={index}>
            <img src={car.image} alt={car.name} className="cars-images" />
            <p className="car-name">{car.name}</p>
          </div>
        ))}
      </div>

      <h2 className="head-line">Electric Cars</h2>
      <div className="hatchcar-list">
        {electricCars.map((car, index) => (
          <div className="car-item" key={index}>
            <img src={car.image} alt={car.name} className="cars-images" />
            <p className="car-name">{car.name}</p>
          </div>
        ))}
      </div>

      <h2 className="head-line">Sedan Cars</h2>
      <div className="hatchcar-list">
        {sedanCars.map((car, index) => (
          <div className="car-item" key={index}>
            <img src={car.image} alt={car.name} className="cars-images" />
            <p className="car-name">{car.name}</p>
          </div>
        ))}
      </div>

      <h2 className="head-line">SUV Cars</h2>
      <div className="hatchcar-list">
        {suvCars.map((car, index) => (
          <div className="car-item" key={index}>
            <img src={car.image} alt={car.name} className="cars-images" />
            <p className="car-name">{car.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CarList;
