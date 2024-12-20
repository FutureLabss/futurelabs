import React from 'react'
// import { CirclesWithBar } from 'react-loader-spinner'
import { RotatingLines } from 'react-loader-spinner'

type BtnProps = {
  isLoading?: boolean;
  isDisabled?: boolean
}

export default function SubmitButton({ isLoading, isDisabled }: BtnProps) {
  return (
    <button
      type="submit"
      className="text-white text-[24px] shadow-[0rem_.25rem_.25rem_0rem_rgba(0,0,0,1)]
    bg-[#1D2640]  max-w-[205px] h-auto w-full py-[17px] md:py-[20px] rounded-[20px] flex items-center justify-center"
      disabled={isDisabled}

    >

      {isLoading ? <RotatingLines width="40" strokeColor="#f57f20" /> : "Submit"}
    </button>
  )
}
