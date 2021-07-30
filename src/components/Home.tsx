import "../styles/Home.css";

import { useContext } from "react";
import { RecipeContext } from "../context/RecipeContextProvider";
import { Item } from "../models/Item";





function Home() {

    const { recipes, fetchNewRecipes, recipesTwo } = useContext(RecipeContext);



    console.log(recipes);

    let pump: string = "Pepper";
    
   

    function handleQuery(random : any) {
        console.log(fetchNewRecipes(random));
    }


   
 

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
            <form>
                <button type="button" onClick={ () => handleQuery(pump)}>What Pepper Recipes?</button>
                <button type="button" onClick={ () => handleQuery(pump)}>What Pepper Recipes?</button>

            </form>
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