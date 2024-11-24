import React, { useEffect } from 'react';
import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const recipes = useRecipeStore((state) => state.recipes);

  // Ensure filteredRecipes is populated initially with all recipes
  useEffect(() => {
    if (filteredRecipes.length === 0) {
      useRecipeStore.getState().filterRecipes(); // Trigger filter on load
    }
  }, [filteredRecipes]);

  return (
    <div>
      {filteredRecipes.length > 0
        ? filteredRecipes.map((recipe) => (
            <div key={recipe.id}>
              <Link to={`/recipe/${recipe.id}`}>
                <h3>{recipe.title}</h3>
              </Link>
              <p>{recipe.description}</p>
            </div>
          ))
        : recipes.map((recipe) => (
            <div key={recipe.id}>
              <Link to={`/recipe/${recipe.id}`}>
                <h3>{recipe.title}</h3>
              </Link>
              <p>{recipe.description}</p>
            </div>
          ))}
    </div>
  );
};

export default RecipeList;
