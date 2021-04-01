
import React, { useEffect, useState } from "react";
import Header from "./Header";
import RecipeContainer from "./RecipeContainer";
import Form from "./Form";
import PreferencesForm  from "./PreferencesForm"


function App() {
  const [users, setUsers] = useState([])
  const [recipes, setRecipes] = useState([])
  const [preferences, setPreferences] = useState([])
  const [restrictions, setRestrictions] = useState('')


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
})}
function handleRestrictionUpdate(updatedPreference){
  const updatedPreferences = preferences.filter(
  (preference) =>preference.id !== updatedPreference.id)
  const a = [...updatedPreferences, updatedPreference]
  setPreferences(a)
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


  return (
    <div>
      <h1>Git Right Recipes</h1>
      <Header users={users} onHandleDeleteUser={onHandleDeleteUser} />
      <Form users={users} onUserUpdate={onUserUpdate} />
      <PreferencesForm handleRestrictionUpdate={handleRestrictionUpdate} preferences={preferences} onHandlePreferenceDelete={onHandlePreferenceDelete} restrictions={restrictions} setRestrictions={setRestrictions}/>
      <RecipeContainer recipes={recipes}/>
      </div>
  );
}

export default App;
