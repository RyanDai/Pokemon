import { useState, useEffect } from "react";
import { getPokemonByURL } from "../api/api";

function PokemonCard(props) {
  const [pokemon, setPokemon] = useState({
    order: 0,
    name: "",
    types: [],
    sprites: "",
  });

  useEffect(() => {
    getPokemonByURL(props.url).then((res) => {
      setPokemon({
        ...pokemon,
        order: res.order,
        name: res.name,
        types: res.types,
        sprites: res.sprites.front_default,
      });
    });
  }, []);

  return (
    <div>
      <p>{pokemon.name}</p>
      <p>{pokemon.order}</p>
      <img src={pokemon.sprites} height="150px" width="150px" />
      {pokemon.types.map((type) => {
        return <p key={type.slot}>{type.type.name}</p>;
      })}
    </div>
  );
}

export default PokemonCard;
