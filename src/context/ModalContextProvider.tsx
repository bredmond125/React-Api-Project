import { createContext, ReactNode, useEffect, useState } from "react";

export interface ModalContextValue  {
    showForm: boolean;
    toggleModal(): any; 
}

const defaultValue: ModalContextValue  = {
    showForm: false,
    toggleModal: () => {}
   
}

export const ModalContext = createContext(defaultValue);

export function ModalContextProdiver({ children }: {children:ReactNode}) {

    const [showForm, setShowForm] = useState(false);
    
    
    function toggleModal () {
        console.log(showForm);
        console.log("Toggle Works...");
        setShowForm(!showForm);
        console.log(showForm)

        
    }

    useEffect(() => {
        
      }, [showForm]); // Only re-run the effect if count changes

    return(
        <ModalContext.Provider value={{showForm, toggleModal}}>
            {children}
        </ModalContext.Provider>
    );

}