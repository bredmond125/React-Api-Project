import { createContext, ReactNode, useEffect, useState } from "react";
import { fetchRecipeServices } from "../services/recipeService";

interface Recipe {
    label: string,
    url: string
}

export interface RecipeContextValue  {
    recipes: Recipe[];
    fetchNewRecipes: (query : any) => void;
}

const defaultValue: RecipeContextValue = {
    recipes: [],
    fetchNewRecipes: () => {}
}

export const RecipeContext = createContext(defaultValue)

export function RecipeContextProvider({children} : {children: ReactNode}) {
    const [recipes, setRecipes] = useState<Recipe[]>([
        
    ]);

    function fetchNewRecipes(query: any) {
        const recipeObj = {
            q: query.q
        }
        fetchRecipeServices(recipeObj).then((data) => {
            setRecipes(data);
        })
    }

    useEffect(() => {
        fetchRecipeServices({q: "food"}).then((data) => {
            setRecipes(data);
            console.log(data);
        })
    },[]);

    return (
        <RecipeContext.Provider value={{recipes, fetchNewRecipes}}>
            {children}
        </RecipeContext.Provider>
    )
}