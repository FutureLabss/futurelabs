import { alumni } from "./components/core/const/alumni";
import Image from "next/image";
import linkedin from "../assets/alumni/linkedlogo.png";
import Link from "next/link";

export default function AlumniForum() {
  return (
    <div className=" min-h-screen ">
      <div className="  ">
        {/* &apos;s */}
        <div className="md:py-20 xsm:py-10 px-3 text-center flex flex-col gap-4 ">
          <h1
            className="text-4xl lg:text-[3rem] xl:text-size-61 text-center leading-[48px]
           mx-auto lg:leading-[60px] xl:leading-[72px] font-normal text-primary-default w-full 
           lg:max-w-[1113px]"
          >
            Celebrating Alumni Excellence
          </h1>
          <p
            className="text-size-16 text-center mx-auto leading-[32px] 
          font-normal text-primary-default w-full max-w-[895px]"
          >
            Welcome to Future Labs Alumni, a global network of tech pioneers and
            change makers with roots in the heart of Ikot Ekpene. Our alumni are
            shaping industries, solving real-world challenges, and driving
            innovation on local and international stages.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-6 gap-x-6 gap-y-10 md:px-[5rem]">
          {alumni.map((person) => (
            <div
              key={person.name}
              className="relative bg-white rounded-2xl p-6 flex flex-col items-center space-y-7  w-full"
            >
              <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden ">
                <Image
                  src={person.image}
                  alt={person.name}
                  fill
                  className="object-cover filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="text-center space-y-3">
                <h3 className="font-semibold text-xl">{person.name}</h3>
                <p className="text-[1rem] text-gray-400">{person.role}</p>
              </div>
              <Link
                aria-label="linkedin url"
                href={person.linkedin}
                target="_blank"
                className="inline-flex items-center justify-center w-10 h-10"
              >
                <Image
                  src={linkedin}
                  alt={person.name}
                  fill
                  aria-label="alumni"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
