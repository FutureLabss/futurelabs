"use client";
import Image from "next/image";
import nsikan from "@/app/assets/images/nsikan.jpg";
import dev from "@/app/assets/images/dev.jpg";
import frame1 from "@/app/assets/images/Frame1.jpg";
import frame2 from "@/app/assets/images/Frame2.jpg";
import frame3 from "@/app/assets/images/Frame3.jpg";
import frame4 from "@/app/assets/images/Frame4.jpg";
import frame5 from "@/app/assets/images/Frame5.jpg";
import frame6 from "@/app/assets/images/Frame6.jpg";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
import TestimonialCarousel from "./TestimonialsCarousel";

// Add interface for course type
interface Course {
  title: string;
  description: string;
  aboutCourse: string;
  applicationFee: string;
  installmentAmount: string;
  programLength: string;
  startDate: string;
  location: string;
  image: unknown; // Or more specific type if known
  bgColor: string;
  textColor: string;
  highlightColor: string;
  order: string;
}

const courses = [
  {
    title: "Web Development",
    description:
      "Dive into the exciting world of web development and learn to build stunning, responsive, and functional websites from scratch. This course takes you through the fundamentals of HTML, CSS, and JavaScript to advanced frameworks and backend development.",
    aboutCourse:
      "Step into the world of web development and unlock the skills to build modern, interactive websites. This course covers foundational coding aspects, UI/UX principles, and backend technologies like Node.js.",
    applicationFee: "NGN120,000",
    installmentAmount: "NGN20,000",
    programLength: "6 Months",
    startDate: "February 2025",
    location: "Hybrid",
    image: frame1,
    bgColor: "bg-[#212C4A]",
    textColor: "text-white",
    highlightColor: "text-[#F57F20]",
    order: "normal",
  },
  {
    title: "Product Design",
    description:
      "Explore the dynamic realm of product design and discover how to create visually appealing, user-friendly, and effective digital products from the ground up. This course guides you through the essentials of design principles, prototyping, and user experience.",
    aboutCourse:
      "This course introduces design thinking, UI/UX fundamentals, and prototyping using industry-standard tools. You'll gain hands-on experience in designing intuitive digital products.",
    applicationFee: "NGN100,000",
    installmentAmount: "NGN20,000",
    programLength: "5 Months",
    startDate: "March 2025",
    location: "Online",
    image: frame2,
    bgColor: "bg-[#F57F20]",
    textColor: "text-white",
    highlightColor: "text-white",
    order: "reverse",
  },
  {
    title: "Data Analytics",
    description:
      "Dive into the fascinating world of data analytics and learn how to transform raw data into actionable insights. This course covers the fundamentals of data collection, analysis techniques, and visualization tools, leading to predictive analytics and decision-making.",
    aboutCourse:
      "Gain in-demand skills in data analysis, visualization, and business intelligence. This course covers statistical techniques, SQL, and data visualization tools like Power BI and Tableau.",
    applicationFee: "NGN150,000",
    installmentAmount: "NGN25,000",
    programLength: "7 Months",
    startDate: "April 2025",
    location: "Hybrid",
    image: frame3,
    bgColor: "bg-white border border-gray-250",
    textColor: "text-black",
    highlightColor: "text-[#F57F20]",
    order: "normal",
  },
  {
    title: "Web Design",
    description:
      "Explore the captivating realm of web design and discover how to turn creative ideas into stunning websites. This course will guide you through the basics of layout design, user experience principles, and coding essentials.",
    aboutCourse:
      "Learn how to design visually engaging and user-friendly websites. This course covers design principles, wireframing, prototyping, and front-end development using HTML, CSS, and Figma.",
    applicationFee: "NGN90,000",
    installmentAmount: "NGN22,500",
    programLength: "4 Months",
    startDate: "May 2025",
    location: "Online",
    image: frame4,
    bgColor: "bg-[#212C4A]",
    textColor: "text-white",
    highlightColor: "text-[#F57F20]",
    order: "reverse",
  },
  {
    title: "Graphic Design",
    description:
      "Dive into the fascinating world of graphic design and learn how to transform imaginative concepts into eye-catching visuals. This course covers the fundamentals of composition, visual communication, and essential software skills.",
    aboutCourse:
      "Master the art of digital graphics, branding, and visual storytelling. This course includes training in Adobe Photoshop, Illustrator, and CorelDRAW to create impactful designs.",
    applicationFee: "NGN85,000",
    installmentAmount: "NGN28,333",
    programLength: "3 Months",
    startDate: "June 2025",
    location: "Hybrid",
    image: frame5,
    bgColor: "bg-[#F57F20]",
    textColor: "text-white",
    highlightColor: "text-white",
    order: "normal",
  },
  {
    title: "Digital Marketing",
    description:
      "Explore the exciting realm of digital marketing and discover how to turn creative ideas into compelling campaigns. This course covers audience engagement, key marketing strategies, and essential tools.",
    aboutCourse:
      "Understand digital marketing strategies, social media management, SEO, and paid advertising. This course covers marketing funnels, analytics, and campaign optimization.",
    applicationFee: "NGN110,000",
    installmentAmount: "NGN22,000",
    programLength: "5 Months",
    startDate: "July 2025",
    location: "Online",
    image: frame6,
    bgColor: "bg-white border border-gray-250",
    textColor: "text-black",
    highlightColor: "text-[#F57F20]",
    order: "reverse",
  },
];

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
                  query: { course: JSON.stringify(course.title) },
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
        {/* <h3 className="text-center font-bold text-[2rem] mb-2 ">
          <span className="text-[#F57F20]">Stat</span> That Matter!
        </h3> */}
        <section className="md:flex items-end justify-center gap-5">
          {/* <div className="md:min-w-[229px] px-5 flex flex-col justify-between py-4 min-h-[270px] bg-[#F0F0F0] rounded-lg">
            <p className="text-black text-[1.2rem] font-bold">Students</p>
            <p className="leading-6">
              <span className="text-[3.5rem] font-bold">650+</span> <br />
              <span className="text-black text-[1rem]">Since Inception</span>
            </p>
          </div> */}

          {/* <div className="md:min-w-[229px] mt-2 md:mt-0 px-5 flex flex-col justify-between py-4 min-h-[240px] bg-[#000000] rounded-lg">
            <p className="text-white text-[1.2rem] font-bold">Graduates</p>
            <p className="leading-6">
              <span className="text-[3.5rem] font-bold text-white">250+</span>{" "}
              <br />
              <span className="text-white text-[1rem]">With track record</span>
            </p>
          </div> */}

          {/* <div className="md:min-w-[229px] px-5 flex mt-2 md:mt-0 flex-col justify-between py-4 min-h-[210px] bg-[#F57F20] rounded-lg">
            <p className="text-white text-[1.2rem] font-bold">Job placements</p>
            <p className="leading-6">
              <span className="text-[3.5rem] font-bold text-white">120+</span>{" "}
              <br />
              <span className="text-white text-[1rem]">Since Inception</span>
            </p>
          </div> */}
        </section>
      </section>

      {/* Why choose us section */}
      <section className="mt-20 max-w-[1200px] mx-auto">
        <div className="">
          <h3 className="text-center font-bold text-[2rem] leading-10">
            <span className="text-black">Why</span> Choose{" "}
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

      <TestimonialCarousel />
      {/* <section className="mt-20 mb-20">
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
      </section> */}
    </div>
  );
}
