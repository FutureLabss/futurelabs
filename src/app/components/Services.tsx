import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <div className="flex flex-col py-4 px-2 md:px-[20px] md:gap-[94px] md:p-10 bg-[#1E1F24] ">
      <div className="font-manrope py-4 sm:py-0 w-full max-w-[40.3125rem] text-[#EFF0F3]">
        <h2 className="text-[1.7rem] md:text-[2rem] lg:text-[3rem] xl:text-[48px] font-semibold">
          Future‑Ready Tech Education for Africa’s Talent
        </h2>
        <p className="text-[16px] text-[#B9BBC6]">
          From 9‑month bootcamps to startup MVPs and talent placement, FutureLabs is an edtech hub for skills, careers, and innovation.
        </p>
      </div>

      <div className="w-full max-w-[100%]">
        <ServiceCard />
      </div>
    </div>
  );
}
