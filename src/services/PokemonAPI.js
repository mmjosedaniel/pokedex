import { useQuery } from "react-query";

const BASE_POKEMON_URL = `https://pokeapi.co/api/v2`;
const POKEMON_LIST_URL = `${BASE_POKEMON_URL}/pokemon`;

export const useGetPokemons = () => {
  return useQuery("pokemons", async () => {
    const response = await fetch(POKEMON_LIST_URL);
    return response.json();
  });
};

export const useGetPokemonByName = (pokemonName) => {
  return useQuery(`${pokemonName}`, async () => {
    const response = await fetch(`${POKEMON_LIST_URL}/${pokemonName}`);
    return response.json();
  });
};
