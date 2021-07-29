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
        q: query.q,
    }
    // if(query.calories) {
    //     parameters.calories = query.calories
    //make an interface to finish the puzzzzzzzzz
    // }

    return axios.get(recipeApiUrl, {
        params: parameters
        
    }).then((response) => {
        console.log(response);
        return response.data.hits
    })

}