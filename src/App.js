import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import IngredientList from "./Components/IngredientList";
import BurgerWindow from "./Components/BurgerWindow"
import { render } from "@testing-library/react";

const App = (props) => {
  const [ingredients, setIngredients] = useState(props.ingredients)

  const [burgerIngredients, setBurgerIngredients] = useState([''])

  let addIngredient = (e) => {
    let newBurgerIngredients = [e.target.value];
    let finalStack = newBurgerIngredients.concat(burgerIngredients)
    setBurgerIngredients(finalStack)
  }

  const clearStack = (e) => {
    //on click of clear button
    //set burgerPaneIngredients to empty array
    setBurgerIngredients([])
  }
  
  return (
    <div className='Window'>
      <IngredientList ingredients={ingredients} onClick={addIngredient}/>
      <BurgerWindow ingredients={burgerIngredients} action={clearStack}/>
    </div>
  );
};

export default App;
