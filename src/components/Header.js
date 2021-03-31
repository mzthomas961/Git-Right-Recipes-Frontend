import React from "react";
import User from "./User";

function Header({users, onHandleDeleteUser}) { 
    const userProfile = users.map((user) => {
        return (
          <User
            key={user.id}
            onHandleDeleteUser={onHandleDeleteUser}
            id={user.id}
            image={user.image}
            diet={user.diets.map((diet) => {return (diet.name + ", ")})}
            name={user.name}
            restriction={user.preferences.map((preference) =>  {return (preference.restriction + ", ")})}
            />
            )}
        ); 
        
return (
    <div>
            {userProfile}
     </div>
    )
}

export default Header