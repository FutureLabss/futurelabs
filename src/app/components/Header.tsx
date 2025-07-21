"use client";
import dynamic from "next/dynamic";
import Button from "@/app/ui/Button";
import Image from "next/image";
import IntroBg from "@/app/assets/icons/intro-bg.png";
import CompanyLogos from "../assets/logo/company-logos.png";
import { useStateAuthProvider } from "../context";
import Navigation from "@/app/components/Navigation";

const HeaderImageSlider = dynamic(() => import("../ui/HeaderImageSlider"), {
  ssr: false,
});
const ImageGallerySwiper = dynamic(() => import("../ui/ImageGallerySwiper"), {
  ssr: false,
});
const HeaderCard = dynamic(() => import("./headcomponents/HeaderCard"), {
  ssr: false,
});
const ContactForm = dynamic(() => import("../ui/ContactForm"), {
  ssr: false,
});

export default function Header() {
  const context = useStateAuthProvider();

  if (!context) {
    return null;
  }

  const { showForm, setShowForm } = context;

  return (
    <header className="flex flex-col gap-14 w-full relative">
      <Navigation />
      <div className="flex flex-col gap-10">
        <div className="text-center flex flex-col gap-4 px-[20px]">
          <h1
            className="text-2xl font-medium leading-[32px] sm:text-3xl md:text-4xl lg:text-[3rem] xl:text-size-61 text-center md:leading-[48px]
           mx-auto lg:leading-[60px] xl:leading-[72px] text-primary-default w-full 
           lg:max-w-[1113px]"
          >
            Start your tech career with FutureLabs Develop skills for the future
          </h1>

          <p
            className="text-size-16 text-center mx-auto leading-[32px] 
          font-normal text-primary-default w-full max-w-[895px]"
          >
            At FutureLabs we help young talents access global opportunities is
            by empowering them with digital skills through our training
            programs, we also help companies hire the best technical talents or
            build their software MVPs
          </p>
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
          <p className="text-lg text-center leading-[24px] py-2 font-normal text-[#7F94CB] ">
            Where Futurist work
          </p>
          <div className="text-center md:py-3 sm:py-0 mx-auto">
            <Image
              src={CompanyLogos}
              alt="company logos"
              priority
              width={700}
              height={300}
              quality={100}
              className="w-full h-full"
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
          priority
          width={640}
          height={427}
          className="w-full h-[50%] md:h-[90%] absolute left-0 bottom-0 right-0 z-[-1]"
        />
      </div>

      <div className="w-full">
        <HeaderCard />
      </div>
      {showForm && (
        <>
          {/* Container for centering the form */}
          <div
            className="fixed inset-0 flex items-center justify-center z-[20]"
            onClick={() => setShowForm(false)}
          >
            <div
              className="relative w-full  max-w-[580px] "
              onClick={(e) => e.stopPropagation()}
            >
              <ContactForm setShowForm={setShowForm} />
            </div>
          </div>

          {/* Background overlay */}
          <div className="w-full h-full fixed bg-[#00000026] transition-all duration-1000 opacity-70 top-0 left-0 right-0 bottom-0 z-[10]"></div>
        </>
      )}
    </header>
  );
}
