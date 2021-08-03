import { useContext, useState } from 'react';
import { FavoriteContext } from '../context/FavoritesContextProvider';
import '../styles/RecipeCard.css';
export interface Props {
    label: string;
    image: any;
    url: string;
    
}


function RecipeCard({label, image, url}: Props) {

   const {favorites, addFavorite} = useContext(FavoriteContext);

    const newFavorite = {
        label, 
        image,
        url
    }

   function handleAdd(newFavorite: Props): any {
       addFavorite(newFavorite)
   }

    return(
        <div className="RecipeCard">
            <div className="card-container">
                <div className="image-container">
                    <img src={image} alt="Food"/>
                </div>
                <div className="label-container">
                    <p className="card-label">
                        {label}
                    </p>
                </div>
                <div className="link-container">
                    <a href={url} target="_blank">Original Recipe</a>  
                </div>
                <div>
                   <button onClick={handleAdd(newFavorite)}>Add Favorite</button>
                </div>
            </div>

        </div>
    )
}

export default RecipeCard;