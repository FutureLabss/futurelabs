"use client"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { mobileImages } from "@/data/data";




export default function SlickSwiper() {
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
        {mobileImages.map((image) => (
          <div className="block md:hidden items-center" key={image.id}>
            <Image
              src={image.src}
              width={312}
              height={312}
              priority
              alt="futurelabs logo"
              className="w-full h-auto"
            />
          </div>
        ))}
      </Slider>
    </div>
  )
}
