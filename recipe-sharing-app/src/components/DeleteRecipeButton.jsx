import { useNavigate } from 'react-router-dom';
import useRecipeStore from "./recipeStore";

const DeleteRecipeButton = ({ recipeId }) => {
    const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
    const navigate = useNavigate(); // Initialize the navigation hook
  
    const handleDelete = () => {
      deleteRecipe(recipeId); // Delete the recipe
      navigate('/'); // Navigate back to the home page
    };
  
    return <button onClick={handleDelete}>Delete Recipe</button>;
  };
  
  export default DeleteRecipeButton;