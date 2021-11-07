import PokemonCard from "./PokemonCard";
import emptyBall from "../assets/pokeball_PNG8.png";
import { useDispatch, useSelector } from "react-redux";

function PartyList() {
  const dispatch = useDispatch();

  const partyPokemons = useSelector((state) => state.party.party);

  //console.log(partyPokemons);

  return (
    <div className="listContainer">
      {partyPokemons.map((pokemon) => {
        return <img src={pokemon.sprites} alt="party pokemon" />;
      })}
      {[...Array(6 - partyPokemons.length)].map((member, i) => {
        return <img src={emptyBall} alt="poke ball" />;
      })}
    </div>
  );
}

export default PartyList;
