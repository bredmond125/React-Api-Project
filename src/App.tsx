import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import React from 'react';
import './App.css';
import Home from './components/Home';
import SearchForm from './components/SearchForm';
import { RecipeContextProvider } from './context/RecipeContextProvider';
import Header from './components/Header';
import { ModalContextProdiver } from './context/ModalContextProvider';
import FilterRecipes from './components/FilterRecipes';
import Favorites from './components/Favorites';
import { FavoritesContextProvider } from './context/FavoritesContextProvider';

function App() {
  return (

    <Router>
     <ModalContextProdiver> 
        <Header/>
     </ModalContextProdiver> 
      
      <Route path="/" exact>
        <RecipeContextProvider>
          <FavoritesContextProvider>
            <Home/>
          </FavoritesContextProvider>
        </RecipeContextProvider>
      </Route>
      <Switch>
        <Route path="/FilterRecipes" exact>
          <FavoritesContextProvider>
            <FilterRecipes />
          </FavoritesContextProvider>
        </Route>
        <Route path="/Favorites" exact>
          <RecipeContextProvider>
            <FavoritesContextProvider>
              <Favorites/>
            </FavoritesContextProvider>
          </RecipeContextProvider>
          
        
        </Route>
      </Switch>
    </Router>
    
      
    
        
    
  );
}

export default App;
