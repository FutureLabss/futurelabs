// pages/ProjectGenesisPage.jsx
"use client";

import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import {
  Check,
  Calendar,
  // Users,
  // Award,
  // TrendingUp,
  // Menu,
  X,
} from "lucide-react";
import Image from "next/image";
import { useIntersectionObserver } from "./hooks/use-intersection-observer";
// import { AnimatedCounter } from "./components/animated-counter";
import { useEffect, useState } from "react";
// import Link from "next/link";
// import Nav from "../components/headcomponents/Nav";
import Footer from "../components/Footer";
import TestimonialCarousel from "./components/TestimonialCarousel";
import ping from "../../../public/images/ping-logo.jpg";
import Navigation from "../components/Navigation";

export default function ProjectGenesisPage() {
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);

  // const statsObserver = useIntersectionObserver({ threshold: 0.3 });
  const aboutObserver = useIntersectionObserver({ threshold: 0.2 });
  const applicationObserver = useIntersectionObserver({ threshold: 0.1 });
  const successObserver = useIntersectionObserver({ threshold: 0.2 });

  useEffect(() => {
    setMounted(true);

    const calculateTimeLeft = () => {
      const deadline = new Date("July 17, 2025 23:59:59").getTime();
      const now = new Date().getTime();
      const difference = deadline - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({
          days: String(days).padStart(2, "0"),
          hours: String(hours).padStart(2, "0"),
          minutes: String(minutes).padStart(2, "0"),
          seconds: String(seconds).padStart(2, "0"),
        });
      } else {
        setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!mounted) return null;

  const navLinks = [
    { name: "Home", href: "/" },
    // { name: "Blog", href: "#blog" },
  ];

  // Your Google Form embed URL with embedded=true parameter
  const googleFormEmbedUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLScyA0PVMtPtRC4dNEmpdi1GSWFGP51n15FJgrGaz1B2DmuAwg/viewform?embedded=true";

  const handleApplyClick = () => {
    setIsFormModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm py-2 px-2">
        <Navigation />

        {/* Mobile Navigation (Dropdown) */}
        {isMobileMenuOpen && (
          <nav className="md:hidden bg-white mt-2 border-t border-gray-200 py-2">
            <div className="flex flex-col items-center space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-300 w-full text-center py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              {/* <a href="#contact" className="w-full text-center">
                <Button
                  className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md transition-colors duration-300 w-3/4 mx-auto"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact Us
                </Button>
              </a> */}
            </div>
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600/90 to-amber-500/80 text-white py-20 px-4 relative overflow-hidden">
        {/* Background shapes */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-lg transform rotate-12 animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-white/20 rounded-lg transform -rotate-12 animate-bounce"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white/20 rounded-lg animate-spin"></div>
          <div className="absolute top-1/3 right-1/3 w-20 h-20 border border-white/20 rounded-lg transform rotate-45 animate-pulse"></div>
        </div>

        {/* Hero image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero--2.jpg"
            alt="Background for Project Genesis"
            layout="fill"
            objectFit="cover"
            quality={90}
            className="opacity-20"
          />
        </div>

        <div className="container mx-auto text-center relative z-10">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-slide-in-from-top">
              Build your skills. Boost your career.
            </h1>
            <p className="text-xl mb-8 opacity-90 animate-slide-in-from-bottom animation-delay-200">
              Learn the skills you need for the jobs of today.
            </p>
          </div>

          <div className="mb-8 animate-fade-in animation-delay-400">
            <p className="text-md mb-6">
              Heads up: We only have 40 spots, and they go fast.
            </p>
            <div className="flex justify-center space-x-4 mb-8">
              {[
                { label: "Days", value: timeLeft.days },
                { label: "Hours", value: timeLeft.hours },
                { label: "Minutes", value: timeLeft.minutes },
                { label: "Seconds", value: timeLeft.seconds },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-black/20 backdrop-blur-sm rounded-lg p-4 min-w-[80px] transform hover:scale-105 transition-all duration-300 animate-slide-in-from-bottom"
                  style={{ animationDelay: `${600 + index * 100}ms` }}
                >
                  <div className="text-3xl font-bold">{item.value}</div>
                  <div className="text-sm opacity-80">{item.label}</div>
                </div>
              ))}
            </div>

            <Button
              onClick={handleApplyClick}
              className="bg-orange-400 hover:bg-orange-300 text-orange-900 px-10 py-6 rounded-lg font-semibold transform hover:scale-105 transition-all duration-300 animate-fade-in animation-delay-1000"
            >
              Apply Now
            </Button>
          </div>

          {/* <div className="flex justify-center items-center space-x-8 mt-12 opacity-80 animate-fade-in animation-delay-1200">
            {[
              // { icon: TrendingUp, text: "START INNOVATION HUB" },
              { icon: ping, text: "PIND" },
              // { icon: Users, text: "YEP Project" },
            ].map((partner, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 transform hover:scale-110 transition-all duration-300"
              >
                <div className="">
                  <Image
                    src={partner.icon}
                    alt={partner.text}
                    width={16}
                    height={16}
                    className="w-10 h-10"
                  />
                </div>
                <span className="text-sm">{partner.text}</span>
              </div>
            ))}
          </div> */}
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4" ref={aboutObserver.ref}>
        <div className="container mx-auto md:px-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
              className={`transform transition-all duration-1000 ${
                aboutObserver.hasIntersected
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
            >
              <p className="text-orange-600 font-semibold mb-2"># ABOUT</p>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Project Genesis
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p className="transform transition-all duration-700 delay-200">
                  This project was born from a desire to tackle unemployment and
                  empower the youth in our community for the digital age.
                  It&apos;s a goal we proudly share with our sponsor,{" "}
                  <a
                    className="text-blue-500 hover:underline"
                    target="_blank"
                    href="https://pindfoundation.org/"
                  >
                    PIND
                  </a>{" "}
                  , who helps make this opportunity possible. Together, we are
                  committed to training and connecting young people to
                  meaningful employment and entrepreneurial opportunities.
                </p>
                <h3 className="text-lg font-bold mt-4 text-gray-900">
                  Our Sponsor
                </h3>
                <Image
                  className="mb-10"
                  src={ping}
                  height={140}
                  width={140}
                  alt="Ping"
                />
                {/* <p className="transform transition-all duration-700 delay-400">
                  Genesis aims born out of the need to reduce working
                  unemployment rates, empower youths in the Niger Delta region
                  of Nigeria, and promote them for enhanced digital
                  transformation.
                </p> */}
                {/* <p className="transform transition-all duration-700 delay-600">
                  Our goal is to train young people in the Niger Delta to
                  relevant ICT skills and link them to employment and relevant
                  opportunities. A feat we keep achieving with the efforts of
                  our dynamic trainers like PIND and other corporate partners.
                </p> */}
              </div>
            </div>
            <div
              className={`grid grid-cols-2 gap-4 transform transition-all duration-1000 ${
                aboutObserver.hasIntersected
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              }`}
            >
              <div className="space-y-4">
                <Image
                  src="/images/hero--3.jpg"
                  alt="Training session"
                  width={250}
                  height={200}
                  className="rounded-lg object-cover w-full transform hover:scale-105 transition-transform duration-300"
                />
                <Image
                  src="/images/hero--4.jpg"
                  alt="Office environment"
                  width={250}
                  height={150}
                  className="rounded-lg object-cover w-full transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="pt-8">
                <Image
                  src="/images/hero--5.jpg"
                  alt="Team collaboration"
                  width={250}
                  height={300}
                  className="rounded-lg object-cover w-full transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call for Application */}
      <section
        className="py-16 px-4 bg-orange-100"
        ref={applicationObserver.ref}
      >
        <div className="container mx-auto md:px-16">
          <h2
            className={`text-3xl font-bold text-center mb-12 text-gray-900 transform transition-all duration-1000 ${
              applicationObserver.hasIntersected
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            Call For Application
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div
              className={`transform transition-all duration-1000 delay-200 ${
                applicationObserver.hasIntersected
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
            >
              <Card className="mb-6 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Calendar className="w-6 w-6 text-orange-600" />
                    <div>
                      <h3 className="font-bold text-lg">Application Close</h3>
                      <p className="text-gray-600">17th July, 2025</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="mb-6">
                <h3 className="font-bold text-lg mb-4">What You Can Learn</h3>
                <p className="mb-5">Choose one of these three career paths:</p>
                <div className="space-y-2">
                  {[
                    "Web Development: Learn to build websites.",
                    "UI/UX Design: Learn to design apps and websites that are easy to use.",
                    "Data Analysis: Learn how to find valuable insights from data.",
                  ].map((course, index) => (
                    <div
                      key={index}
                      className={`flex items-center space-x-2 transform transition-all duration-500 hover:translate-x-2 ${
                        applicationObserver.hasIntersected
                          ? "translate-x-0 opacity-100"
                          : "-translate-x-5 opacity-0"
                      }`}
                      style={{ transitionDelay: `${400 + index * 100}ms` }}
                    >
                      <Check className="w-4 h-4 text-orange-600" />
                      <span className="text-gray-700 font-bold">{course}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className={`transform transition-all duration-700 delay-700 ${
                  applicationObserver.hasIntersected
                    ? "translate-y-0 opacity-100"
                    : "translate-y-5 opacity-0"
                }`}
              >
                <h3 className="font-bold text-lg mb-4">
                  Thanks to Our Partners
                </h3>
                <div className="space-y-2 text-gray-700">
                  <ul>
                    <li className="flex items-center space-x-2">
                      <p className="w-1 h-1 bg-black rounded-full flex-shrink-0"></p>

                      <p>
                        Original Price:{" "}
                        <span className="font-bold text-orange-600">
                          ₦300,000
                        </span>
                      </p>
                    </li>
                    <li className="flex items-center space-x-2">
                      <p className="w-1 h-1 bg-black rounded-full flex-shrink-0"></p>

                      <p>
                        You Pay: <span className="font-bold">₦100,000 only</span>
                      </p>
                    </li>
                  </ul>
                  {/* <p>
                    Program Duration:{" "}
                    <span className="font-bold">
                      6 Months Training, 3 Months Internship
                    </span>
                  </p> */}
                </div>
                <div className="mt-4 mb-4">
                  <p>
                    This discount is made possible by our partner,{" "}
                    <a
                      href="https://pindfoundation.org/"
                      target="_blank"
                      className="text-blue-500 hover:underline"
                    >
                      PIND
                    </a>{" "}
                    , who is helping us cover the cost.
                  </p>
                </div>
                <div className="space-y-2 text-gray-700">
                  <p>
                    Program Duration:{" "}
                    <span className="font-bold">
                      6 Months Training, 3 Months Internship
                    </span>
                  </p>
                  <ul>
                    <li>
                      <p className="font-bold">
                        Apply between June 17 and July 17.
                      </p>
                    </li>
                    <li>
                      <p className="font-bold">
                        Heads up: We only have 40 spots, and they go fast.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>

              <div
                className={`mt-6 transform transition-all duration-700 delay-900 ${
                  applicationObserver.hasIntersected
                    ? "translate-y-0 opacity-100"
                    : "translate-y-5 opacity-0"
                }`}
              >
                {/* <div className="flex items-center space-x-2 text-orange-600">
                  <TrendingUp className="w-5 h-5" />
                  <span className="font-semibold">TalentPort</span>
                </div> */}
              </div>
            </div>

            {/* Right Column */}
            <Card
              className={`bg-orange-500 text-white hover:bg-orange-600 transition-colors duration-300 transform transition-all duration-1000 delay-400 ${
                applicationObserver.hasIntersected
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              }`}
            >
              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-6">Who Can Apply</h3>
                <div className="space-y-3">
                  {[
                    "Are between 16 and 35 years old.",
                    "Are a school leaver, graduate, or job seeker.",
                    "Have a laptop (or can get one before the program starts)",
                    "Are serious about a tech career or starting a business with digital skills",
                    "Fresh graduates",
                    "Job seekers",
                    "One who is resident in Akwa Ibom State",
                    "Must be job-ready",
                  ].map((criteria, index) => (
                    <div
                      key={index}
                      className={`flex items-start space-x-2 transform transition-all duration-500 hover:translate-x-2 ${
                        applicationObserver.hasIntersected
                          ? "translate-x-0 opacity-100"
                          : "translate-x-5 opacity-0"
                      }`}
                      style={{ transitionDelay: `${600 + index * 50}ms` }}
                    >
                      <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm">{criteria}</span>
                    </div>
                  ))}
                </div>

                <Button
                  onClick={handleApplyClick}
                  className="w-full mt-6 bg-white text-orange-600 hover:bg-gray-100 transform hover:scale-105 transition-all duration-300"
                >
                  Apply Now
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Footer Navigation */}
          <div
            className={`flex flex-wrap justify-center space-x-4 md:space-x-8 mt-12 text-sm transform transition-all duration-1000 delay-600 ${
              applicationObserver.hasIntersected
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          ></div>

          {/* Who Cannot Apply */}
          {/* <div
            className={`text-center mt-12 transform transition-all duration-1000 delay-800 ${
              applicationObserver.hasIntersected
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h3 className="font-bold text-lg mb-4">Who Cannot Apply</h3>
            <div className="text-gray-600 space-y-2">
              <p>
                Participants/Beneficiaries of previous Project Genesis versions
                are not qualified to apply.
              </p>
              <p>
                Those who are not available to participate full time in a
                physical location.
              </p>
            </div>
          </div> */}
        </div>
      </section>

      {/* Statistics */}
      {/* <section
        className="bg-gradient-to-r from-orange-500 to-amber-400 text-white py-16 px-4"
        ref={statsObserver.ref}
      >
        <div className="container mx-auto text-center">
          <p
            className={`mb-8 text-lg transform transition-all duration-1000 ${
              statsObserver.hasIntersected
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            Since its inception, Genesis has had over 5,000 applicants
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: 5152, suffix: "+", label: "APPLICATIONS RECEIVED" },
              { number: 618, suffix: "+", label: "TOTAL TRAINED" },
              { number: 403, suffix: "+", label: "JOB LINKAGES" },
              { number: 388, suffix: "+", label: "INTERNSHIP PLACEMENTS" },
            ].map((stat, index) => (
              <div
                key={index}
                className={`transform transition-all duration-1000 hover:scale-110 ${
                  statsObserver.hasIntersected
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  <AnimatedCounter
                    end={stat.number}
                    suffix={stat.suffix}
                    start={statsObserver.hasIntersected}
                    duration={2000 + index * 200}
                  />
                </div>
                <div className="text-sm opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Success Stories Section */}
      <section className="py-16 px-4" ref={successObserver.ref}>
        <div className="container mx-auto text-center">
          <h2
            className={`text-3xl font-bold mb-12 text-gray-900 transform transition-all duration-1000 ${
              successObserver.hasIntersected
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            Success Stories
          </h2>
          <div
            className={`transform transition-all duration-1000 delay-200 ${
              successObserver.hasIntersected
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <TestimonialCarousel />
          </div>
        </div>
      </section>

      {/* Google Form Modal */}
      {isFormModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            {/* Background overlay */}
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
              onClick={() => setIsFormModalOpen(false)}
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            {/* Modal container */}
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Project Genesis Application Form
                  </h3>
                  <button
                    onClick={() => setIsFormModalOpen(false)}
                    className="text-gray-400 hover:text-gray-500 focus:outline-none"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                {/* Google Form Embed */}
                <div className="w-full h-[80vh]">
                  <iframe
                    src={googleFormEmbedUrl}
                    width="100%"
                    height="100%"
                    // frameBorder="0"
                    className="border-0"
                  >
                    Loading...
                  </iframe>
                </div>
              </div>

              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  onClick={() => setIsFormModalOpen(false)}
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in-from-top {
          from {
            opacity: 0;
            transform: translateY(-50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in-from-bottom {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }

        .animate-slide-in-from-top {
          animation: slide-in-from-top 1s ease-out;
        }

        .animate-slide-in-from-bottom {
          animation: slide-in-from-bottom 1s ease-out;
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animation-delay-200 {
          animation-delay: 200ms;
        }

        .animation-delay-400 {
          animation-delay: 400ms;
        }

        .animation-delay-600 {
          animation-delay: 600ms;
        }

        .animation-delay-800 {
          animation-delay: 800ms;
        }

        .animation-delay-1000 {
          animation-delay: 1000ms;
        }

        .animation-delay-1200 {
          animation-delay: 1200ms;
        }
      `}</style>
      <Footer />
    </div>
  );
}
