import React from "react";
import useCocktail from "../hooks/useCocktail";
import { Button, Form, Row, Col, Alert } from "react-bootstrap";
import useCategories from "../hooks/useCategories";
const CocktailForm = () => {
  const { handleChangeCocktailInfo, getCocktails, cocktailInfo } =
    useCocktail();
  const { categories } = useCategories();
  const handleSubmit = (e) => {
    e.preventDefault();
    !Object.values(cocktailInfo).includes("") && getCocktails();
  };
  return (
    <div>
      <Form>
        <Row>
          <Col md={6}>
            <Form.Group>
              <Form.Label htmlFor="name">Alcohol </Form.Label>
              <Form.Control
                type="text"
                name="name"
                id="name"
                onChange={(e) => handleChangeCocktailInfo(e)}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label htmlFor="name">Drink type </Form.Label>
              <Form.Select
                name="category"
                id="category"
                onChange={(e) => handleChangeCocktailInfo(e)}
              >
                {categories.map((category) => (
                  <option
                    key={category.strCategory}
                    value={category.strCategory}
                  >
                    {category.strCategory}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>
          <button onClick={(e) => handleSubmit(e)}>GET ME A DRINK</button>
        </Row>
      </Form>
    </div>
  );
};

export default CocktailForm;
