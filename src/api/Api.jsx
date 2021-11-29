import React from "react";
import { BuscarPokemon } from "./endpoints/BuscarPokemon";

export const Api = () => {
  const API_URL = "https://pokeapi.co/api/v2/pokemon";

  return (
    <div>
      <BuscarPokemon url={API_URL} />
    </div>
  );
};
