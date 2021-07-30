import { createContext, ReactNode, useEffect, useState } from "react";
import { fetchRecipeServices, RecipeResponse } from "../services/recipeService";


export interface RecipeContextValue  {
    recipes: RecipeResponse[];
    fetchNewRecipes: (query : any) => void;
    recipesTwo: RecipeResponse [];
}

const defaultValue: RecipeContextValue = {
    recipes: [],
    fetchNewRecipes: () => {},
    recipesTwo: []
}

export const RecipeContext = createContext(defaultValue)

export function RecipeContextProvider({children} : {children: ReactNode}) {
    const [recipes, setRecipes] = useState<RecipeResponse[]>([
        
    ]);
    const [recipesTwo, setRecipesTwo] = useState<RecipeResponse[]>([
        
    ]);

    function fetchNewRecipes(query: any) {
        console.log(query);

        const recipeObj = {
            q: query
            
        }
        
        console.log(recipeObj);

        fetchRecipeServices(recipeObj).then((data) => {
            setRecipes(data);
            // console.log(data);
        })
        
        
    }

    useEffect(() => {
        fetchRecipeServices({q: "Pumkin"}).then((data) => {
            setRecipes(data);
            // console.log(data);
        })
    },[]);
    useEffect(() => {
        fetchRecipeServices({q: "Chocolate"}).then((data) => {
            setRecipesTwo(data);
            // console.log(data);
        })
    },[]);

    return (
        <RecipeContext.Provider value={{recipes, fetchNewRecipes, recipesTwo}}>
            {children}
        </RecipeContext.Provider>
    )
}