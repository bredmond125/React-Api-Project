import { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FavoritesContext } from '../context/FavoritesContextProvider';
import { Recipe } from '../models/Item';
import '../styles/RecipeCard.css';
export interface Props {
    recipe: Recipe;
    index: number;
}



function RecipeCard({recipe, index}: Props) {

   const {favorites, addFavorite, deleteFavorite} = useContext(FavoritesContext);

    const newFavorite = recipe;
    

   function handleAdd(newFavorite: Recipe): any {
       addFavorite(newFavorite)
       console.log("Works")
       console.log(newFavorite)
       
   }

   function handleDelete(index: number): any {
       deleteFavorite(index);
       console.log("helloo");
       console.log(index)
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
                   <button onClick={() => {handleDelete(index)}}>Delete Favorite</button>
                </div>
                <div>
                    {/* <NavLink to={{
                        pathname: "/Description",
                        aboutProps: {recipe: {recipe}}
                        }} > 
                            <button>Description</button>
                    </NavLink>   */}
                </div>
            </div>

        </div>
    )
}

export default RecipeCard;

function deleteFavorite(index: number) {
    throw new Error('Function not implemented.');
}
