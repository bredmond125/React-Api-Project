import { useContext } from "react";
import {FavoritesContext } from "../context/FavoritesContextProvider";
import RecipeCard from "./RecipeCard";
import '../styles/ViewFilteredRecipes.css';


function Favorites() {

    const {favorites} = useContext(FavoritesContext);
    //console.log(favorites);

    return (
        <div className="Favorites">
            <h2>Favorites</h2>
            <div className="RecipeCard-container filtered-recipes-container">
                 
                    {favorites.map((recipe, index) => 
                        <RecipeCard
                        key={`${recipe.label}-${index}`}
                        recipe={recipe}
                        index={index}
                        />
                    )}
            </div>

        </div>
    )
}

export default Favorites;