import React from "react";

import Image from "next/image";
import { TalentPoolTab } from "./core/const";

function ForTalent({ item, id }: { item: TalentPoolTab; id: number }) {
  const styles = [
    {
      id: 1,
      color: "bg-[#77706A]",
      backgroundColor: "bg-[#000000]",
      text: "text-[#FFF6F1]",
    },
    {
      id: 2,
      color: "bg-[#F57F2033]/20",
      backgroundColor: "bg-secondary-default",
      text: "text-secondary-default",
    },
    {
      id: 3,
      color: "bg-[#F2F2F2]",
      backgroundColor: "bg-[#212C4A]",
      text: "text-[#212C4A]",
    },
  ];

  return (
    <div
      className={`${styles[id].color}  shadow-lg rounded-2xl text-center flex flex-col justify-between`}
    >
      <div className="px-4 lg:px-6 xl:px-8 pt-8 text-start space-y-3">
        <h3
          className={`text-lg font-semibold  flex items-center  gap-2 ${styles[id].text} `}
        >
          <span
            className={`flex justify-center items-center rounded-full ${
              styles[id].backgroundColor
            } ${id + 1 === 2 || 3 ? "text-[#FFF6F1]" : ""} w-10 h-10`}
          >
            {id + 1}
          </span>{" "}
          {item.title}
        </h3>
        <p
          className={`text-gray-600 text-[1rem] ${
            id + 1 === 1 ? "text-white" : ""
          }`}
        >
          {item.description}
        </p>
      </div>
      <div className="w-full flex justify-center items-center">
        <Image
          src={item.image}
          alt={item.title}
          width={300}
          height={300}
          priority
          quality={100}
          className={`w-full object-contain rounded-md ${
            id + 1 === 3 ? "object-fill object-[top_right]" : "h-auto"
          }`}
        />
      </div>
    </div>
  );
}

export default ForTalent;
