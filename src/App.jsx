/**
 * 1. Crear el formulario con el botón de enviar
 * 2. Crear el context para manejar los select y la busqueda de bebidas en la api
 * 3. Crear el componente que muestre un listdao con las imagenes de los cocteles el nombre y el ver más
 * 4. Crear el modal que aparece cuando hacemos click en el botón de ver más.
 */
import React from "react";
import { CocktailProvider } from "./context/CocktailProvider";
import CocktailForm from "./components/CocktailForm";
import { CategoriesProvider } from "./context/CategoriesProvider";
import ResultList from "./components/ResultList";
import CocktailInfo from "./components/CocktailInfo";
import "./index.css";
/**
 * TODO css de la aplicación
 * TODO comparar con el curso
 */
/**
 *
 */
/**
 * es imposible saberlo coçon
 */
function App() {
  return (
    <CocktailProvider>
      <header>
        <h1>Drunken sailor</h1>
      </header>
      <CategoriesProvider>
        <CocktailForm />
      </CategoriesProvider>
      <CocktailInfo />
      <ResultList />
    </CocktailProvider>
  );
}

export default App;
