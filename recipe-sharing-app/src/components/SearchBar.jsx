import React from 'react';
import { useRecipeStore } from './recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);

  const handleChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    filterRecipes(); // Trigger filtering when the search term changes
  };

  return (
    <input
      type="text"
      placeholder="Search recipes by name..."
      onChange={handleChange}
      style={{ padding: '8px', width: '300px', margin: '10px' }}
    />
  );
};

export default SearchBar;
