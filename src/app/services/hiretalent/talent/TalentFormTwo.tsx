"use client"
import React, { useState } from 'react'
import SubmitButton from '../../ui/SubmitButton';
import { useStateAuthProvider } from '@/app/context';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axiosInstance from '@/app/BaseURL/baseURL';


type TalentForm = {
  skill: string;
  experience: string;
  availability: string;
  smLink: string;
  resume: File | null;

}


export default function TalentFormTwo() {

  const [userData, setUserData] = useState<TalentForm>({
    skill: 'design',
    experience: "beginner",
    availability: 'Full-time',
    smLink: '',
    resume: null,
  });

  const context = useStateAuthProvider();
  if (!context) {
    return null;
  }

  const { talentForm, setTalentForm, showErrorMessage } = context;

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


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();
    const { skill, experience, availability, smLink, resume } = userData;

    if (!skill || !experience || !availability || !smLink || !resume) {

      showErrorMessage();
    } else {

      const talentFormdata = { ...talentForm, ...userData }
      console.log(talentFormdata);

      const response = await axiosInstance.post('/register/talent', talentFormdata);

      console.log(response.data);

      setUserData({
        skill: "",
        experience: "",
        availability: "Full-time",
        smLink: "",
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
                    className="form-select block appearance-none  border border-gray-300 rounded-md "
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
                    className="form-select block appearance-none  border border-gray-300 rounded-md"
                    name="experience"
                    onChange={handleChange}
                    value={userData.experience}
                  >
                    <option value="beginer">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Expert</option>
                    <option value="advanced">Profesional</option>
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
                  Work Preference
                </label>
                <div className="relative">
                  <select
                    className="form-select block appearance-none  border border-gray-300 rounded-md"
                    name="availability "
                    onChange={handleChange}
                    value={userData.experience}
                  >
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Remote">Remote</option>
                    <option value="On-site">On-site</option>
                    <option value="Hybrid">Hybrid</option>
                    <option value="Shift Work">Shift Work</option>
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
                  Social media profile link
                </label>
                <input className="form-input"
                  type="text"
                  name="smLink"
                  placeholder="Paste URL"
                  onChange={handleChange}
                  value={userData.smLink}
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
        </div>
      </div>
    </div>
  )
}