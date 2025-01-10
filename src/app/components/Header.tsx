"use client"
import Button from "@/app/ui/Button";
import Nav from "./headcomponents/Nav";
import Image from "next/image"
import IntroBg from "@/app/assets/icons/intro-bg.png"
import CompanyLogos from "../assets/logo/company-logos.png"
import HeaderCard from "./headcomponents/HeaderCard";
import ContactForm from "../ui/ContactForm";
import { useStateAuthProvider } from "../context";
import Link from "next/link";
import HeaderImageSlider from "../ui/HeaderImageSlider";
import ImageGallerySwiper from "../ui/ImageGallerySwiper";
// import CompanyLogos


export default function Header() {
  const context = useStateAuthProvider()

  if (!context) {
    return null
  }

  const { showForm, setShowForm } = context

  return (
    <header className="flex flex-col gap-14 w-full relative">
      <div className="px-[20px] xl:px-[5rem] pt-[1.25rem] flex justify-between items-center">
        <Nav />
        <div className="flex flex-row gap-5  ">
        <Link href={"/alumni"} className=" text-secondary-default font-medium text-[14px] sm:text-[20px] font-manrope
         border border-secondary-default px-5 py-1 rounded">
        <button>Alumni</button>
        </Link>
        <div className=" text-white font-medium text-[14px] sm:text-[20px] font-manrope
         bg-secondary-default px-3 py-1 rounded">
          <Link href="https://studio.futurelabs.ng" target="_blank">Studios</Link>
        </div>
        </div>
      </div>


      <div className="flex flex-col gap-10">
        <div className="text-center flex flex-col gap-4 px-[20px]">
          <h1 className="text-4xl lg:text-[3rem] xl:text-size-61 text-center leading-[48px] mx-auto lg:leading-[60px] xl:leading-[72px] font-normal text-primary-default w-full lg:max-w-[1113px]">
            Start your tech career with FutureLabs
            Develop skills for the future
          </h1>

          <p className="text-size-16 text-center mx-auto leading-[32px] font-normal text-primary-default w-full max-w-[895px]">At FutureLabs we help young talents access global opportunities is by empowering them with digital skills through our training programs, we also help companies hire the best technical talents or build their software MVPs</p>
        </div>
        <div className="text-center w-full max-w-[181px] mx-auto">
          <Button setShowForm={setShowForm} showForm={showForm} />
        </div>
      </div>

      <div className="text-center justify-center lg:mx-[5rem] flex flex-col gap-4 relative z-[5] px-[2.5rem] pb-[30px]">
        {/* Slider container */}
        <div className="hidden sm:block">
          <HeaderImageSlider />
        </div>
        <div className="block sm:hidden">
          <ImageGallerySwiper />
        </div>

        <div className="flex justify-center flex-col gap-2 ">
          <p className="text-size-16 text-center leading-[24px] font-normal text-[#7F94CB] ">
            Where Futurist work
          </p>
          <div className="text-center py-5 sm:py-0 mx-auto">
            <Image
              src={CompanyLogos}
              alt="company logos"
              width={700}
              height={300}
              quality={100}
              className="w-auto"
            />
            {/* <Image
              src={RapidRiver}
              alt="company logos"
              width={50}
              height={50}
              quality={100}
              className="bg-white rounded-lg"
            /> */}
          </div>
        </div>

        <Image
          src={IntroBg}
          alt="hero image"
          width={300}
          height={300}
          className="w-full h-[190px] sm:h-[150px] md:h-[200px] lg:h-[290px] absolute left-0 bottom-0 right-0 z-[-1]"
        />
      </div>

      <div className="w-full">
        <HeaderCard />
      </div>
      {
        showForm && (
          <>
            {/* Container for centering the form */}
            <div className="fixed inset-0 flex items-center justify-center z-[20]" onClick={() => setShowForm(false)}>
              <div className="relative w-full  max-w-[580px] " onClick={(e) => e.stopPropagation()}>
                <ContactForm setShowForm={setShowForm} />
              </div>
            </div>

            {/* Background overlay */}
            <div
              className="w-full h-full fixed bg-[#00000026] transition-all duration-1000 opacity-70 top-0 left-0 right-0 bottom-0 z-[10]"

            ></div>
          </>
        )
      }

    </header>
  )
}
