import React from "react";
import useCocktail from "../hooks/useCocktail";

import useCategories from "../hooks/useCategories";
const Form = () => {
  const { handleChangeCocktailInfo, getCocktails, cocktailInfo } =
    useCocktail();
  const { categories } = useCategories();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!Object.values(cocktailInfo).includes("")) {
      getCocktails();
    }
  };
  return (
    <div>
      <form>
        <div>
          <label htmlFor="name">Drink name</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={(e) => handleChangeCocktailInfo(e)}
          />
        </div>
        <div>
          <label htmlFor="name">Alcohol type</label>
          <select
            name="category"
            id="category"
            onChange={(e) => handleChangeCocktailInfo(e)}
          >
            {categories.map((category) => (
              <option key={category.strCategory} value={category.strCategory}>
                {category.strCategory}
              </option>
            ))}
          </select>
        </div>
        <button onClick={(e) => handleSubmit(e)}>GET ME A DRINK</button>
      </form>
    </div>
  );
};

export default Form;
