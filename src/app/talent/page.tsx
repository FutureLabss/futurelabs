// app/page.tsx
"use client"; // This directive makes this a Client Component

import React, { useState } from "react";
import HireTalentForm from "../components/HireTalentForm";
import ApplyForJobForm from "../components/ApplyForJobForm";
import Nav from "../components/headcomponents/Nav";
import Footer from "../components/Footer";

const HomePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"hire" | "apply">("hire");

  return (
    <section>
      <div className="pl-[15px]  lg:pl-[2rem] xl:pl-[5rem] mt-[2rem] ">
        <Nav />
      </div>
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-4xl bg-white rounded-xl overflow-hidden border border-gray-200">
          {/* Tab Buttons Container */}
          <div className="flex justify-center p-4 sm:p-6 bg-gray-100 border-b border-gray-200">
            <button
              onClick={() => setActiveTab("hire")}
              className={`px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 ease-in-out
              ${
                activeTab === "hire"
                  ? "bg-[#1D2640] text-white shadow-md transform scale-105"
                  : "bg-transparent text-[#1D2640] border-2 border-[#1D2640] hover:bg-blue-50 hover:text-[#1D2640]"
              }
            `}
            >
              Hire Talent
            </button>
            <button
              onClick={() => setActiveTab("apply")}
              className={`ml-4 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 ease-in-out
              ${
                activeTab === "apply"
                  ? "bg-[#1D2640] text-white shadow-md transform scale-105"
                  : "bg-transparent text-[#1D2640] border-2 border-[#1D2640] hover:bg-blue-50 hover:text-[#1D2640]"
              }
            `}
            >
              Apply for Job
            </button>
          </div>

          {/* Conditional Form Rendering */}
          <div className="p-4 sm:p-6">
            {activeTab === "hire" && <HireTalentForm />}
            {activeTab === "apply" && <ApplyForJobForm />}
          </div>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </section>
  );
};

export default HomePage;
