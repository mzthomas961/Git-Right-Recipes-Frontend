// import './App.css';
import React, { useEffect, useState } from "react";
import Header from "./Header";
import RecipeContainer from "./RecipeContainer";
import Form from "./Form";

function App() {
  const [users, setUser] = useState([])
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/users")
    .then(r => r.json())
    .then(usersArr => {
        setUser(usersArr)
    })
},[])

useEffect(() => {
  fetch("http://localhost:3000/recipes")
.then(r => r.json())
.then(recipeArray => 
  setRecipes(recipeArray));
},[])


  return (
    <div>
      <h1>Git Right Recipes</h1>
      <Header users={users}/>
      <RecipeContainer recipes={recipes}/>
      <Form/>
      </div>
  );
}

export default App;
