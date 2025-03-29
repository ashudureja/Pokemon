import React,{useEffect} from "react";
import { TypeConst } from "../Utils/TypeConst";
import { motion } from "framer-motion";
import { LuFileSearch2 } from "react-icons/lu";
import { useSelector,useDispatch } from "react-redux";
// import { initialPokemonData } from "../Store/APIcalls.jsx/InitialData";
// import { pokemonDetails } from "../Store/APIcalls.jsx/PokemonDetails";
import { addfilter } from "../Store/Slicer.jsx/PokemonSlice";

const arr = Object.entries(TypeConst);

const Filter = () => {
  // Duplicate the array to create seamless loop
  const duplicatedArr = [...arr, ...arr];
  const allPokemon=useSelector((state)=>state.pokemon.allPokemon)
   const randomPokemon = useSelector((state) => state.pokemon.randomPokemon);
   const filteredPokemon = useSelector((state) => state.pokemon.filteredPokemon);
  const dispatch=useDispatch()

  

 


  const handleClick = (title) => {
   
    if (!randomPokemon) {
        console.error("randomPokemon is undefined or null.");
        return;
    }

    const filteredPoke = randomPokemon.filter((pokemon) =>
        pokemon.types.includes(title)
    );

    dispatch(addfilter(filteredPoke)); // Dispatch filtered Pokémon
   
};

  

  return (
    <div>
      <div className="flex md:justify-start  font-semibold text-white/80 text-sm justify-center items-center gap-2 mb-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 256 256"
        >
          <path
            d="M208,48V216a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H96a39.83,39.83,0,0,0-8,24v8h80V64a39.83,39.83,0,0,0-8-24h40A8,8,0,0,1,208,48Z"
            opacity="0.2"
          ></path>
          <path d="M200,32H163.74a47.92,47.92,0,0,0-71.48,0H56A16,16,0,0,0,40,48V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm-72,0a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Zm72,184H56V48H82.75A47.93,47.93,0,0,0,80,64v8a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V64a47.93,47.93,0,0,0-2.75-16H200Z"></path>
        </svg>
        <p className=" text-sm lg:text-lg">Search by Type:</p>
      </div>
      <div className=" w-70 md:w-130 px-2 py-1 bg-black/30 border-[1px] border-white/30 overflow-hidden relative rounded-xl">
        <motion.div
          className="flex h-10 gap-3 w-max items-center justify-center"
          animate={{
            x: ["0%", "-50%"], // Adjusted to match duplicated content
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {duplicatedArr.map((val, i) => (
            <img
              onClick={() => handleClick(val[0])}
              key={i}
              className="h-8 w-auto flex-shrink-0 cursor-pointer"
              src={val[1]}
              alt={`image-${i}`}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Filter;
