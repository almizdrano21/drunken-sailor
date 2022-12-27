import React from "react";
import useCocktail from "../hooks/useCocktail";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
const CardElement = ({ cocktail }) => {
  const { strDrink, strDrinkThumb, idDrink } = cocktail;
  const { selectCocktail } = useCocktail();
  return (
    <Col md={6} lg={3}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={strDrinkThumb} />
        <Card.Body>
          <Card.Title>ID: {idDrink}</Card.Title>
          <Card.Text>{strDrink}</Card.Text>
          <Button variant="warning" onClick={() => selectCocktail(idDrink)}>
            SEE MORE
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardElement;
