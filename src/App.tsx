
import React from 'react';
import './App.css';
import Home from './components/Home';
import { RecipeContext, RecipeContextProvider } from './context/RecipeContextProvider';

function App() {
  return (
    <div className="App">
      
    {/* TODO: Create a homepage... with a form 
        homepage will include a search bar, check boxes, and slider scale.  */}
    
    {/* TODO: On the homepage create a top "featured" image to show the user feature picks */}
        <RecipeContextProvider>
          <Home/>
        </RecipeContextProvider>
    </div>
  );
}

export default App;
