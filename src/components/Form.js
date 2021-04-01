import React, { useState } from "react";

function Form( { onUserUpdate }) {
   
    const [restriction, setRestriction] = useState([])
    const [diet, setDiet] = useState([])

    function handleOnUserUpdate(e) {
        e.preventDefault();
   
        fetch("http://localhost:3000/preferences", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify({
                user_id: 1,
                diet_id: diet,
                restriction:restriction
            }),
        })
            .then((r) => r.json())
            .then((updateUserInfo) => onUserUpdate(updateUserInfo))
}
   
    

    return (
        <div>
            <form onSubmit={handleOnUserUpdate}>
                <h2>Add Preferences</h2>
            <label>
                <input type="text"  onChange={(e)=> setRestriction(e.target.value)}  placeholder="Restriction" value={restriction} />
            </label>
            <select value={diet} name="Diet" id="diet_id" onChange={(e) => setDiet(e.target.value)}>
                <option value="0">Choose Option</option>
                 <option value="1">Vegetarian</option>
                 <option value="2">Vegan</option>
                 <option value="3">Paleo</option>
            </select>
        <button type="submit">Submit</button>
       </form>
     </div>
    )
}




export default Form;