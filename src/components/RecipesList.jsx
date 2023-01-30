import React, { useContext } from 'react';
import Recipe from './Recipe'
import {RecipesContext} from '../context/RecipesContext';

const RecipesList = () => {

    const { recipes } = useContext(RecipesContext);

    return ( 
        recipes? 
        <div className="row mt-5">
            {recipes.map( recipe => (
                <Recipe 
                    key={recipe.idDrink}
                    recipe={recipe}
                />
            ))}
        </div> :
        <div className="alert alert-danger my-3">No results found</div>
     );
}
 
export default RecipesList;