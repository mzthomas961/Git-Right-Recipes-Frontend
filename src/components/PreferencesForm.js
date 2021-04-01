import React from "react";
import Preference from "./Preference";


function PreferencesForm({ preferences, onHandlePreferenceDelete, restrictions, setRestrictions }) {
    
   

     const deletePreference = preferences.map((preference) => {
         return (
             <Preference 
                key={preference.id}
                id={preference.id}
                diet={preference.diet.name}
                restriction={preference.restriction}
                onHandlePreferenceDelete={onHandlePreferenceDelete}
                restrictions={restrictions} 
                setRestrictions={setRestrictions}
                diet_id={preference.diet.id}  
           />
     )
         });
    
    return (
        <div>
          {deletePreference}
        </div>
    )
}

export default PreferencesForm;