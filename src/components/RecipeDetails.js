import React from "react";

function RecipeDetails ({ingredients, instructions}) {
    return (
        <div>
            <p>{ingredients}</p>
            <p>{instructions}</p>
        </div>
    )
}

export default RecipeDetails;