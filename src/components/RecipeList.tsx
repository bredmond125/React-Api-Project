import React, { useEffect, useState } from 'react'
import { fetchRecipeServices } from '../services/recipeService';
import RecipeCard from './RecipeCard';
import '../styles/RecipeList.css';
import { Recipe } from '../models/Item';

//PROPS
interface Props {
    title: string;
    query: string;
}

function RecipeList({title, query}: Props) {

    const [recipeArray, setRecipeArray] = useState<Recipe[]>([]);

    function createNewRecipeCategory(query: any) {
        const qValue = {
            q: query
        }

        fetchRecipeServices(qValue).then((data) => {
            setRecipeArray(data);
        })
    };


    useEffect(() => {
        createNewRecipeCategory(query); 
    }, [query] );
    
    return (
        <section className="RecipeList">
            <h3 className="RecipeList__title">{title}</h3>
            <div className="RecipeCard-container">
            {recipeArray.map((recipe, index) => 
                
                <RecipeCard
                key={`${recipe.recipe.label}-${index}`}
                recipe={recipe}
                index={index}
                />
            )}
            </div>
        </section>
    )
}

export default RecipeList
