import { createContext, ReactNode, useEffect, useState } from "react";
import { fetchRecipeServices } from "../services/recipeService";

interface Recipe {
    label: string,
    url: string
}

export interface RecipeContextValue  {
    recipes: Recipe[]
}

const defaultValue: RecipeContextValue = {
    recipes: []
}

export const RecipeContext = createContext(defaultValue)

export function RecipeContextProvider({children} : {children: ReactNode}) {
    const [recipes, setRecipes] = useState<Recipe[]>([
        
    ]);

    useEffect(() => {
        fetchRecipeServices('food').then((data) => {
            setRecipes(data.recipe);
        })
    },[]);

    return (
        <RecipeContext.Provider value={{recipes}}>
            {children}
        </RecipeContext.Provider>
    )
}