import React, { useState } from "react";
// import RecipeDetails from "./RecipeDetails"

function Recipe({name,image}) {
  const [clicked, setClicked] = useState(false)
  // (clicked ? null : <RecipeDetails instructions={instructions} ingredients={ingredients} />)
console.log(clicked)

  function handleClick() {
    setClicked(!clicked)

  }
  
  return (
        <div>
          <h3>{name}</h3>
           <img src={image} alt={name}/>
          <section>
          <button onClick={handleClick}> Recipe Details</button>
        </section>
        </div>
        
       
        
    )
}
export default Recipe