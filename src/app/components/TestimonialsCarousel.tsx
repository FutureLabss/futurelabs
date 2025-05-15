"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ButtonG } from "@/app/ui/ButtonG";
import { cn } from "@/lib/utils";
// import abraham from "@/app/assets/images/abraham.jpg";
import { blogData } from "@/data/data";

// Testimonial data
// const testimonials = [
//   {
//     id: 1,
//     name: "Abraham udoinyang",
//     role: "Designer",
//     image: abraham,
//     quote:
//       "Future Labs Academy transformed my career! I went from having no tech background to designing user-centered products with confidence. The hands-on approach and expert guidance made all the difference",
//   },
//   {
//     id: 2,
//     name: "Sarah Johnson",
//     role: "Frontend Developer",
//     image: abraham,
//     quote:
//       "The mentorship I received at Future Labs Academy was invaluable. I learned modern development practices that helped me land my dream job at a top tech company.",
//   },
//   {
//     id: 3,
//     name: "Michael Chen",
//     role: "UX Researcher",
//     image: abraham,
//     quote:
//       "The curriculum at Future Labs Academy gave me both theoretical knowledge and practical skills. I now lead research initiatives that shape product decisions.",
//   },
//   {
//     id: 4,
//     name: "Priya Patel",
//     role: "Product Manager",
//     image: abraham,
//     quote:
//       "Future Labs Academy taught me how to think strategically about product development. The collaborative projects prepared me for real-world challenges.",
//   },
// ];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % blogData.length);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const goToPrevious = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + blogData.length) % blogData.length
    );
    setTimeout(() => setIsAnimating(false), 300);
  };

  // Auto-advance the carousel
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Testimonies from our <span className="text-orange-500">Alumni</span>
      </h2>

      <div className="relative overflow-hidden">
        <div
          className={cn(
            "transition-transform duration-500 ease-in-out flex",
            isAnimating ? "opacity-90" : "opacity-100"
          )}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {blogData.map((testimonial) => (
            <div
              key={testimonial.id}
              className="w-full flex-shrink-0 flex flex-col md:flex-row"
            >
              <div className="w-full md:w-1/2 h-[300px] md:h-[450px] relative">
                <Image
                  src={testimonial.src || "/placeholder.svg"}
                  alt={`${testimonial.name}'s testimonial`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-full md:w-1/2 bg-black text-white p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-1">
                  {testimonial.name}
                </h3>
                <p className="text-orange-500 text-lg mb-6">
                  {testimonial.title}
                </p>
                <blockquote className="text-base md:text-lg leading-relaxed">
                  {testimonial.content}
                </blockquote>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation buttons */}
        <ButtonG
          variant="outline"
          size="icon"
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white/90 z-10"
          onClick={goToPrevious}
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-5 w-5" />
        </ButtonG>
        <ButtonG
          variant="outline"
          size="icon"
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white/90 z-10"
          onClick={goToNext}
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-5 w-5" />
        </ButtonG>

        {/* Indicators */}
        <div className="flex justify-center mt-4 absolute bottom-4 left-0 right-0">
          {blogData.map((_, index) => (
            <button
              key={index}
              className={cn(
                "h-2 w-2 mx-1 rounded-full transition-all",
                currentIndex === index ? "bg-orange-500 w-4" : "bg-gray-300"
              )}
              onClick={() => {
                setCurrentIndex(index);
              }}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
