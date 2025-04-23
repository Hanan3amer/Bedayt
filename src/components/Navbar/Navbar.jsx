import React, { useState } from "react";
import logo from "../../assets/BedaytLogo.png";
import "flowbite";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("home");
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  return (
    <nav className="bg-gray fixed w-full z-20 top-0 start-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
        <img src={logo} className="h-10" alt="Bedayt Logo" />
        <div className="flex md:order-2 space-x-3 md:gap-5 rtl:space-x-reverse">
          <a
            href="/#appointment"
            className="text-white bg-mintGreen hover:bg-gray-100 hover:text-mintGreen rounded-lg text-sm px-4 py-2"
          >
            حجز موعد
          </a>
          <a
            href="/#contact"
            className="text-mintGreen hover:text-white hover:bg-mintGreen rounded-lg text-sm px-4 py-2"
          >
            تواصل معنا
          </a>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 "
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div className="hidden md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul className="flex flex-col md:flex-row p-4 md:p-0 mt-4 lg:text-md md:font-medium rounded-lg lg:space-x-8 rtl:space-x-reverse md:mt-0 ">
            <li>
              <a
                href="#home"
                onClick={() => handleLinkClick("home")}
                className={`nav-link py-2 px-3 ${
                  activeLink === "home" ? "active" : ""
                }`}
              >
                الرئيسية
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={() => handleLinkClick("about")}
                className={`nav-link py-2 px-3 ${
                  activeLink === "about" ? "active" : ""
                }`}
              >
                من نحن
              </a>
            </li>
            <li>
              <a
                href="#services"
                onClick={() => handleLinkClick("services")}
                className={`nav-link py-2 px-3 ${
                  activeLink === "services" ? "active" : ""
                }`}
              >
                خدمات
              </a>
            </li>
            <li>
              <a
                href="#targetgroup"
                onClick={() => handleLinkClick("targetgroup")}
                className={`nav-link py-2 px-3 ${
                  activeLink === "targetgroup" ? "active" : ""
                }`}
              >
                الفئات المستهدفة
              </a>
            </li>
            <li>
              <a
                href="#specialists"
                onClick={() => handleLinkClick("specialists")}
                className={`nav-link py-2 px-3 ${
                  activeLink === "specialists" ? "active" : ""
                }`}
              >
                مستشارين واخصائيين
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
