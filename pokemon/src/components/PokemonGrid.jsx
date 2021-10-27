import React, { Component, Fragment } from "react";
import PokemonCard from "./PokemonCard";
import { getAllPokemons } from "../api/api";
import "../styles/PokemonGrid.scss"

class PokemonGrid extends Component {
  constructor() {
    super();
    this.state = {
      pokemons: [],
      loading: false,
      prevY: 0,
    };
  }

  componentDidMount() {
    this.getPokemons();

    var options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    };

    this.observer = new IntersectionObserver(
      this.handleObserver.bind(this),
      options
    );
    this.observer.observe(this.loadingRef);
  }

  handleObserver(entities, observer) {
    const y = entities[0].boundingClientRect.y;
    if (this.state.prevY > y) {
      //const lastPhoto = this.state.pokemons[this.state.pokemons.length - 1];
      //const curPage = lastPhoto.albumId;
      this.getPokemons();
      //this.setState({ page: curPage });
    }
    this.setState({ prevY: y });
  }

  getPokemons() {
    this.setState({ loading: true });
    return getAllPokemons(this.state.pokemons.length).then((res) => {
      this.setState({
        pokemons: [...this.state.pokemons, ...res.data.results],
      });
      this.setState({ loading: false });
    });
  }

  render() {
    // Additional css
    const loadingCSS = {
      height: "100px",
      margin: "30px",
    };

    // To change the loading icon behavior
    const loadingTextCSS = { display: this.state.loading ? "block" : "none" };

    return (
      <Fragment>
        <div className="container">
          <div className="cardContainer">
            {this.state.pokemons.map((pokemon) => (
              <PokemonCard
                key={pokemon.name}
                name={pokemon.name}
                url={pokemon.url}
              />
            ))}
          </div>
          <div
            ref={(loadingRef) => (this.loadingRef = loadingRef)}
            style={loadingCSS}
          >
            <span style={loadingTextCSS}>Loading...</span>
          </div>
        </div>
        <div>
          <p>
            {this.state.pokemons.length}/{this.state.pokemons.length}
          </p>
        </div>
      </Fragment>
    );
  }
}

export default PokemonGrid;
