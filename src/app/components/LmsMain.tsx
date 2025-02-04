import Image from "next/image";
import nsikan from "@/app/assets/images/nsikan.jpg";
import dev from "@/app/assets/images/dev.jpg";
import abraham from "@/app/assets/images/abraham.jpg";
import frame1 from "@/app/assets/images/Frame1.jpg";
import frame2 from "@/app/assets/images/Frame2.jpg";
import frame3 from "@/app/assets/images/Frame3.jpg";
import frame4 from "@/app/assets/images/Frame4.jpg";
import frame5 from "@/app/assets/images/Frame5.jpg";
import frame6 from "@/app/assets/images/Frame6.jpg";
import { FaArrowRightLong } from "react-icons/fa6";

export default function LmsMain() {
  return (
    <div>
      <section className="md:flex max-w-[100%] justify-center mx-auto border border-red">
        <div className="min-w-[50%] px-12 py-10 bg-[#212C4A]">
          <p className="text-[1.4rem] text-white">
            Explore a World of <span className="text-[#F57F20]">Skills</span>
          </p>
          <h3 className="mt-40 text-white text-[2rem] leading-8 font-semibold">
            Web <br />
            <span>Development</span>
          </h3>
          <p className="mt-3 text-white text-[0.8rem]">
            Dive into the exciting world of web development and learn to build
            stunning, responsive, and functional websites from scratch. This
            course takes you through the fundamentals of HTML, CSS, and
            JavaScript to advanced frameworks and backend development
          </p>
          <article className="mt-3 text-[#F57F20] flex items-center gap-2">
            <span className="text-[1.1rem] font-semibold">Learn More</span>
            <span className="text-[#F57F20] flex items-center">
              <FaArrowRightLong />
            </span>
          </article>
        </div>
        <div className="min-w-[50%]">
          <Image
            src={frame1}
            alt="man reading"
            style={{ objectFit: "cover", height: "100%", width: "100%" }}
          />
        </div>
      </section>

      <section className="flex flex-col md:flex-row justify-center max-w-[100%] mx-auto">
        <div className="min-w-[50%] order-2 md:order-1">
          <Image
            src={frame2}
            alt="man reading"
            style={{ objectFit: "cover", height: "100%", width: "100%" }}
          />
        </div>
        <div className="min-w-[50%] px-12 py-10 bg-[#F57F20]">
          <p className="text-[1.4rem] text-white">
            Explore a World of <span className="">Skills</span>
          </p>
          <h3 className="mt-40 text-white text-[2rem] leading-8 font-semibold">
            Product <br />
            <span>Design</span>
          </h3>
          <p className="mt-3 text-white text-[0.8rem]">
            Dive into the exciting world of web development and learn to build
            stunning, responsive, and functional websites from scratch. This
            course takes you through the fundamentals of HTML, CSS, and
            JavaScript to advanced frameworks and backend development
          </p>
          <article className="mt-3 text-white flex items-center gap-2">
            <span className="text-[1.1rem] font-semibold">Learn More</span>
            <span className="text-white flex items-center">
              <FaArrowRightLong />
            </span>
          </article>
        </div>
      </section>

      <section className="md:flex max-w-[100%] justify-center mx-auto">
        <div className="min-w-[50%] px-12 py-10 bg-white border border-gray-250">
          <p className="text-[1.4rem] text-[#F57F20]">
            Explore a World of <span className="">Skills</span>
          </p>
          <h3 className="mt-40 text-black text-[2rem] leading-8 font-semibold">
            Data <br />
            <span>Analytics</span>
          </h3>
          <p className="mt-3 text-black text-[0.8rem]">
            Dive into the exciting world of web development and learn to build
            stunning, responsive, and functional websites from scratch. This
            course takes you through the fundamentals of HTML, CSS, and
            JavaScript to advanced frameworks and backend development
          </p>
          <article className="mt-3 text-[#F57F20] flex items-center gap-2">
            <span className="text-[1rem] font-semibold">Learn More</span>
            <span className="text-[#F57F20] flex items-center">
              <FaArrowRightLong />
            </span>
          </article>
        </div>
        <div className="min-w-[50%]">
          <Image
            src={frame3}
            alt="man reading"
            style={{ objectFit: "cover", height: "100%", width: "100%" }}
          />
        </div>
      </section>

      <section className="flex flex-col md:flex-row justify-center max-w-[100%] mx-auto">
        <div className="min-w-[50%] order-2 md:order-1">
          <Image
            src={frame4}
            alt="man reading"
            style={{ objectFit: "cover", height: "100%", width: "100%" }}
          />
        </div>
        <div className="min-w-[50%] px-12 py-10 bg-[#212C4A]">
          <p className="text-[1.4rem] text-white">
            Explore a World of <span className="text-[#F57F20]">Skills</span>
          </p>
          <h3 className="mt-40 text-white text-[2rem] leading-8 font-semibold">
            Web <br />
            <span>Design</span>
          </h3>
          <p className="mt-3 text-white text-[0.8rem]">
            Dive into the exciting world of web development and learn to build
            stunning, responsive, and functional websites from scratch. This
            course takes you through the fundamentals of HTML, CSS, and
            JavaScript to advanced frameworks and backend development
          </p>
          <article className="mt-3 text-[#F57F20] flex items-center gap-2">
            <span className="text-[1rem] font-semibold">Learn More</span>
            <span className="text-[#F57F20] flex items-center">
              <FaArrowRightLong />
            </span>
          </article>
        </div>
      </section>

      <section className="md:flex max-w-[100%] justify-center mx-auto">
        <div className="min-w-[50%] px-12 py-10 bg-[#F57F20]">
          <p className="text-[1.4rem] text-white">
            Explore a World of <span className="">Skills</span>
          </p>
          <h3 className="mt-40 text-white text-[2rem] leading-8 font-bold">
            Graphic <br />
            <span>Design</span>
          </h3>
          <p className="mt-3 text-white text-[0.8rem]">
            Dive into the exciting world of web development and learn to build
            stunning, responsive, and functional websites from scratch. This
            course takes you through the fundamentals of HTML, CSS, and
            JavaScript to advanced frameworks and backend development
          </p>
          <article className="mt-3 text-white flex items-center gap-2">
            <span className="text-[1rem] font-semibold">Learn More</span>
            <span className="text-white flex items-center">
              <FaArrowRightLong />
            </span>
          </article>
        </div>
        <div className="min-w-[50%]">
          <Image
            src={frame5}
            alt="man reading"
            style={{ objectFit: "cover", height: "100%", width: "100%" }}
          />
        </div>
      </section>

      <section className="flex flex-col md:flex-row justify-center max-w-[100%] mx-auto">
        <div className="min-w-[50%] order-2 order-1">
          <Image
            src={frame6}
            alt="man reading"
            style={{ objectFit: "cover", height: "100%", width: "100%" }}
          />
        </div>
        <div className="min-w-[50%] px-12 py-10 bg-white border border-gray-250">
          <p className="text-[1.4rem] text-black">
            Explore a World of <span className="text-[#F57F20]">Skills</span>
          </p>
          <h3 className="mt-40 text-black text-[2rem] leading-8 font-semibold">
            Digital <br />
            <span>Marketing</span>
          </h3>
          <p className="mt-3 text-black text-[0.8rem]">
            Dive into the exciting world of web development and learn to build
            stunning, responsive, and functional websites from scratch. This
            course takes you through the fundamentals of HTML, CSS, and
            JavaScript to advanced frameworks and backend development
          </p>
          <article className="mt-3 text-[#F57F20] flex items-center gap-2">
            <span className="text-[1rem] font-semibold">Learn More</span>
            <span className="text-[#F57F20] flex items-center">
              <FaArrowRightLong />
            </span>
          </article>
        </div>
      </section>

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
