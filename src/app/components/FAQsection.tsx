"use client";

import { useStateAuthProvider } from "../context";
import Accordion from "../ui/Accordion";
import Button from "../ui/Button";

export default function FAQsection() {
  const context = useStateAuthProvider();
  if (!context) {
    return null;
  }

  const { showForm, setShowForm } = context;
  return (
    <div className="flex flex-col gap-6 lg:flex-row md:justify-between px-[20px] py-[20px] md:px-[40px] md:py-[40px] xl:px-[80px] xl:py-[120px] bg-[#1C2640] text-white faq-background">
      <div className="w-full lg:max-w-[440px] xl:max-w-[515px] flex flex-col gap-4 font-manrope ">
        <h2 className="text-[2.5rem] lg:text-[3.5rem] xl:text-[4rem] font-normal leading-[4.4375rem">
          Frequently Asked Questions
        </h2>
        <p className="text-[1rem] leading-[1.75rem] text-[#FFFFFFCC]">
          Learn how to analyze user requirements, conduct research, use creative
          and technical skills to develop prototypes, refine design based on
          feedback creating tangible products that fulfil certain
          functionalities or provide solutions to problems.
        </p>

        <div className=" w-full">
          <Button
            setShowForm={setShowForm}
            showForm={showForm}
            aria-label="Get Started"
            role="button"
          />
        </div>
      </div>
      <div className="W-full  lg:max-w-[500px] xl:max-w-[582px]">
        <Accordion />
      </div>
    </div>
  );
}
