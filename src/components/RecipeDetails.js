import React from "react";

function RecipeDetails ({ingredients, instructions}) {
    return (
        <div>
            <h3>Ingredrients</h3>
            <p>{ingredients}</p>
            <h3>Instructions</h3>
            <p>{instructions}</p>
        </div>
    )
}

export default RecipeDetails;