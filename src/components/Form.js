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
   
// function handleUserPreferenceDelete(id){
//     fetch(`http://localhost:3000/preferences/${id}`, {
//         method: "DELETE"
//       })
//         .then(r => r.json())
//         .then(() => {console.log((id))
//         });
//         onHandleDeletePreference(id)
//     }

    // function onHandleDeletePreference(id) {
    //     const updatedDeletedPreference = preferences.filter(
    //       (preference) => preference.prefObj => return {(prefObj.id !== id)} ;
    //     setPreferences(updatedDeletedPreference)
    //   }
    

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
            {/* <form >
                <h2>Delete Preferences</h2>
                <select value={diet} name="Diet" id="diet_id" onChange={handleUserPreferenceDelete}>
                 <option value="1">Vegetarian</option>
                 <option value="2">Vegan</option>
                 <option value="3">Paleo</option>
            </select>
        <button type="submit">Submit</button>
            </form> */}
       </form>
     </div>
    )
}




export default Form;