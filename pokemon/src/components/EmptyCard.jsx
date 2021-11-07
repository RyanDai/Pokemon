import emptyBall from "../assets/pokeball_PNG8.png";
import "../styles/PokemonCard.scss";

function EmptyCard() {
  return (
    <div className={"pokemonCard"}>
      <div className="cardContent">
        <p>test</p>
        <img src={emptyBall} alt="pokemon placeholder" className="sprite" />
      </div>
    </div>
  );
}

export default EmptyCard;
