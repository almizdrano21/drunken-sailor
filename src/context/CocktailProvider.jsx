import { useState, createContext, useMemo, useEffect } from "react";
import axios from "axios";
const CocktailContext = createContext();

const CocktailProvider = ({ children }) => {
  const [cocktailInfo, setCocktailInfo] = useState({ name: "", category: "" });
  const [cocktails, setCocktails] = useState([]);
  const [selectedCocktailID, selectCocktail] = useState("");
  const [cocktailData, setCocktailData] = useState({});
  const handleChangeCocktailInfo = (e) => {
    setCocktailInfo({ ...cocktailInfo, [e.target.name]: e.target.value });
  };
  const getCocktails = async () => {
    const { name, category } = cocktailInfo;
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}&c=${category}`;
    const { data } = await axios(url);
    setCocktails(data.drinks);
  };
  const getCocktailDescription = useMemo(
    () => async () => {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${selectedCocktailID}`;
      const { data } = await axios(url);
      setCocktailData(data.drinks[0]);
    },
    [selectedCocktailID]
  );
  useEffect(() => {
    if (selectedCocktailID !== "") {
      getCocktailDescription();
    } else {
      setCocktailData({});
    }
  }, [selectedCocktailID]);
  return (
    <CocktailContext.Provider
      value={{
        handleChangeCocktailInfo,
        getCocktails,
        cocktailInfo,
        cocktails,
        selectedCocktailID,
        selectCocktail,
        cocktailData,
      }}
    >
      {children}
    </CocktailContext.Provider>
  );
};
export { CocktailProvider };
export default CocktailContext;
