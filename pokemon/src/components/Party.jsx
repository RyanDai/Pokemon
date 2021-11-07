import { Fragment } from "react";
import PokemonCard from "./PokemonCard";
import { useDispatch, useSelector } from "react-redux";
import EmptyCard from "./EmptyCard";

function Party() {
  const dispatch = useDispatch();

  const partyPokemons = useSelector((state) => state.party.party);

  //console.log(partyPokemons);

  return (
    <Fragment>
      <div className="container">
        <div className="cardContainer">
          {partyPokemons.map((pokemon) => (
            <PokemonCard key={pokemon.url} url={pokemon.url} page="party" />
          ))}
          {[...Array(6 - partyPokemons.length)].map((member, i) => (
            <EmptyCard />
          ))}
        </div>
      </div>
    </Fragment>
  );
}

export default Party;
