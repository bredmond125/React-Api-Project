import axios from 'axios';
import { useState } from 'react';
import ViewFilteredRecipes from './ViewFilteredRecipes';
import '../styles/ViewFilteredRecipes.css';



function FilterRecipes() {

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
        <div className="filter-form">
            <div className="form-container">
            <form>
                <h2 id="form-title">Search Recipes</h2>
                <div className="text-search-container form-section">
                    <input placeholder="food" onChange={ (e) => setFood(e.target.value) }/>
                </div>
                <p className="filter-title">Filter by Cuisine</p>
                <div className="cuisine-container form-section">
                    <input type="radio" name="cuisine" id="American" value="American" onChange={ (e) => setCuisine(e.target.value) }/>
                    <label htmlFor="American">American</label>
                    <input type="radio" name="cuisine" id="French" value="French" onChange={ (e) => setCuisine(e.target.value) }/>
                    <label htmlFor="French">French</label>
                    <input type="radio" name="cuisine" id="Mexican" value="Mexican" onChange={ (e) => setCuisine(e.target.value) }/>
                    <label htmlFor="Mexican">Mexican</label>
                    <input type="radio" name="cuisine" id="Italian" value="Italian" onChange={ (e) => setCuisine(e.target.value) }/>
                    <label htmlFor="Mexican">Italian</label>
                    <input type="radio" name="cuisine" id="Chinese" value="Chinese" onChange={ (e) => setCuisine(e.target.value) }/>
                    <label htmlFor="Mexican">Chinese</label>
                    <input type="radio" name="cuisine" id="Mediterranean" value="Mediterranean" onChange={ (e) => setCuisine(e.target.value) }/>
                    <label htmlFor="Mexican">Mediterranean</label>
                    <input type="radio" name="cuisine" id="Japanese" value="Japanese" onChange={ (e) => setCuisine(e.target.value) }/>
                    <label htmlFor="Mexican">Japanese</label>
                </div>
                <p className="filter-title">Filter by Meal</p>
                <div className="meal-container form-section">
                    <input type="radio" name="meal" id="Breakfast" value="Breakfast" onChange={ (e) => setMeal(e.target.value) }/>
                    <label htmlFor="Breakfast">Breakfast</label>
                    <input type="radio" name="meal" id="Lunch" value="Lunch" onChange={ (e) => setMeal(e.target.value) }/>
                    <label htmlFor="Lunch">Lunch</label>
                    <input type="radio" name="meal" id="Dinner" value="Dinner" onChange={ (e) => setMeal(e.target.value) }/>
                    <label htmlFor="Dinner">Dinner</label>
                    <input type="radio" name="meal" id="Snack" value="Snack" onChange={ (e) => setMeal(e.target.value) }/>
                    <label htmlFor="Dinner">Snack</label>
                    <input type="radio" name="meal" id="Teatime" value="Teatime" onChange={ (e) => setMeal(e.target.value) }/>
                    <label htmlFor="Dinner">Teatime</label>
                </div>
                <p className="filter-title">Filter by Calories</p>
                <div className="calories-container form-section">
                    <input type="range" id="calories" name="calories" min="0" max="5000" onChange={ (e) => setCalories(Number(e.target.value)) } />
                    <label htmlFor="calories">Calories</label>
                </div>

                <button onClick={generateSearch}>Search</button>
            </form>
            </div>
            <ViewFilteredRecipes filteredRecipes={searchArray} />
        </div>
    )
}

export default FilterRecipes;
