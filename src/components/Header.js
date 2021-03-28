import React, {useState, useEffect} from "react"
import User from "./User"

function Header(){
    const [user, setUser] = useState([])
    // const [restrictions, setRestrictions] = useState([])

    console.log(user)

    useEffect(() => {
        fetch("http://localhost:3000/users")
        .then(r => r.json())
        .then(usersArr => {
            setUser(usersArr)
        })
    },[])

    const userComponents = user.map((userProfile) => {
        console.log(userProfile.image)
        return (

            <User 
            key={userProfile.id}
            name={userProfile.name}
            image={userProfile.image}
            restrictions={userProfile.preferences.map((preference) => {
                return preference.restriction
            })}
            diet={userProfile.diets.map((diet) => {
                return diet.name
            })}
            />
        ) 
    })
   
    return(
        <div>
        <h1 class='pink section'>User Profile</h1>
        {userComponents}
        </div>
    )
}
export default Header