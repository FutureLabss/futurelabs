"use client"
import React, { useState } from 'react'
import SubmitButton from '../../ui/SubmitButton';
import { useStateAuthProvider } from '@/app/context';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PaymentMethod from '../../components/PaymentMethod';


type TalentForm = {
  skill: string;
  experience: string;
  preference: string;
  url: string;
  resume: File | null;
}


export default function TalentFormTwo() {

  const [userData, setUserData] = useState<TalentForm>({
    skill: 'design',
    experience: "beginner",
    preference: '',
    url: '',
    resume: null,
  });

  const context = useStateAuthProvider();
  if (!context) {
    return null;
  }

  const { talentForm, setTalentForm, showErrorMessage, showPayment,
    setShowPayment } = context;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;

    if (name === 'resume' && e.target instanceof HTMLInputElement && e.target.files) {
      const files = e.target.files;
      console.log(files);
      setUserData({ ...userData, resume: files ? files[0] : null });
    }
    // Handle text input and select
    else if (e.target instanceof HTMLSelectElement || e.target instanceof HTMLInputElement) {
      setUserData({ ...userData, [name]: value });
    }
  }


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();
    const { skill, experience, preference, url, resume } = userData;

    if (!skill || !experience || !preference || !url || !resume) {

      showErrorMessage();
    } else {
      console.log({ ...talentForm, ...userData });
      setShowPayment(true);

      setUserData({
        skill: "",
        experience: "",
        preference: "",
        url: "",
        resume: null,
      });
      setTalentForm({
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
    <div>

      <div className='flex flex-col gap-4'>
        <div className='text-end text-[#000] text-[2rem] font-inter font-[450]'>
          <p className='text-[1.5rem] sm:text-[2rem] xl:text-[3rem]'>2 out of 2</p>
        </div>
        <div>
          <form className='flex flex-col gap-12'
            onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-[1rem] xl:gap-[3rem]">
              <div className="flex flex-col gap-3">
                <label htmlFor="skill" className="form-label">
                  Choose Skill
                </label>
                <div className="relative">
                  <select
                    className="form-select block appearance-none  border border-gray-300 rounded-md text-gray-900 "
                    name="skill"
                    onChange={handleChange}
                    value={userData.skill}
                  >
                    <option value="design">UI/UX Design</option>
                    <option value="development">Web Development</option>
                    <option value="marketing">Marketing</option>
                    <option value="management">Management</option>
                    <option value="data-analysis">Data Analytics</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-6 pointer-events-none">
                    <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <label htmlFor="skill" className="form-label">
                  Experience
                </label>
                <div className="relative">
                  <select
                    className="form-select block appearance-none  border border-gray-300 rounded-md text-gray-900 "
                    name="experience"
                    onChange={handleChange}
                    value={userData.experience}
                  >
                    <option value="beginer">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
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
                  Work Preference
                </label>
                <input className="form-input"
                  type="text"
                  name="preference"
                  placeholder="Input Email"
                  onChange={handleChange}
                  value={userData.preference}

                />

              </div>
              <div className="flex flex-col gap-3 ">
                <label htmlFor="" className='form-label'>
                  Social media profile link
                </label>
                <input className="form-input"
                  type="text"
                  name="url"
                  placeholder="Paste URL"
                  onChange={handleChange}
                  value={userData.url}
                />

              </div>
              <div className="flex flex-col gap-3 ">
                <label htmlFor="" className='form-label'>
                  Upload CV, Resume etc
                </label>
                <input className="form-input hidden"
                  type="file"
                  id="resume-upload"
                  name="resume"
                  placeholder="Upload from device"
                  onChange={handleChange}
                />
                {/* Custom label acting as the upload button */}
                <label
                  htmlFor="resume-upload" // Triggers the hidden input
                  className="form-input block appearance-none cursor-pointer overflow-auto"
                >
                  {userData.resume ? userData.resume.name : "Upload from device"} {/* Show file name if selected */}
                </label>
              </div>
            </div>
            <SubmitButton />
            <ToastContainer autoClose={2000} />
          </form>
          <div className={`fixed top-0 left-0 flex items-center bg-black/20 justify-center min-h-screen  ${showPayment ? "block" : "hidden"} w-full`} onClick={() => setShowPayment(false)}>
            <PaymentMethod />
          </div>
        </div>
      </div>
    </div>
  )
}