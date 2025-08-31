import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { SiMedium } from "react-icons/si";
import FutureLogo from "../assets/logo/Futurelabs-logo.png";
import FutureLabs from "../assets/logo/FutureLabs.png";

export default function Footer() {
  const date = new Date().getFullYear()
  return (
    <div className="bg-[#EFF0F3] font-inter">
      <div className="flex gap-6 flex-col lg:flex-row justify-between px-[20px] py-[20px] md:px-[40px] md:py-[40px] xl:px-[80px] xl:py-[80px]">
        {/* Left Section */}
        <div className="flex gap-4 flex-col lg:max-w-[27.5rem] w-full">
          <div>
            <Image
              src={FutureLogo}
              alt="FutureLabs Logo"
              width={100}
              height={100}
            />
          </div>
          <p className="leading-[1.5rem] font-inter font-normal text-primary-light_dark">
            An innovative design agency with the passion to deliver exceptional
            solutions to problems thereby guaranteeing maximum customer
            satisfaction and retainership bridge An innovative design agency
            with the passion to deliver exceptional solutions to problems
            thereby guaranteeing maximum customer satisfaction and retainership
            bridge
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 content-end">
            <Link href="#" target="_blank">
              <FaFacebook size={20} />
            </Link>
            <Link href="#" target="_blank">
              <FaInstagram size={20} />
            </Link>
            <Link href="#" target="_blank">
              <SiMedium size={20} />
            </Link>
            <Link href="#" target="_blank">
              <FaYoutube size={20} />
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-wrap gap-6 sm:flex-nowrap sm:justify-between lg:justify-end md:gap-4 xl:gap-12">
          {/* Services */}
          <ul className="ul-style">
            <li className="font-semibold">SERVICES</li>
            <li>
              <Link href="#">
                Software Engineering
              </Link>
            </li>
            <li>
              <Link href="#">Digital Marketing</Link>
            </li>
            <li>
              <Link href="#">Blockchain</Link>
            </li>
            <li>
              <Link href="#">Product Research</Link>
            </li>
            <li>
              <Link href="#">Product Design</Link>
            </li>
          </ul>

          {/* Quicklinks */}
          <ul className="ul-style">
            <li className="font-semibold">QUICKLINKS</li>
            <li>
              <Link href="#">FAQs</Link>
            </li>
            <li>
              <Link href="#">Support</Link>
            </li>
            <li>
              <Link href="#">Blog</Link>
            </li>
          </ul>

          {/* Company */}
          <ul className="ul-style">
            <li className="font-semibold">COMPANY</li>
            <li>
              <Link href="#">About</Link>
            </li>
            <li>
              <Link href="#">Our Mission</Link>
            </li>
            <li>
              <Link href="/privacy-policy">Privacy</Link>
            </li>
            <li>
              <Link href="#">Legal</Link>
            </li>
            <li>
              <Link href="#">Partners</Link>
            </li>
          </ul>

          {/* Contact */}
          <ul className="ul-style">
            <li className="font-semibold">CONTACT</li>
            <li>
              No. 3 Chubb Road
              <span className="block mt-[2px]">Ikot Ekpene, Akwa Ibom</span>
            </li>
            <li>
              <a href="tel:+2347080343781">+234 708 034 3781</a>
            </li>
            <li>
              <a href="mailto:info@futurelabs.com.ng">Info@futurelabs.com.ng</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center flex flex-col gap-4 justify-center">
        <div className="w-full px-[20px] lg:px-[46px]">
          <Image
            src={FutureLabs}
            alt="FutureLabs"
            width={1300}
            height={100}
            priority
            className="max-w-[1400px] h-auto w-full"
          />
        </div>
        <p className="py-[.75rem] bg-[#FCFCFD] text-[#B9BBC6]">
          Copyright Futurelabs {date}
        </p>
      </div>
    </div>
  );
}
