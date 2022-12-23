import React from "react";
import useCocktail from "../hooks/useCocktail";
import Card from "./Card";
const ResultList = () => {
  const { cocktails } = useCocktail();
  return (
    <>
      {cocktails.length > 0 &&
        cocktails.map((cocktail) => (
          <Card key={cocktail.idDrink} cocktail={cocktail} />
        ))}
    </>
  );
};

export default ResultList;
