import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonByURL } from "../api/api";
import { partyAdd, partyRemove } from "../actions/partyAction";
import "../styles/PokemonCard.scss";

function PokemonCard(props) {
  const dispatch = useDispatch();

  const [pokemon, setPokemon] = useState({
    order: 0,
    name: "",
    types: [],
    sprites: "",
    url: "",
  });
  const [selected, setSelected] = useState(false);

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
  }, [pokemon]);

  useEffect(() => {
    if (selected) {
      dispatch(partyAdd(pokemon.url));
    } else {
      dispatch(partyRemove(pokemon.url));
    }
  }, [selected]);

  function toggleSelect() {
    setSelected((selected) => !selected);
  }

  function capitalizeString(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div
      className={`pokemonCard ${selected ? "cardSelected" : ""}`}
      onClick={toggleSelect}
    >
      <div className="cardContent">
        <div className="orderBadge">{pokemon.order}</div>
        <div className="name">{pokemon.name}</div>

        <img src={pokemon.sprites} alt="loading sprite..." className="sprite" />
        <div className="pokemonType">
          {pokemon.types.map((type) => {
            const typeName = type.type.name;
            return (
              <div key={type.slot} className={`type ${typeName}`}>
                {capitalizeString(typeName)}
              </div>
            );
          })}
        </div>
        <div className="addedTimes">Added to 3 parties</div>
      </div>
    </div>
  );
}

export default PokemonCard;
