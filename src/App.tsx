import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import React from 'react';
import './App.css';
import Home from './components/Home';
import SearchForm from './components/SearchForm';
import { RecipeContext, RecipeContextProvider } from './context/RecipeContextProvider';
import Header from './components/Header';
import { ModalContextProdiver } from './context/ModalContextProvider';

function App() {
  return (

    <Router>
     <ModalContextProdiver> 
        <Header/>
     </ModalContextProdiver> 
      
      <Route path="/" exact>
        <RecipeContextProvider>
          <ModalContextProdiver> 
            <Home/>
         </ModalContextProdiver>
        </RecipeContextProvider>
      </Route>
      <Switch>
        <Route path="/search" exact>
          <RecipeContextProvider>
            <ModalContextProdiver>
              <SearchForm/>
            </ModalContextProdiver>
          </RecipeContextProvider>
        </Route>
      </Switch>
    </Router>
    
      
    
        
    
  );
}

export default App;
