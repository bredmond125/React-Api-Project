import React from 'react'
import RecipeCard from './RecipeCard'

//PROPS
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
                    key={`${recipe.label}-${index}`}
                    recipe={recipe}
                    index={index}
                    
                    />
                )}
            </div>
        </section>
    )
}

export default ViewFilteredRecipes
