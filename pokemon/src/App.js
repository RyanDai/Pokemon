import "./App.css";
import Navigation from "./components/Navigation";
import PokemonGrid from "./components/PokemonGrid";
import Title from "./components/Title";

function App() {
  return (
    <div>
      <Navigation />
      <Title />
      <PokemonGrid />
    </div>
  );
}

export default App;
