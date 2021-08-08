import axios from 'axios';
import React, { useState, useContext } from 'react'
import { useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import { Recipe } from '../models/Item';

import { FavoritesContext } from '../context/FavoritesContextProvider';

import '../styles/RandomCards.css';

function RandomCards() {
    const [randomArray, setRandomArray] = useState([]);
    const { addFavorite } = useContext(FavoritesContext);

    const [lastDirection, setLastDirection] = useState();
    let foundIndex;

    

    function findRandomRecipe(fav) {
        let foundRandom = randomArray.find(random => random.recipe.label === fav);
        console.log(foundRandom);
        console.log(fav);
        return foundRandom;

    }

    function findIndex(fav) {
        foundIndex = randomArray.findIndex(random => random.recipe.label === fav);
        console.log(fav);
        return foundIndex;
    }

    function deleteRandom(index) {      
        setRandomArray(prevRandom => [...prevRandom.slice(0, index), ...prevRandom.slice(index+1)]);
        return randomArray;
    }


    const swiped = (direction, nameToDelete) => {
        console.log('removing: ' + nameToDelete)
        setLastDirection(direction);
        console.log(direction);
        
        console.log(randomArray);
        if (direction === 'right') {
            addFavorite(findRandomRecipe(nameToDelete));
        }
    }

    const outOfFrame = (name) => {

        

        console.log(name + ' left the screen!');
        
      
        // findIndex(name);
        // console.log(findIndex(name));
        // console.log(typeof(foundIndex));
        // deleteRandom(foundIndex);
  
        randomArray.pop();
        console.log(randomArray);

        if (randomArray.length === 0) {

                    getRandomRecipes();
                    console.log(randomArray);
                    console.log('reset!');
                }


    }


    const recipeApiUrl = 'https://api.edamam.com/api/recipes/v2?';
    const appType = 'public';
    const appId = '045d35b5';
    const appKey = process.env.REACT_APP_RECIPE_API_KEY;

    let paramObject = {
        app_id: appId,
        app_key: appKey,
        type: appType,
        q: 'recipe',
        random: true,
    };

    const getRandomRecipes = () => {
        
        axios.get(recipeApiUrl, {
            params: paramObject
            }).then((response) => {
                console.log(response.data.hits);
                setRandomArray(response.data.hits);
            }) 
    }

   
    useEffect(() => {
        getRandomRecipes();
    }, [] );

  

    return (
        <div className="RandomCards">
            <h2>Random Cards</h2>
            <div className="random-cards-container">
                {randomArray.map((randomCard) => (
                    <TinderCard
                    onSwipe={(dir) => swiped(dir, randomCard.recipe.label)} 
                    onCardLeftScreen={() => outOfFrame(randomCard.recipe.label)}
                    className="swipe"
                    key={randomCard.recipe.label}
                    preventSwipe={['up', 'down']}   
                    >
                        <div 
                            style={{backgroundImage: `url(${randomCard.recipe.image})`}}
                            className="randomCard"
                        >
                            <h3>{randomCard.recipe.label}</h3>

                        </div>
                    </TinderCard>
                ))}
            </div>
           
        </div>
    );
}

export default RandomCards;
