import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '', // Search term input by the user
  favorites: [], // List of favorite recipes (storing recipe IDs)

  // Add a recipe to favorites
  addFavorite: (recipeId) => set((state) => ({
    favorites: [...state.favorites, recipeId],
  })),

  // Remove a recipe from favorites
  removeFavorite: (recipeId) => set((state) => ({
    favorites: state.favorites.filter((id) => id !== recipeId),
  })),

  recommendations: [], // List of recommended recipes

  // Generate recommendations based on the user's favorite recipes (mock implementation)
  generateRecommendations: () => set((state) => {
    const recommended = state.recipes.filter((recipe) =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5
    );
    return { recommendations: recommended };
  }),

  // Set the search term
  setSearchTerm: (term) => set({ searchTerm: term }),

  // Filter recipes based on the search term
  filteredRecipes: [], // Initially empty, will hold filtered results
  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),

  // Optionally, you can extend filtering by ingredients, time, etc.
  filterByIngredients: (ingredient) =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.ingredients.toLowerCase().includes(ingredient.toLowerCase())
      ),
    })),

  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),

  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    })),

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),

  setRecipes: (newRecipes) =>
    set(() => ({
      recipes: newRecipes,
    })),
}));

export default useRecipeStore;
