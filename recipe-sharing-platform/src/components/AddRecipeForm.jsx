import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    ingredients: '',
    steps: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const validationErrors = {};
    if (!formData.title) validationErrors.title = 'Title is required.';
    if (!formData.ingredients) {
      validationErrors.ingredients = 'Ingredients are required.';
    } else if (formData.ingredients.split('\n').length < 2) {
      validationErrors.ingredients = 'At least two ingredients are required.';
    }
    if (!formData.steps) validationErrors.steps = 'Preparation steps are required.';
    return validationErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    console.log('Form submitted:', formData);
    setFormData({ title: '', ingredients: '', steps: '' });
    setErrors({});
    alert('Recipe submitted successfully!');
  };

  return (
    <div className="container mx-auto p-4 max-w-xl">
      <h1 className="text-3xl font-bold mb-6">Add a New Recipe</h1>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8">
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
            Recipe Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.title ? 'border-red-500' : ''
            }`}
          />
          {errors.title && <p className="text-red-500 text-xs italic">{errors.title}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="ingredients" className="block text-gray-700 text-sm font-bold mb-2">
            Ingredients (one per line)
          </label>
          <textarea
            id="ingredients"
            name="ingredients"
            rows="4"
            value={formData.ingredients}
            onChange={handleChange}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.ingredients ? 'border-red-500' : ''
            }`}
          />
          {errors.ingredients && (
            <p className="text-red-500 text-xs italic">{errors.ingredients}</p>
          )}
        </div>

        <div className="mb-6">
          <label htmlFor="steps" className="block text-gray-700 text-sm font-bold mb-2">
            Preparation Steps (one per line)
          </label>
          <textarea
            id="steps"
            name="steps"
            rows="4"
            value={formData.steps}
            onChange={handleChange}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.steps ? 'border-red-500' : ''
            }`}
          />
          {errors.steps && <p className="text-red-500 text-xs italic">{errors.steps}</p>}
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit Recipe
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRecipeForm;
