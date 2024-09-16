"use client"

import { useState } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { faqData } from "../../data/data";



export default function Accordion() {
  const [openIndex, setOpenIndex] = useState<null | number>(null); // To track which accordion is open

  const toggleAccordion = (index: number) => {
    // Toggle accordion open/close by index
    if (openIndex === index) {
      setOpenIndex(null); // Close the accordion if it's already open
    } else {
      setOpenIndex(index); // Open the selected accordion
    }
  };

  return (
    <div className="flex flex-col gap-4">
      {faqData.map((item, index) => (
        <div key={index} className="border-[1px] p-4 border-[#FFFFFF1C] ">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleAccordion(index)}
          >
            <p className="font-medium font-manrope">{item.question}</p>
            <div className="text-lg">
              {openIndex === index ? <IoIosArrowDown /> : <IoIosArrowForward />}
            </div>
          </div>
          <div
            className={`transition-all  duration-300 ease-in-out overflow-hidden ${openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}
          >
            <p className="mt-2 p-4 font-inter text-[#FFFFFF99]">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
