"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Links() {

  const pathname = usePathname()

  const links = [
    {
      title: "Learn a Skill",
      path: "/services/learnskill",
    },
    {
      title: "Hiring Talent",
      path: "/services/hiretalent",
    },
    {
      title: "Service Needed",
      path: "/services/serviceneeded",
    },
  ]
  return (
    <div className="flex gap-[1rem] xl:justify-between ">
      {links.map((link, index) => (
        <Link href={link.path} key={index} className={`font-inter text-[.6rem] sm:text-[1.125rem] xl:text-[20px] font-medium border-[2px] border-[#222D4B] rounded-lg max-w-[230px] py-[1rem] w-full text-center ${pathname.startsWith(link.path) ? " bg-[#222D4B] text-white" : "text-[#222D4B]"}`}>
          {link.title}
        </Link>
      ))}
    </div>
  )
}
