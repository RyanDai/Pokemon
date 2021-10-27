import { useState, useEffect } from "react";
import { getPokemonByURL } from "../api/api";
import "../styles/PokemonCard.scss";

function PokemonCard(props) {
  const [pokemon, setPokemon] = useState({
    order: 0,
    name: "",
    types: [],
    sprites: "",
    url: "",
  });

  useEffect(() => {
    getPokemonByURL(props.url).then((res) => {
      setPokemon({
        ...pokemon,
        order: res.order,
        name: res.name,
        types: res.types,
        sprites: res.sprites.front_default,
        url: props.url,
      });
    });
  });

  return (
    <div className="pokemonCard">
      <div className="cardContent">
        <div className="orderBadge">{pokemon.order}</div>
        <div className="name">{pokemon.name}</div>

        <img src={pokemon.sprites} alt="loading sprite..." className="sprite" />
        <div className="pokemonType">
          {pokemon.types.map((type) => {
            return <p key={type.slot}>{type.type.name}</p>;
          })}
        </div>
        <div className="addedTimes">Added to 3 parties</div>
      </div>
    </div>
  );
}

export default PokemonCard;
