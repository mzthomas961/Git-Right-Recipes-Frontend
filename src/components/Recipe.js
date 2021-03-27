import React from "react"

function Recipe({name,ingredients,instructions,image}){
    return(
        <div>
        <h3>{name}</h3>
        <img src={image} alt={name}/>
        <h3>{ingredients}</h3>
        <p>{instructions}</p>
        </div>
    )
}
export default Recipe