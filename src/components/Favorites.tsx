import { useContext, useState } from "react";
import {FavoritesContext } from "../context/FavoritesContextProvider";
import RecipeCard from "./RecipeCard";







function Favorites() {

    const {favorites, addFavorite} = useContext(FavoritesContext);

    
    
    console.log(favorites);
    


    return (
        <div className="Favorites">
            <div className="RecipeCard-container">
                 
                    {favorites.map((recipe, index) => 
                        <RecipeCard
                        key={`${recipe.recipe.label}-${index}`}
                        label={recipe.recipe.label}
                        image={recipe.recipe.image}
                        url={recipe.recipe.url}
                        />
                    )}
                
                
            </div>

        </div>
    )
}

export default Favorites;