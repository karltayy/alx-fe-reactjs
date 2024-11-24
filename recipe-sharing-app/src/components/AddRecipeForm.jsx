import React, { useState } from 'react';
import useRecipeStore from '../store/recipeStore';

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title && description) {
      addRecipe({ id: Date.now(), title, description });
      setTitle('');
      setDescription('');
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <h2>Add New Recipe</h2>
      <div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Recipe Title"
          style={{ marginRight: '10px' }}
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Recipe Description"
        />
      </div>
      <button type="submit" style={{ marginTop: '10px' }}>
        Add Recipe
      </button>
    </form>
  );
};

export default AddRecipeForm;
