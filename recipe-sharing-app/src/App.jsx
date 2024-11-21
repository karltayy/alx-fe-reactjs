import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeDetails from './components/RecipeDetails';

function App() {
  return (
    <div>
      <h1>Recipe Sharing App</h1>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <AddRecipeForm />
              <RecipeList />
            </>
          }
        />
        <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
      </Routes>
      <FavoritesList />
      <RecommendationsList />
    </div>
  );
}

export default App;