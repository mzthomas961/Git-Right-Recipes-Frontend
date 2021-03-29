import React from "react"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
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

  <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={image} alt={name} />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
      {diet}
    </Card.Text>
    <Button variant="primary">{restrictions}</Button>
  </Card.Body>
</Card>
//     <div>
//         <img src={image} alt={name}/>
//         <h3>{name}</h3>
//         <h3>Restrictions: {restrictions}</h3> 
//         <h3>Preference: {diet}</h3>
//         <>
  
// </>
//     </div>
    )
}
export default User