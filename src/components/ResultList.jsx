import React from "react";
import { Row } from "react-bootstrap";
import useCocktail from "../hooks/useCocktail";
import CardElement from "./CardElement";
const ResultList = () => {
  const { cocktails } = useCocktail();
  return (
    <Row>
      {cocktails.length > 0 &&
        cocktails.map((cocktail) => (
          <CardElement key={cocktail.idDrink} cocktail={cocktail} />
        ))}
    </Row>
  );
};

export default ResultList;
