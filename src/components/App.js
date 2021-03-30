// import './App.css';
import React, { useEffect, useState } from "react";
// import {  Switch, Route } from "react-router-dom"
import Header from "./Header";
import RecipeContainer from "./RecipeContainer";
import Form from "./Form";
import CategoryFilters from "./CategoryFilter"



function App() {
  const [users, setUser] = useState([])
  const [recipes, setRecipes] = useState([])
  const [filters, setFilters] = useState([]);

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

function updatesUserProfile(id) {
  const updatedUser = users.map(user => {
    if (user.id === id) {
      return (setUser(updatedUser))
    } else {
        return user
      }
})
}

function handleCategoryClick() {
  setFilters(filter);
}

function handleCategoryFilter() {

  const updatedFilterArray = recipes.filter( {
    if(recipe => recipe.breakfast == true);
    setRecipes(updatedFilterArray)
    else
  })

  // let url = "http://localhost:3000/recipes";

  // if (filters.type !== "all") {
  //   url += `?type=${filters.type}`
  // }
  // fetch(url)
  // .then((r) => r.json())
  // .then((filteredRecipes) => {
  //   setRecipes(filteredRecipes);
  // });
}

  return (
    <div>
      <h1>Git Right Recipes</h1>
      <button>Home</button>
      <button>Update Account</button>
      <button>Delete Account</button>
      <button>Update Profile</button>
      <Header users={users}/>
      <button>Preference Dropdown</button>
      <button>Categories Dropdown</button>
      <button>Search</button>
      <RecipeContainer recipes={recipes}/>
      <Form users={users} updatesUser={updatesUserProfile}/>
      <CategoryFilters onFindCategory={handleCategoryFilter} onHandleChange={handleCategoryClick} />
      </div>
  );
}

export default App;
