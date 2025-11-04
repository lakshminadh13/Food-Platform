import React from "react";
import { Link } from "react-router-dom";

const recipes = [
  {
    name: "Chicken Biryani",
    image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/12/chicken-biryani.jpg",
    ingredients: [
      "Basmati rice", "Chicken", "Curd", "Spices", "Onions", "Saffron milk"
    ],
    procedure: "Marinate chicken in curd and spices. Cook rice until 70%. Layer rice and chicken, seal the pot, and cook on low flame for 20 minutes."
  },
  {
    name: "Paneer Butter Masala",
    image: "https://www.vegrecipesofindia.com/wp-content/uploads/2016/12/paneer-butter-masala-restaurant-style-recipe-11.jpg",
    ingredients: ["Paneer", "Butter", "Tomatoes", "Cream", "Spices"],
    procedure: "Blend tomatoes and cook in butter. Add cream and paneer cubes, simmer for 10 minutes until thick and creamy."
  },
  {
    name: "Fish Curry",
    image: "https://www.kannammacooks.com/wp-content/uploads/fish-curry-recipe-1-3.jpg",
    ingredients: ["Fish", "Tamarind", "Curry leaves", "Spices", "Garlic"],
    procedure: "Make a masala paste, add tamarind water, and cook fish in the gravy until soft and flavorful."
  },
  {
    name: "Egg Curry",
    image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2019/07/egg-curry-recipe.jpg",
    ingredients: ["Boiled eggs", "Onion", "Tomato", "Ginger garlic paste", "Masalas"],
    procedure: "Cook onion-tomato gravy, add boiled eggs and simmer for 10 minutes."
  },
  {
    name: "Vegetable Pulao",
    image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2018/12/vegetable-pulao.jpg",
    ingredients: ["Rice", "Mixed vegetables", "Spices", "Ghee"],
    procedure: "Fry vegetables in ghee, add rice and spices, cook until rice is soft and fluffy."
  },
  {
    name: "Mutton Curry",
    image: "https://www.cookwithmanali.com/wp-content/uploads/2021/07/Indian-Mutton-Curry-500x500.jpg",
    ingredients: ["Mutton", "Onion", "Tomato", "Curd", "Spices"],
    procedure: "Pressure cook mutton with masalas, onion, and tomato until tender and juicy."
  },
  {
    name: "Gulab Jamun",
    image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/gulab-jamun-recipe.jpg",
    ingredients: ["Khoya", "Flour", "Sugar syrup", "Cardamom"],
    procedure: "Make small balls from khoya, fry till golden brown, soak in warm sugar syrup."
  },
  {
    name: "Ice Cream",
    image: "https://www.cookwithmanali.com/wp-content/uploads/2019/06/Vanilla-Ice-Cream-500x500.jpg",
    ingredients: ["Milk", "Cream", "Sugar", "Vanilla essence"],
    procedure: "Whisk all ingredients and freeze overnight for smooth homemade ice cream."
  },
  {
    name: "Chicken Curry",
    image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/12/chicken-curry.jpg",
    ingredients: ["Chicken", "Onion", "Tomato", "Garam masala"],
    procedure: "Cook onion-tomato paste, add chicken and simmer for 20 minutes."
  },
  {
    name: "Veg Manchurian",
    image: "https://www.cookwithmanali.com/wp-content/uploads/2018/08/Veg-Manchurian-500x500.jpg",
    ingredients: ["Cabbage", "Carrot", "Corn flour", "Soy sauce"],
    procedure: "Fry vegetable balls and mix with spicy soy sauce gravy."
  }
];

function Home() {
  return (
    <div className="home-container">
      <h2 className="home-title">🍛 Delicious Recipes</h2>
      <div className="recipe-grid">
        {recipes.map((recipe, index) => (
          <div className="recipe-card" key={index}>
            <img src={recipe.image} alt={recipe.name} className="recipe-img" />
            <h3>{recipe.name}</h3>
            <p><b>Ingredients:</b> {recipe.ingredients.join(", ")}</p>
            <p><b>Procedure:</b> {recipe.procedure}</p>
            <Link to={`/recipe/${recipe.name}`} className="view-btn">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
