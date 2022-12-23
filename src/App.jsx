/**
 * 1. Crear el formulario con el botón de enviar
 * 2. Crear el context para manejar los select y la busqueda de bebidas en la api
 * 3. Crear el componente que muestre un listdao con las imagenes de los cocteles el nombre y el ver más
 * 4. Crear el modal que aparece cuando hacemos click en el botón de ver más.
 */
import React from "react";
import { CocktailProvider } from "./context/CocktailProvider";
import Form from "./components/Form";
import { CategoriesProvider } from "./context/CategoriesProvider";
function App() {
  return (
    <CocktailProvider>
      <header>
        <h1>Drunken sailor</h1>
      </header>
      <CategoriesProvider>
        <Form />
      </CategoriesProvider>
    </CocktailProvider>
  );
}

export default App;
