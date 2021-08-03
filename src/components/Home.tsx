import "../styles/Home.css";
import { useContext } from "react";
import TestForm from "./TestForm2.0";
import SearchForm from "./SearchForm";
import { ModalContext } from "../context/ModalContextProvider";
import { useState } from "react";
import RecipeList from "./RecipeList";

function Home() {
    
    
     
    // const { recipes, fetchNewRecipes } = useContext(RecipeContext);
    const {showForm, toggleModal} = useContext(ModalContext);

    
   
    console.log(showForm)
    
    
    return(
        <main className="Home" >
            <div className="FormModal" style={{ display: showForm ? "block" : "none"}} >
            
            <SearchForm/>
        
          </div>

            <TestForm />
            
            
            
           <RecipeList title='Pumpkin Season is Coming' query='pumpkin'/>
           {/* <RecipeList title='Because Greg Likes Peppers' query='pepper' /> */} 
            {/* <RecipeList title='Apples: Your Favorite Variable' query='apple' /> */}

        </main>
    );
}


export default Home;