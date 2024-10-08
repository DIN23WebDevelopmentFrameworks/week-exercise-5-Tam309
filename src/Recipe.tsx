import React from 'react'
import { IRecipe } from './IRecipe'

interface IRecipeProps {
    recipeData: IRecipe,
    onBack: () => void
}

const Recipe: React.FC<IRecipeProps> = ({recipeData, onBack}) => {
  return (
    <div>
      {
        <div>
          <h2>Recipe for {recipeData.name}</h2>
          <button onClick={onBack}>Back</button>
          <div>
            <h2>{recipeData.name}</h2>
            <p>Ingredients</p>
            <ul>
                {recipeData.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <p>Instructions</p>
            <ul>
                {recipeData.instructions.map((instruction, index) => (
                    <li key={index}>{instruction}</li>
                ))}
            </ul>
          </div>
        </div>
      }
    </div>
  )
}

export default Recipe