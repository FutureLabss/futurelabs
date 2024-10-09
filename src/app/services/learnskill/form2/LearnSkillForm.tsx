"use client"
import React, { useState } from 'react'
import SubmitButton from '../../ui/SubmitButton';
import { useStateAuthProvider } from '@/app/context';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PaymentMethod from '../../components/PaymentMethod';
import axiosInstance from '@/app/BaseURL/baseURL';



export default function LearnSkillForm() {



  const [userData, setUserData] = useState({
    state: '',
    locality: '',
    ageRange: '',
    discoveryMethod: '',
  });



  const context = useStateAuthProvider();
  if (!context) {
    return null;
  }

  const { formData, setFormData, showErrorMessage, showPayment,
    setShowPayment } = context;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });

  }


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();
    const { state, locality, ageRange, discoveryMethod } = userData;

    if (!state || !locality || !ageRange || !discoveryMethod) {

      showErrorMessage(); 
    } else {

      const learnSkillFormdata = { ...formData, ...userData }
      console.log(learnSkillFormdata);
      const res = await axiosInstance.post('/register/entry', learnSkillFormdata)

      console.log(res);
      setShowPayment(true);

      setUserData({
        state: '',
        locality: '',
        ageRange: '',
        discoveryMethod: '',
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        gender: "male",
        skill: "UI/UX Design",
        address: "",
      })
    }

  }


  return (
    <div className='relative'>

      <div className='flex flex-col gap-4'>
        <div className='text-end text-[#000] text-[2rem] font-inter font-[450]'>
          <p className='text-[1.5rem] sm:text-[2rem] xl:text-[3rem]'>2 out of 2</p>
        </div>
        <div>
          <form className='flex flex-col gap-12'
            onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-[1rem] xl:gap-[3rem]">
              <div className="flex flex-col gap-3 ">
                <label htmlFor="" className='form-label'>
                  Location by State
                </label>
                <input className="form-input"
                  type="text"
                  name="state"
                  placeholder="Enter your location"
                  onChange={handleChange}
                  value={userData.state}
                />
              </div>
              <div className="flex flex-col gap-3 ">
                <label htmlFor="" className='form-label'>
                  Age Range
                </label>
                <div className='relative'>
                  <select className="form-select block appearance-none  border border-gray-300 rounded-md text-gray-900"
                    name="ageRange"
                    id=""
                    onChange={handleChange}>
                    value={userData.ageRange}
                    <option value="">Choose Age</option>
                    <option value="15-20">15-20</option>
                    <option value="20-25">20-25</option>
                    <option value="25-30">25-30</option>
                    <option value="30+">30+</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-6 pointer-events-none">
                    <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3 ">
                <label htmlFor="" className='form-label'>
                  Location by LGA
                </label>
                <input className="form-input"
                  type="text"
                  name="locality"
                  placeholder="Enter your LGA"
                  onChange={handleChange}
                  value={userData.locality}
                />

              </div>
              <div className="flex flex-col gap-3 ">
                <label htmlFor="" className='form-label'>
                  How did you hear about us
                </label>
                <input className="form-input"
                  type="text"
                  name="discoveryMethod"
                  placeholder="Enter here"
                  onChange={handleChange}
                  value={userData.discoveryMethod}
                />

              </div>
            </div>
            <div className={`fixed top-0 left-0 flex items-center bg-black/20 justify-center min-h-screen  ${showPayment ? "block" : "hidden"} w-full`} onClick={() => setShowPayment(false)}>
              <PaymentMethod />
            </div>
            <SubmitButton />
            <ToastContainer autoClose={2000} />
          </form>
        </div>
      </div>
    </div>
  )
}


