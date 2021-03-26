import React from "react"
// import Header from "./Header"

function User({name, image, restrictions, diets}) {
return (
    <div>
        <h1>{name}</h1>
        <img src={image} alt={name} />
        <h2>{restrictions}</h2>
        <h3>{diets}</h3>
    </div>
)
}
export default User