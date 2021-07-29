import axios from "axios";

const recipeApiUrl = 'https://api.edamam.com/api/recipes/v2?';
const appId = '045d35b5';
const appKey = process.env.REACT_APP_RECIPE_API_KEY;
const appType = 'public';


export const fetchRecipeServices = (query: any) => {

    const parameters = {
        app_id: appId,
        app_key: appKey,
        type: appType,
        q: query,
    }

    return axios.get(recipeApiUrl, {
        params: parameters
        
    }).then((response) => {
        return response.data.hits
    })

}