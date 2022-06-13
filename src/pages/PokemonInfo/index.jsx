import { useGetPokemonByName } from "../../services/PokemonAPI";
import { upperFirst } from "lodash";

export const PokemonInfo = () => {
  const { data } = useGetPokemonByName("bulbasaur");
  return (
    <section>
      <h2>{upperFirst(data?.name)}</h2>

      <div></div>
    </section>
  );
};
