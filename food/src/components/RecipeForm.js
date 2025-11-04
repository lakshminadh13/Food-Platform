import React, { useState } from "react";

export default function RecipeForm() {
  const [recipe, setRecipe] = useState({
    title: "",
    ingredients: "",
    instructions: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Recipe Added!\n${recipe.title}`);
    setRecipe({ title: "", ingredients: "", instructions: "" });
  };

  return (
    <div className="form-container">
      <h2>Add a New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Recipe Title"
          value={recipe.title}
          onChange={(e) => setRecipe({ ...recipe, title: e.target.value })}
        />
        <textarea
          placeholder="Ingredients"
          value={recipe.ingredients}
          onChange={(e) => setRecipe({ ...recipe, ingredients: e.target.value })}
        />
        <textarea
          placeholder="Instructions"
          value={recipe.instructions}
          onChange={(e) => setRecipe({ ...recipe, instructions: e.target.value })}
        />
        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
}
