"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import logo from "@/app/assets/logo/Futurelabs-logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

export default function LmsHeader() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Handle body overflow when sidebar is open
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isSidebarOpen]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <section className="min-w-[100%] xl:min-w-[1300px] mx-auto absolute mt-20 sm:mt-36 overflow-x-hidden">
        <nav className="flex justify-between items-center px-4 sm:px-20 py-3 sm:py-5">
          <div>
            <Image
              src={logo}
              alt="futurelabs logo"
              width={100}
              height={100}
              className="w-[100px] sm:w-[150px] h-auto"
            />
          </div>
          {/* <div className="relative">
            <ul className="flex gap-10 items-center">
              <li className="text-[1.1rem] font-semibold text-[#212C4A]">Home</li>
              <li className="text-gray-400 text-[1.1rem] font-semibold">
                Schools
              </li>
              <li className="text-gray-400 text-[1.1rem] font-semibold">
                Why Future Academy
              </li>
            </ul>
            <p className="h-1 w-1 bg-red-500 rounded-full absolute top-1 left-12"></p>
          </div> */}
          <div className="flex items-center gap-1 sm:gap-2">
            <p className="font-semibold text-[#F57F20] text-[1rem] sm:text-[1.3rem] cursor-pointer">
              Login
            </p>
            <p className="border-l-2 py-2 sm:py-3 border-[#F57F20] flex items-center justify-center"></p>
            <button
              type="button"
              aria-label="Open sidebar menu"
              role="button"
              onClick={toggleSidebar}
              className="cursor-pointer z-50 focus:outline-none"
            >
              {isSidebarOpen ? (
                <IoMdClose size={20} className="text-[#F57F20]" />
              ) : (
                <GiHamburgerMenu size={20} className="text-[#F57F20]" />
              )}
            </button>
          </div>
        </nav>
      </section>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-72 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 overflow-y-auto ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-8 mt-20">
          <ul className="space-y-8">
            <li className="text-[1.1rem] font-semibold text-[#212C4A] cursor-pointer hover:text-[#F57F20] transition-colors">
              Home
            </li>
            <li className="text-[1.1rem] font-semibold text-gray-400 cursor-pointer hover:text-[#F57F20] transition-colors">
              Schools
            </li>
            <li className="text-[1.1rem] font-semibold text-gray-400 cursor-pointer hover:text-[#F57F20] transition-colors">
              Why Future Academy
            </li>
          </ul>
        </div>
      </div>

      {/* Overlay */}
      <div
        onClick={toggleSidebar}
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 z-30 ${
          isSidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />
    </>
  );
}
