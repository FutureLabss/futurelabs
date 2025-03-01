// import Image from "next/image";

import { TalentPoolTab } from "./core/const";

function ForRecruiters({ item, id }: { item: TalentPoolTab; id: number }) {
  return (
    <div
      className={`flex flex-col rounded-2xl p-2 sm:p-5 relative bg-cover bg-center bg-no-repeat ${
        id + 1 === 3 ? "col-span-full" : ""
      }`}
      style={{ backgroundImage: `url(${item.image})` }}
    >
      <div className="mt-auto py-6  md:max-w-md w-full px-2 sm:px-6  bg-[#000000] bg-opacity-50  rounded-lg backdrop-filter backdrop-blur-md space-y-4">
        <h3 className="text-[#ffffff] flex items-center gap-2 text-[1rem] font-semibold">
          <span
            className={`flex justify-center items-center rounded-full w-8 h-8 bg-[#ffffff] text-black text-xl`}
          >
            {id + 1}
          </span>
          {item.title}
        </h3>
        <p className="text-[#FFF6F1]">{item.description}</p>
      </div>
    </div>
  );
}

export default ForRecruiters;
