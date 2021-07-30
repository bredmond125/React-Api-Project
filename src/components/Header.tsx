import "../styles/Header.css";
import FastfoodRoundedIcon from '@material-ui/icons/FastfoodRounded';
import { NavLink } from "react-router-dom";
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';



function Header() {
    return(
        <header className="Header">

            <nav className="Nav">
                <div className="Home">
                    <NavLink to="/"><FastfoodRoundedIcon className="HomeIcon" /></NavLink>
                </div>
                <div className="Extras">
                    <NavLink to="/Favorites"><FavoriteRoundedIcon className="Fav"/></NavLink>
                    <NavLink to="/Search"><SearchRoundedIcon className="Search"/></NavLink>
                </div>
                


            </nav>
            

        </header>

    );
}


export default Header;