import { useState } from 'react';
import '../styles/RecipeCard.css';
export interface Props {
    label: string;
    image: any;
    url: string;
    
}


function RecipeCard({label, image, url}: Props) {

   

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
                   
                </div>
            </div>

        </div>
    )
}

export default RecipeCard;