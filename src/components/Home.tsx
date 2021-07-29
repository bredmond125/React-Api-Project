import "../styles/Home.css";

import { useContext } from "react";
import { RecipeContext } from "../context/RecipeContextProvider";





function Home() {

    const {recipes} = useContext(RecipeContext);
    

    return(
        <main className="Home" >
            {recipes.map((recipe, index) => 
            <p key={`${recipe.label}-${recipe.url}-${index}`}>
                <h4>{recipe.label} {recipe.url}</h4>
            </p>
            )}
        </main>


    );
}


export default Home;