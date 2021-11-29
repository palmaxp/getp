import React from "react";
import { Button } from "reactstrap";
import { Api } from "../api/Api";
import { PokemonContext } from "../PokemonContext";

export const PokemonControl = () => {
  const { setPokemonList, pokemonList, data } =
    React.useContext(PokemonContext);

  function handleClick() {
    setPokemonList([...pokemonList, { data }]);
  }

  return (
    <>
      <div className="pokemonControl">
        {data && (
          <Button color="danger" onClick={handleClick}>
            Adicionar na Pokedex
          </Button>
        )}
        <Api />
        {/*  {
          <Button outline>
            Anterior
          </Button>
        }
        <Button outline>
          Próximo
        </Button> */}
      </div>
    </>
  );
};
