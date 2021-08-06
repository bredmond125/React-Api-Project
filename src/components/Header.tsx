import "../styles/Header.css";
import FastfoodRoundedIcon from '@material-ui/icons/FastfoodRounded';
import { NavLink } from "react-router-dom";
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import { useContext, useState } from "react";
import { ModalContext } from "../context/ModalContextProvider";
import { FavoritesContext } from "../context/FavoritesContextProvider";
import PlaylistPlaySharpIcon from '@material-ui/icons/PlaylistPlaySharp';



function Header() {
    
    const {favorites, addFavorite, deleteFavorite, counter} = useContext(FavoritesContext);



    let count = counter;

   

    return(
        <header className="Header">

            <nav className="Nav">
                <div className="Home">
                    <NavLink to="/"><FastfoodRoundedIcon className="HomeIcon" /></NavLink>
                </div>
                <div className="Extras">
                    <NavLink to="/Favorites"><PlaylistPlaySharpIcon className="Fav"/></NavLink>
                    <p className="Counter">{count}</p>
                    <NavLink to="/FilterRecipes"><SearchRoundedIcon className="Search"/></NavLink>
                    <NavLink to="/Random"><div>Find A Food Match Here</div></NavLink>
                   {/* <button className="ButtonModal" onClick={toggleModal}><SearchRoundedIcon/></button> */}
                </div>
                
                


            </nav>
            

        </header>

    );
}


export default Header;