import React from "react";
import { useParams, Link } from "react-router-dom";

function RecipeDetails() {
  const { name } = useParams();

  return (
    <div className="recipe-details">
      <h2>{name}</h2>
      <p>Detailed cooking instructions and video tutorials coming soon 🍽️</p>
      <Link to="/" className="back-btn">← Back to Home</Link>
    </div>
  );
}

export default RecipeDetails;
