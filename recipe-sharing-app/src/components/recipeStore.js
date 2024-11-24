import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [], // Initial empty array for recipes
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes }),
}));

export default useRecipeStore;
