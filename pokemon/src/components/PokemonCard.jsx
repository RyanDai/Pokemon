import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonByURL } from "../api/api";
import { partyAdd, partyRemove } from "../actions/partyAction";
import "../styles/PokemonCard.scss";
import removeIcon from "../assets/remove.svg";

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

  const selectedPokemons = useSelector((state) => state.party.party);

  useEffect(() => {
    getPokemonByURL(props.url).then((res) => {
      setPokemon({
        ...pokemon,
        order: res.id,
        name: res.name,
        types: res.types,
        sprites: res.sprites.front_default,
        url: props.url,
      });
    });
  }, []);

  useEffect(() => {
    //console.log(selectedPokemons);
    if (isInParty(pokemon.url)) {
      setSelected(true);
    }
  });

  function isInParty(url) {
    return selectedPokemons.find((pokemon) => pokemon.url === url);
  }

  function handleCardClick() {
    if (props.page === "index") {
      if (!isInParty(pokemon.url) && selectedPokemons.length < 6) {
        dispatch(partyAdd({ url: pokemon.url, sprites: pokemon.sprites }));
        setSelected(true);
      } else {
        dispatch(partyRemove(pokemon.url));
        setSelected(false);
      }
    }
  }

  function removeParty() {
    dispatch(partyRemove(pokemon.url));
    setSelected(false);
  }

  function capitalizeString(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  //prepending # and 0 to number, e.g  5 -> #005
  function handleOrderDisplay(num, places) {
    return String(num)
      .padStart(places, "0")
      .padStart(places + 1, "#");
  }

  return (
    <div
      className={`pokemonCard ${selected ? "cardSelected" : ""}`}
      onClick={handleCardClick}
    >
      <div className="cardContent">
        <div className="orderBadge">{handleOrderDisplay(pokemon.order, 3)}</div>
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
      <div className={`removeIcon ${props.page}`}>
        <img src={removeIcon} alt="" onClick={removeParty} />
      </div>
    </div>
  );
}

export default PokemonCard;
