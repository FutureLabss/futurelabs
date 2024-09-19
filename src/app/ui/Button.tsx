
// import Link from 'next/link'
"use client"
type Props = {
  setShowForm: (showForm: boolean) => void,
  showForm: boolean
}

export default function Button({ setShowForm, showForm }: Props) {
  return (
    <button className=' bg-secondary-50 w-full font-medium text-size-20 text-primary-default px-[2rem] py-[1.125rem] rounded-[2.625rem] outline-none cursor-pointer' onClick={() => setShowForm(!showForm)}>
      Get Started
    </button>
  )
}
