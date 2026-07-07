import React from "react";
import Link from "next/link";
import { GraduationCap, Briefcase, Code, ChevronRight, X } from "lucide-react";

type Props = {
  setShowForm: (showForm: boolean) => void;
};

const links = [
  {
    id: 1,
    name: "Learn a Skill",
    description: "Accelerate your career with our industry-led tech bootcamps.",
    url: "/academy",
    icon: GraduationCap,
  },
  {
    id: 2,
    name: "Hire Tech Talent",
    description: "Recruit top-tier developers, designers, and tech experts.",
    url: "https://futurelabs-lms.vercel.app/",
    icon: Briefcase,
  },
  {
    id: 3,
    name: "Request a Service",
    description: "Collaborate with our studio to build your software MVPs and products.",
    url: "https://studio.futurelabs.ng",
    icon: Code,
  },
];

export default function ContactForm({ setShowForm }: Props) {
  return (
    <div className="relative overflow-hidden w-full bg-gradient-to-b from-[#1E2742] to-[#12182B] border border-white/10 rounded-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] text-white p-6 sm:p-8 font-manrope">
      {/* Top Close Button */}
      <button
        onClick={() => setShowForm(false)}
        className="absolute top-4 right-4 p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer focus:outline-none"
        aria-label="Close modal"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Modal Content */}
      <div className="flex flex-col gap-6 mt-4">
        <div className="space-y-2 text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-100 to-[#F47C1D] bg-clip-text text-transparent">
            Choose your interest
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-normal">
            Select one of our paths to get started with FutureLabs.
          </p>
        </div>

        {/* Links list */}
        <div className="flex flex-col gap-4 mt-2">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                href={link.url}
                key={link.id}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setShowForm(false)}
                className="group flex items-start gap-4 p-4 bg-white/[0.03] border border-white/[0.08] hover:border-[#F47C1D]/50 hover:bg-[#F47C1D]/[0.04] rounded-xl transition-all duration-300 transform hover:-translate-y-0.5"
              >
                {/* Icon container */}
                <div className="flex items-center justify-center p-3 rounded-lg bg-white/[0.04] group-hover:bg-[#F47C1D]/10 text-white group-hover:text-[#F47C1D] transition-colors shrink-0">
                  <Icon className="w-6 h-6" />
                </div>

                {/* Text and arrow */}
                <div className="flex-1 flex items-center justify-between gap-4">
                  <div className="space-y-1">
                    <h3 className="font-semibold text-lg text-slate-100 group-hover:text-white transition-colors">
                      {link.name}
                    </h3>
                    <p className="text-slate-400 text-sm leading-normal group-hover:text-slate-300 transition-colors">
                      {link.description}
                    </p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-500 group-hover:text-[#F47C1D] group-hover:translate-x-1 transition-all shrink-0" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
