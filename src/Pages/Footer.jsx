import React from "react";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

function Footer() {
  return (
    <div>
      <footer className="bg-black mt-28 shadow-2xl border-t border-gray-400">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="flex flex-col md:flex-row md:justify-between">
            <div className="mb-6 md:mb-0">
              <a href="https://flowbite.com/" className="flex items-center">
                <img
                  src="https://linencentre.in/measurement/images/06.png"
                  className="h-8 me-3"
                  alt="FlowBite Logo"
                />
                <span className="self-center text-2xl font-semibold text-white">
                  Linen Center
                </span>
              </a>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-white uppercase">
                  Check Our Page
                </h2>
                <ul className="text-gray-400 font-medium">
                  <li>
                    <a href="https://linencentre.com/" className="hover:underline">
                      linencentre.com
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="mb-6 text-sm font-semibold text-white uppercase">
                  Our Locations
                </h2>
                <ul className="text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Cherthala
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Changanassery
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Kottayam
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-400 sm:mx-auto lg:my-8" />
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <span className="text-sm text-gray-400 sm:text-center">
              © 2023 All Rights Reserved. Powered by GlimmerTech Inc.
            </span>
            <div className="flex mt-4 sm:mt-0">
              <div className="flex gap-4">
                <a href="#" aria-label="Facebook">
                  <FaFacebook className="text-gray-400 hover:text-gray-300" />
                </a>
                <a href="#" aria-label="Instagram">
                  <BsInstagram className="text-gray-400 hover:text-gray-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
