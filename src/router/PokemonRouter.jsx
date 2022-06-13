import { Route, Routes } from "react-router-dom";
import { Pokedex } from "../pages/Pokedex";
import { PokemonInfo } from "../pages/PokemonInfo";

export const PokemonRouter = () => (
  <Routes>
    <Route path="/" element={<Pokedex />} />
    <Route path="/:pokemon" element={<PokemonInfo />} />
  </Routes>
);
