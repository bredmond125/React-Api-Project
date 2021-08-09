import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import '../styles/Banner.css';

function Banner() {
 
    const recipeApiUrlById = `https://api.edamam.com/api/recipes/v2/recipe_a395a1fe09477ef995700ea8a471d13a?type=public&app_id=045d35b5&app_key=${process.env.REACT_APP_RECIPE_API_KEY}`;

    interface BannerRecipe {
        label: string;
        image: string;
    }
    const [bannerObject, setBannerObject] = useState<BannerRecipe>({
        label: 'Orange-Spiced Cheesecake',
        image: "https://www.edamam.com/web-img/d22/d2226df12ec05f3600bd0936525f22dd.jpeg"
    });
       
    useEffect(() => {
        axios.get(recipeApiUrlById).then((response) => {
            setBannerObject(response.data.recipe);
            //console.log(bannerObject);
            })  
       
    }, [])
    



    return (
        <div className="Banner">
            <div className="banner-container">
                <div className="banner-content">
                    <h3 id="banner-title">Our Featured Recipe: {bannerObject.label}</h3>
                    <p id="banner-text">This Orange-Spiced Cheesecake recipe is one of our most favorited recipes.  It also comes highly recommended by Foodflix staff member Brittany.  She recommends having a slice with a cup of coffee.  Or to comfort yourself after REST API's get you down.</p>
                </div>
                <img id="banner-image" src={bannerObject.image} alt="Cheesecake"/>
            </div>
        </div>
    )
}

export default Banner
