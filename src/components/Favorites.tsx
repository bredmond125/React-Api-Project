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
                        key={`${recipe.label}-${index}`}
                        label={recipe.label}
                        image={recipe.image}
                        url={recipe.url}
                        />
                    )}
                
                
            </div>

        </div>
    )
}

export default Favorites;