
import { servicesData } from "@/data/data"
import Image from "next/image"
import Link from "next/link"

export default function ServiceCard() {
  return (
    // <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
    <div className="grid-container items-start w-full overflow- ">
      {servicesData.map((service, index) => (
        <Link href={service.id === "service-2" ? "https://futurelabs-lms.vercel.app/" : "#"} className={`grid-item px-4 sm:px-4 pt-10 bg-cover bg-[#FFFFFF0F] rounded-[1.5rem] cursor-pointer border-2 border-transparent hover:border-2 hover:border-secondary-50 `} key={index} >
          <div className="max-w-[329px] w-full flex flex-col gap-2 ">
            <h3 className="font-manrope text-[#D8D9E0] text-[1.4rem] md:text-[2rem] break-words">{service.service}</h3>
            <p className="font-inter text-[#B9BBC6] text-[.875rem] break-words">{service.description}</p>
          </div>
          <div className="w-full mx-auto sm:px-0  flex items-center ">
            <Image
              src={service.src}
              alt={service.service}
              width={531}
              height={398}
              priority
              className="h-auto w-full object-cover"
            />

          </div>
        </Link>
      ))

      }
    </div>
  )
}
