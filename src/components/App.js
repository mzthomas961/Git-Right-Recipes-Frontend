
import React, { useEffect, useState } from "react";
import Header from "./Header";
import RecipeContainer from "./RecipeContainer";
import Form from "./Form";
import PreferencesForm  from "./PreferencesForm"
import styled from "styled-components";


function App() {
  const [users, setUsers] = useState([])
  const [recipes, setRecipes] = useState([])
  const [preferences, setPreferences] = useState([])
  const [restrictions, setRestrictions] = useState('')
  const [newRestriction, setNewRestriction] = useState("")

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

function handleRestrictionUpdate(id, newRestriction) {
  const updatedRestriction = preferences.map((preference) => {
    if (preference.id === id) {
      return (setRestrictions(newRestriction))
    } else {
    return preference
  }
  })
}


const Button = styled.button`
background: dodgerblue;
padding: 5px;
border: 2px solid black;
border-radius: 4px;
cursor: pointer;
transition: 200ms ease;
color: white;
text-decoration: none;
font: 1rem sans-serif;

&:hover {
  background: blueviolet;
  color: white;
}

&:focus {
  background: hotpink;
  color: white;
}
`;

  return (
    <div>
      <Button>Home</Button>
      <Button>Update Profile</Button>
      <Button>Search</Button>
      <Button>Preference Dropdown</Button>
      <Button>Categories Dropdown</Button>
      <Header users={users} onHandleDeleteUser={onHandleDeleteUser} />
      <Form users={users} onUserUpdate={onUserUpdate}/>
      <PreferencesForm preferences={preferences} newRestriction={newRestriction} handleRestrictionUpdate={handleRestrictionUpdate} onHandlePreferenceDelete={onHandlePreferenceDelete} restrictions={restrictions} setRestrictions={setRestrictions}/>
      <RecipeContainer recipes={recipes}/>
      </div>
  );
}

export default App;
