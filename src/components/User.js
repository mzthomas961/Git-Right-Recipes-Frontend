import React from "react"
// import Header from "./Header"

function User({name, image, restrictions, diet}) {
    console.log(restrictions)



    

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