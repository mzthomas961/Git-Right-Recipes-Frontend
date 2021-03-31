import React from "react";
import styled from "styled-components";


function Preference({id, diet, diet_id, restriction, onHandlePreferenceDelete, restrictions, setRestrictions}) {
  
  const Button = styled.button`
  background: dodgerblue;
  padding: 5px;
  border: 2px solid black;
  border-radius: 4px;
  cursor: pointer;
  transition: 200ms ease;
  color: white;
  text-decoration: none;
  font: 1rem sans-serif;

  &:hover {
    background: blueviolet;
    color: white;
  }

  &:focus {
    background: hotpink;
    color: white;
  }
`;
  
    function handlePreference(id) {
        fetch(`http://localhost:3000/preferences/${id}`, {
          method: "DELETE"
        })
          .then(r => r.json())
          .then(() => {console.log((id))
          });
          onHandlePreferenceDelete(id)
      }

    function handleRestriction(id) {
      console.log(diet)
      console.log(restrictions)
      console.log(id)
      fetch(`http://localhost:3000/preferences/${id}`, {
        method: "PATCH",
        headers: {
        "Content-Type" : "application/json",
      },
        body: JSON.stringify({
        user_id: 1,
        diet_id: diet_id,
        restriction:restrictions
    }),
})
    // .then((r) => r.json())
    // .then((updateUserInfo) => setRestrictions(updateUserInfo))
    }

    return (
        <div>
        <h2>Delete Preference</h2>
        <p>Preference: {diet} ("and restriction: {restriction}")</p>
        <Button onClick={() => handlePreference(id)}>Delete</Button>
        <form onSubmit={handleRestriction}>
        <label>
        <input type="text" onChange={(e) => setRestrictions(e.target.value)} placeholder="Type here..." value={restrictions}/>
        </label>
        <button >Update</button>
        </form>
        </div>
    )
}

export default Preference;