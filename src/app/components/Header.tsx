import Button from "@/app/ui/Button";
import Nav from "./headcomponents/Nav";
import Image from "next/image"
import { pictureData } from "../../data/data";
import IntroBg from "../assets/icons/intro-bg.png"
import CompanyLogos from "../assets/logo/Logo-frame.png"
import HeaderCard from "./headcomponents/HeaderCard";



export default function Header() {
  return (
    <header className="flex flex-col gap-14 w-full ">
      <div className="lg:px-[5rem] pt-[1.25rem]">
        <Nav />

      </div>


      <div className="flex flex-col gap-10 ">
        <div className="text-center flex flex-col gap-4">
          <h1 className="text-size-61 text-center mx-auto leading-[72px] font-normal text-primary-default w-full max-w-[1113px]">
            Start your tech career with FutureLabs
            Develop skills for the future
          </h1>

          <p className="text-size-16 text-center mx-auto leading-[32px] font-normal text-primary-default w-full max-w-[895px]">At FutureLabs we help young talents access global opportunities is by empowering them with digital skills through our training programs, we also help companies hire the best technical talents or build their software MVPs</p>
        </div>
        <div className="text-center w-full max-w-[181px] mx-auto">
          <Button />
        </div>
      </div>

      <div className="text-center justify-center lg:mx-[5rem] bg-hero-image flex flex-col gap-4 relative z-[5] px-[2.5rem] pb-[30px]">
        <div className="flex gap-4 justify-center items-center" >
          {pictureData.map(image => (
            <Image
              key={image.id}
              src={image.src}
              alt={image.alt}
              width={288}
              height={321}
              className="max-w-[100%] max-h-[100%]"
            />
          ))}
        </div>
        <div className="flex justify-center flex-col gap-2 ">
          <p className="text-size-16 text-center leading-[24px] font-normal text-[#7F94CB] ">Where Futurist work</p>
          <div className="text-center mx-auto">
            <Image
              src={CompanyLogos}
              alt="company logos"
              width={700}
              height={300}
              quality={100}
              className="text-center"

            />
          </div>

        </div>
        <Image
          src={IntroBg}
          alt="hero image"
          width={300}
          height={300}
          className="w-full h-[300px] absolute left-0 bottom-0 right-0 z-[-1]"
        />
      </div>
      <div className="w-full">
        <HeaderCard />
      </div>
    </header>
  )
}
