import emptyBall from "../assets/pokeball_PNG8.png";
import { useSelector } from "react-redux";
import "../styles/PartyList.scss";

function PartyList() {
  const partyPokemons = useSelector((state) => state.party.party);

  return (
    <div className="listContainer">
      {partyPokemons.map((pokemon) => {
        return (
          <img
            src={pokemon.sprites}
            key={pokemon.sprites}
            alt="party pokemon"
            className="pokemonImage"
          />
        );
      })}
      {[...Array(6 - partyPokemons.length)].map((member, i) => {
        return (
          <img src={emptyBall} key={i} alt="poke ball" className="ballImage" />
        );
      })}
    </div>
  );
}

export default PartyList;
