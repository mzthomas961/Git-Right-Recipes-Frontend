import React from "react";
import User from "./User";

function Header({users}) { 
    const userProfile = users.map((user) => {
        return (
          <User
            key={user.id}
            image={user.image}
            diet={user.diets.map((diet) => {return (diet.name)})}
            name={user.name}
            restriction={user.preferences.map((preference) =>  {return (preference.restriction)})}
            />
            )}
        ); 
  
return (
    <div>
       
        <h1>User Profile</h1>

            {userProfile}
     </div>
    )
}

export default Header