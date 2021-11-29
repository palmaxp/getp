import React from "react";
import { Container } from "reactstrap";
import { PokemonContext } from "../PokemonContext";

export const PokemonInfo = () => {
  const { data, pokemonHistory } = React.useContext(PokemonContext);

  return (
    <>
      <Container className="info">
        <div className="pokemon-info">
          <div>
            {data && <h2>Informações do Pokemon</h2>}
            {data && <span>ID: </span>}
            {data && data.order}
          </div>
          <img
            src={data && data.sprites.back_default}
            alt={data && data.name}
          />
          <div className="nome">{data && data.name}</div>
          <div>
            {data && <span>Tipo: </span>}
            {data && data.types[0].type.name}
            {data && data.types[1] && data.types[1].type.name}
          </div>
        </div>
      </Container>
      <div className="pokemon-history">
        {data && <h2>Histórico de Pokemons</h2>}
        <ul>
          {pokemonHistory.map((element) => {
            return <li key={element.pokemon.id}>{element.pokemon.name}</li>;
          })}
        </ul>
      </div>
    </>
  );
};
