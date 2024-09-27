
"use client";
import { createContext, useContext } from "react";
import { useState } from "react";
import { FormDataProps } from "@/app/types/types";


interface StateContextType {
  showForm: boolean;
  setShowForm: (showForm: boolean) => void;
  formData: FormDataProps;
  setFormData: (formData: FormDataProps) => void;
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

  const contextValue = {
    showForm,
    setShowForm,
    formData,
    setFormData
  };
  return (
    <StateContext.Provider value={contextValue} >
      {children}
    </StateContext.Provider>
  )
}

const useStateAuthProvider = () => useContext(StateContext);
export { useStateAuthProvider }