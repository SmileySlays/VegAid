import React from "react";
import { Routes, Route } from "react-router";
import Login from "./Screen/Login/Login";
import Signup from "./Screen/Signup/Signup"
import Home from "./Screen/Home/Home"
import CalorieIntake from "./Screen/CalorieIntake/CalorieIntake"
import Nutrition from "./Screen/Nutrition/Nutrition"
import Recipes from "./Screen/Recipes/Recipes"
import Journal from "./Screen/Journal/Journal"
import { GlobalStyles } from "./Components/Styles/Global";

function App() {
  return (
    <>
    <GlobalStyles/>
    <Routes>
      <Route exact path="/" element={<Login/>}/>
      <Route exact path="/signup" element={<Signup/>}/>
      <Route exact path="/home" element={<Home/>}/>
      <Route exact path="/calorie-intake" element={<CalorieIntake/>}/>
      <Route exact path="/nutrition" element={<Nutrition/>}/>
      <Route exact path="/recipes" element={<Recipes/>}/>
      <Route exact path="/journal" element={<Journal/>}/>
    </Routes>
    </>
  );
}

export default App;
