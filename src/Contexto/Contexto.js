import React, {createContext, useState} from "react";


export const ContextoGlobal = createContext();

export const GlobalProvider = ({ children }) => {
    const [modalValue, setModalValue] = useState(0); // Esta será nuestra variable global
    const [modalContent, setModalContent] = useState({})
    const [modalStates, setModalStates] = useState(false)
  
    return (
      <ContextoGlobal.Provider value={{ modalValue, setModalValue, modalContent, setModalContent, modalStates, setModalStates }}>
        {children}
      </ContextoGlobal.Provider>
    );
  };