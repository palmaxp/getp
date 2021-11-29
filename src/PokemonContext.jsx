import { createContext, useState } from "react";

export const PokemonContext = createContext();

export const PokemonStorage = ({ children }) => {
  const [data, setData] = useState();
  const [pokemonHistory, setPokemonHistory] = useState([]);
  const [pokemonList, setPokemonList] = useState([]);

  function savePokemon(pokemon) {
    setData(pokemon);
    setPokemonHistory([...pokemonHistory, { pokemon }]);
  }

  return (
    <PokemonContext.Provider
      value={{ savePokemon, data, pokemonList, setPokemonList, pokemonHistory }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
