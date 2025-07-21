import React from "react";
import Image from "next/image";
import labs from "../../assets/alumni/labs.jpg";
import Nav from "@/app/components/headcomponents/Nav";

export default function AboutPage() {
  return (
    <div>
      <div className="text-center  bg-gray-100 md:py-20 xsm:py-10 px-3 ">
        <h1 className="md:text-[3.75rem] xsm:text-[2rem] font-bold text-gray-500 mb-6">
          Celebrating Global Impact
        </h1>
        <p className="text-gray-500 max-w-4xl mx-auto md:text-[1.35rem] text-[1.2em] text-start">
          Meet the extraordinary minds driving the future of technology. Our
          alumni have redefined boundaries, excelling in fields like Artificial
          Intelligence, Software Development, Cybersecurity, and Big Data. Their
          groundbreaking achievements reflect the power of ambition, innovation,
          and the transformative community at FutureLabs. Celebrate their
          success and be inspired by their incredible stories.
        </p>
      </div>
      <div className="py-10 ">
        <h3 className="md:text-[2rem] xsm:text-[1rem] font-bold text-gray-500 mb-6 text-center">
          {" "}
          Stimulating economic growth in the technology community
        </h3>
        <div className="flex px-20 gap-x-5 py-10">
          <div>
            <Nav />
            <p className="text-gray-500 max-w-4xl mx-auto md:text-[1.23rem] text-[1em] text-start pt-2">
              An innovative design agency with the passion to deliver
              exceptional solutions to problems thereby guaranteeing maximum
              customer satisfaction and retainership bridge An innovative design
              agency with the passion to deliver exceptional solutions to
              problems thereby guaranteeing maximum customer satisfaction and
              retainership bridge
            </p>
            <br /> <br />
            <p className="text-gray-500 max-w-4xl mx-auto md:text-[1.23rem] text-[1em] text-start">
              At FutureLabs, we take pride in the remarkable achievements of our
              alumni who are shaping the future of technology. From
              groundbreaking advancements in Web Development to transformative
              solutions in Blockchain, Cloud Computing, and Machine Learning,
              our alumni are at the forefront of innovation. Their success
              reflects the robust foundation and unwavering support they
              received within the FutureLabs community.
            </p>
          </div>
          <div className="w-[80%]">
            <Image
              src={labs}
              width={500}
              height={500}
              alt="futurelabs alumni drivers community"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
