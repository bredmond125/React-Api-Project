import "../styles/Home.css";

import { useContext } from "react";
import { RecipeContext } from "../context/RecipeContextProvider";
import { Item } from "../models/Item";





function Home() {

    const {recipes} = useContext(RecipeContext);
    console.log(recipes);
 

    // for (let dish in recipes) {
    //     dish = recipes.recipe;
    // }

    let recipeArray: any[] = [
        recipes,
    ];
    
// let recipeArray = recipes.map(recipe => recipe.
    // for (const recipe in recipes) {
    //      recipeArray.push(recipe);
    // }

    console.log(recipeArray);
        
       

    return(
        <main className="Home" >
            {recipes.map((recipe, index) => 
            <p key={`${index}`}>
                {recipe.recipe.label}
            </p>
            )}
        </main>


    );
}


export default Home;