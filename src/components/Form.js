import React from "react";

function Form() {
    return (
        <div>PlaceHolder</div>
    )


// function Form({ id, users,  updatesUser, newInfo}) {
    // const [name, setName] = useState(name)
    // const [image, setImage] = useState(image)
    // const [preferences, setPreferences] = useState(preferences)
    // const [diets, setDiets] = useState(diets)
    

    // function handleUserUpdate(e) {
    //     e.preventDefault();
    //     fetch(`http://localhost:3000/users/${id}`, {
    //         method: "PATCH",
    //         headers: {
    //             "Content-Type" : "application/json"
    //         },
    //         body: JSON.stringify({
    //             name:name,
    //             image:image,
    //             preferences:preferences,
    //             diets:diets
    //         })
    //         .then((r) => r.json())
    //         .then(newValue => updatesUser(newValue))
    //     })

    // }

    // return(
    //    <form onSubmit={handleUserUpdate}>
    //        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
    //        <input type="text" name="image" value={image} onChange={(e) => setImage(e.target.value)} />
    //        <input type="text" name="preferences" value={preferences} onChange={(e) => setPreferences(e.target.value)} />
    //        <input type="text" name="diets" value={diets} onChange={(e) => setDiets(e.target.value)} />
    //        <button type="submit">Submit</button>
    //    </form>
    // )
}




export default Form;