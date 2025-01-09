import React from 'react'
import Link from 'next/link'


type Props = {
  setShowForm: (showForm: boolean) => void
}

const links = [
  {
    id: 1,
    name: "Learn a Skill",
    url: "https://futurelabs-lms.vercel.app/",
  },
  {
    id: 2,
    name: "Hiring Talent",
    url: "https://futurelabs-lms.vercel.app/",
  },
  {
    id: 3,
    name: "Service Needed",
    url: "https://studio.futurelabs.ng",
  },
]

export default function ContactForm({ setShowForm }: Props) {




  return (
    <div className='bg-[#FFFFFF] rounded-lg '>
      <div className='flex justify-end p-4 cursor-pointer' onClick={() => setShowForm(false)}>
        <svg className='w-10 h-10' data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"></path>
        </svg>
      </div>
      <div className='text-center text-[#222D4B] flex flex-col gap-12 p-[35px] sm:p-[40px] lg:p-[50px] w-full h-full font-manrope'>

        <h2 className='text-[1.6rem] sm:text-[2.5rem] md:text-[2.8rem] font-medium leading-[3rem]'>What is your interest</h2>
        <div className='flex flex-col gap-3'>
          {
            links.map(link => (
              <Link href={link.url} key={link.id} className='py-2 md:py-[1rem] font-medium text-[1.5rem] sm:text-[1.8rem]  sm:px-[5rem] border-[1px] border-[#222D4B] rounded-lg transition transform hover:scale-[1.02] hover:bg-[#222D4B] hover:text-white' target={link.url == "https://studio.futurelabs.ng" ? "_blank" : ""}>
                {link.name}
              </Link>
            ))
          }
        </div>
      </div>
    </div>
  )
}
