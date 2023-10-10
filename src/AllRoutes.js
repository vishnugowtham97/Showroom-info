import React from "react";
import { Route, Routes } from "react-router-dom";

import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import FindCars from "./Pages/FindCars/FindCars";
import Login from "./Pages/Login/Login";
import Location from "./Pages/Location/Location";
import SpecialOffer from "./Pages/SpecialOffer/SpecialOffer";
import Bot from "./Pages/Bot/Bot";
import Leasing from "./Pages/Leasing/Leasing";

const AllRoutes = () => {
  return (
    <>
      <Bot />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/findcars" element={<FindCars />} />
        <Route path="/login" element={<Login />} />
        <Route path="/location" element={<Location />} />
        <Route path="/connect" element={<SpecialOffer />} />
        <Route path="/mobility" element={<Leasing />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
