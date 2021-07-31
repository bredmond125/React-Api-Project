import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { RecipeContext } from "../context/RecipeContextProvider";
import "../styles/SearchForm.css"


function SearchForm() {

    const [show, setShow] = useState(false);
    let pepper: string = "Pepper";
    let taco: string = "Taco";

    let hide: string = "Hide"


    const { recipes, fetchNewRecipes } = useContext(RecipeContext);

    function handleQuery(random : any) {
        setShow(true)
        console.log(fetchNewRecipes(random));
    }
    if(show === true) {
        hide = "";
    }

    return(
        <div className="SearchForm">
            
            <form>
                <button type="button" onClick={ () => handleQuery(pepper)}>What Pepper Recipes?</button>
                <button type="button" onClick={ () => handleQuery(taco)}>What Taco Recipes?</button>
            </form>
            <div className={`${hide} Results`}>
            {recipes.map((recipe, index) => 
                <p key={`${index}`}>
                    {recipe.recipe.label}
                    {recipe.recipe.calories}
                    <a href={recipe.recipe.url}>Click Here!!!!!</a>
                    <img src={recipe.recipe.image} alt="no image"/>
                </p>
            )}
            </div>
            
        </div>
    )
}

export default SearchForm;


