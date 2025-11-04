import React from 'react';
import RecipeForm from '../components/RecipeForm';

function AddRecipe() {
  const handleAddRecipe = (recipe) => {
    console.log('New Recipe Added:', recipe);
    alert(`✅ Recipe "${recipe.title}" added successfully!`);
  };

  return (
    <div className="add-recipe">
      <h2>Add a New Recipe</h2>
      <RecipeForm onSubmit={handleAddRecipe} />
    </div>
  );
}

export default AddRecipe;
