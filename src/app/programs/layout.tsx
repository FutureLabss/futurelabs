import ProgramLinks from "./components/ProgramLinks";
import TrainingPrograms from "./components/TrainingPrograms";
import Image from "next/image"
import ProgramImg from "@/app/programs/images/Frame-bg-programs.png"
import Footer from "../components/Footer";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="flex flex-col ">
        <div className="">
          <Image
            src={ProgramImg}
            alt="future talent"
            width={1000}
            height={1024}
            quality={100}
            priority
            className="w-full h-auto"
          />
        </div>
        <div className="px-[80px] py-[90px] flex flex-col gap-[7.4375rem]">
          <div className="">
            <TrainingPrograms />
          </div>
          <div>
            <ProgramLinks />
          </div>
          {children}
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  )
}
