import React from "react";
import { PokemonInfo } from "./PokemonInfo";
import { PokemonView } from "./PokemonView";

export const Pokemon = () => {
  return (
    <section>
      <PokemonView />
      <PokemonInfo />
    </section>
  );
};
