import "../styles/Home.css";
import RecipeList from "./RecipeList";

function Home() {
    
    return(
        <main className="Home" >
            
            <RecipeList title='Pumpkin Season is Coming' query='pumpkin'/>
            <RecipeList title='Because Greg Likes Peppers' query='pepper' />  
            <RecipeList title='Because Brandon Ate Ramen' query='ramen' />

        </main>
    );
}

export default Home;