import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import React from 'react';
import './App.css';
import Home from './components/Home';
import SearchForm from './components/SearchForm';
import { RecipeContext, RecipeContextProvider } from './context/RecipeContextProvider';
import Header from './components/Header';
import { ModalContextProdiver } from './context/ModalContextProvider';
import FilterRecipes from './components/FilterRecipes';
import Favorites from './components/Favorites';
import { FavoritesContextProvider } from './context/FavoritesContextProvider';
import Description from './components/Description';
import { DetailsContextProvider } from './context/DetailsContextProvider';

function App() {
  return (

    <Router>
      <RecipeContextProvider>
        <FavoritesContextProvider>
          <DetailsContextProvider>
          <Header/>
            <Route path="/" exact>
              <Home/>
            </Route>
            <Switch>
              <Route path="/FilterRecipes" exact>
                <FilterRecipes />
              </Route>
              <Route path="/Favorites" exact>
                <Favorites/>
              </Route>
              <Route path="/Description" exact>
                <Description/>
              </Route>
            </Switch>
            </DetailsContextProvider>
          </FavoritesContextProvider>
        </RecipeContextProvider>
    </Router>
    
      
    
        
    
  );
}

export default App;
