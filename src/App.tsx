import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import React from 'react';
import './App.css';
import Home from './components/Home';
import SearchForm from './components/SearchForm';
import { RecipeContext, RecipeContextProvider } from './context/RecipeContextProvider';
import Header from './components/Header';

function App() {
  return (

    <Router>
      <Header/>
      <Route path="/" exact>
        <RecipeContextProvider>
          <Home/>
        </RecipeContextProvider>
      </Route>
      <Switch>
        <Route path="/search" exact>
          <RecipeContextProvider>
            <SearchForm/>
          </RecipeContextProvider>
        </Route>
      </Switch>
    </Router>
    
      
    
        
    
  );
}

export default App;
