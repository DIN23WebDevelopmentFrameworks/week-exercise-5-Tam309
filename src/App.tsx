import { useState, useEffect } from "react";
import RecipeTagList from "./RecipeTagList";
import RecipeList from "./RecipeList";

const App = () => {
  const [tags, setTags] = useState<string[]>([]);
  const [recipes, setRecipes] = useState<any[]>([]);  // Array of recipes
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    fetch("https://dummyjson.com/recipes/tags")
      .then((response) => response.json())
      .then((data) => setTags(data));
  }, []);

  useEffect(() => {
    if (selectedTag) {
      setIsLoading(true);
      fetch(`https://dummyjson.com/recipes/tag/${selectedTag}`)
        .then((response) => response.json())
        .then((data) => {
          setRecipes(data.recipes); 
          setIsLoading(false);
        });
    }
  }, [selectedTag]);

  const handleSelectTag = (tagName: string) => {
    console.log(`Selected tag: ${tagName}`);
    setRecipes([]);
    setSelectedTag(tagName);  
  };

  const handleBackToRecipeTagList = () => {
    setSelectedTag(null);
  }

  useEffect(() => {
    if (recipes.length > 0) {
      console.log("Updated recipes: ", recipes);
    }
  }, [recipes]);

  return (
    <div>
      <h1>ACME Recipe O'Master</h1>

      {selectedTag ? (
        isLoading ? (
          <p>Loading recipes...</p>
        ) : (
          <RecipeList recipes={recipes} onBack={handleBackToRecipeTagList}/>
        )
      ) : (
        <RecipeTagList tagList={tags} onSelectTag={handleSelectTag} />
      )}
    </div>
  );
};

export default App;
