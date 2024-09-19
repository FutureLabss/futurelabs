import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <div className="flex flex-col px-[20px] md:gap-[94px] md:p-10 bg-[#1E1F24] ">
      <div className="font-manrope w-full max-w-[40.3125rem] text-[#EFF0F3]">
        <h2 className="text-[1.7rem] md:text-[2rem] lg:text-[3rem] xl:text-[48px]">We Help Startups on a Budget Scale Fast and Smart</h2>
        <p className="text-[16px] text-[#B9BBC6]">Top notch innovative solutions speaking to user needs</p>
      </div>

      <div className="w-full max-w-[100%]">
        <ServiceCard />
      </div>
    </div>
  )
}
