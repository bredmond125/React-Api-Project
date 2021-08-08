import "../styles/Detail.css";
import React, { useContext } from 'react'
import { Recipe } from '../models/Item'
import { DetailsContext } from '../context/DetailsContextProvider';
import { FavoritesContext } from "../context/FavoritesContextProvider";
import { useState } from "react";
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';

export interface Props {
    recipe: Recipe;
}

function Description() {

    const {favorites, addFavorite, deleteFavorite} = useContext(FavoritesContext);

    

    //setting the context to pull in the recipe obj
    const {details, showDetails} = useContext(DetailsContext);
    const [foundFav, setFoundFav] = useState<Boolean>(false);
    
    //setting the obj to newDetails, for readablity :)
    const newDetails = details;

    function handleFindFav() {
        let findFav = favorites.find(fav => fav.recipe.label === newDetails.recipe.label);
        // console.log(findFav);

        if(findFav) {
            setFoundFav(true);
        }
    }

    
    function handleAdd(newFavorite: Recipe): any {
            addFavorite(newFavorite);
         //    console.log(newFavorite);
            handleFindFav();    
        }
   


    //pulling the health info from newDetails to a single variable (readabilty)
    let healthInfo = newDetails.recipe.healthLabels;

    //checking the length of the healthInfo, to only show the top 7 and loop over to and push to a new empty array
    let shortHeath = [];
    for(let i = 0; i <= 7; i++){
        shortHeath.push(healthInfo[i]);
    }

    // the heathInfo/shortHeath were not separated by a "," so joined the array together and set to heathDetail
    let healthDetail = shortHeath.join(", ")

    //simply displays the dish type from newDetails... below used a terrinary operator to check for a falsey value if true will just show dishType..
    //if falsey will show a message
    let dishType = newDetails.recipe.dishType;
    console.log(dishType)
    
    // if(dishType.length === undefined) {
    //     dishType.push("Enjoy Anytime!")
    // }

    // dietLabels just needs to be organized and used arr.join to do this
    let dietLabels = newDetails.recipe.dietLabels.join(", ")


    
    //put the image in a single variable for readablity below ... still the same string passed in
    let img = newDetails.recipe.image;


    //number of servings 
    let servings = newDetails.recipe.yield;
    console.log(servings);

    //calories 
    let cals = newDetails.recipe.calories;

    
    //for the calories section went off a / serving to display the cals so / by servings and then rounded to get a nice clean number
    let finalCal = Math.round(cals / servings);
    console.log(finalCal);
    
    return (
        <div className="Description">
            <div className="ImageSection">
                <img src={img} alt="recipe final" />
            </div>
            <div className="IndexCard">
                <div className="Title">
                    <h2 className="Heading">{newDetails.recipe.label}</h2>
                    <p className="Serving">Servings: {servings}</p>

                </div>
                
                <div className="LineOne">
                    <span>Dish Type: </span>{dishType ? dishType : "Enjoy Anytime"} 
                </div>
                <div className="LineTwo">
                    <span>Diet Lables: </span> {dietLabels} 
                </div>
                <div className="LineThree">
                    <span>Calories:</span>{finalCal} 
                </div>
                <div className="LineFour">
                    <span>Health Notes:</span> {healthDetail}
                </div>
                <div className="LineFive">
                    <span>To Make:</span> {newDetails.recipe.ingredientLines}
                </div>

                
            </div>
            <div className="stylish-button" style={foundFav ? {display: 'none'} : {display: 'block'}} onClick={() => {handleAdd(newDetails)}}>
                        <PlaylistAddIcon />
                            </div>
            
        </div>
    )
}

export default Description
