import React, { useRef, useState } from 'react'
import useSearch from '../services/useSearch';
import RecipeCard from './RecipeCard';
import '../styles/RecipeList.css';
import axios from 'axios';


function TestForm() {
    const recipeApiUrl = 'https://api.edamam.com/api/recipes/v2?';
    const appType = 'public';
    const appId = '045d35b5';
    const appKey = process.env.REACT_APP_RECIPE_API_KEY;

    const [food, setFood] = useState('food');
    const [cuisine, setCuisine] = useState('');
    const [meal, setMeal] = useState('');
    const [calories, setCalories] = useState(0);
    const [searchArray, setSearchArray] = useState<any[]>([]);
    
    let paramObject = {
            app_id: appId,
            app_key: appKey,
            type: appType,
            q: food,
        };

    const cuisineObject = {
        cuisineType: cuisine
    }

    const mealObject = {
        mealType: meal
    }
    
    const caloriesObject = {
        calories: `0-${calories}`
    }

   

    const generateSearch = (e: any): void => {
        
        e.preventDefault();
        
        if (cuisine.length > 0) {
        paramObject = {...paramObject, ...cuisineObject}
        }

        if (meal.length > 0) {
        paramObject = {...paramObject, ...mealObject}
        }

        if (calories > 0) {
        paramObject = {...paramObject, ...caloriesObject}
        }

        axios.get(recipeApiUrl, {
            params: paramObject
            }).then((response) => {
                console.log(response.data.hits);
                setSearchArray(response.data.hits);
            }) 
    }

    return (
        <div>
            <form>
                <input placeholder="food" onChange={ (e) => setFood(e.target.value) }/>

                <input type="radio" name="cuisine" id="American" value="American" onChange={ (e) => setCuisine(e.target.value) }/>
                <label htmlFor="American">American</label>
                <input type="radio" name="cuisine" id="French" value="French" onChange={ (e) => setCuisine(e.target.value) }/>
                <label htmlFor="French">French</label>
                <input type="radio" name="cuisine" id="Mexican" value="Mexican" onChange={ (e) => setCuisine(e.target.value) }/>
                <label htmlFor="Mexican">Mexican</label>
                
                <input type="radio" name="meal" id="Breakfast" value="Breakfast" onChange={ (e) => setMeal(e.target.value) }/>
                <label htmlFor="Breakfast">Breakfast</label>
                <input type="radio" name="meal" id="Lunch" value="Lunch" onChange={ (e) => setMeal(e.target.value) }/>
                <label htmlFor="Lunch">Lunch</label>
                <input type="radio" name="meal" id="Dinner" value="Dinner" onChange={ (e) => setMeal(e.target.value) }/>
                <label htmlFor="Dinner">Dinner</label>

                <input type="checkbox" name="health" id="vegan" value="vegan"/>
                <label htmlFor="vegan">Vegan</label>
                <input type="checkbox" name="health" id="gluten-free" value="gluten-free" onChange={ (e) => console.log(e.target.value) }/>
                <label htmlFor="gluten-free">Gluten-free</label>
                <input type="checkbox" name="health" id="dairy-free" value="dairy-free" onChange={ (e) => console.log(e.target.value) }/>
                <label htmlFor="dairy-free">Dairy-free</label>

                <input type="range" id="calories" name="calories" min="0" max="5000" onChange={ (e) => setCalories(Number(e.target.value)) } />
                <label htmlFor="calories">Calories</label>
                
                <button onClick={generateSearch}>Search</button>
            </form>
        
            <h2>Search Results</h2>
            <div className="RecipeCard-container">
            {searchArray.map((recipe, index) => 
                <RecipeCard
                key={`${recipe.recipe.label}-${index}`}
                label={recipe.recipe.label}
                image={recipe.recipe.image}
                url={recipe.recipe.url}
                />
            )}
            </div>
        </div>
    )
}

export default TestForm
