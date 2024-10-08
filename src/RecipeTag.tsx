interface IRecipeTagProps {
    tagName: string;
    onSelectTag: (tagName: string) => void;
  }
  
  const RecipeTag: React.FC<IRecipeTagProps> = ({ tagName, onSelectTag }) => {
    return (
      <li onClick={() => onSelectTag(tagName)}>
        {tagName}
      </li>
    );
  };
  
  export default RecipeTag;
  