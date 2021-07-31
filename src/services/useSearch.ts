import axios from "axios";
import { useEffect, useState } from "react";

function useSearch(paramObject: any) {

    const [filteredRecipes, setFilteredRecipes] = useState([]);

    const recipeApiUrl = 'https://api.edamam.com/api/recipes/v2?';
    // const appType = 'public';
    // const appId = '045d35b5';
    // const appKey = process.env.REACT_APP_RECIPE_API_KEY;

    // const parameters = {
    //     app_id: appId,
    //     app_key: appKey,
    //     type: appType,
    //     q: query.q,
    // }

    useEffect(() => {
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


