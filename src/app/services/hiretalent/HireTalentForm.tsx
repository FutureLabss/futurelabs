"use client";
import ProceedBtn from "../ui/ProceedBtn";
import { useStateAuthProvider } from "@/app/context";
import { useRouter } from "next/navigation";
import { ToastContainer } from "react-toastify";

export default function HireTalentForm() {
  const router = useRouter();

  const context = useStateAuthProvider();
  if (!context) {
    return null;
  }

  const { talentForm, setTalentForm, showErrorMessage } = context;

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setTalentForm({ ...talentForm, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { first_name, surname, email, gender, phone_number, state } = talentForm;
    if (!first_name || !surname || !email || !gender || !phone_number || !state) {
      showErrorMessage();
      // return
    } else {
      console.log(talentForm);
      router.push("/services/hiretalent/talent");

    }
  };
  return (
    <div>
      <form
        action="/form2"
        className="grid grid-cols-1 md:grid-cols-2 gap-[3rem]"
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
            value={talentForm.first_name}
          />
        </div>
        <div className="flex flex-col gap-3 ">
          <label htmlFor="form-label">Last Name</label>
          <input
            className="form-input"
            type="text"
            name="surname"
            placeholder="Enter your last name"
            onChange={handleChange}
            value={talentForm.surname}
          />
        </div>
        <div className="flex flex-col gap-3 ">
          <label htmlFor="form-label">Email Address</label>
          <input
            className="form-input"
            type="email"
            name="email"
            placeholder="Enter Email Address"
            onChange={handleChange}
            value={talentForm.email}
          />
        </div>
        <div className="flex flex-col gap-3 ">
          <label htmlFor="form-label">Phone Number</label>
          <input
            className="form-input"
            type="number"
            name="phone_number"
            placeholder="Enter phone umber"
            onChange={handleChange}
            value={talentForm.phone_number}
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
              value={talentForm.gender}
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

        <div className="flex flex-col gap-3" >
          <label htmlFor="form-label">Location by state</label>
          <input
            className="form-input"
            type="text"
            name="state"
            placeholder="Enter Location"
            onChange={handleChange}
            value={talentForm.state}
          />
        </div>

        <ProceedBtn />
        <ToastContainer autoClose={2000} />
      </form>
    </div>
  );
}
