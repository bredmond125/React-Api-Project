import { useState } from "react";
import { Props } from "./RecipeCard";







function Favorites({label, image, url}: Props) {

    

    
    // function handleAdd(newItem: Props) {
  
    //     setFavs({
    //         ...favs,
    //         newItem
    //     })

    //     addToFav({
    //         label,
    //         image,
    //         url
    //     });
    // }

    


    return (
        <div className="Favorites">
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
                   
                </div>
            </div>

        </div>
    )
}

export default Favorites;