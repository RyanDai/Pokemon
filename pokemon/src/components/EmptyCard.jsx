import emptyBall from "../assets/pokeball_PNG8.png";
import plus from "../assets/plus.svg";
import "../styles/PokemonCard.scss";

function EmptyCard() {
  return (
    <div className={"pokemonCard"}>
      <div className="cardContent">
        <img src={plus} alt="add pokemon" className="plus" />
        <img src={emptyBall} alt="pokemon placeholder" className="sprite" />
      </div>
    </div>
  );
}

export default EmptyCard;
