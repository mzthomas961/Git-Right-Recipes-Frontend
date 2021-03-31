import React, { useState } from "react";

function Form( {users, onUserUpdate}) {
    const [name, setName] = useState("");
    const [preferences, setPreferences] = useState("")
    const [diets, setDiets] = useState("");
    const [image, setImage] = useState("")
    const { id } = users

    function handleOnUserUpdate(e) {
        e.preventDefault();
        fetch(`http://localhost:3000/users/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify({
                name: name,
                preferences: preferences,
                diets: diets,
                image: image
            }),
        })
            .then((r) => r.json())
            .then((updateUserInfo) => onUserUpdate(updateUserInfo))
}
   
    return (
     <div>
       <form onSubmit={handleOnUserUpdate}>
         <input type="text" name="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
         <input type="text" name="preferences" placeholder="Preferences" value={preferences} onChange={(e) => setPreferences(e.target.value)} />
         <input type="text" name="diets" placeholder="Diets" value={diets} onChange={(e) => setDiets(e.target.value)} />
         <input type="text" name="image" placeholder="Image Address Link" value={image} onChange={(e) => setImage(e.target.value)} />
        <button type="submit">Submit</button>
       </form>
     </div>
    )
}




export default Form;