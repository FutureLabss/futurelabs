"use client";
import Nav from "../headcomponents/Nav";
import Link from "next/link";
import Image from "next/image";
import { FaAngleRight } from "react-icons/fa6";
import Footer from "../Footer";
import TalentTabComponent from "./TalentTabComponent";
import SponsorsList from "@/app/ui/SponsorLists";
import { useState } from "react";
import Modal from "@/app/ui/Modal";
// md:bg-[url(/talent-pool.png)] bg-contain bg-no-repeat bg-right h-[80dvh]

export default function TalentPool() {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <header className="pb-5 lg:pb-0 pt-10 bg-background px-4 lg:px-12 xl:px-20 font-poppins">
        <div className="flex justify-between items-center">
          <Nav />

          <Link
            href=""
            onClick={handleShowModal}
            className="text-primary text-sm sm:text-lg px-2 py-1 bg-secondary-default/20  rounded text-secondary-default  font-semibold"
          >
            Get Started
          </Link>
        </div>
        <div className="flex flex-col-reverse lg:flex-row pt-20 md:pt-40 ">
          <div className="flex w-full flex-col rounded-lg gap-3 md:gap-5 lg:bg-[url(/talent-pool.png)] bg-[800px_auto] xl:bg-[auto_600px] bg-no-repeat bg-[top_right] lg:min-h-[600px] pt-8 md:pt-8 lg:py-0 ">
            <div className="flex flex-col items-center md:items-start">
              <Link
                href=""
                className="flex items-center w-fit text-sm gap-2 rounded-3xl text-secondary-default py-1 pl-2 pr-4 bg-[#FDDEC7]"
              >
                <button className="bg-secondary-default text-white py-1 px-2 rounded-3xl text-xs">
                  New
                </button>
                <p className="grow text-xs md:text-[1rem]">
                  Click here for more information
                </p>
                <FaAngleRight />
              </Link>
              <h2 className="text-[28px] sm:text-[2.3rem] md:text-[3rem] xl:text-[4.375rem] font-bold text-primary py-2 md:py-4 leading-tight">
                Match. Connect.{" "}
                <span className="md:block text-secondary-default">Hire.</span>
              </h2>
            </div>
            <div className="mx-auto  md:mx-0 space-y-4">
              <p className="text-sm sm:text-lg lg:text-[1.25rem] xl:text-[1.5rem] lg:max-w-sm xl:max-w-lg text-center md:text-start">
                Connecting skilled professionals from our training to global
                roles.
              </p>
              <Link
                // target="_blank"
                // href="/services/hiretalent/talent"
                href=""
                className="block mx-auto md:mx-0 text-primary bg-secondary-default/20 px-3 py-1  rounded text-secondary-default  font-semibold w-fit"
              >
                Hire Talent
              </Link>
            </div>
          </div>
          <div className="w-full  flex lg:hidden">
            <Image
              src="/talentpool/herotalent-img.png"
              width={1000}
              height={500}
              priority
              alt="talent pool"
              className="w-full h-auto mx-auto object-[center_center] "
            />
          </div>
        </div>
      </header>

      <section className="px-4 lg:px-12 xl:px-20 md:py-12">
        <div className="flex flex-col pt-6">
          <h2 className="text-center md:text-start text-[28px] sm:text-[2.5rem] md:text-[3rem] xl:text-[4.375rem] font-bold text-primary md:py-4 md:leading-snug space-x-4 md:flex flex-col">
            Why Choose
            <span className="text-secondary-default md:hidden ml-2">Us?</span>
            <span className=" items-center md:gap-4 xl:gap-12 text-secondary-default hidden md:flex">
              Us?
              <span className="text-sm sm:text-lg lg:text-[1.25rem] xl:text-[1.5rem] max-w-sm leading-9 bock font-normal text-neutral-800  self-end">
                We connect talent with the right opportunities for career
                success.
              </span>
            </span>
          </h2>
          <p className="text-lg text-center md:hidden py-2">
            We connect talent with the right opportunities for career success.
          </p>
        </div>
        <div className="">
          <TalentTabComponent />
        </div>

        <div className="py-12 flex items-center flex-col gap-4 md:gap-8">
          <h3 className="text-2xl sm:text-[2rem]  lg:text-[2.5rem] xl:text-[3.125rem] font-semibold">
            Our talents were{" "}
            <span className="text-secondary-default">hired</span> by
          </h3>
          <div>
            <SponsorsList />
          </div>
        </div>
      </section>

      <section className="px-4 py-4 md:px-12 xl:px-20 md:py-12">
        {/* sm:bg-[url(/talentpool/globaltalent.png)] bg-contain bg-no-repeat bg-[top_right] */}
        <div className="flex text-center lg:text-start lg:justify-between w-full items-center">
          <div className="flex flex-col mx-auto lg:mx-0 w-full md:max-w-2xl gap-4 md:gap-12 ">
            <h2 className=" text-[28px] sm:text-[2.5rem] md:text-[3rem] xl:text-[4.375rem] leading-snug font-bold ">
              <span className="text-secondary-default ">
                Global Talent, Local Expertise —{" "}
              </span>
              Connecting You Worldwide
            </h2>

            <Link
              href=""
              className="mx-auto lg:mx-0 text-sm sm:text-lg px-2 py-2 bg-secondary-default/20  rounded text-secondary-default  font-semibold w-fit"
            >
              Explore Our Global Network
            </Link>
          </div>

          <div className="w-full hidden lg:flex flex-grow">
            <Image
              src="/talentpool/globaltalent.png"
              width={1400}
              height={500}
              priority
              alt="talent pool"
              className="w-full h-auto object-top bg-cover"
            />
          </div>
        </div>
      </section>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <Modal handleShowModal={handleShowModal} />
        </div>
      )}

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
