import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import AddRecipe from "./pages/AddRecipe";
import RecipeDetails from "./pages/RecipeDetails";
import "./index.css"; // make sure this path is correct

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Public routes — no guard, so navigate("/") from Login will show Home */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/add-recipe" element={<AddRecipe />} />
        <Route path="/recipe/:name" element={<RecipeDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
