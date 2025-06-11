// components/HireTalentForm.tsx
"use client"; // Essential for using hooks like useState, useEffect
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Make sure this CSS is imported somewhere global or here

// Define the FormData interface
interface FormData {
  first_name: string;
  surname: string;
  email: string;
  website: string;
  profession: string;
  quantityNeeded: number;
  address: string;
}

const HireTalentForm: React.FC = () => {
  // --- State Management derived from ReusableForm ---
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  // Initialize formData with default values matching the structure
  const [formData, setFormData] = useState<FormData>({
    first_name: "",
    surname: "",
    email: "",
    website: "",
    profession: "",
    quantityNeeded: 0,
    address: "",
  });

  // Effect for success message timeout (from ReusableForm)
  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setSuccess(false);
      }, 3000); // Hide success message after 3 seconds
      return () => clearTimeout(timer);
    }
  }, [success]);

  // Function to show a toast error message (from ReusableForm)
  const showErrorMessage = (
    message: string = "Please fill in all required fields."
  ) => {
    toast.error(message);
  };

  // Handle input changes (from ReusableForm)
  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    // For number inputs, parse the value to a number
    const newValue = type === "number" ? Number(value) : value;
    setFormData({ ...formData, [name]: newValue });
  };

  // Reset form to initial state (from ReusableForm)
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

  // Handle form submission (from ReusableForm)
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null); // Clear previous errors

    // Destructure ALL fields for validation
    const {
      first_name,
      surname,
      email,
      website,
      profession,
      quantityNeeded,
      address,
    } = formData;

    // Client-side validation: Check if ANY of the required fields are empty/invalid
    if (
      !first_name ||
      !surname ||
      !email ||
      !website ||
      !profession ||
      quantityNeeded <= 0 ||
      !address
    ) {
      showErrorMessage();
      return;
    }

    // Prepare data for API submission, mapping to backend keys
    const submitData = {
      type: "recruiter", // <--- NEW: Add the type field for recruiter submissions
      firstName: first_name,
      lastName: surname,
      companyEmail: email,
      companyWebsite: website,
      professionNeeded: profession,
      quantityNeeded: quantityNeeded,
      contactAddress: address,
    };

    setLoading(true); // Start loading
    try {
      console.log("Submitting recruiter data:", submitData);
      const response = await fetch(
        "https://talent-backend-o5cb.onrender.com/api/talents",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(submitData),
        }
      );

      if (response.status === 409) {
        const data = await response.json();
        const msg = data.error || "A request with this email already exists.";
        setError(msg);
        toast.error(msg);
      } else if (!response.ok) {
        const data = await response.json();
        const errorMessage = Array.isArray(data.error)
          ? data.error.join(", ")
          : data.error || "Something went wrong.";
        setError(errorMessage);
        toast.error(errorMessage);
      } else {
        setSuccess(true);
        resetForm();
        toast.success("Form submitted successfully!");
      }
    } catch (apiError: unknown) {
      if (apiError instanceof Error) {
        console.error("Error:", apiError.message);
      } else {
        console.error("Error:", apiError);
      }
      setError(
        "An error occurred while submitting the form. Please try again."
      );
      toast.error(
        "An error occurred while submitting the form. Please try again."
      );
      setSuccess(false);
    } finally {
      setLoading(false); // End loading
    }
  };

  return (
    <div className="p-6 md:p-8 bg-white">
      <h2 className="text-2xl md:text-3xl font-extrabold mb-8 text-gray-800 text-center">
        Hire Talent
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
              Form submitted successfully!
            </span>
          </div>
        )}

        {/* First Name */}
        <div>
          <label
            htmlFor="first_name"
            className="block text-sm font-semibold text-gray-700 mb-1"
          >
            First Name
          </label>
          <input
            type="text"
            id="first_name"
            name="first_name"
            placeholder="Enter your first name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1D2640] focus:border-[#1D2640] text-base"
            onChange={handleChange}
            value={formData.first_name}
          />
        </div>

        {/* Last Name */}
        <div>
          <label
            htmlFor="surname"
            className="block text-sm font-semibold text-gray-700 mb-1"
          >
            Last Name
          </label>
          <input
            type="text"
            id="surname"
            name="surname"
            placeholder="Enter your surname"
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1D2640] focus:border-[#1D2640] text-base"
            onChange={handleChange}
            value={formData.surname}
          />
        </div>

        {/* Company Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-gray-700 mb-1"
          >
            Company Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter Company Email Address"
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1D2640] focus:border-[#1D2640] text-base"
            onChange={handleChange}
            value={formData.email}
          />
        </div>

        {/* Company Website */}
        <div>
          <label
            htmlFor="website"
            className="block text-sm font-semibold text-gray-700 mb-1"
          >
            Company Website
          </label>
          <input
            type="url"
            id="website"
            name="website"
            placeholder="Enter Company Website URL"
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1D2640] focus:border-[#1D2640] text-base"
            onChange={handleChange}
            value={formData.website}
          />
        </div>

        {/* Choose Profession */}
        <div>
          <label
            htmlFor="profession"
            className="block text-sm font-semibold text-gray-700 mb-1 "
          >
            Choose Profession
          </label>
          <div className="relative">
            <select
              id="profession"
              name="profession"
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1D2640] focus:border-[#1D2640] text-base"
              onChange={handleChange}
              value={formData.profession}
            >
              <option value="">Select a profession</option>
              <option value="frontend-developer">Front-end Developer</option>
              <option value="backend-developer">Back-end Developer</option>
              <option value="fullstack-developer">Full-stack Developer</option>
              <option value="ui-ux-designer">UI/UX Designer</option>
              <option value="devops-engineer">DevOps Engineer</option>
            </select>
            {/* Custom dropdown arrow using SVG */}
            {/* <div className="absolute inset-y-0 right-0 flex items-center px-6 pointer-events-none">
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
            </div> */}
          </div>
        </div>

        {/* How many of the Profession do you need? */}
        <div>
          <label
            htmlFor="quantityNeeded"
            className="block text-sm font-semibold text-gray-700 mb-1"
          >
            How many of the Profession do you need?
          </label>
          <input
            type="number"
            id="quantityNeeded"
            name="quantityNeeded"
            placeholder="0"
            min="0"
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1D2640] focus:border-[#1D2640] text-base"
            onChange={handleChange}
            value={formData.quantityNeeded}
          />
        </div>

        {/* Contact Address - spans full width on smaller screens, half on larger */}
        <div className="md:col-span-2">
          <label
            htmlFor="address"
            className="block text-sm font-semibold text-gray-700 mb-1"
          >
            Contact Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            placeholder="Enter here"
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1D2640] focus:border-[#1D2640] text-base"
            onChange={handleChange}
            value={formData.address}
          />
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2 flex justify-center mt-6">
          <button
            type="submit"
            disabled={loading}
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

export default HireTalentForm;
