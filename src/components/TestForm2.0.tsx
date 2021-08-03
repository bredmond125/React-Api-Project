import React, { useRef, useState } from 'react'
import useSearch from '../services/useSearch';
import RecipeCard from './RecipeCard';
import '../styles/RecipeList.css';


function TestForm() {
    const appType = 'public';
    const appId = '045d35b5';
    const appKey = process.env.REACT_APP_RECIPE_API_KEY;

    const foodRef: any = useRef(null);
    const cuisineRef: any = useRef(false);
    const mealRef = useRef(null);
    const caloriesRef: any = useRef(null);
    const healthRef: any = useRef(false);

    const [food, setFood] = useState('food');
    const [cuisine, setCuisine] = useState('');
    const [meal, setMeal] = useState('');
    const [calories, setCalories] = useState(0);
    const [checked, setChecked] = useState(false);
    

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

    
    if (cuisine.length > 0) {
        paramObject = {...paramObject, ...cuisineObject}
    }

    if (meal.length > 0) {
        paramObject = {...paramObject, ...mealObject}
    }

    if (calories > 0) {
        paramObject = {...paramObject, ...caloriesObject}
    }

    const handleClick = () => setChecked(!checked);

    const generateSearch = (e: any): void => {
        
        e.preventDefault();
        
        setFood(foodRef.current?.value.length > 0 ? foodRef.current?.value : "food");  
        setCalories(caloriesRef.current?.value);
        
        console.log(paramObject);
    }

    function handleCheck(option: string) {
        let healthObject = {
            health: option
        };
       
        paramObject = {...paramObject, ...healthObject};
        console.log(healthObject);
        console.log(paramObject);

    }



    // onChange={ (e) => e.target.checked ? handleCheck('vegan') : console.log('stuff')}
       const searchResult: any[] = useSearch(paramObject);

    return (
        <div>
            <form>
                <input placeholder="food" ref={foodRef}/>

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

                <input type="checkbox" name="health" id="vegan" value="vegan" onClick={handleClick} checked={checked} ref={healthRef}/>
                <label htmlFor="vegan">Vegan</label>
                <input type="checkbox" name="health" id="gluten-free" value="gluten-free" ref={healthRef} onChange={ (e) => console.log(e.target.value) }/>
                <label htmlFor="gluten-free">Gluten-free</label>
                <input type="checkbox" name="health" id="dairy-free" value="dairy-free" ref={healthRef} onChange={ (e) => console.log(e.target.value) }/>
                <label htmlFor="dairy-free">Dairy-free</label>

                <input type="range" id="calories" name="calories" min="0" max="5000" ref={caloriesRef} />
                <label htmlFor="calories">Calories</label>
                
                <button onClick={generateSearch}>Search</button>
            </form>
        
            <h2>Search Results</h2>
            <div className="RecipeCard-container">
            {searchResult.map((recipe, index) => 
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
