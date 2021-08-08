import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import { Recipe } from '../models/Item';
import '../styles/RandomCards.css';

function RandomCards() {
    // const [randomArray, setRandomArray] = useState<Recipe[]>([]);

    // const recipeApiUrl = 'https://api.edamam.com/api/recipes/v2?';
    // const appType = 'public';
    // const appId = '045d35b5';
    // const appKey = process.env.REACT_APP_RECIPE_API_KEY;

    // let paramObject = {
    //     app_id: appId,
    //     app_key: appKey,
    //     type: appType,
    //     q: 'recipe',
    //     random: true,
    // };

    // const getRandomRecipes = (): void => {
        
    //     axios.get(recipeApiUrl, {
    //         params: paramObject
    //         }).then((response) => {
    //             console.log(response.data.hits);
    //             setRandomArray(response.data.hits);
    //         }) 
    // }

    // if (randomArray.length < 1) {
    //     getRandomRecipes();
    // }


    // return (
    //     <div className="RandomCards">
    //         <h2>Random Cards</h2>
    //         <div className="random-cards-container">
    //             {randomArray.map((randomCard) => (
    //                 <TinderCard
                
    //                 // className="swipe"
    //                 key={randomCard.recipe.label}
    //                 preventSwipe={['up', 'down']}   
    //                 >
    //                     <div 
    //                         style={{backgroundImage: `url(${randomCard.recipe.image})`}}
    //                         className="randomCard swipe"
    //                     >
    //                         <h3>{randomCard.recipe.label}</h3>

    //                     </div>
    //                 </TinderCard>
    //             ))}
    //         </div>
    //     </div>
    // );
}

export default RandomCards;
