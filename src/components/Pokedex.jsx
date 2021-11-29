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
          <ul>
            {pokemonList.map((element) => {
              return (
                <li ley={element.data.id} className="pokemon">
                  <img
                    src={
                      element.data.sprites.other["official-artwork"]
                        .front_default
                    }
                    alt=""
                  />
                  {element.data.name}
                </li>
              );
            })}
          </ul>
        </Container>
      }
    </>
  );
};
