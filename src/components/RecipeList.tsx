import React, { useState } from 'react'
import { fetchRecipeServices, RecipeResponse } from '../services/recipeService';
import RecipeCard from './RecipeCard';

interface Props {
    title: string;
    query: string;
}

function RecipeList({title, query}: Props) {

    const [recipeArray, setRecipeArray] = useState<RecipeResponse[]>([]);

    function createNewRecipeCategory(query: any) {
        const qValue = {
            q: query
        }

        fetchRecipeServices(qValue).then((data) => {
            setRecipeArray(data);
        })
    };

    createNewRecipeCategory(query);
 
    return (
        <section className="RecipeList">
            <h3 className="RecipeList__title">{title}</h3>
            {recipeArray.map((recipe, index) => 
                <RecipeCard
                key={`${recipe.recipe.label}-${index}`}
                label={recipe.recipe.label}
                image={recipe.recipe.image}
                url={recipe.recipe.url}
                />
            )}
        </section>
    )
}

export default RecipeList
