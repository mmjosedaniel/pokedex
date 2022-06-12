import { useQuery } from "react-query";

const BASE_POKEMON_URL = `https://pokeapi.co/api/v2`;
const POKEMON_LIST_URL = `${BASE_POKEMON_URL}/pokemon`;

const fetchPokemons = async () => {
  const response = await fetch(POKEMON_LIST_URL);
  console.log(response);
  return response.json();
};

export const useGetPokemons = () => {
  return useQuery("pokemons", fetchPokemons);
};
