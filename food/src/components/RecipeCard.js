import React from 'react';

function RecipeCard({ title }) {
  return (
    <div className="recipe-card">
      <p>{title}</p>
    </div>
  );
}

export default RecipeCard;
