"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useStateAuthProvider } from "@/app/context"
import { useEffect } from "react";

export default function ProgramLinks() {

  // Only runs on mount



  const pathName = usePathname()

  const context = useStateAuthProvider()



  const { setLinkIndex } = context


  const programLinks = [
    {
      title: "UI/UX Design",
      url: "/programs/uiuxdesign",
    },
    {
      title: "Graphics Design",
      url: "/programs/graphicsdesign",
    },
    {
      title: "Web Development",
      url: "/programs/webdevelopment",
    },
    {
      title: "Motion Design",
      url: "/programs/motiondesign",
    },
    {
      title: "Video Editing",
      url: "/programs/videoediting",
    },
  ]

  useEffect(() => {
    const savedIndex = localStorage.getItem("linkIndex");
    if (savedIndex !== null) {
      setLinkIndex(Number(savedIndex)); // Restore saved index
    }
  }, [setLinkIndex]);


  if (!context) {
    return null;
  }

  const handleClick = (index: number) => {
    setLinkIndex(index); // Set the index when the user clicks the link

    // Save index to localStorage 
    localStorage.setItem("linkIndex", String(index));

  };



  return (
    <div className="border-y-2 border-y-[#222D4B]  flex gap-[3rem] font-manrope">
      {
        programLinks.map((link, index) => {
          return (
            <Link
              href={link.url}
              className={`text-[#222D4B] px-[10px] py-[10px]  text-[24px] leading-[4rem] font-semibold ${pathName.startsWith(link.url) ? "bg-[#F57F20] text-white" : ""}`}
              key={link.title}
              onClick={() => handleClick(index)}
            >
              {link.title}
            </Link>
          )
        })
      }
    </div>
  )
}
