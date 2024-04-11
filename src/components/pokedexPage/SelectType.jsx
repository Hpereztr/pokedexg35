import { useEffect } from "react";
import useFecth from "../../hooks/useFecth";
import '../style/PokedexPage.css'

const SelectType = ({setTypeSelected}) => {
  const url = "https://pokeapi.co/api/v2/type";
  const [types, getTypes] = useFecth(url);

  useEffect(() => {
    getTypes();
  }, []);
 
    const handleChange = e => {
      setTypeSelected(e.target.value)
    }

  return (
    <select  onChange={handleChange}>
      <option value="allPokemons">all pokemon</option>
      {
        types?.results.map(typeInfo => (
        <option key={typeInfo.url} value={typeInfo.url}>{typeInfo.name}</option>
      ))}
    </select>
  );
};

export default SelectType;
