// components/ApplyForJobForm.tsx
"use client"; // Make sure this is a client component

import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Define the FormData interface for Job Seekers
interface JobSeekerFormData {
  fullName: string;
  email: string;
  phoneNumber: string;
  desiredRole: string;
  experience: number;
  portfolio: string;
  resume: File | null; // This will hold the File object
  coverLetter: string;
}

const ApplyForJobForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState<JobSeekerFormData>({
    fullName: "",
    email: "",
    phoneNumber: "",
    desiredRole: "",
    experience: 0,
    portfolio: "",
    resume: null, // Initialize as null
    coverLetter: "",
  });

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setSuccess(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  const showErrorMessage = (
    message: string = "Please fill in all required fields."
  ) => {
    toast.error(message);
  };

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement> // Include select if you had one
  ) => {
    const { name, value, type } = e.target;
    // Handle number input specifically
    const newValue = type === "number" ? Number(value) : value;
    setFormData({ ...formData, [name]: newValue });
  };

  // Special handler for file input
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFormData({ ...formData, resume: e.target.files[0] });
    } else {
      setFormData({ ...formData, resume: null });
    }
  };

  const resetForm = () => {
    setFormData({
      fullName: "",
      email: "",
      phoneNumber: "",
      desiredRole: "",
      experience: 0,
      portfolio: "",
      resume: null,
      coverLetter: "",
    });
    // Reset file input element manually if needed, otherwise react handles it
    const fileInput = document.getElementById("resume") as HTMLInputElement;
    if (fileInput) {
      fileInput.value = "";
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    const { fullName, email, desiredRole, experience, resume } = formData;

    // Client-side validation for job seeker form
    if (
      !fullName ||
      !email ||
      !desiredRole ||
      experience <= 0 || // Assuming experience must be at least 1
      !resume // CV is required
    ) {
      showErrorMessage(
        "Please fill all required fields, including uploading your Resume/CV, and ensure years of experience is greater than 0."
      );
      return;
    }

    setLoading(true);
    try {
      // Use FormData API for sending multipart/form-data
      const dataToSend = new FormData();
      dataToSend.append("type", "job_seeker"); // <--- IMPORTANT: Identify submission type
      dataToSend.append("fullName", formData.fullName);
      dataToSend.append("email", formData.email);
      dataToSend.append("phoneNumber", formData.phoneNumber);
      dataToSend.append("desiredRole", formData.desiredRole);
      dataToSend.append("experience", String(formData.experience)); // Convert number to string for FormData
      dataToSend.append("portfolio", formData.portfolio);
      if (formData.resume) {
        dataToSend.append("resume", formData.resume); // Append the actual File object
      }
      dataToSend.append("coverLetter", formData.coverLetter);

      console.log("Submitting job application data...", dataToSend);
      const response = await fetch(
        "https://talent-backend-o5cb.onrender.com/api/talents", // Same endpoint as recruiters
        {
          method: "POST",
          body: dataToSend, // No 'Content-Type' header needed; FormData sets it correctly
        }
      );

      if (response.status === 409) {
        const data = await response.json();
        const msg =
          data.error || "A job application with this email already exists.";
        setError(msg);
        toast.error(msg);
      } else if (!response.ok) {
        const data = await response.json();
        const errorMessage = Array.isArray(data.error)
          ? data.error.join(", ")
          : data.error || "Something went wrong with your application.";
        setError(errorMessage);
        toast.error(errorMessage);
      } else {
        setSuccess(true);
        resetForm();
        toast.success("Job application submitted successfully!");
      }
    } catch (apiError: unknown) {
      console.error("Error submitting job application:", apiError);
      setError(
        "An error occurred while submitting your application. Please try again."
      );
      toast.error(
        "An error occurred while submitting your application. Please try again."
      );
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 md:p-8 bg-white">
      <h2 className="text-2xl md:text-3xl font-extrabold mb-8 text-gray-800 text-center">
        Apply for Job
      </h2>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6"
      >
        {/* Error and Success Messages */}
        {error && (
          <div
            className="md:col-span-2 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4"
            role="alert"
          >
            <strong className="font-bold">Error!</strong>
            <span className="block sm:inline"> {error}</span>
          </div>
        )}
        {success && (
          <div
            className="md:col-span-2 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4"
            role="alert"
          >
            <strong className="font-bold">Success!</strong>
            <span className="block sm:inline">
              {" "}
              Job application submitted successfully!
            </span>
          </div>
        )}

        {/* Full Name */}
        <div>
          <label
            htmlFor="fullName"
            className="block text-sm font-semibold text-gray-700 mb-1"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Enter your full name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1D2640] focus:border-[#1D2640] text-base"
            onChange={handleChange}
            value={formData.fullName}
          />
        </div>

        {/* Email Address */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-gray-700 mb-1"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email address"
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1D2640] focus:border-[#1D2640] text-base"
            onChange={handleChange}
            value={formData.email}
          />
        </div>

        {/* Phone Number */}
        <div>
          <label
            htmlFor="phoneNumber"
            className="block text-sm font-semibold text-gray-700 mb-1"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="Enter your phone number"
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1D2640] focus:border-[#1D2640] text-base"
            onChange={handleChange}
            value={formData.phoneNumber}
          />
        </div>

        {/* Desired Role */}
        <div>
          <label
            htmlFor="desiredRole"
            className="block text-sm font-semibold text-gray-700 mb-1"
          >
            Desired Role
          </label>
          <input
            type="text"
            id="desiredRole"
            name="desiredRole"
            placeholder="e.g., Front-end Developer"
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1D2640] focus:border-[#1D2640] text-base"
            onChange={handleChange}
            value={formData.desiredRole}
          />
        </div>

        {/* Years of Experience */}
        <div>
          <label
            htmlFor="experience"
            className="block text-sm font-semibold text-gray-700 mb-1"
          >
            Years of Experience
          </label>
          <input
            type="number"
            id="experience"
            name="experience"
            placeholder="0"
            min="0"
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1D2640] focus:border-[#1D2640] text-base"
            onChange={handleChange}
            value={formData.experience}
          />
        </div>

        {/* Link to Portfolio/LinkedIn */}
        <div>
          <label
            htmlFor="portfolio"
            className="block text-sm font-semibold text-gray-700 mb-1"
          >
            Portfolio/LinkedIn URL (Optional)
          </label>
          <input
            type="url"
            id="portfolio"
            name="portfolio"
            placeholder="https://your-portfolio.com"
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1D2640] focus:border-[#1D2640] text-base"
            onChange={handleChange}
            value={formData.portfolio}
          />
        </div>

        {/* Resume/CV Upload */}
        <div className="md:col-span-2">
          <label
            htmlFor="resume"
            className="block text-sm font-semibold text-gray-700 mb-1"
          >
            Upload Resume/CV (PDF preferred)
          </label>
          <input
            type="file"
            id="resume"
            name="resume"
            accept=".pdf,.doc,.docx" // Restrict file types
            className="w-full text-base text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-[#1D2640] hover:file:bg-blue-100"
            onChange={handleFileChange} // Use specific file handler
          />
        </div>

        {/* Cover Letter (Optional) */}
        <div className="">
          <label
            htmlFor="coverLetter"
            className="block text-sm font-semibold text-gray-700 mb-1"
          >
            Cover Letter (Optional)
          </label>
          <textarea
            id="coverLetter"
            name="coverLetter"
            rows={8}
            placeholder="Tell us about yourself and why you're a good fit..."
            className="w-full text-base text-gray-700 border file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-[#1D2640] hover:file:bg-blue-100" // Added resize-y for vertical resizing
            onChange={handleChange}
            value={formData.coverLetter}
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2 flex justify-center mt-6">
          <button
            type="submit"
            disabled={loading} // Disable button when loading
            className="bg-[#1D2640] hover:bg-[#2A375A] text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition duration-300 ease-in-out hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#1D2640] disabled:opacity-50 disabled:cursor-not-allowed"
            style={{
              boxShadow:
                "0 4px 15px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
            }}
          >
            {loading ? "Submitting..." : "Submit Application"}
          </button>
        </div>
      </form>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default ApplyForJobForm;
