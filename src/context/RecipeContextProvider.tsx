import { createContext, ReactNode, useEffect, useState } from "react";
import { fetchRecipeServices, RecipeResponse } from "../services/recipeService";

export interface RecipeContextValue  {
    recipes: RecipeResponse[];
    fetchNewRecipes: (query : any) => void;
}

const defaultValue: RecipeContextValue = {
    recipes: [],
    fetchNewRecipes: () => {},
}

export const RecipeContext = createContext(defaultValue);

export function createNewRecipeCategory(query: any) {
    const qValue = {
        q: query
    }

    let newCategoryArray: RecipeResponse[] = [];

    fetchRecipeServices(qValue).then((data) => {
        newCategoryArray = data;
    })
    return newCategoryArray
};

export function RecipeContextProvider({children} : {children: ReactNode}) {
    const [recipes, setRecipes] = useState<RecipeResponse[]>([
        
    ]);
    

    function fetchNewRecipes(query: any) {
        
        //console.log(query);

        const recipeObj = {
            q: query
        }
        
        //console.log(recipeObj);

        fetchRecipeServices(recipeObj).then((data) => {
            setRecipes(data);
        })
        
        
    }

    useEffect(() => {
        fetchRecipeServices({q: "Pumpkin"}).then((data) => {
            setRecipes(data);
        })
    },[]);

    return (
        <RecipeContext.Provider value={{recipes, fetchNewRecipes}}>
            {children}
        </RecipeContext.Provider>
    )
}