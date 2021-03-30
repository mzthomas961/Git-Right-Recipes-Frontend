import React, { useState } from "react";
import RecipeDetails from "./RecipeDetails"

function Recipe({name,image, instructions, ingredients}) {
  const [showDetails, setShowDetails] = useState(false)



  function handleClick() {
    setShowDetails(!showDetails)

  }
  
  return (
        <div>
          <h3>{name}</h3>
           <img src={image} alt={name}/>
          <section>
          <button onClick={handleClick}> Recipe Details</button>
          {showDetails ? <RecipeDetails instructions={instructions} ingredients={ingredients}/> : null}
        
        </section>
        </div>
        
       
        
    )
}
export default Recipe