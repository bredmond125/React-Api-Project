import { createContext, ReactNode, useEffect, useState } from "react";
import Favorites from "../components/Favorites";
import { Props } from "../components/RecipeCard";
import { Recipe } from "../models/Item";




export interface FavoriteContextValue  {
    favorites: any[],
    addFavorite: (newFavorite: Recipe) => void,
    deleteFavorite: (index: number) => void,
    counter: number;
}

const defaultValue: FavoriteContextValue = {
    favorites: [],
    addFavorite: () => {},
    deleteFavorite: () => {},
    counter: 0
}

export const FavoritesContext = createContext(defaultValue);

export function FavoritesContextProvider({children}: {children: ReactNode}) {

    const [favorites, setFavorite] = useState<any[]>([])

    const[counter, setCounter] = useState<number>(0);

    


    function addFavorite(newFavorite: Recipe){
        const prevFavorites = favorites
        prevFavorites.push(newFavorite)
        console.log(newFavorite);
        console.log(favorites);
        setFavorite(prevFavorites) 
        console.log(favorites);
        setCounter(counter + 1)
    }

    function deleteFavorite(index: number) {
        console.log(favorites);
      
        setFavorite(prevFavorites => [...prevFavorites.slice(0, index), ...prevFavorites.slice(index+1)]);
        setCounter(counter - 1);
    }

    // useEffect(() => {
    //     console.log('hiiii');
        
    // }, [favorites]);

    return (
        <FavoritesContext.Provider value={{favorites, addFavorite, deleteFavorite, counter}}>
            {children}
        </FavoritesContext.Provider>
    )
}