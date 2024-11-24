import React from 'react';
import { Router, Routes, Route, Link } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';

const customHistory = createBrowserHistory();

const App = () => {
  return (
    <Router history={customHistory}>
      <div style={{ padding: '20px' }}>
        <h1>Recipe Sharing Application</h1>
        <nav>
          <Link to="/">Home</Link> | <Link to="/add">Add Recipe</Link>
        </nav>
        <Routes>
        <Route path="/favorites" element={<FavoritesList />} />
        <Route path="/recommendations" element={<RecommendationsList />} />
          <Route
            path="/"
            element={
              <>
                <AddRecipeForm />
                <RecipeList />
              </>
            }
          />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
