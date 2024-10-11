"use client";
// import { useState } from "react";
import ProceedBtn from "../ui/ProceedBtn";
import { useStateAuthProvider } from "@/app/context"
import { useRouter } from "next/navigation";
import { ToastContainer } from "react-toastify";


export default function ReusableForm() {


  const router = useRouter()

  const context = useStateAuthProvider();
  if (!context) {
    return null;
  }

  const { formData, setFormData, showErrorMessage } = context;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { firstName, lastName, email, gender, skill, address } = formData;
    if (!firstName || !lastName || !email || !gender || !skill || !address) {
      showErrorMessage();
      // return
    } else {

      console.log(formData);
      router.push("/services/learnskill/form2")

    }
  }
  return (
    <div>
      <form
        className="grid grid-cols-1 md:grid-cols-2 gap-[3rem]" onSubmit={handleSubmit}>

        <div className="flex flex-col gap-3 ">
          <label htmlFor="form-label">
            First Name
          </label>
          <input className="form-input"
            type="text"
            name="firstName"
            placeholder="Enter your first name"
            onChange={handleChange}
            value={formData.firstName}
          />
        </div>
        <div className="flex flex-col gap-3 ">
          <label htmlFor="form-label">
            Last Name
          </label>
          <input className="form-input"
            type="text"
            name="lastName"
            placeholder="Enter your last name"
            onChange={handleChange}
            value={formData.lastName}
          />
        </div>
        <div className="flex flex-col gap-3 ">
          <label htmlFor="form-label">
            Email
          </label>
          <input className="form-input"
            type="email"
            name="email"
            placeholder="Enter Email Address"
            onChange={handleChange}
            value={formData.email}
          />

        </div>
        <div className="flex flex-col gap-3 ">
          <label htmlFor="form-label">
            Gender
          </label>
          <div className="relative">
            <select className="form-select appearance-none"
              name="gender"
              onChange={handleChange}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-6 pointer-events-none">
              <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 ">
          <label htmlFor="form-label">
            Contact Address
          </label>
          <input className="form-input"
            type="text"
            name="address"
            placeholder="Enter here"
            onChange={handleChange}
            value={formData.address}
          />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="skill" className="form-label">
            Choose Skill
          </label>
          <div className="relative">
            <select
              className="form-select appearance-none"
              name="skill"
              onChange={handleChange}
              value={formData.skill}
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


        <ProceedBtn />
        <ToastContainer autoClose={2000} />
      </form>
    </div>
  )
}
