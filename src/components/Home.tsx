import "../styles/Home.css";
import { useContext } from "react";
import { RecipeContext } from "../context/RecipeContextProvider";
import { NavLink } from "react-router-dom";
import RecipeList from "./RecipeList";
import TestForm from "./TestForm";
import { Search } from "@material-ui/icons";
import SearchForm from "./SearchForm";
import { ModalContext } from "../context/ModalContextProvider";

function Home() {
     
    //const { recipes, fetchNewRecipes } = useContext(RecipeContext);
    const {showForm, toggleModal} =useContext(ModalContext);
    
    return(
        <main className="Home" >

            <TestForm />
            <div className="FormModal" style={{ display: showForm ? "block" : "none"}} >
                <SearchForm/>
            </div>
            
            
            <RecipeList title='Pumpkin Season is Coming' query='pumpkin'/>
            <RecipeList title='Because Greg Likes Peppers' query='pepper' />
            <RecipeList title='Apples: Your Favorite Variable' query='apple' />

        </main>
    );
}


export default Home;