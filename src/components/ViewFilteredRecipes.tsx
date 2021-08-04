import React from 'react'
import RecipeCard from './RecipeCard'

export interface Props {
    filteredRecipes: any[];
}

function ViewFilteredRecipes({filteredRecipes}: Props) {
    return (
        <section className="ViewFilteredRecipes">
            <h2>Search Results</h2>
            <div className="filtered-recipes-container">
                {filteredRecipes.map((recipe, index) => 
                    <RecipeCard
                    key={`${recipe.recipe.label}-${index}`}
                    label={recipe.recipe.label}
                    image={recipe.recipe.image}
                    url={recipe.recipe.url}
                    />
                )}
            </div>
        </section>
    )
}

export default ViewFilteredRecipes
