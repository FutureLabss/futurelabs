"use client";
import React from "react";

type Props = {
  setShowForm: (showForm: boolean) => void;
  showForm: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ setShowForm, showForm, ...props }: Props) {
  return (
    <button
      className="bg-secondary-50 w-full font-medium text-size-20 text-primary-default px-[.5rem] py-[12px] sm:px-[2rem] sm:py-[1.125rem] rounded-[2.625rem] outline-none cursor-pointer"
      onClick={() => setShowForm(!showForm)}
      {...props} // ✅ This now includes aria-label, role, etc.
    >
      Get Started
    </button>
  );
}
