"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Nav from "./headcomponents/Nav";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

function Navigation() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isSidebarOpen]);
  return (
    <div className="px-[20px] xl:px-[5rem] pt-[1.25rem] flex justify-between items-center relative">
      <Nav />

      {/* Hamburger Button */}
      <div className="flex items-center gap-1 sm:gap-2 md:hidden">
        <button
          type="button"
          aria-label="Toggle sidebar"
          role="button"
          onClick={handleToggleSidebar}
          className="cursor-pointer z-50 focus:outline-none"
        >
          {isSidebarOpen ? (
            <IoMdClose size={24} className="text-[#F57F20]" />
          ) : (
            <GiHamburgerMenu size={24} className="text-[#F57F20]" />
          )}
        </button>
      </div>

      {/* Desktop Buttons */}
      <div className="hidden md:flex md:flex-row gap-2 md:gap-5">
        <Link
          aria-label="Alumni"
          href="/alumni"
          role="link"
          className="text-secondary-default font-medium text-[14px] sm:text-[20px] font-manrope border border-secondary-default px-5 py-1 rounded"
        >
          Alumni
        </Link>
        <div className="text-white font-medium text-[14px] sm:text-[20px] font-manrope bg-secondary-default px-3 py-1 rounded">
          <Link
            aria-label="Studios"
            role="link"
            href="https://studio.futurelabs.ng"
            target="_blank"
          >
            Studios
          </Link>
        </div>
      </div>

      {/* overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden transition-all duration-700 ease-in-out"
          onClick={handleToggleSidebar}
        ></div>
      )}

      {/* Animated Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-[60%] sm:w-[50%] h-full bg-white shadow-lg flex flex-col items-center pt-16 gap-5 md:hidden z-40 transform transition-transform duration-700 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col w-full gap-4 p-2 text-center">
          <Link
            href="/alumni"
            className="text-secondary-default font-medium text-[16px] font-manrope border border-secondary-default px-5 py-2 rounded"
            onClick={handleToggleSidebar}
          >
            Alumni
          </Link>
          <Link
            href="https://studio.futurelabs.ng"
            target="_blank"
            className="text-white font-medium text-[16px] font-manrope bg-secondary-default px-5 py-2 rounded"
            onClick={handleToggleSidebar}
          >
            Studios
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
