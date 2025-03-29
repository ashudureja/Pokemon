import React, { useEffect, useState } from "react";
import Cards from "../Components/LandingPartials/Cards";

import { useSelector } from "react-redux";
import Filter from "../Components/Filter";
import Input from "../Components/SerachPagePartials/Input";
import { useNavigate, useLocation } from "react-router-dom";

import LoadingScreen from "../Components/LoadingScreen";

const Search = () => {
  const randomPokemon = useSelector((state) => state.pokemon.randomPokemon);
  const filteredPokemon = useSelector((state) => state.pokemon.filteredPokemon);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="w-full h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-10">
      {!randomPokemon ? (
        <LoadingScreen />
      ) : (
        <>
          
          <h1 className="text-white/80 font-bold mb-15 text-2xl italic text-center">
            Gotta Search 'Em All – Compare & Build Your Dream Team!
          </h1>
          <div className="flex flex-col md:flex-row justify-between lg:gap-4 gap-6 items-center">
            <Input />
            <Filter />
          </div>
          <div className="mt-25 lg:mt-40">
            <Cards data={filteredPokemon || randomPokemon} />
          </div>
        </>
      )}
    </div>
  );
};

export default Search;
