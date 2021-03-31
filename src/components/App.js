
import React, { useEffect, useState } from "react";
import Header from "./Header";
import RecipeContainer from "./RecipeContainer";
import Form from "./Form";
import PreferencesForm  from "./PreferencesForm"

function App() {
  const [users, setUsers] = useState([])
  const [recipes, setRecipes] = useState([])
  const [preferences, setPreferences] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/users")
    .then(r => r.json())
    .then(usersArr => {
        setUsers(usersArr)
    })
},[]);

useEffect(() => {
  fetch("http://localhost:3000/recipes")
.then(r => r.json())
.then(recipeArray => 
  setRecipes(recipeArray));
},[]);

 useEffect(() => {
        fetch("http://localhost:3000/preferences")
      .then(r => r.json())
      .then(preferencesArray => {
        setPreferences(preferencesArray)}
        );
      },[]);
     
function onUserUpdate(id) {
  const updatedUser = users.map(user => {
    if (user.id === id) {
      return (setUsers(updatedUser))
    } else {
        return user
      }
})
}

function onHandleDeleteUser(id) {
  const updatedDeletedUserList = users.filter(
    (user) => user.id !== id
  );
  setUsers(updatedDeletedUserList)
}

function onHandlePreferenceDelete(id) {
  const updatedDeletedPreference = preferences.filter(
    (preference) => preference.id !== id
  );
  setPreferences(updatedDeletedPreference)
}




// function handleCategoryClick() {
//   setFilters(filter);
// }

// function handleCategoryFilter() {

//   const updatedFilterArray = recipes.filter( {
//     if(recipe => recipe.breakfast == true);
//     setRecipes(updatedFilterArray)
//     else
//   })

  // let url = "http://localhost:3000/recipes";

  // if (filters.type !== "all") {
  //   url += `?type=${filters.type}`
  // }
  // fetch(url)
  // .then((r) => r.json())
  // .then((filteredRecipes) => {
  //   setRecipes(filteredRecipes);
  // });
// }

  return (
    <div>
      <h1>Git Right Recipes</h1>
      <Form users={users} onUserUpdate={onUserUpdate}/>
      <PreferencesForm preferences={preferences} onHandlePreferenceDelete={onHandlePreferenceDelete}/>
      <button>Home</button>
      <button>Update Profile</button>
      <Header users={users} onHandleDeleteUser={onHandleDeleteUser} />
      <button>Preference Dropdown</button>
      <button>Categories Dropdown</button>
      <button>Search</button>
      <RecipeContainer recipes={recipes}/>
      </div>
  );
}

export default App;
