import React, {useState, useEffect} from "react"
import User from "./User"

function Header(){
    const [user, setUser] = useState([])
    console.log(user)

    useEffect(() => {
        fetch("http://localhost:3000/users")
        .then(r => r.json())
        .then(usersArr => {
            setUser(usersArr)
        })
    },[])

    const userComponents = user.map((userProfile) => {
        return (
            <User 
            key={userProfile.id}
            name={userProfile.name}
            image={userProfile.image}
            // restrictions={userProfile.restrictions}
            // diets={userProfile.diets}
            />
        )
    })
   
    return(
        <div>
        <h1> header!</h1>
        {userComponents}
        </div>
    )
}
export default Header