import React from "react";
import axios from "axios";
import { PokemonContext } from "../../PokemonContext";
import { Button } from "reactstrap";

export const BuscarPokemon = ({ url }) => {
  const { savePokemon } = React.useContext(PokemonContext);
  const [loading, setLoading] = React.useState(false);

  function getAllPokemons() {
    return axios.get(`${url}`).then((r) => {
      return r.data.count;
    });
  }
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
  async function handleSubmit(event) {
    setLoading(true);
    event.preventDefault();
    const randomPokemonID = await getAllPokemons();
    axios
      .get(`${url}/${getRandomInt(0, randomPokemonID)}`)
      .then((r) => {
        savePokemon(r.data);
        setLoading(false);
        return r.data;
      })
      .catch((e) => {
        setLoading(false);
        return e;
      });
  }
  return (
    <form onSubmit={handleSubmit}>
      {loading ? (
        <Button color="warning" disabled className="btn">
          Carregando...
        </Button>
      ) : (
        <Button color="warning" className="btn">
          Gerar Pokemon
        </Button>
      )}
    </form>
  );
};
