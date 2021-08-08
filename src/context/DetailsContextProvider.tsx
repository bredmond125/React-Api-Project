import { createContext, ReactNode, useState } from "react";
import { Recipe } from "../models/Item";

export interface DetailsContextValue {
    details: any
    showDetails: (detailsRecipe: Recipe) => void
}

const defaultValue: DetailsContextValue = {
    details: {},
    showDetails: () => {}
}

export const DetailsContext = createContext(defaultValue);

export function DetailsContextProvider({children}: {children: ReactNode}) {

    const [details, setDetails] = useState<Recipe>()

    function showDetails(detailsRecipe: Recipe) {
       setDetails(detailsRecipe);
    //    console.log(details)
    }

    return (
        <DetailsContext.Provider value={{details, showDetails}}>
            {children}
        </DetailsContext.Provider>
    )
}