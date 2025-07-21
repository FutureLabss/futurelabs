import React from "react";
import Image from "next/image";
import { pictureData } from "../../data/data";

export default function HeaderImageSlider() {
  return (
    <div className="slider-container w-[200%]">
      <div className="slider flex gap-4 justify-center items-center w-[250%]">
        {pictureData.concat(pictureData).map((image, index) => (
          <div key={index}>
            <Image
              src={image.src}
              alt={image.alt}
              width={288}
              height={321}
              className=" object-cover"
              loading="lazy"
              quality={80}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
