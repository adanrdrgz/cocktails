import React, { useState, Fragment } from 'react';
import Header from './components/Header.jsx';
import Form from './components/Form.jsx';
import RecipesList from './components/RecipesList.jsx';

import CategoriesProvider from './context/CategoriesContext';
import RecipesProvider from './context/RecipesContext';
import ModalProvider from './context/ModalContext';

import './bootstrap.min.css'
import './index.css'


function App() {


  return (
    <CategoriesProvider>
      <RecipesProvider>
        <ModalProvider>
          
          <Header />

          <div className="container mt-5">
            <div className="row">
              <Form />
            </div>

            <RecipesList />

          </div>
        </ModalProvider>
      </RecipesProvider>
    </CategoriesProvider>
  )
}

export default App
