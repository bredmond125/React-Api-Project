import { useContext, useState } from 'react';
import { FavoritesContext } from '../context/FavoritesContextProvider';
import { Recipe } from '../models/Item';
import '../styles/RecipeCard.css';
export interface Props {
    recipe: Recipe;
}



function RecipeCard({recipe}: Props) {

   const {favorites, addFavorite} = useContext(FavoritesContext);

    const newFavorite = recipe;
    

   function handleAdd(newFavorite: Recipe): any {
       addFavorite(newFavorite)
       console.log("Works")
       console.log(newFavorite)
       
   }
   console.log(favorites);
   console.log(recipe);
   console.log(recipe.recipe.label);
  

    return(
        <div className="RecipeCard">
            <div className="card-container">
                <div className="image-container">
                    <img src={recipe.recipe.image} alt="Food"/>
                </div>
                <div className="label-container">
                    <p className="card-label">
                        {recipe.recipe.label}
                    </p>
                </div>
                <div className="link-container">
                    <a href={recipe.recipe.url} target="_blank">Original Recipe</a>  
                </div>
                <div>
                   <button onClick={() => {handleAdd(newFavorite)}}>Add Favorite</button>
                </div>
            </div>

        </div>
    )
}

export default RecipeCard;