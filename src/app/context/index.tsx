
"use client";
import { createContext, useContext } from "react";
import { useState } from "react";
import { FormDataProps } from "@/app/types/types";
import { toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

interface StateContextType {
  showForm: boolean;
  setShowForm: (showForm: boolean) => void;
  formData: FormDataProps;
  setFormData: (formData: FormDataProps) => void;
  showSuccessMessage: () => void;
  showErrorMessage: () => void;
}
interface ProviderProps {
  children: React.ReactNode;
}

const StateContext = createContext<StateContextType | undefined>(undefined);

export default function StateContextProvider({ children }: ProviderProps) {
  const [showForm, setShowForm] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormDataProps>({
    firstName: "",
    lastName: "",
    email: "",
    gender: "male",
    skill: "UI/UX Design",
    address: ""
  })

  const showSuccessMessage = () => {
    toast.success("Submitted successfully", {
      position: "top-right",
    })
  }

  const showErrorMessage = () => {
    toast.error("Fields are required", {
      position: "top-right",
    })
  }

  const contextValue = {
    showForm,
    setShowForm,
    formData,
    setFormData,
    showSuccessMessage,
    showErrorMessage,
  };
  return (
    <StateContext.Provider value={contextValue} >
      {children}
    </StateContext.Provider>
  )
}

const useStateAuthProvider = () => useContext(StateContext);
export { useStateAuthProvider }