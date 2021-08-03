import axios from "axios";
import { useEffect, useState } from "react";

function useSearch(paramObject: any) {

    const [filteredRecipes, setFilteredRecipes] = useState([]);

    const recipeApiUrl = 'https://api.edamam.com/api/recipes/v2?';
  
    useEffect(() => {
        console.log('hi');
        axios.get(recipeApiUrl, {
        params: paramObject
        }).then((response) => {
            console.log(response.data.hits);
            setFilteredRecipes(response.data.hits);
        }) 
    }, [paramObject]);
    
    return filteredRecipes;

}

export default useSearch;


