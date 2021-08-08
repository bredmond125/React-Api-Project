import { useEffect } from 'react';
import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { DetailsContext } from '../context/DetailsContextProvider';
import { FavoritesContext } from '../context/FavoritesContextProvider';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import HighlightOffSharpIcon from '@material-ui/icons/HighlightOffSharp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { Recipe } from '../models/Item';
import '../styles/RecipeCard.css';

//PROPS
export interface Props {
    recipe: Recipe;
    index: number;
}


function RecipeCard({recipe, index}: Props) {

    //useContext
    const {favorites, addFavorite, deleteFavorite} = useContext(FavoritesContext);
    const {details, showDetails} = useContext(DetailsContext);

    //useState
    const [foundFav, setFoundFav] = useState<Boolean>(false);
    const [collapse, setCollapse] = useState<Boolean>(true);
    const [height, setHeight] = useState<String>('min');

    const newFavorite = recipe;

    //designates recipes already in favorites
    function handleFindFav() {
        let findFav = favorites.find(fav => fav.recipe.label === recipe.recipe.label);
        // console.log(findFav);

        if(findFav) {
            setFoundFav(true);
        }
        
    }

    useEffect(() => {
        handleFindFav();
    }, [])
    
    //add to favorites
   function handleAdd(newFavorite: Recipe): any {
       addFavorite(newFavorite);
    //    console.log(newFavorite);
       handleFindFav();    
   }

   //delete from favorites
   function handleDelete(index: number): any {
       deleteFavorite(index);
    //    console.log(index);
       handleFindFav();
       setFoundFav(!foundFav);
   }

//    console.log(favorites);
//    console.log(recipe);
//    console.log(recipe.recipe.label);
  
   //creates context for details
   function handleDetails(newFavorite: Recipe) {
        showDetails(newFavorite);
   }

   //extends and collapses bottom of card
   function handleCollapse() {
        setCollapse(!collapse);
        console.log(collapse);

        if (height === "min") {
            setHeight('max'); 
        } else {
            setHeight('min');
        }
   }
   
    return(
        <div className="RecipeCard">
            <div className="card-container">
                <div className="image-container" onClick={handleCollapse}>
                    <img src={recipe.recipe.image} alt="Food"/>
                </div>
                <div className="label-container" onClick={handleCollapse}>
                    <p className="card-label">
                        {recipe.recipe.label}
                    </p>
                </div>
                <div className={`collapsible ${height}height`} style={collapse ? {display: 'none'} : {display: 'block'}}>
                   <div className="buttons">
                        <div>
                            <div className="stylish-button" style={foundFav ? {display: 'none'} : {display: 'block'}} onClick={() => {handleAdd(newFavorite)}}>
                                <PlaylistAddIcon />
                            </div>
                            <HighlightOffSharpIcon style={foundFav ? {display: 'block'} : {display: 'none'}} onClick={() => {handleDelete(index)}}/>
                        </div>
                        <div>
                            <NavLink to="/Description" onClick={() => {handleDetails(newFavorite)}}>
                                <div className="stylish-button" title="View Details">
                                    <KeyboardArrowDownIcon className="stylish-icon"/>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                     <div className="link-container">
                        <a className="stylish-link" href={recipe.recipe.url} target="_blank">Original Recipe</a>  
                    </div>
                </div>
            </div>

        </div>
    )
}

export default RecipeCard;


