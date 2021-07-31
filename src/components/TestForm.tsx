import React, { useRef, useState } from 'react'
import useSearch from '../services/useSearch';
import RecipeCard from './RecipeCard';

function TestForm() {
    const appType = 'public';
    const appId = '045d35b5';
    const appKey = process.env.REACT_APP_RECIPE_API_KEY;

    const foodRef: any = useRef(null);
    const cuisineRef = useRef(null);
    const mealRef = useRef(null);
    const caloriesRef = useRef(null);

    const [food, setFood] = useState('food');
    const [cuisine, setCuisine] = useState('');
    const [meal, setMeal] = useState('');
    const [calories, setCalories] = useState(5000);
  
    let paramObject = {
            app_id: appId,
            app_key: appKey,
            type: appType,
            q: {food},
        };

    let cuisineObject = {
        cuisineType: {cuisine}
    }

    let mealObject = {
        mealType: {meal}
    }
    
    let caloriesObject = {
        calories: `0-${calories}`
    }


    const searchResult: any[] = useSearch(paramObject);

    const generateSearch = (e: any) => {
        e.preventDefault();
        
        setFood(foodRef.current?.value);  
        console.log(food);
        console.log(paramObject);
    }
   

    return (
        <div>
            <form>
                <input placeholder="food" ref={foodRef}/>

                <input type="radio" name="cuisine" id="American" value="American"/>
                <label htmlFor="American">American</label>
                <input type="radio" name="cuisine" id="French" value="French"/>
                <label htmlFor="French">French</label>
                <input type="radio" name="cuisine" id="Mexican" value="Mexican"/>
                <label htmlFor="Mexican">Mexican</label>
                
                <input type="range" id="calories" name="calories" min="0" max="5000" ref={caloriesRef} />
                
                <button onClick={generateSearch}>Search</button>
            </form>

            {searchResult.map((recipe, index) => 
                <RecipeCard
                key={`${recipe.recipe.label}-${index}`}
                label={recipe.recipe.label}
                image={recipe.recipe.image}
                url={recipe.recipe.url}
                />
            )}


        </div>
    )
}

export default TestForm
