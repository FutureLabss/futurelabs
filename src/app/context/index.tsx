
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
  talentForm: FormDataProps;
  setTalentForm: (talentForm: FormDataProps) => void;
  showPayment: boolean;
  setShowPayment: (showPayment: boolean) => void;
  linkIndex: number | undefined;
  setLinkIndex: (linkIndex: number) => void;
}
interface ProviderProps {
  children: React.ReactNode;
}

const StateContext = createContext<StateContextType>({} as StateContextType);

export default function StateContextProvider({ children }: ProviderProps) {
  const [linkIndex, setLinkIndex] = useState<number | undefined>(undefined);
  const [showForm, setShowForm] = useState<boolean>(false);
  const [showPayment, setShowPayment] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormDataProps>({
    firstName: "",
    lastName: "",
    email: "",
    gender: "male",
    skill: "UI/UX Design",
    locality: ""
  })


  const [talentForm, setTalentForm] = useState<FormDataProps>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    gender: "male",
    locality: "",
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
    talentForm,
    setTalentForm,
    showPayment,
    setShowPayment,
    linkIndex,
    setLinkIndex
  };
  return (
    <StateContext.Provider value={contextValue} >
      {children}
    </StateContext.Provider>
  )
}

const useStateAuthProvider = () => useContext(StateContext);
export { useStateAuthProvider }