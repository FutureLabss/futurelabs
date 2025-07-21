import Image from "next/image";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { SiMedium } from "react-icons/si";
import FutureLogo from "../assets/logo/Futurelabs-logo.png";
import FutureLabs from "../assets/logo/FutureLabs.png";

export default function Footer() {
  return (
    <div className="bg-[#EFF0F3] font-inter">
      <div className="flex  gap-6 flex-col lg:flex-row justify-between px-[20px] py-[20px] md:px-[40px] md:py-[40px]  xl:px-[80px] xl:py-[80px] ">
        <div className="flex gap-4 flex-col lg:max-w-[27.5rem] w-full ">
          <div>
            <Image src={FutureLogo} alt="FutureLabs Logo" width={100} height={100} />
          </div>
          <p className="leading-[1.5rem] font-inter font-normal text-primary-light_dark">
            An innovative design agency with the passion to deliver exceptional
            solutions to problems thereby guaranteeing maximum customer
            satisfaction and retainership bridge An innovative design agency
            with the passion to deliver exceptional solutions to problems
            thereby guaranteeing maximum customer satisfaction and retainership
            bridge
          </p>

          <div className="flex gap-4 content-end">
            <FaFacebook size={20} />
            <FaInstagram size={20} />
            <SiMedium size={20} />
            <FaYoutube size={20} />
          </div>
        </div>

        <div className="flex flex-wrap gap-6  sm:flex-nowrap sm:justify-between lg:justify-end md:gap-4 xl:gap-12">
          <ul className="ul-style">
            <li>SERVICES</li>
            <li>Software Engineering</li>
            <li>Digital Marketing</li>
            <li>Blockchain</li>
            <li>Product Research</li>
            <li>Product Design</li>
          </ul>
          <ul className="ul-style">
            <li>QUICKLINKS</li>
            <li>FAQs</li>
            <li>Suppoort</li>
            <li>Blog</li>
          </ul>
          <ul className="ul-style">
            <li>COMPANY</li>
            <li>About</li>
            <li>Our Mission</li>
            <li>Privacy</li>
            <li>Legal</li>
            <li>Partners</li>
          </ul>
          <ul className="ul-style">
            <li>CONTACT</li>
            <li>
              No. 3 Chubb Road{" "}
              <span className="block mt-[2px]">Ikot Ekpene, Akwa Ibom</span>
            </li>
            <li>+234 708 034 3781</li>
            {/* <li>(654) 123-4567</li> */}
            <li>Info@futurelabs.com.ng</li>
          </ul>
        </div>
      </div>

      <div className="text-center flex flex-col gap-4 justify-center ">
        {/* <p className="future-text px-[46px] text-[150px] lg:text-[190px] xl:text-[274px] font-manrope font-semibold">FutureLabs</p> */}
        <div className="w-full px-[20px] lg:px-[46px]">
          <Image
            src={FutureLabs}
            alt="futurelabs"
            width={1300}
            height={100}
            priority
            className="max-w-[1400px] h-auto w-full"
          />
        </div>
        <p className="py-[.75rem] bg-[#FCFCFD] text-[#B9BBC6]">
          Copyright Futurelabs 2024
        </p>
      </div>
    </div>
  );
}
