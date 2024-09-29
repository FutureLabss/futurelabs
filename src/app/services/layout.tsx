/* eslint-disable react-hooks/rules-of-hooks */
import Links from "./components/links";
import Image from "next/image"
import Talent from "@/app/assets/images/talent-image.png"
import Nav from "../components/headcomponents/Nav";
import FrameBright from "@/app/assets/images/Frame-bright.png"
import Footer from "../components/Footer";

export default function layout({ children }: { children: React.ReactNode }) {

  return (
    <div className="flex flex-col gap-6 xl:gap-[3rem]">
      <div className="pl-[15px]  lg:pl-[2rem] xl:pl-[5rem] mt-[2rem] ">
        <Nav />
      </div>
      <div className="flex flex-col-reverse  lg:flex-row w-full justify-between">
        <div className="flex flex-col grow gap-[50px] w-full px-[15px] lg:px-[1.5rem] xl:px-[5rem] pb-[80px]">
          <div className="flex gap-8 flex-col">
            <div className="my-[30px] lg:my-0">
              <Links />
            </div>
            {children}
          </div>
        </div>
        <div className=" lg:max-w-[543px] w-full h-fit border-5 border-orange-700">
          <Image
            src={Talent}
            alt="future talent"
            width={543}
            height={1024}
            quality={100}
            priority
            className="hidden lg:block h-auto "
          />
          <Image
            src={FrameBright}
            alt="frame bright"
            width={1000}
            height={543}
            quality={100}
            priority
            className="block lg:hidden w-full h-auto"
          />
        </div>
      </div>
      <div>
        <Footer />
      </div>

    </div>
  )
}
