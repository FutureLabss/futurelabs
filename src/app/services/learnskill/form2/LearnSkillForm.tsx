"use client"
import React, { useEffect, useState } from 'react'
import SubmitButton from '../../ui/SubmitButton';
import { useStateAuthProvider } from '@/app/context';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PaymentMethod from '../../components/PaymentMethod';

import { useRouter } from 'next/navigation';
import axiosInstance from '@/app/BaseURL/baseURL';
import { isAxiosError } from 'axios';



export default function LearnSkillForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();




  const [userData, setUserData] = useState({
    state: '',
    lga: '',
    age_range: '',
    heard_about_us: '',
  });


  const context = useStateAuthProvider();
  if (!context) {
    return null;
  }

  const { formData, setFormData, showErrorMessage, showPayment,
    setShowPayment, showEmailErrorMessage, showEmailSuccessMessage } = context;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });

  }


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();
    const { state, lga, age_range, heard_about_us } = userData;

    if (!state || !lga || !age_range || !heard_about_us) {

      showErrorMessage();
    }

    try {
      setIsLoading(true);
      const learnSkillFormdata = { ...formData, ...userData }

      const response = await axiosInstance.post(
        '/service/learn',
        learnSkillFormdata,
        {
          headers: {
            'x-api-key': 'NKa4Do2rjKnhYhmHHXIyw9nGEG3o7fNvCGoS9s0VFRQ',
          },
        }
      );

      const jsonResponse = response.data;
      console.log(" jsonResponse", jsonResponse);

      if (jsonResponse.success) {
        showEmailSuccessMessage();
        console.log("response data", response);
        setUserData({
          state: '',
          lga: '',
          age_range: '',
          heard_about_us: '',
        });
        setFormData({
          first_name: "",
          surname: "",
          email: "",
          gender: "male",
          skill: "design",
          address: "",
        })

        router.push('/email');

      }
      else {
        throw new Error("Failed to register talent form");
      }

    } catch (error) {
      if (isAxiosError(error) && error.response) {
        showEmailErrorMessage(error.response.data.message);
      } else {
        showEmailErrorMessage("An unexpected error occurred");
      }
      console.error("Error during submission process:", error);


    } finally {
      setIsLoading(false);
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
                    name="age_range"
                    id=""
                    onChange={handleChange}>
                    value={userData.age_range}
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
                  name="lga"
                  placeholder="Enter your LGA"
                  onChange={handleChange}
                  value={userData.lga}
                />

              </div>
              <div className="flex flex-col gap-3 ">
                <label htmlFor="" className='form-label'>
                  How did you hear about us
                </label>
                <input className="form-input"
                  type="text"
                  name="heard_about_us"
                  placeholder="Enter here"
                  onChange={handleChange}
                  value={userData.heard_about_us}
                />

              </div>
            </div>
            <div className={`fixed top-0 left-0 flex items-center bg-black/20 justify-center min-h-screen  ${showPayment ? "block" : "hidden"} w-full`} onClick={() => setShowPayment(false)}>
              <PaymentMethod />
            </div>
            <SubmitButton isLoading={isLoading} />
            <ToastContainer autoClose={2000} />
          </form>
        </div>
      </div>
    </div>
  )
}


