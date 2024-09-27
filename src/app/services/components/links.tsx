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
        <Link href={link.path} key={index} className={`font-inter font-medium border-[2px] border-[#222D4B] rounded-lg px-[3.5rem] py-[1rem] ${pathname.startsWith(link.path) ? " bg-[#222D4B] text-white" : "text-[#222D4B]"}`}>
          {link.title}
        </Link>
      ))}
    </div>
  )
}
