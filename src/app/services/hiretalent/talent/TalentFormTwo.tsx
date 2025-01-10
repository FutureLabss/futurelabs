"use client"
import React, { useState } from 'react'
import SubmitButton from '../../ui/SubmitButton';
import { useStateAuthProvider } from '@/app/context';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axiosInstance from '@/app/BaseURL/baseURL';
import { useRouter } from 'next/navigation';
import { isAxiosError } from 'axios';
// import axios from 'axios';


type TalentForm = {
  skill: string;
  experience: string;
  work_preference: string;
  social_link: string;
  pdf: File | null;

}


export default function TalentFormTwo() {

  const [userData, setUserData] = useState<TalentForm>({
    skill: 'design',
    experience: "beginner",
    work_preference: 'Full-time',
    social_link: '',
    pdf: null,
  });

  const router = useRouter();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const context = useStateAuthProvider();
  if (!context) {
    return null;
  }

  const { talentForm, setTalentForm, showErrorMessage, talentSubmissionErrorMessage, showEmailErrorMessage } = context;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;

    if (name === 'pdf' && e.target instanceof HTMLInputElement && e.target.files) {
      const files = e.target.files;
      console.log(files);
      setUserData({ ...userData, pdf: files ? files[0] : null });
    }
    // Handle text input and select
    else if (e.target instanceof HTMLSelectElement || e.target instanceof HTMLInputElement) {
      setUserData({ ...userData, [name]: value });
    }
  }


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();



    const { skill, experience, work_preference, social_link, pdf } = userData;

    if (!skill || !experience || !work_preference || !social_link || !pdf) {

      showErrorMessage();
      return;
    }

    setIsLoading(true);

    const formData = new FormData();

    try {
      const talentFormdata = { ...talentForm, ...userData };
      console.log("talentFormdata", talentFormdata);

      for (const [key, value] of Object.entries(talentFormdata)) {
        if (value !== null && value !== undefined) {
          // If value is a File or a string, append it directly
          formData.append(key, value instanceof File ? value : String(value));
        }
      }

      console.log("formData", formData);


      const response = await axiosInstance.post('/service/hire', formData,);

      console.log("response", response);
      const jsonResponse = response.data;

      if (jsonResponse.success) {
        console.log("response data", response);
        setUserData({
          skill: "UI/UX Design",
          experience: "beginner",
          work_preference: "Full-time",
          social_link: "",
          pdf: null,
        });
        setTalentForm({
          first_name: "",
          surname: "",
          email: "",
          phone_number: "",
          gender: "male",
          state: "",
        })
        router.push('/');
      }
      else {
        talentSubmissionErrorMessage();
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
    <div>

      <div className='flex flex-col gap-4'>
        <div className='text-end text-[#000] text-[2rem] font-inter font-[450]'>
          <p className='text-[1.5rem] sm:text-[2rem] xl:text-[3rem]'>2 out of 2</p>
        </div>
        <div>
          <form
            className='flex flex-col gap-12'
            onSubmit={handleSubmit}
            encType="multipart/form-data">


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
                <label className="form-label">
                  Experience
                </label>
                <div className="relative">
                  <select
                    className="form-select block appearance-none  border border-gray-300 rounded-md"
                    name="experience"
                    onChange={handleChange}
                    value={userData.experience}
                  >
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="expert">Expert</option>
                    <option value="profesional">Profesional</option>
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
                    name="work_preference"
                    onChange={handleChange}
                    value={userData.work_preference}
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
                  name="social_link"
                  placeholder="Paste URL"
                  onChange={handleChange}
                  value={userData.social_link}
                />

              </div>
              <div className="flex flex-col gap-3 ">
                <label htmlFor="" className='form-label'>
                  Upload CV, Resume etc
                </label>
                <input className="form-input hidden"
                  type="file"
                  id="resume-upload"
                  name="pdf"
                  accept='.pdf'
                  placeholder="Upload from device (pdf only)"
                  onChange={handleChange}
                />
                {/* Custom label acting as the upload button */}
                <label
                  htmlFor="resume-upload" // Triggers the hidden input
                  className="form-input block appearance-none cursor-pointer overflow-auto text-nowrap"
                >
                  {userData.pdf ? userData.pdf.name : "Upload from device (.pdf)"} {/* Show file name if selected */}
                </label>
              </div>
            </div>
            <SubmitButton isLoading={isLoading} isDisabled={isLoading} />
            <ToastContainer autoClose={3000} />
          </form>
        </div>
      </div>
    </div>
  )
}