import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

const RECIPES = [
  {
    name: "Chicken Biryani",
    image:
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/12/chicken-biryani.jpg",
    ingredients: ["Basmati rice", "Chicken", "Spices", "Yogurt", "Onion"],
    procedure: ["Marinate chicken", "Par-cook rice", "Layer & dum-cook"],
  },
  {
    name: "Paneer Butter Masala",
    image:
      "https://www.vegrecipesofindia.com/wp-content/uploads/2016/12/paneer-butter-masala-restaurant-style-recipe-11.jpg",
    ingredients: ["Paneer", "Tomato", "Butter", "Cream", "Spices"],
    procedure: ["Make tomato gravy", "Add paneer", "Finish with cream"],
  },
  {
    name: "Fish Curry",
    image:
      "https://www.kannammacooks.com/wp-content/uploads/fish-curry-recipe-1-3.jpg",
    ingredients: ["Fish", "Tamarind", "Spices", "Onion"],
    procedure: ["Make masala", "Add fish", "Simmer until done"],
  },
  // add more if you want...
];

export default function Home() {
  return (
    <div className="home">
      <h2 className="home-title">🍛 Food Recipe Platform — Home</h2>

      <div className="recipe-grid">
        {RECIPES.map((r) => (
          <div className="recipe-card" key={r.name}>
            <img src={r.image} alt={r.name} />
            <h3>{r.name}</h3>
            <p className="short-desc">{r.ingredients.slice(0, 3).join(", ")}</p>
            <Link to={`/recipe/${encodeURIComponent(r.name)}`} className="view-btn">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
