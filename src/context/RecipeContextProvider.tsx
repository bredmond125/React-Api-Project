import { createContext, ReactNode, useEffect, useState } from "react";
import { fetchRecipeServices } from "../services/recipeService";

interface Recipe {
    label: string,
    url: string
}

export interface RecipeContextValue  {
    recipes: Recipe[];
    fetchNewRecipes: () => void;
}

const defaultValue: RecipeContextValue = {
    recipes: [],
    fetchNewRecipes: () => {}
}

export const RecipeContext = createContext(defaultValue)

export function RecipeContextProvider({children} : {children: ReactNode}) {
    const [recipes, setRecipes] = useState<Recipe[]>([
        
    ]);

    function fetchNewRecipes() {
        fetchRecipeServices('query').then((data) => {
            setRecipes(data.recipe);
        })
    }

    useEffect(() => {
        fetchRecipeServices('food').then((data) => {
            setRecipes(data.recipe);
        })
    },[]);

    return (
        <RecipeContext.Provider value={{recipes, fetchNewRecipes}}>
            {children}
        </RecipeContext.Provider>
    )
}