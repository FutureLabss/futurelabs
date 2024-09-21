
"use client";
import { createContext, useContext } from "react";
import { useState } from "react";


interface StateContextType {
  showForm: boolean;
  setShowForm: (showForm: boolean) => void;
}
interface ProviderProps {
  children: React.ReactNode;
}

const StateContext = createContext<StateContextType | undefined>(undefined);

export default function StateContextProvider({ children }: ProviderProps) {
  const [showForm, setShowForm] = useState<boolean>(false);

  const contextValue = {
    showForm,
    setShowForm
  };
  return (
    <StateContext.Provider value={contextValue} >
      {children}
    </StateContext.Provider>
  )
}

const useStateAuthProvider = () => useContext(StateContext);
export { useStateAuthProvider }