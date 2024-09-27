"use client";
// import { useState } from "react";
import ProceedBtn from "../ui/ProceedBtn";
import { useStateAuthProvider } from "@/app/context"
import { useRouter } from "next/navigation";


export default function ReusableForm() {


  const router = useRouter()

  const context = useStateAuthProvider();
  if (!context) {
    return null;
  }

  const { formData, setFormData } = context;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { firstName, lastName, email, gender, skill, address } = formData;
    if (!firstName || !lastName || !email || !gender || !skill || !address) {
      alert("All fields are required")
      // return
    } else {

      console.log(formData);
      router.push("/services/learnskill/form2")
    }
  }
  return (
    <div>
      <form action="/form2"
        className="grid grid-cols-2 gap-[3rem]" onSubmit={handleSubmit}>

        <div className="flex flex-col gap-3 ">
          <label htmlFor="">
            First Name
          </label>
          <input className="py-[27px] pl-[24px] rounded-lg border-[1px] border-[#222D4B] placeholder:text-[24px] placholder:font-[450] placeholder:text-[#222D4BB2]"
            type="text"
            name="firstName"
            placeholder="Enter your first name"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-3 ">
          <label htmlFor="">
            Last Name
          </label>
          <input className="py-[27px] pl-[24px] rounded-lg border-[1px] border-[#222D4B] placeholder:text-[24px] font-[450] placeholder:text-[#222D4BB2]"
            type="text"
            name="lastName"
            placeholder="Enter your last name"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-3 ">
          <label htmlFor="">
            Email
          </label>
          <input className="py-[27px] pl-[24px] rounded-lg border-[1px] border-[#222D4B] placeholder:text-[24px] font-[450] placeholder:text-[#222D4BB2]"
            type="email"
            name="email"
            placeholder="Enter Email Address"
            onChange={handleChange} />
        </div>
        <div className="flex flex-col gap-3 ">
          <label htmlFor="">
            Gender
          </label>
          <select className="py-[22px] pl-[24px] rounded-lg border-[1px] border-[#222D4B] placeholder:text-[24px] font-[450] placeholder:text-[#222D4BB2]"
            name="gender"
            id=""
            onChange={handleChange}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="flex flex-col gap-3 ">
          <label htmlFor="">
            Contact Address
          </label>
          <input className="py-[27px] pl-[24px] rounded-lg border-[1px] border-[#222D4B] placeholder:text-[24px] font-[450] placeholder:text-[#222D4BB2]"
            type="text"
            name="address"
            placeholder="Enter here"
            onChange={handleChange} />
        </div>
        <div className="flex flex-col gap-3 ">
          <label htmlFor="">
            Choose Skill
          </label>
          <select className="py-[22px] pl-[24px] rounded-lg border-[1px] border-[#222D4B] placeholder:text-[24px] font-[450] placeholder:text-[#222D4BB2]"
            name="skill"
            id=""
            onChange={handleChange}>
            <option value="design">UI/UX Design</option>
            <option value="development">Web Development</option>
            <option value="marketing">Marketing</option>
            <option value="management">Management</option>
            <option value="data-analysis">Data Analytics</option>
          </select>
        </div>

        <ProceedBtn />
      </form>
    </div>
  )
}
