import "../styles/Home.css";
import { useContext } from "react";
import { RecipeContext } from "../context/RecipeContextProvider";
import { NavLink } from "react-router-dom";
import RecipeList from "./RecipeList";

function Home() {

    //const { recipes, fetchNewRecipes } = useContext(RecipeContext);

    return(
        <main className="Home" >
            
            <RecipeList title='Pumpkin Season is Coming' query='pumpkin'/>
            <RecipeList title='Because Greg Likes Peppers' query='pepper' />
            <RecipeList title='Apples: Your Favorite Variable' query='apple' />

        </main>
    );
}


export default Home;