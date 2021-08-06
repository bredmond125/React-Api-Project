import React, { useContext } from 'react'
import { Recipe } from '../models/Item'
import {useLocation} from 'react-router-dom'
import { DetailsContext } from '../context/DetailsContextProvider';

export interface Props {
    recipe: Recipe;
}

function Description() {

    const {details, showDetails} = useContext(DetailsContext)

    // const location = useLocation();
    // const recipe = location.recipe
    
    const newDetails = details;
    return (
        <div className="Description">
            {newDetails.recipe.label}
            {newDetails.recipe.image}
            {newDetails.recipe.ingredientLines}
        </div>
    )
}

export default Description
