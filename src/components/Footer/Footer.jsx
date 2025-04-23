import React from "react";
import logo from "../../assets/BedaytLogo.png";
import { FaFacebook } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="bg-white  m-4 w-full ">
      <div className="w-full  mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <img src={logo} className="h-14" alt="Flowbite Logo" />
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#about" className="hover:underline me-4 md:me-6">
                من نحن
              </a>
            </li>
            <li>
              <a href="#sevices" className="hover:underline me-4 md:me-6">
                خدمات
              </a>
            </li>
            <li>
              <a href="#specialists" className="hover:underline me-4 md:me-6">
                اطباء متخصصين
              </a>
            </li>
            <li>
              <a href="#targetgroup" className="hover:underline me-4 md:me-6">
                الفئات المستهدفه
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                تواصل معنا
              </a>
            </li>
          </ul>
          <ul className="flex flex-wrap items-center justify-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 text-center">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                <FaFacebook size={20} />
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                <RiTwitterXFill size={20} />
              </a>
            </li>

            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                <FaLinkedin size={20} />
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                <FaYoutube size={20} />
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="flex items-center justify-center gap-3 text-lightGray">
          <a className="underline">Cookies Settings</a>
          <a className="underline"> Terms of Service</a>
          <a className="underline">Privacy Policy</a>
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            .All Rights Reserved©.2025
          </span>
        </div>
      </div>
    </footer>
  );
}
