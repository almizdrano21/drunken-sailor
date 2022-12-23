import React from "react";
import useCocktail from "../hooks/useCocktail";
const CocktailInfo = () => {
  const { cocktailData, selectCocktail } = useCocktail();

  if (Object.keys(cocktailData).length === 0) return null;
  return (
    <div>
      <h3>{cocktailData.strDrink}</h3>
      <p>{cocktailData.strInstructions}</p>
      <button onClick={() => selectCocktail("")}>cerrar</button>
    </div>
  );
};

export default CocktailInfo;
