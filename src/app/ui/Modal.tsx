import Link from "next/link";
import React, { useEffect } from "react";
import { RxCross2 } from "react-icons/rx";

type ModalProps = {
  handleShowModal: () => void;
};

const links = [
  {
    name: "Learn a Skill",
    url: "/services/learnskill",
  },
  {
    name: "Hiring Talent",
    url: "/services/hiretalent",
  },
];

function Modal({ handleShowModal }: ModalProps) {
  // Prevent scrolling when the modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden"; // Disable scrolling

    return () => {
      document.body.style.overflow = "auto"; // Restore scrolling on close
    };
  }, []);
  return (
    /** Fullscreen Overlay */
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={handleShowModal} // Click outside to close
    >
      {/* Modal Content */}
      <div
        className="flex flex-col items-center justify-center gap-5 bg-white max-w-2xl w-full h-[400px] px-4 md:px-8 rounded-md relative"
        onClick={(e) => e.stopPropagation()} // Prevent close on modal click
      >
        <p className="font-medium text-2xl md:text-4xl py-12">
          How can we help you?
        </p>

        {/* Close Button */}
        <RxCross2
          className="absolute top-5 right-5 cursor-pointer"
          size={32}
          onClick={handleShowModal}
        />

        {/* Modal Links */}
        {links.map((link, index) => (
          <Link
            href={link.url}
            key={index}
            className="text-[1.3rem] md:text-[1.8rem] bg-secondary-default text-white py-4 px-6 w-full text-center rounded-lg"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Modal;
