import "../styles/Home.css";

import { useContext } from "react";
import { RecipeContext } from "../context/RecipeContextProvider";
import { NavLink } from "react-router-dom";
import RecipeList from "./RecipeList";





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
            {/* {recipes.map((recipe, index) => 
            <p key={`${index}`}>
                {recipe.recipe.label}
            </p>
            )}
            {recipesTwo.map((recipe, index) => 
            <p key={`${index}`}>
                {recipe.recipe.label}
            </p>
            )} */}
            
            <RecipeList title='Pumpkin Season is Coming' query='pumpkin'/>
            <RecipeList title='Because Greg Likes Peppers' query='pepper' />
            <RecipeList title='Apples: Your Favorite Variable' query='apple' />


        </main>


    );
}


export default Home;