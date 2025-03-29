import React,{useEffect} from "react";
import About from "./LandingPartials/About";
import Search from "./LandingPartials/Search";
import Compare from "./LandingPartials/Compare";
import Catch from "./LandingPartials/Catch";

import { useDispatch, useSelector } from "react-redux";
import { initialPokemonData } from "../Store/APIcalls.jsx/InitialData";
import { pokemonDetails } from "../Store/APIcalls.jsx/PokemonDetails";

const Landing = () => {
  const dispatch = useDispatch();
  const allPokemon = useSelector((state) => state.pokemon.allPokemon);
  const randomPokemon = useSelector((state) => state.pokemon.randomPokemon);
  const filteredPokemon = useSelector((state) => state.pokemon.filteredPokemon);
  

  return (
    <div className="">
      

      <About />
      <Search />
      <Compare />
      <Catch />
    </div>
  );
};

export default Landing;
