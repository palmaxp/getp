import React from "react";
import { Container } from "reactstrap";
import { PokemonContext } from "../PokemonContext";
import "../Styles/Pokedex.css";

export const Pokedex = () => {
  const { pokemonList } = React.useContext(PokemonContext);
  return (
    <>
      {
        <Container className="pokedex-view">
          <h2 className="title">Pokedéx</h2>
          {!pokemonList[0] && (
            <p className="title">
              Gere e Adicione pokemons para eles aparecerem na Pokedex.
            </p>
          )}
          <ul>
            {pokemonList.map((element) => {
              return (
                <li key={element.data.id} className="pokemon">
                  <img
                    src={
                      element.data.sprites.other["official-artwork"]
                        .front_default
                    }
                    alt={element.data.name}
                  />
                  <span>{element.data.name}</span>
                </li>
              );
            })}
          </ul>
        </Container>
      }
    </>
  );
};
