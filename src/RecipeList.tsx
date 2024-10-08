import React from 'react'
import { IRecipe } from './IRecipe';
import Recipe from './Recipe';

interface IRecipeListProps {
    recipes: IRecipe[],
    onBack: () => void
}

const RecipeList: React.FC<IRecipeListProps> = ({recipes, onBack}) => {
  return (
    <div>
      {
        recipes.map((recipe, index) => (
          <Recipe key={index} recipeData={recipe} onBack={onBack}/>))
      }
    </div>
  )
}

export default RecipeList