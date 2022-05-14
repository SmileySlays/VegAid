import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./Screen/Signup/Login/Login";
import Signup from "./Screen/Signup/Signup"
import Home from "./Screen/Home/Home"
import CalorieIntake from "./Screen/CalorieIntake/CalorieIntake"
import Nutrition from "./Screen/Nutrition/Nutrition"
import Recipes from "./Screen/Recipes/Recipes"
import Journal from "./Screen/Journal/Journal"

function App() {
  return (
    <>
    <Switch>
      <Route exact path="/" component={Login}/>
      <Route exact path="/signup" component={Signup}/>
      <Route exact path="/home" component={Home}/>
      <Route exact path="/calorie-intake" component={CalorieIntake}/>
      <Route exact path="/nutrition" component={Nutrition}/>
      <Route exact path="/recipes" component={Recipes}/>
      <Route exact path="/journal" component={Journal}/>
    </Switch>
    </>
  );
}

export default App;
