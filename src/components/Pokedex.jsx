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
          <ul>
            {pokemonList.map((element) => {
              return (
                <li ley={element.data.id} className="pokemon">
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
