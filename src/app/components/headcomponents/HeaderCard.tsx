import Button from "@/app/ui/Button";
import { skillSets } from "../../../data/data";


export default function HeaderCard() {
  return (
    <div className="w-full  bg-white">
      <div className="flex flex-col lg:flex-row justify-between gap-12  xl:gap-[7.1rem] items-center px-[20px] md:px-[3rem] xl:px-[6rem] md:py-[5.0625rem] w-full py-[25px]">
        <div className="flex flex-col gap-4 xl:max-w-[32.75rem] w-full">
          <h2 className="text-primary-default text-[2rem] md:text-[2.5rem] xl:text-size-48 leading-9 md:leading-[3.5rem] font-extrabold font-manrope">Want to be globally relevant?</h2>
          <p>
            At FutureLabs we offer various courses designed to take you from a beginner to a contributor in the technological body of knowledge. When you enroll for one of our courses you will learn new skills, develop new technical superpowers and join a community of Techies that will working for global relevance

            <span className="block my-[1.5rem]">FutureLabs is suitable for beginners but is designed for diligent students willing to put in the work and end up at international jobs within two years</span>
          </p>

          <div className="w-full max-w-[181px] ">
            <Button />
          </div>
        </div>

        <div className="w-full flex flex-col font-inter">
          <div className="rounded-t-[1.5rem] h-[1.875rem] text-center bg-[#222D4B]">
            <span className="block leading-[1.375rem] text-white mt-1">Duration: 9 Months</span>
          </div>
          <div className="bg-[#E3EAF9] w-full h-full gap-4 py-7 px-[20px] lg:px-[3rem] flex-col flex lg:justify-center lg:items-center ">
            {
              skillSets.map(skill => (
                <div className="flex flex-col xl:gap-[4px] py-[.875rem] px-[1rem] rounded-[1rem] bg-white xl:max-w-[475px] w-full " key={skill.id}>
                  <h3 className="text-size-20 text-primary-dark leading-6 font-semibold">{skill.name}</h3>
                  <p className="text-size-14 text-primary-light_dark leading-6">{skill.tools.join(", ")}</p>
                </div>

              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}
