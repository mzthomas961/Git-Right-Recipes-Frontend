import React, { useState, useEffect } from "react";

function Form( { onUserUpdate, handlePreferenceDelete }) {
    const [preferences, setPreferences] = useState([])
    const [restriction, setRestriction] = useState([])
    const [diet, setDiet] = useState([])
    console.log(preferences)

    function onHandleDeletePreference(id) {
        const updatedDeletedPreference = preferences.filter(
          (preference) => preference.id !== id
        );
        setPreferences(updatedDeletedPreference)
      }
    

    useEffect(() => {
        fetch("http://localhost:3000/preferences")
      .then(r => r.json())
      .then(preferencesArray => 
        setPreferences(preferencesArray));
      },[]);
     

    function handleUserPreferenceDelete(id){
        fetch(`http://localhost:3000/preferences/${id}`, {
            method: "DELETE"
          })
            .then(r => r.json())
            .then(() => {console.log((id))
            });
            onHandleDeletePreference(id)
        }
    

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
            console.log(diet)
            console.log(restriction)
}
   
    return (
        <div>
            <form onSubmit={handleOnUserUpdate}>
                <h2>Add Preferences</h2>
            <label>
                <input type="text"  onChange={(e)=> setRestriction(e.target.value)}  placeholder="Restriction" value={restriction} />
            </label>
            <select value={diet} name="Diet" id="diet_id" onChange={(e) => setDiet(e.target.value)}>
                 <option value="1">Vegetarian</option>
                 <option value="2">Vegan</option>
                 <option value="3">Paleo</option>
            </select>
        <button type="submit">Submit</button>
            <form >
                <h2>Delete Preferences</h2>
                <select value={diet} name="Diet" id="diet_id" onSubmit={handleUserPreferenceDelete}>
                 <option value="1">{preferences[0]}</option>
                 <option value="2">Vegan</option>
                 <option value="3">Paleo</option>
            </select>

            </form>
       </form>
     </div>
    )
}




export default Form;