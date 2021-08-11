import { createContext, ReactNode, useState } from "react";
import { Recipe } from "../models/Item";


export interface FavoriteContextValue  {
    favorites: any[],
    addFavorite: (newFavorite: Recipe) => void,
    deleteFavorite: (index: number) => void,
    
}

const defaultValue: FavoriteContextValue = {
    favorites: [],
    addFavorite: () => {},
    deleteFavorite: () => {},
    
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

    function deleteFavorite(index: number) {
        console.log(favorites);
      
        setFavorite(prevFavorites => [...prevFavorites.slice(0, index), ...prevFavorites.slice(index+1)]);
        
    }

    // useEffect(() => {
    //     console.log('hiiii');
        
    // }, [favorites]);

    return (
        <FavoritesContext.Provider value={{favorites, addFavorite, deleteFavorite}}>
            {children}
        </FavoritesContext.Provider>
    )
}