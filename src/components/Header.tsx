import "../styles/Header.css";
import FastfoodRoundedIcon from '@material-ui/icons/FastfoodRounded';
import { NavLink } from "react-router-dom";
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import { useContext, useState } from "react";
import { ModalContext } from "../context/ModalContextProvider";



function Header() {
    const {showForm, toggleModal} = useContext(ModalContext);
    
    // const [showToggle, setShowToggle] = useState(showForm);
    

    console.log(showForm)

   

    return(
        <header className="Header">

            <nav className="Nav">
                <div className="Home">
                    <NavLink to="/"><FastfoodRoundedIcon className="HomeIcon" /></NavLink>
                </div>
                <div className="Extras">
                    <NavLink to="/Favorites"><FavoriteRoundedIcon className="Fav"/></NavLink>
                    <NavLink to="/FilterRecipes"><SearchRoundedIcon className="Search"/></NavLink>

                   <button className="ButtonModal" onClick={toggleModal}><SearchRoundedIcon/></button>
                </div>
                
                


            </nav>
            

        </header>

    );
}


export default Header;