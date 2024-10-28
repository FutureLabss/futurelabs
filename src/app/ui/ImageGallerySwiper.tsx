import React from 'react'
import { pictureData } from "@/data/data";
import Image from "next/image";
import Slider from "react-slick";




export default function ImageGallerySwiper() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <div className="slider-container px-4 sm:px-0 pt-4 sm:pt-0">
      <Slider {...settings}>
        {pictureData.map((blog, index) => (
          <div className="flex items-center" key={index}>
            <Image
              src={blog.src}
              width={312}
              height={312}
              alt="futurelabs logo"
              className="w-full h-auto "
            />
          </div>
        ))}
      </Slider>
    </div>
  )
}
