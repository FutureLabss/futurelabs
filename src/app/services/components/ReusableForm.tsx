"use client";
// import { useState } from "react";
import ProceedBtn from "../ui/ProceedBtn";
import { useStateAuthProvider } from "@/app/context";
import { useRouter } from "next/navigation";
import { ToastContainer } from "react-toastify";

export default function ReusableForm() {
  const router = useRouter();

  const context = useStateAuthProvider();
  if (!context) {
    return null;
  }

  const { formData, setFormData, showErrorMessage } = context;

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { first_name, surname, email, gender, skill, address } = formData;
    if (!first_name || !surname || !email || !gender || !skill || !address) {
      showErrorMessage();
      // return
    } else {
      console.log(formData);
      router.push("/services/learnskill/form2");
    }
  };
  return (
    <div>
      <form
        className="grid grid-cols-1 md:grid-cols-2 gap-[1rem]"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-3 ">
          <label htmlFor="form-label">First Name</label>
          <input
            className="form-input"
            type="text"
            name="first_name"
            placeholder="Enter your first name"
            onChange={handleChange}
            value={formData.first_name}
          />
        </div>
        <div className="flex flex-col gap-3 ">
          <label htmlFor="form-label">Last Name</label>
          <input
            className="form-input"
            type="text"
            name="surname"
            placeholder="Enter your surname"
            onChange={handleChange}
            value={formData.surname}
          />
        </div>
        <div className="flex flex-col gap-3 ">
          <label htmlFor="form-label"> Company Email</label>
          <input
            className="form-input"
            type="email"
            name="email"
            placeholder="Enter Email Address"
            onChange={handleChange}
            // value={formData.email}
          />
        </div>
        <div className="flex flex-col gap-3 ">
          <label htmlFor="form-label"> Company Website</label>
          <input
            className="form-input"
            type="text"
            name="website"
            placeholder="Enter Email Address"
            onChange={handleChange}
            // value={formData.email}
          />
        </div>
        <div className="flex flex-col gap-3 ">
          <label htmlFor="form-label">Choose Profession</label>
          <div className="relative">
            <select
              className="form-select appearance-none"
              name="gender"
              onChange={handleChange}
            >
              <option value="frontend">Front-end Developer</option>
              <option value="backend">Backend Developer</option>
              <option value="designer">Designer</option>
              <option value="data-scientist">Data Scientist</option>
              <option value="project-manager">Project Manager</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-6 pointer-events-none">
              <svg
                className="w-6 h-6 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 ">
          <label htmlFor="form-label">
            {" "}
            How many of the Profession do you need?
          </label>
          <input
            className="form-input"
            type="number"
            name="email"
            placeholder="2"
            onChange={handleChange}
            value={formData.email}
          />
        </div>
        <div className="flex flex-col gap-3 ">
          <label htmlFor="form-label">Contact Address</label>
          <input
            className="form-input"
            type="text"
            name="address"
            placeholder="Enter here"
            onChange={handleChange}
            value={formData.address}
          />
        </div>
        {/* <div className="flex flex-col gap-3">
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
              <svg
                className="w-6 h-6 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div> */}
        <div className="flex items-center justify-center mt-6">
          <ProceedBtn />
        </div>
        <ToastContainer autoClose={2000} />
      </form>
    </div>
  );
}
