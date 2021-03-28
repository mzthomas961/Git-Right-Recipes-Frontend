import React from "react"
// import Header from "./Header"

function User({name, image, restrictions, diet}) {
    console.log(restrictions)


  fetch("https://api.spoonacular.com/recipes/findByIngredients?ingredients=apples,+flour,+sugar&number=2", {
    method: "GET",
    withCredentials: true,
    headers: {
    "Content-Type": "application/json",
    "X-Auth-Token": "61d8716e45f945598dc1d4250cb6753"
    }
  })
  .then(r => r.json())
  .then(food => console.log(food))
  console.log(image)
    
return (
    <div>
        <img src={image} alt={name}/>
        <h3>{name}</h3>
        <h3>Restrictions: {restrictions}</h3> 
        <h3>Preference: {diet}</h3>
    </div>
    )
}
export default User