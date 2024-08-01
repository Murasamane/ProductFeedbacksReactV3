/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

function ModalContextProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ModalContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </ModalContext.Provider>
  );
}

const useModal = () => {
  const context = useContext(ModalContext);

  if (context === undefined)
    throw new Error("Modal being used outside of the provider");

  return context;
};

export { ModalContextProvider, useModal };
