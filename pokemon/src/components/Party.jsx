import { Fragment } from "react";
import PokemonCard from "./PokemonCard";
import { useDispatch, useSelector } from "react-redux";

function Party() {
  const dispatch = useDispatch();

  const partyPokemons = useSelector((state) => state.party.party);

  console.log(partyPokemons);

  return (
    <Fragment>
      <div className="container">
        <div className="cardContainer">
          {partyPokemons.map((pokemon) => (
            <PokemonCard key={pokemon} url={pokemon} />
          ))}
        </div>
      </div>
    </Fragment>
  );
}

export default Party;
