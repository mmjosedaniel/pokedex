import { useGetPokemons } from "../../services/PokemonAPI";

export const Pokedex = () => {
  const { data, isLoading } = useGetPokemons();
  return (
    <div className="App">
      <header>
        <h1>Happy Catch Pokedex!</h1>
      </header>
      <section>
        <form>
          <label htmlFor="pokemon-name">Search pokemon: </label>
          <input type="text" id="pokemon-name" placeholder="Pokemon name" />

          <button type="button">Search</button>
        </form>

        <h2>Pokemons:</h2>

        <div>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            data?.results.map((pokemon) => (
              <p key={pokemon.name}>{pokemon.name}</p>
            ))
          )}
        </div>
      </section>
    </div>
  );
};
