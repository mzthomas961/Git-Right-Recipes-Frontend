import React from "react"
import Recipe from "./Recipe"


function RecipeContainer({recipes}) {

    const recipeComponents = recipes.map((recipe) => {
        
        return (
            <Recipe 
            key={recipe.id}
            name={recipe.name}
            ingredients={recipe.ingredients}
            instructions={recipe.instructions}
            image={recipe.image}
        />
        )
    })
    return (
        <div>
        <h2>All Recipes</h2>
        {recipeComponents}
        </div>
    )
}

export default RecipeContainer