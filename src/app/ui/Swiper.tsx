"use client";
import Image from "next/image";
// import React, { useRef, useState } from 'react';

import { blogData } from "@/data/data";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Mousewheel, Pagination } from "swiper/modules";

export default function SwiperComponent() {
  return (
    <>
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
      >
        {blogData.map((blog, index) => (
          <SwiperSlide key={index}>
            <div className="flex md:flex-row flex-col md:gap-[3rem] items-center">
              <div className="w-full">
                <Image
                  src={blog.src}
                  alt="futurelabs logo"
                  width={558}
                  height={518}
                  quality={100}
                  priority
                  className="w-[230px] mx-auto mb-5 md:mb-0 md:w-full md:max-w-[558px]  md:max-h-[518px] h-full "
                />
              </div>
              <div className="flex flex-col  text-center md:gap-12 w-full justify-start  md:p-8 md:text-start font-manrope xl:mr-[110px] ">
                <p className="text-[14px] px-5 sm:px-6 md:px-0 lg:px-0 sm:text-[16px] lg:text-[24px] leading-normal text-justify">
                  {blog.content}
                </p>
                <div className="flex flex-col mt-4 md:mt-0 md:gap-2 w-full">
                  <h2 className="font-bold text-[18px] md:text-[1.5rem]">
                    {blog.name}
                  </h2>
                  <p className="text-[18px] md:text-[1.5rem] font-normal">
                    {blog.title}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
