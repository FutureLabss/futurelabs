"use client"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { imageGallery } from "@/data/data";
import Image from "next/image";

export default function SlickSwiper() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <div className="slider-container ">
      <Slider {...settings}>
        {imageGallery.map((blog, index) => (
          <div className="flex items-center" key={index}>
            <Image
              src={blog.src}
              alt="futurelabs logo"
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  )
}
