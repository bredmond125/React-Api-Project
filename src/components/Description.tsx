import "../styles/Detail.css";
import React, { useContext } from 'react'
import { Recipe } from '../models/Item'
import {useLocation} from 'react-router-dom'
import { DetailsContext } from '../context/DetailsContextProvider';

export interface Props {
    recipe: Recipe;
}

function Description() {

    const {details, showDetails} = useContext(DetailsContext)

    // const location = useLocation();
    // const recipe = location.recipe
    
    const newDetails = details;

    let healthInfo = newDetails.recipe.healthLabels;

   

    let shortHeath = [];
    for(let i = 0; i <= 7; i++){
        shortHeath.push(healthInfo[i]);

    }
    let healthDetail = shortHeath.join(", ")

    let dishType = newDetails.recipe.dishType;

    let dietLabels = newDetails.recipe.dietLabels.join(", ")


    let cals = newDetails.recipe.calories;

    let finalCal = Math.round(cals);

    let img = newDetails.recipe.image;

    



    
    return (
        <div className="Description">
            <div className="ImageSection">
                <img src={img} alt="recipe final" />
            </div>
            <div className="IndexCard">
                <div className="Title">
                    {newDetails.recipe.label}
                </div>
                
                <div className="LineOne">
                    <p>Dish Type: {dishType} </p>
                </div>
                <div className="LineTwo">
                    <p>Diet Lables: {dietLabels} </p>
                </div>
                <div className="LineThree">
                    <p>Calories: {finalCal} </p>
                </div>
                <div className="LineFour">
                    {healthDetail}
                </div>
                <div className="LineFive">
                    {newDetails.recipe.ingredientLines}
                </div>

                
            </div>
            
        </div>
    )
}

export default Description
