import React from "react"


function User({name, image, diet, restriction}) {
  
return (

    <div>
        <img src={image} alt={name}/>
        <h3>{name}</h3>
        <h3>Restrictions: {restriction}</h3> 
        <h3>Preference: {diet}</h3>
    </div>
    )
}
export default User