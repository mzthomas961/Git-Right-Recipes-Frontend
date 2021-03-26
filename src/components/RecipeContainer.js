import React,{useState,useEffect} from "react"
import Recipe from "./Recipe"

function RecipeContainer() {

    const [recipes, setRecipes] = useState([])
    console.log(recipes)

    useEffect(() => {
        fetch("http://localhost:3000/recipes")
    .then(r => r.json())
    .then(recipes => 
        setRecipes(recipes));
    },[])

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
        <h2>Recipe Container</h2>
        {recipeComponents}
        </div>
    )
}

export default RecipeContainer