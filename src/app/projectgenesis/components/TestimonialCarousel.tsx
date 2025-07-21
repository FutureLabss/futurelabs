// components/TestimonialCarousel.jsx
"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { blogData } from "@/data/data";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "I am a graduate of Computer Engineering from Heritage Polytechnic Eket. I participated in Project Genesis. I am an Android Developer currently working with Alfa Labs Lagos.",
    name: "OTIBE ETIM",
    title: "Android Developer",
  },
  {
    quote:
      "Project Genesis provided me with the foundational skills in UI/UX design that I needed to pivot my career. I'm now a Lead Product Designer at a tech startup.",
    name: "ADAOBI NWOSU",
    title: "Lead Product Designer",
  },
  {
    quote:
      "The cybersecurity training at Project Genesis was top-notch. I secured an internship immediately after the program and am now a full-time Security Analyst.",
    name: "CHUKWUMA EZE",
    title: "Security Analyst",
  },
  {
    quote:
      "I never thought I could get into tech, but Project Genesis made it possible. Their web development course was practical and empowering. I'm now building amazing websites for clients.",
    name: "FATIMA ALIYU",
    title: "Freelance Web Developer",
  },
  {
    quote:
      "Thanks to Project Genesis, I transformed my passion for data into a skill set. I'm now a Data Analyst, helping businesses make informed decisions.",
    name: "EMMANUEL OKORO",
    title: "Data Analyst",
  },
  {
    quote:
      "The hardware repair course was incredibly hands-on. I've opened my own small business repairing phones and computers in my community.",
    name: "GLORIA UDOH",
    title: "Hardware Technician & Entrepreneur",
  },
];

export default function TestimonialCarousel() {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentTestimonialIndex(
          (prevIndex) => (prevIndex + 1) % testimonials.length
        );
        setIsFading(false);
      }, 500); // Duration of the fade-out
    }, 7000); // Change testimonial every 7 seconds

    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentTestimonialIndex(
        (prevIndex) =>
          (prevIndex - 1 + testimonials.length) % testimonials.length
      );
      setIsFading(false);
    }, 500);
  };

  const handleNext = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentTestimonialIndex(
        (prevIndex) => (prevIndex + 1) % testimonials.length
      );
      setIsFading(false);
    }, 500);
  };

  const currentTestimonial = blogData[currentTestimonialIndex];

  return (
    <div className="max-w-3xl mx-auto text-center relative">
      <div
        className={`transition-opacity duration-500 ease-in-out ${
          isFading ? "opacity-0" : "opacity-100"
        }`}
      >
        <blockquote className="text-lg text-gray-600 italic mb-6">
          &apos;{currentTestimonial.content}&apos;
        </blockquote>

        <div className="flex items-center justify-center space-x-3">
          <div className="w-12 h-12 flex items-center justify-center">
            <Image
              src={currentTestimonial.src}
              alt={currentTestimonial.name}
              height={100}
              width={100}
              className=" text-gray-600 rounded-full object-cover"
            />
          </div>
          <div className="text-left">
            <div className="font-semibold">{currentTestimonial.name}</div>
            <div className="text-sm text-gray-600">
              {currentTestimonial.title}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <Button
        variant="ghost"
        size="icon"
        onClick={handlePrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-100 rounded-full p-2 shadow-md hover:bg-gray-200"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="h-6 w-6 text-gray-700" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={handleNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-100 rounded-full p-2 shadow-md hover:bg-gray-200"
        aria-label="Next testimonial"
      >
        <ChevronRight className="h-6 w-6 text-gray-700" />
      </Button>

      {/* Pagination Dots */}
      <div className="flex justify-center space-x-2 mt-8">
        {testimonials.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
              index === currentTestimonialIndex
                ? "bg-orange-600"
                : "bg-gray-300"
            }`}
            onClick={() => {
              setIsFading(true);
              setTimeout(() => {
                setCurrentTestimonialIndex(index);
                setIsFading(false);
              }, 500);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
