import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { RecipeContext } from "../context/RecipeContextProvider";


function SearchForm() {

    const [show, setShow] = useState("show");
    let pepper: string = "Pepper";
    let taco: string = "Taco";


    const { recipes, fetchNewRecipes, recipesTwo } = useContext(RecipeContext);

    function handleQuery(random : any) {
        setShow("")
        console.log(fetchNewRecipes(random));
    }

    return(
        <div className="SearchForm">
            <Link to="/">Home</Link>
            <form>
                <button type="button" onClick={ () => handleQuery(pepper)}>What Pepper Recipes?</button>
                <button type="button" onClick={ () => handleQuery(taco)}>What Taco Recipes?</button>
            </form>

            {recipes.map((recipe, index) => 
            <p className={`${show}`} key={`${index}`}>
                {recipe.recipe.label}
                {recipe.recipe.calories}
                <a href={recipe.recipe.url}>Click Here!!!!!</a>
                <img src={recipe.recipe.image} alt="no image"/>
            </p>
            )}
        </div>
    )
}

export default SearchForm;


