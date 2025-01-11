import { alumni } from "./components/core/const/alumni";
import Image from "next/image";
import linkedin from "../assets/alumni/linkedlogo.png"
import Link from "next/link";

export default function AlumniForum() {
  return (
    <div className=" min-h-screen ">
      <div className="  ">
      {/* &apos;s */}
        <div className="text-center  bg-gray-100 md:py-20 xsm:py-10 px-3 ">
          <h1 className="md:text-[3.75rem] xsm:text-[1.75rem] font-bold text-gray-500 mb-6">Celebrating Alumni Excellence</h1>
          <p className="text-gray-500 max-w-4xl mx-auto md:text-[1.35rem] text-[1em] leading-7 md:leading-10 text-start">
          Welcome to Future Labs Alumni, a global network of tech pioneers and change makers with 
          roots in the heart of Ikot Ekpene. Our alumni are shaping industries, solving real-world
           challenges, and driving innovation on local and international stages. Together, 
           we are building a community that connects talent, inspires creativity, and impacts lives 
           through technology. Join us as we celebrate achievements,
           foster collaboration, and create a future where possibilities are limitless.
          </p>

        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-28 mt-28 mb-10 md:mb-[4rem] md:mt-[9rem] md:px-[5rem]  px-3 ">
          {alumni.map((person) => (
            <div key={person.name} className="bg-white rounded-lg p-6 text-center
             shadow-md border-black border-t-[6px]">
              <div className="relative w-36 h-44 mx-auto mb-6 border-4
               border-gray-400 rounded-[25%] shadow-lg -mt-28">
                <Image
                  src={person.image}
                  alt={person.name}
                  fill
                  className="rounded-[23%]  object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-6">{person.name}</h3>
              <Link
                href={person.linkedin}
                target="_blank"
                className="inline-flex items-center justify-center w-10 h-10"
              >
                <Image src={linkedin} alt="" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 