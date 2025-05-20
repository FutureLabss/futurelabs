"use client";
// import { useState } from "react";
// import ProceedBtn from "../ui/ProceedBtn";
import { useStateAuthProvider } from "@/app/context";
import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
import { ToastContainer } from "react-toastify";

export default function ReusableForm() {
  // const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const context = useStateAuthProvider();
  useEffect(() => {
    const timer = setTimeout(() => {
      setSuccess(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [success]);
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

  const resetForm = () => {
    setFormData({
      first_name: "",
      surname: "",
      email: "",
      website: "",
      profession: "",
      quantityNeeded: 0,
      address: "",
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { first_name, surname, email, profession, address } = formData;
    if (!first_name || !surname || !email || !profession || !address) {
      showErrorMessage();
      // return
    } else {
      const submitData = {
        firstName: first_name,
        lastName: surname,
        companyEmail: email,
        companyWebsite: formData.website,
        professionNeeded: formData.profession,
        quantityNeeded: formData.quantityNeeded,
        contactAddress: address,
      };

      async function submitRequest(submitData: {
        firstName: string;
        lastName: string;
        companyEmail: string;
        companyWebsite: string | undefined;
        professionNeeded: string | undefined;
        quantityNeeded: number | undefined;
        contactAddress: string;
      }) {
        setLoading(true);
        setError(null);
        console.log("Submitting data:", submitData);
        try {
          const response = await fetch("http://localhost:5000/api/talents", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(submitData),
          });

          // if (!response.ok) {
          //   throw new Error("Network response was not ok");
          // }
          setLoading(false);
          setSuccess(true);
          resetForm();
          return await response.json();
        } catch (error) {
          console.error("Error:", error);
          setError("An error occurred while submitting the form.");
          setSuccess(false);
          throw error;
        } finally {
          setLoading(false);
        }
      }
      submitRequest(submitData);

      // router.push("/services/learnskill/form2");
    }
  };

  return (
    <div>
      {error && (
        <div className="bg-red-500 text-white p-4 rounded">{error}</div>
      )}
      {success && (
        <div className="bg-green-500 text-white p-4 rounded">
          Form submitted successfully!
        </div>
      )}
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
            value={formData.email}
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
              name="profession"
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
            name="quantityNeeded"
            placeholder="0"
            onChange={handleChange}
            value={formData.quantityNeeded}
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
          <button
            // disabled
            disabled={loading}
            type="submit"
            className="text-white text-[1.125rem]  shadow-[0rem_.25rem_.25rem_0rem_rgba(0,0,0,1)]
    bg-[#1D2640] max-w-[205px] h-auto w-full py-[10px]  rounded-[20px]"
          >
            {loading ? "Submitting..." : "Submit Application"}
          </button>
          {/* <ProceedBtn /> */}
        </div>
        <ToastContainer autoClose={2000} />
      </form>
    </div>
  );
}
