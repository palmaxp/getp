import React from "react";
import { Container, Row } from "reactstrap";
import { PokemonContext } from "../PokemonContext";
import "../Styles/PokemonView.css";
import { PokemonControl } from "./PokemonControl";
import pokemon from "../Assets/pokemon.png";

export const PokemonView = () => {
  const { data } = React.useContext(PokemonContext);
  return (
    <section className="showPokemon">
      <Container className="showPokemonContainer">
        <Row>
          <div>
            <div className="nome">{data && data.name}</div>
            <img src={!data && pokemon} alt="" />
            <img
              src={data && data.sprites.other["official-artwork"].front_default}
              alt={data && data.name}
            />
          </div>
        </Row>
        <Row>
          <PokemonControl />
        </Row>
      </Container>
    </section>
  );
};
