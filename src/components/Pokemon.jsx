import React from "react";
import { PokemonInfo } from "./PokemonInfo";
import { PokemonView } from "./PokemonView";
import { PokemonContext } from "../PokemonContext";

export const Pokemon = () => {
  const { data } = React.useContext(PokemonContext);

  return (
    <section>
      <PokemonView />
      {data && <PokemonInfo />}
    </section>
  );
};
