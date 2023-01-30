import React, {createContext, useState, useEffect} from 'react'
import axios from 'axios'; 

export const RecipesContext = createContext();

const RecipesProvider = (props) => {

    const [recipes, setRecipes] = useState([]);
    const [query, searchQuery] = useState({
        name: '',
        category: ''
    });
    const [consult, setConsult] = useState(false);

    const { name, category } = query;

    useEffect(() => {
        
        if (consult) {
            
            const getRecipes = async () => {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?${name? `i=${name}` : "" }${category? `&c=${category}` : ""}`
                const rcps = await axios.get(url);
    
    
                setRecipes(rcps.data.drinks);
    
              
                
            }
            
            getRecipes();    
            
        }

    
        
    }, [query])

    return ( 
        <RecipesContext.Provider
            value={{
                recipes, searchQuery, setConsult
            }}
        >
            {props.children}
        </RecipesContext.Provider>
    )
}

export default RecipesProvider;