import axios from "axios";

export async function getPokemonByURL(url) {
  return axios
    .get(url)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.log(error);
    });
}

export async function getAllPokemons(offset) {
  return axios
    .get(`https://pokeapi.co/api/v2/pokemon?limit=12&offset=${offset}`)
    .then((res) => {
      return res;
    })
    .catch((error) => {
      console.log(error);
    });
}
