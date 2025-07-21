"use client";
import Image from "next/image";
import nsikan from "@/app/assets/images/nsikan.jpg";
import dev from "@/app/assets/images/dev.jpg";
import abraham from "@/app/assets/images/abraham.jpg";

import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
import { courses } from "@/data/courses-data";
import { Course } from "@/app/const/courses";

// Add interface for course type

// Update function with type
const handleCourseClick = (course: Course) => {
  localStorage.setItem("selectedCourse", JSON.stringify(course));
};

export default function LmsMain() {
  return (
    <div className="">
      <div className="max-w-[100%] mx-auto">
        {courses.map((course, index) => (
          <section
            key={index}
            className={`flex flex-col md:flex-row justify-center max-w-[100%] mx-auto ${
              course.order === "reverse" ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image Section */}
            <div className="min-w-[50%]">
              <Image
                src={course.image}
                alt={course.title}
                width={600}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Content Section */}
            <div className={`min-w-[50%] px-12 py-10 ${course.bgColor}`}>
              <p className={`text-[1.4rem] ${course.textColor}`}>
                Explore a World of{" "}
                <span className={course.highlightColor}>Skills</span>
              </p>
              <h3
                className={`mt-40 md:mt-60 ${course.textColor} text-[2rem] font-semibold`}
              >
                {course.title.split(" ")[0]} <br />
                <span>{course.title.split(" ")[1]}</span>
              </h3>
              <p className={`mt-3 ${course.textColor} text-[0.8rem]`}>
                {course.description}
              </p>
              <Link
                href={{
                  pathname: "/course-details",
                  query: { course: JSON.stringify(course) },
                }}
                onClick={() => handleCourseClick(course)}
                passHref
              >
                <article
                  className={`mt-3 ${course.highlightColor} flex items-center gap-2`}
                >
                  <span className="text-[1rem] font-semibold">Learn More</span>
                  <FaArrowRightLong />
                </article>
              </Link>
            </div>
          </section>
        ))}
      </div>

      {/* Stat Section */}
      <section className="max-w-[700px] mx-auto mt-10">
        <h3 className="text-center font-bold text-[2rem] mb-2 ">
          <span className="text-[#F57F20]">Stat</span> That Matter!
        </h3>
        <section className="md:flex items-end justify-center gap-5">
          <div className="md:min-w-[229px] px-5 flex flex-col justify-between py-4 min-h-[270px] bg-[#F0F0F0] rounded-lg">
            <p className="text-black text-[1.2rem] font-bold">Students</p>
            <p className="leading-6">
              <span className="text-[3.5rem] font-bold">650+</span> <br />
              <span className="text-black text-[1rem]">Since Inception</span>
            </p>
          </div>

          <div className="md:min-w-[229px] mt-2 md:mt-0 px-5 flex flex-col justify-between py-4 min-h-[240px] bg-[#000000] rounded-lg">
            <p className="text-white text-[1.2rem] font-bold">Students</p>
            <p className="leading-6">
              <span className="text-[3.5rem] font-bold text-white">650+</span>{" "}
              <br />
              <span className="text-white text-[1rem]">Since Inception</span>
            </p>
          </div>

          <div className="md:min-w-[229px] px-5 flex mt-2 md:mt-0 flex-col justify-between py-4 min-h-[210px] bg-[#F57F20] rounded-lg">
            <p className="text-white text-[1.2rem] font-bold">Students</p>
            <p className="leading-6">
              <span className="text-[3.5rem] font-bold text-white">650+</span>{" "}
              <br />
              <span className="text-white text-[1rem]">Since Inception</span>
            </p>
          </div>
        </section>
      </section>

      {/* Why choose us section */}
      <section className="mt-20 max-w-[1200px] mx-auto">
        <div className="">
          <h3 className="text-center font-bold text-[2rem] leading-10">
            <span className="text-black">Why</span> Choose Us
            <span className="text-[#F57F20]">Us</span>
          </h3>
          <p className="text-[1.2rem] text-black text-center">
            Dedicated to Shaping Tomorrow&apos;s Innovators, Today.
          </p>
        </div>
        <div className="mt-10 flex flex-col md:flex-row gap-4">
          <article className="w-full lg:min-w-[600px] px-4 md:px-0">
            <Image src={nsikan} alt="event" style={{ objectFit: "cover" }} />
          </article>
          <article className="w-full lg:min-w-[600px] px-4 md:px-0">
            <div className="min-h-[300px] rounded-lg p-5 bg-[#F57F2033]">
              <h4 className="text-black text-[1.3rem] font-bold">
                Future Labs Academy: Where Learning Meets Industry Excellence.
              </h4>
              <p className="text[0.8rem] mt-5">
                We go beyond traditional education by connecting you directly
                with the tech ecosystem. Our students gain exclusive access to
                premier events like DevFest, alongside seminars, workshops, and
                networking meetings with top minds in the industry.
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-2 mt-2">
              <div className="min-h-[300px] w-full border border-red md:w-[50%]">
                <Image
                  src={dev}
                  alt="dev at event"
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                />
              </div>
              <div className="min-h-[300px] w-full md:w-[50%] rounded-xl p-5 bg-[#212C4A33]">
                <h5 className="text-[1.1rem] font-bold text-[black]">
                  Learn, Connect, and Innovate.
                </h5>
                <p className="text-black text-[0.9rem] mt-5">
                  From thought leadership to hands-on experiences, we ensure
                  you&apos;re not only learning but building relationships and
                  skills that will set you apart in the tech world.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Carousel section */}
      <section className="mt-20 mb-20">
        <h3 className="text-center font-bold text-[2rem] leading-10 mb-10">
          <span className="text-black">Testimonies from our </span>
          <span className="text-[#F57F20]">Alumni</span>
        </h3>
        <div className="max-w-[900px] mx-auto flex flex-col md:flex-row">
          <div className="w-full md:w-[50%]">
            <Image src={abraham} style={{ objectFit: "cover" }} alt="abraham" />
          </div>
          <div className="w-full md:w-[50%] bg-black p-5 flex flex-col justify-center">
            <h4 className="text-white text-[1.5rem] leading-6">
              Abraham udoinyang
            </h4>
            <p className="text-[#F57F20] text-[1rem]">Designer</p>
            <p className="text-[0.8rem] text-white mt-4">
              &quot;Future Labs Academy transformed my career! I went from
              having no tech background to designing user-centered products with
              confidence. The hands-on approach and expert guidance made all the
              difference&quot;
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
