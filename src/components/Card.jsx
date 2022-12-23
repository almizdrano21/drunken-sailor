import React from "react";

const Card = ({ cocktail }) => {
  const { strDrink, strDrinkThumb, idDrink } = cocktail;
  return (
    <div>
      <img src={strDrinkThumb} width="200px" alt="cocktail image" />
      <p>{strDrink}</p>
    </div>
  );
};

export default Card;
