import { Fragment } from "react";
import PokemonCard from "./PokemonCard";
import PageSwitch from "./PageSwitch";
import { useSelector } from "react-redux";
import EmptyCard from "./EmptyCard";

function Party() {
  const partyPokemons = useSelector((state) => state.party.party);
  return (
    <Fragment>
      <div className="container">
        <div className="cardContainer">
          {partyPokemons.map((pokemon) => (
            <PokemonCard key={pokemon.url} url={pokemon.url} page="party" />
          ))}
          {[...Array(6 - partyPokemons.length)].map((member, i) => (
            <EmptyCard key={i} />
          ))}
        </div>
      </div>
      <PageSwitch page="Dex" />
    </Fragment>
  );
}

export default Party;
