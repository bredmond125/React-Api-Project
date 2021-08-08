import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import React from 'react';
import './App.css';
import Home from './components/Home';
import { RecipeContextProvider } from './context/RecipeContextProvider';
import Header from './components/Header';
import FilterRecipes from './components/FilterRecipes';
import Favorites from './components/Favorites';
import { FavoritesContextProvider } from './context/FavoritesContextProvider';
import Description from './components/Description';
import { DetailsContextProvider } from './context/DetailsContextProvider';
import TinderCards from './components/TinderCards';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
    <Router>
      <RecipeContextProvider>
        <FavoritesContextProvider>
          <DetailsContextProvider>
          <Header/>
          <div className="main-content">
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
              <Route path="/Random" exact>
                <TinderCards />
              </Route>
            </Switch>
            </div>
            </DetailsContextProvider>
          </FavoritesContextProvider>
        </RecipeContextProvider>
    </Router>
    
    </div> 
    
        
    
  );
}

export default App;
