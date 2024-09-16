import Accordion from "../ui/Accordion";
import Button from "../ui/Button";


export default function FAQsection() {
  return (
    <div className="flex justify-between px-[80px] py-[120px] bg-[#1C2640] text-white faq-background">
      <div className="w-full max-w-[535px] flex flex-col gap-4 font-manrope ">
        <h2 className="text-[4rem] font-normal leading-[4.4375rem">
          Frequently Asked Questions
        </h2>
        <p className="text-[1rem] leading-[1.75rem] text-[#FFFFFFCC]">Learn how to analyze user requirements, conduct research, use creative and technical skills to develop prototypes, refine design based on feedback creating tangible products that fulfil certain functionalities or provide solutions to problems.</p>

        <div>
          <Button />
        </div>
      </div>
      <div className="W-full max-w-[582px]">
        <Accordion />
      </div>
    </div>
  )
}
