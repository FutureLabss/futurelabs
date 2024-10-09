import React from 'react'
import Link from 'next/link'

export default function ContactForm() {

  const links = [
    {
      id: 1,
      name: "Learn a Skill",
      url: "services/learnskill",
    },
    {
      id: 2,
      name: "Hiring Talent",
      url: "services/hiretalent",
    },
    {
      id: 3,
      name: "Service Needed",
      url: "https://studio.futurelabs.ng",
    },
  ]
  return (
    <div className='text-center text-[#222D4B] flex flex-col gap-12 p-[44px] lg:p-[88px] bg-[#FFFFFF] max-w-[658px] w-full h-full rounded-lg font-manrope'>
      <h2 className='text-[1.5rem] md:text-[3rem]  font-medium leading-[3rem]'>What is your interest</h2>
      <div className='flex flex-col gap-3'>
        {
          links.map(link => (
            <Link href={link.url} key={link.id} className='py-2 md:py-[1rem] font-medium text-[1rem] sm:text-[24px] sm:px-[5rem] border-[1px] border-[#222D4B] rounded-lg transition transform hover:scale-[1.02] hover:bg-[#222D4B] hover:text-white' target={link.url == "https://studio.futurelabs.ng" ? "_blank" : ""}>
              {link.name}
            </Link>
          ))
        }
      </div>
    </div>
  )
}
