import React from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

export default function () {
  return (
    <div className="flex flex-col justify-between items-center h-lvh">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
