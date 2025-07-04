"use client";
import { createContext, useContext } from "react";
import { useState } from "react";
import { FormDataProps } from "@/app/types/types";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface StateContextType {
  showForm: boolean;
  setShowForm: (showForm: boolean) => void;
  formData: FormDataProps;
  setFormData: (formData: FormDataProps) => void;
  showSuccessMessage: () => void;
  showErrorMessage: () => void;
  showEmailSuccessMessage: () => void;
  showEmailErrorMessage: (message: string) => void;
  talentSubmissionErrorMessage: () => void;
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
    first_name: "",
    surname: "",
    email: "",
    // gender: "male",
    skill: "design",
    address: "",
    profession: "frontend",
    quantityNeeded: 0,
  });

  const [talentForm, setTalentForm] = useState<FormDataProps>({
    first_name: "",
    surname: "",
    email: "",
    phone_number: "",
    gender: "male",
    state: "",
  });

  const showSuccessMessage = () => {
    toast.success("Submitted successfully", {
      position: "top-right",
    });
  };

  const showErrorMessage = () => {
    toast.error("Fields are required", {
      position: "top-right",
    });
  };
  const showEmailSuccessMessage = () => {
    toast.success("Check your mail box to verify email address", {
      position: "top-right",
    });
  };
  const talentSubmissionErrorMessage = () => {
    toast.error("Failed to register talent form", {
      position: "top-right",
    });
  };
  const showEmailErrorMessage = (message: string) => {
    toast.error(message, {
      position: "top-right",
    });
  };

  const contextValue = {
    showForm,
    setShowForm,
    formData,
    setFormData,
    showSuccessMessage,
    showErrorMessage,
    talentForm,
    talentSubmissionErrorMessage,
    setTalentForm,
    showPayment,
    setShowPayment,
    showEmailErrorMessage,
    showEmailSuccessMessage,
    linkIndex,
    setLinkIndex,
  };
  return (
    <StateContext.Provider value={contextValue}>
      {children}
    </StateContext.Provider>
  );
}

const useStateAuthProvider = () => useContext(StateContext);
export { useStateAuthProvider };
