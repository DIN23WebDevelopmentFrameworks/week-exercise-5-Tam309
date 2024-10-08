import RecipeTag from "./RecipeTag";

interface IRecipeTagListProps {
  tagList: string[];
  onSelectTag: (tagName: string) => void;
}

const RecipeTagList: React.FC<IRecipeTagListProps> = ({ tagList, onSelectTag }) => {
  return (
    <ul>
      {tagList.map((tag, index) => (
        <RecipeTag key={index} tagName={tag} onSelectTag={onSelectTag} />
      ))}
    </ul>
  );
};

export default RecipeTagList;
