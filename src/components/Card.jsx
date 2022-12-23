import React from "react";
import useCocktail from "../hooks/useCocktail";
const Card = ({ cocktail }) => {
  const { strDrink, strDrinkThumb, idDrink } = cocktail;
  const { selectCocktail } = useCocktail();
  return (
    <div>
      <img src={strDrinkThumb} width="200px" alt="cocktail image" />
      <p>{strDrink}</p>
      <button onClick={() => selectCocktail(idDrink)}>SEE MORE</button>
    </div>
  );
};

export default Card;
