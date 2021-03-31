import React from "react";

function Preference({id, diet, restriction, onHandlePreferenceDelete}) {
    

    function handlePreference(id) {
        fetch(`http://localhost:3000/preferences/${id}`, {
          method: "DELETE"
        })
          .then(r => r.json())
          .then(() => {console.log((id))
          });
          onHandlePreferenceDelete(id)
      }

    return (
        <div>
        <h2>Delete Preference</h2>
        <p>Preference: {diet} ("and restriction: {restriction}")</p>
        <button onClick={() => handlePreference(id)}>Submit</button>
        </div>
    )
}

export default Preference;