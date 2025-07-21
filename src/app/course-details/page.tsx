"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export const dynamic = "force-dynamic";

import work from "@/app/assets/images/work.png";
// import PricingCard from "../components/PricingCard";
import { courses } from "@/data/data";

import Footer from "../components/Footer";
// import { RiLiveLine } from "react-icons/ri";
import { PiStudent } from "react-icons/pi";
import { MdOutlineAssignment } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import Nav from "../components/headcomponents/Nav";

// interface CourseData {
//   title: string;
//   aboutCourse: string;
//   applicationFee: string;
//   installmentAmount: string;
//   programLength: string;
//   startDate: string;
//   location: string;
// }

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

const CoursePage = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const router = useRouter();
  const [courseData, setCourseData] = useState<Course | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Handle body overflow when sidebar is open
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isSidebarOpen]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const savedCourse = JSON.parse(
          localStorage.getItem("selectedCourse") || ""
        );
        if (savedCourse) {
          const getCourse = courses.find(
            (item) => item.title === savedCourse.title
          );
          // setCourseData(JSON.parse(getCourse));
          if (getCourse) {
            setCourseData(getCourse);
          } else {
            router.push("/academy");
          }
        } else {
          router.push("/academy");
        }
      } catch (error) {
        console.error("Error loading course data:", error);
        router.push("/academy");
      } finally {
        setIsLoading(false);
      }
    }
  }, [router]);

  if (isLoading || !courseData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-[#F57F20]"></div>
      </div>
    );
  }

  return (
    <div className="bg-[#F5F5FA]">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 bg-white">
        <div className="md:ml-20">
          <Nav />
        </div>

        <div className="">
          <button
            data-testid="toggle-sidebar-button"
            type="button"
            onClick={toggleSidebar}
            className="cursor-pointer z-50 focus:outline-none md:mr-40"
          >
            {isSidebarOpen ? (
              <IoMdClose size={25} className="text-[#F57F20]" />
            ) : (
              <GiHamburgerMenu size={25} className="text-[#F57F20]" />
            )}
          </button>
        </div>

        {/* Sidebar */}
        <div
          className={`fixed top-0 left-0 h-screen w-72 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 overflow-y-auto ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="p-8 mt-20">
            <ul className="space-y-8">
              <Link href={"/academy"}>
                <li className="text-[1.1rem] font-semibold text-[#F57F20] cursor-pointer hover:text-[#F57F20] transition-colors">
                  Home
                </li>
              </Link>
              {/* <Link href="https://futurelabs-lms.onrender.com/login">
                <li className="text-[1.1rem] font-semibold text-gray-400 cursor-pointer hover:text-[#F57F20] transition-colors">
                  Login
                </li>
              </Link> */}
              {/* <li className="text-[1.1rem] font-semibold text-gray-400 cursor-pointer hover:text-[#F57F20] transition-colors">
                Why Future Academy
              </li> */}
            </ul>
          </div>
        </div>

        {/* Overlay */}
        <div
          onClick={toggleSidebar}
          className={`fixed inset-0 bg-black/50 transition-opacity duration-300 z-30 ${
            isSidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        />
      </nav>

      <section className="xl:max-w-[1300px] mx-auto">
        {/* Hero Section */}
        <div className="relative  w-full">
          <Image
            src={work}
            alt="Course Banner"
            priority
            style={{
              height: "300px",
              width: "100%",
              objectFit: "cover",
              borderRadius: "15px",
            }}
          />
          <div className="absolute inset-0 bg-black opacity-60 rounded-2xl"></div>
          <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold">
            {courseData.title}
          </h1>
        </div>

        {/* Tab Navigation */}
        <section className="mt-10">
          <div className="w-full md:max-w-[60%]">
            <div className="md:flex mt-6 bg-white  rounded-2xl">
              {["overview", "learn", "admission"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 text-[0.8rem] transition-colors  ${
                    activeTab === tab
                      ? "bg-[#212C4A] rounded-2xl p-3 text-white"
                      : "text-gray-500"
                  }`}
                >
                  {tab === "overview"
                    ? "Course Overview"
                    : tab === "learn"
                    ? "What You Will Learn"
                    : "Admission Requirement"}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="md:flex gap-4">
          {/* Tab Content */}
          <div className="mt-6 p-6 max-w-[100%] md:min-w-[65%] rounded-2xl bg-white shadow-sm rounded-md min-h-[200px] transition-opacity duration-300">
            {activeTab === "overview" && (
              <>
                <h2 className="text-xl font-semibold text-[#212C4A]">
                  About this course
                </h2>
                <p className="text-gray-600 mt-2 leading-5">
                  {courseData.aboutCourse}
                </p>
              </>
            )}
            {activeTab === "learn" && (
              <p className="text-gray-600">
                You will learn HTML, CSS, JavaScript, React, Node.js, and
                performance optimization techniques.
              </p>
            )}
            {activeTab === "admission" && (
              <p className="text-gray-600">
                No prior experience is required. Passion for learning is key.
              </p>
            )}
          </div>
          {/* Course Details */}
          <div className="mt-6 gap-6 max-w-[100%] md:min-w-[35%]">
            <div className="bg-[#212C4A] text-white leading-4 p-8 shadow-md rounded-md">
              <h3 className="text-lg">Application Fee</h3>
              <p className="text-xl font-bold leading-5">
                {courseData.applicationFee}
              </p>
              <h3 className="text-lg font-semibold mt-4">Program Length</h3>
              <p>{courseData.programLength}</p>
              <h3 className="text-lg font-semibold mt-4">Start Date</h3>
              <p>{courseData.startDate}</p>
              <h3 className="text-lg font-semibold mt-4">Location</h3>
              <p>{courseData.location}</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mt-10 mb-20">
          <h3 className="text-xl font-bold mb-2">This Course Includes</h3>
          <div className="md:flex gap-4">
            <div className="bg-white p-6 shadow-sm rounded-md w-full md:w-[60%]">
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center space-x-2">
                  {/* <span>
                    <RiLiveLine />
                  </span> */}
                  {/* <span className="font-semibold">
                    Live sessions and recordings
                  </span> */}
                </li>
                <li className="flex items-center space-x-2">
                  <span>
                    <PiStudent />
                  </span>{" "}
                  <span className="font-semibold">
                    Pre-recorded courses for self-paced learning
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <span>
                    <MdOutlineAssignment />
                  </span>{" "}
                  <span className="font-semibold">
                    Assignments to track progress
                  </span>
                </li>
              </ul>
            </div>
            <div className="text-center flex flex-col mt-10 md:mt-0 items-center justify-center">
              <h2 className="text-xl font-bold">Are you ready to learn?</h2>
              <p className="text-gray-600">Let’s get started</p>
              <Link
                href="https://futurelabs-lms.onrender.com/login"
                target="_blank"
              >
                <button className="mt-4 px-12 py-2 bg-[#F57F20] text-white rounded-xl">
                  Apply now
                </button>
              </Link>
              {/* <button className="mt-4 px-12 py-2 bg-[#212C4A] text-white rounded-xl">
                Apply now
              </button> */}
            </div>
          </div>
        </section>

        {/* <section className="w-full md:max-w-[50%] mx-auto mt-[100px] mb-20">
          <div className="text-center mb-10">
            <h3 className="text-[2rem] text-[#231D4F] font-bold">
              Simple, transparent pricing
            </h3>
            <p className="text-[#848199]">No contracts. No surprise fees.</p>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-4 space-y-4 lg:space-y-0">
            <PricingCard
              price={courseData.installmentAmount}
              duration={courseData.programLength}
              title={"FutureLabs Skill Subscription"}
              description={
                "Learn a skill monthly with access to live lessons and pre-recorded courses"
              }
              features={[
                "Live sessions and recordings",
                "Pre-recorded courses for self-paced learning",
                "Assignments to track progress",
              ]}
            />
            <PricingCard
              price={courseData.applicationFee}
              duration={courseData.programLength}
              title={"Invest in Your Future"}
              description={
                "Simple pricing for 6 months of skill mastery. No extra charges"
              }
              features={[
                "Live sessions and recordings",
                "Pre-recorded courses for self-paced learning",
                "Assignments to track progress",
              ]}
            />
          </div>
        </section> */}
      </section>

      <Footer />
    </div>
  );
};

export default CoursePage;
