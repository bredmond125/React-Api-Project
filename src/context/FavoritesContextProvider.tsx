import { createContext, ReactNode, useState } from "react";
import Favorites from "../components/Favorites";
import { Props } from "../components/RecipeCard";




export interface FavoriteContextValue  {
    favorites: any[],
    addFavorite: (newFavorite: Props) => void
}

const defaultValue: FavoriteContextValue = {
    favorites: [],
    addFavorite: () => {}
}

export const FavoriteContext = createContext(defaultValue);

function FavoritesContextProvider({children}: {children: ReactNode}) {

    const [favorites, setFavorite] = useState<any[]>([])

    function addFavorite(newFavorite: Props){
        setFavorite(prevFavorite => [
            ...prevFavorite,
            newFavorite
        ]) 
    }

    return (
        <FavoriteContext.Provider value={{favorites, addFavorite}}>
            {children}
        </FavoriteContext.Provider>
    )
}