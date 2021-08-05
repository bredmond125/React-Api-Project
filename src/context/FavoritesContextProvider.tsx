import { createContext, ReactNode, useEffect, useState } from "react";
import Favorites from "../components/Favorites";
import { Props } from "../components/RecipeCard";
import { Recipe } from "../models/Item";




export interface FavoriteContextValue  {
    favorites: any[],
    addFavorite: (newFavorite: Recipe) => void
}

const defaultValue: FavoriteContextValue = {
    favorites: [],
    addFavorite: () => {}
}

export const FavoritesContext = createContext(defaultValue);

export function FavoritesContextProvider({children}: {children: ReactNode}) {

    const [favorites, setFavorite] = useState<any[]>([])

    


    function addFavorite(newFavorite: Recipe){
        const prevFavorites = favorites
        prevFavorites.push(newFavorite)
        console.log(newFavorite);
        console.log(favorites);
        setFavorite(prevFavorites) 
        console.log(favorites);
    }

    // useEffect(() => {
    //     console.log('hiiii');
        
    // }, [favorites]);

    return (
        <FavoritesContext.Provider value={{favorites, addFavorite}}>
            {children}
        </FavoritesContext.Provider>
    )
}