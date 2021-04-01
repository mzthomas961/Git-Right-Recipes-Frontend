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

    function handleRestriction(id, e) {
      e.preventDefault()
     
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
    .then((r) => r.json())
    .then((updateUserInfo) => console.log(updateUserInfo))
    }

    return (
        <div>
        <section>
        <h2>Preference: {diet} ("and restriction: {restriction}")</h2>
        </section>
       <section>
        <form onSubmit={(e) => handleRestriction(id, e)}>
        <label> Update Restriction 
        <input type="text" onChange={(e) => setRestrictions(e.target.value)} placeholder="Type here..." value={restrictions}/>
        </label>
        <Button type="submit" >Update</Button>
        </form>
        </section>
        <label> Delete Preference 
        <Button onClick={() => handlePreference(id)}>Delete</Button>
        </label>
        </div>
    )
}

export default Preference;