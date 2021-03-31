import React from "react"


function User({name, image, diet, restriction, id, onHandleDeleteUser}) {

    function handleDelete(id) {
        fetch(`http://localhost:3000/users/${id}`, {
          method: "DELETE"
        })
          .then(r => r.json())
          .then(() => {console.log((id))
          });
          onHandleDeleteUser(id)
      }
  
return (

    <div>
        <h2>{name}'s Profile</h2>
        <img src={image} alt={name}/>
        <h3>Restrictions: {restriction}</h3> 
        <h3>Preference: {diet}</h3>
        <section>
        <button onClick={() => handleDelete(id)}>Delete Account</button>
        </section>
    </div>
    )
}
export default User