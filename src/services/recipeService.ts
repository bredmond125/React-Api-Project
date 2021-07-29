import axios from "axios";

const recipeApiUrl = 'https://api.edamam.com/api/recipes/v2?';
const appId = '045d35b5';
const appKey = process.env.REACT_APP_RECIPE_API_KEY;
const appType = 'public';


export const fetchRecipeServices = (food: string = '') => {
    return axios.get(recipeApiUrl, {
        params: {
            app_id: appId,
            app_key: appKey,
            type: appType,
            q: food,
        }


    }).then((response) => {
        return response.data.hits
    })

}