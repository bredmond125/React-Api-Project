import { createContext, ReactNode, useState } from "react";

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
        setShowForm(!showForm);
    }
    return(
        <ModalContext.Provider value={{showForm, toggleModal}}>
            {children}
        </ModalContext.Provider>
    );

}