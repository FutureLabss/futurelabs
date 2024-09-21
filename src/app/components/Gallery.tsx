import { imageGallery } from "@/data/data"
import Image from "next/image"
import Logo from "../assets/logo/Futurelabs-logo.png"


export default function Gallery() {
  return (
    // <div className="grid grid-cols-4 gap-2 grid-rows-1 justify-center">
    <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 md:py-10 gap-4 bg-[#1C2640] relative">
      {
        imageGallery.map((item, index) => {
          return (
            <div key={index} className=" mb-8 break-inside-avoid">
              <Image
                src={item.src}
                alt={item.alt}
                width={312}
                height={312}
                quality={100}
                priority
                className="w-full h-auto object-cover"
              />

            </div>
          )
        })
      }


      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white py-[10px] px-[24px] rounded-[2rem] ">
        <Image
          src={Logo}
          alt="futurelabs logo"
          width={113}
          height={22}
          quality={100}
          priority
        // className="w-auto"
        />
      </div>

    </div>
  )
}

// mansory grid

