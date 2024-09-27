"use client"
import React, { useState } from 'react'
import SubmitButton from '../../ui/SubmitButton';
import { useStateAuthProvider } from '@/app/context';
import { ToastContainer } from 'react-toastify';

export default function LearnSkillForm() {

  const [userData, setUserData] = useState({
    location: '',
    LGA: '',
    age: '',
    state: '',
    aboutus: '',
  });
  const context = useStateAuthProvider();
  if (!context) {
    return null;
  }

  const { formData, showErrorMessage } = context;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });

  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();
    const { location, LGA, age, state, aboutus } = userData;

    if (!location || !LGA || !age || !state || !aboutus) {

      showErrorMessage();
    } else {

      console.log({ ...formData, ...userData });
    }
  }


  return (
    <div>

      <div className='flex flex-col gap-4'>
        <div className='text-end text-[#000] text-[2rem] font-inter font-[450]'>
          <p>2 out of 2</p>
        </div>
        <div>
          <form className='flex flex-col gap-12'
            onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-[3rem]">
              <div className="flex flex-col gap-3 ">
                <label htmlFor="">
                  Location
                </label>
                <input className="py-[27px] pl-[24px] rounded-lg border-[1px] border-[#222D4B] placeholder:text-[24px] font-[450] placeholder:text-[#222D4BB2]"
                  type="text"
                  name="location"
                  placeholder="Enter your location"
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col gap-3 ">
                <label htmlFor="">
                  Location by State
                </label>
                <input className="py-[27px] pl-[24px] rounded-lg border-[1px] border-[#222D4B] placeholder:text-[24px] font-[450] placeholder:text-[#222D4BB2]"
                  type="text"
                  name="state"
                  placeholder="Enter your State"
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col gap-3 ">
                <label htmlFor="">
                  Age Range
                </label>
                <select className="py-[22px] pl-[24px] rounded-lg border-[1px] border-[#222D4B] placeholder:text-[24px] font-[450] placeholder:text-[#222D4BB2]"
                  name="age"
                  id=""
                  onChange={handleChange}>
                  <option value="">Choose Age</option>
                  <option value="15-20">15-20</option>
                  <option value="20-25">20-25</option>
                  <option value="25-30">25-30</option>
                  <option value="30+">30+</option>
                </select>
              </div>
              <div className="flex flex-col gap-3 ">
                <label htmlFor="">
                  Location by LGA
                </label>
                <input className="py-[27px] pl-[24px] rounded-lg border-[1px] border-[#222D4B] placeholder:text-[24px] font-[450] placeholder:text-[#222D4BB2]"
                  type="text"
                  name="LGA"
                  placeholder="Enter your LGA"
                  onChange={handleChange} />
              </div>
              <div className="flex flex-col gap-3 col-span-2 ">
                <label htmlFor="">
                  How did you hear about us
                </label>
                <input className="py-[27px] pl-[24px] rounded-lg border-[1px] border-[#222D4B] placeholder:text-[24px] font-[450] placeholder:text-[#222D4BB2]"
                  type="text"
                  name="aboutus"
                  placeholder="Enter here"
                  onChange={handleChange} />
              </div>
            </div>
            <SubmitButton />
            <ToastContainer />
          </form>
        </div>
      </div>
    </div>
  )
}
