import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { debounce } from "../../Utils/Debounce";
import { CiSearch } from "react-icons/ci";

// import { pokemonDetails } from "../../Store/APIcalls.jsx/PokemonDetails";
import { addfilter } from "../../Store/Slicer.jsx/PokemonSlice";

const Input = () => {
  const dispatch = useDispatch();
  const allPokemon = useSelector((state) => state.pokemon.allPokemon);
  const randomPokemon = useSelector((state) => state.pokemon.randomPokemon);

  // Debounced function to handle input change
  const handleChange = debounce((value) => inputdata(value), 300);

  const inputdata = async (value) => {
    if (value?.length) {
      // Filter pokemons based on the input value
      const filteredPoke = randomPokemon.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(value.toLowerCase())
      );

      
      {filteredPoke.length>0?dispatch(addfilter(filteredPoke)):dispatch(addfilter(undefined))};
    } else {
      // Dispatch empty filter if no input value
      dispatch(addfilter(undefined));
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-4">
      <div className="flex justify-center sm:justify-start items-center gap-2 mb-2 text-sm sm:text-lg font-semibold text-white/80">
        <CiSearch className="w-6 h-6" />
        <p className="">Search by Name:</p>
      </div>
      
      <div className="relative">
        <input
          onChange={(e) => handleChange(e.target.value)}
          placeholder="I choose you!"
          className="lg:w-100 w-70 h-12 px-4 py-3 bg-black/30 border border-white/20 rounded-lg 
                   text-white placeholder-gray-400 
                   transition-all duration-200 
                   hover:border-orange-500 
                   focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500
                   shadow-lg "
        />
      </div>
    </div>
  );
};

export default Input;
