import { useGetPokemonByName } from "../../services/PokemonAPI";

export const PokemonInfo = () => {
  const { data } = useGetPokemonByName("bulbasaur");
  return (
    <div>
      <h2>Pokemon Name </h2>
    </div>
  );
};
