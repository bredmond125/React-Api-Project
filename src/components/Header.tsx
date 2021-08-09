import "../styles/Header.css";
import FastfoodRoundedIcon from '@material-ui/icons/FastfoodRounded';
import { NavLink } from "react-router-dom";
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContextProvider";
import PlaylistPlaySharpIcon from '@material-ui/icons/PlaylistPlaySharp';


function Header() {
    
    
    const {counter} = useContext(FavoritesContext);

    let count = counter;

    return(
        <header className="Header">

            <nav className="Nav">
                <div className="Home">
                    <NavLink to="/" id="home-link"> <h1 >Food Flix</h1></NavLink>
                </div>
                <div className="Extras">
                    <NavLink to="/Favorites"><PlaylistPlaySharpIcon  className="Fav"/></NavLink>
                    <p className="Counter">{count}</p>
                    <NavLink to="/FilterRecipes"><SearchRoundedIcon className="Search"/></NavLink>
                    <NavLink to="/Random" id="tinder-link"><div>Find A Food Match</div></NavLink>
                </div>
                
            </nav>
            
        </header>

    );
}


export default Header;