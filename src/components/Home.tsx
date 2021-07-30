import "../styles/Home.css";

import { useContext } from "react";
import { RecipeContext } from "../context/RecipeContextProvider";
import { NavLink } from "react-router-dom";





function Home() {

    const { recipes, fetchNewRecipes, recipesTwo } = useContext(RecipeContext);



    console.log(recipes);

    let pump: string = "Pepper";
    
   



   
 

    // for (let dish in recipes) {
    //     dish = recipes.recipe;
    // }

    // let recipeArray: any[] = [
    //     recipes,
    // ];
    
// let recipeArray = recipes.map(recipe => recipe.
    // for (const recipe in recipes) {
    //      recipeArray.push(recipe);
    // }

    // console.log(recipeArray);
        
       

    return(
        <main className="Home" >
            <NavLink to="/search">Search</NavLink>
            {recipes.map((recipe, index) => 
            <p key={`${index}`}>
                {recipe.recipe.label}
            </p>
            )}
            {recipesTwo.map((recipe, index) => 
            <p key={`${index}`}>
                {recipe.recipe.label}
            </p>
            )}
            


        </main>


    );
}


export default Home;