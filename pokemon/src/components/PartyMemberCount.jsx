import "../styles/PartyMemberCount.scss";
import { useSelector } from "react-redux";

function PartyMemberCount() {
  const selectedPokemons = useSelector((state) => state.party.party);

  return (
    <div className="countContainer">
      <h1>{selectedPokemons.length}/6</h1>
    </div>
  );
}

export default PartyMemberCount;
