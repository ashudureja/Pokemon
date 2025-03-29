import React from "react";
import { motion } from "framer-motion";
import { TypeConst } from "../../Utils/TypeConst";
import { useDispatch, useSelector } from "react-redux";
import {
  addcurrent,
  addUser,
  removeUser,
  setLoader,
} from "../../Store/Slicer.jsx/PokemonSlice";
console.log(TypeConst.bug);

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Function to get background gradient based on type
const getBackgroundGradient = (types) => {
  // Convert all types to lowercase
  const lowercaseTypes = types.map((type) => type.toLowerCase());

  if (lowercaseTypes.includes("fire")) {
    return "radial-gradient(80% 80% at 50% bottom, rgba(251, 142, 47, 0.97), rgba(1, 1, 29, 0.8))";
  } else if (lowercaseTypes.includes("water")) {
    return "radial-gradient(80% 80% at 50% bottom, rgba(47, 142, 251, 0.97), rgba(1, 1, 29, 0.8))";
  } else if (lowercaseTypes.includes("grass")) {
    return "radial-gradient(80% 80% at 50% bottom, rgba(34, 139, 34, 0.97), rgba(1, 1, 29, 0.8))";
  } else if (lowercaseTypes.includes("electric")) {
    return "radial-gradient(80% 80% at 50% bottom, rgba(255, 223, 51, 0.97), rgba(1, 1, 29, 0.8))";
  } else if (lowercaseTypes.includes("psychic")) {
    return "radial-gradient(80% 80% at 50% bottom, rgba(255, 85, 238, 0.97), rgba(1, 1, 29, 0.8))";
  } else if (lowercaseTypes.includes("bug")) {
    return "radial-gradient(80% 80% at 50% bottom, rgba(152, 251, 152, 0.97), rgba(1, 1, 29, 0.8))";
  } else if (lowercaseTypes.includes("poison")) {
    return "radial-gradient(80% 80% at 50% bottom, rgba(186, 85, 211, 0.97), rgba(1, 1, 29, 0.8))";
  } else if (lowercaseTypes.includes("normal")) {
    return "radial-gradient(80% 80% at 50% bottom, rgba(169, 169, 169, 0.97), rgba(1, 1, 29, 0.8))";
  } else if (lowercaseTypes.includes("fighting")) {
    return "radial-gradient(80% 80% at 50% bottom, rgba(255, 99, 71, 0.97), rgba(1, 1, 29, 0.8))";
  } else if (lowercaseTypes.includes("flying")) {
    return "radial-gradient(80% 80% at 50% bottom, rgba(135, 206, 235, 0.97), rgba(1, 1, 29, 0.8))";
  } else if (lowercaseTypes.includes("rock")) {
    return "radial-gradient(80% 80% at 50% bottom, rgba(169, 169, 169, 0.97), rgba(1, 1, 29, 0.8))";
  } else if (lowercaseTypes.includes("ground")) {
    return "radial-gradient(80% 80% at 50% bottom, rgba(189, 183, 107, 0.97), rgba(1, 1, 29, 0.8))";
  } else if (lowercaseTypes.includes("ice")) {
    return "radial-gradient(80% 80% at 50% bottom, rgba(173, 216, 230, 0.97), rgba(1, 1, 29, 0.8))";
  } else if (lowercaseTypes.includes("ghost")) {
    return "radial-gradient(80% 80% at 50% bottom, rgba(128, 0, 128, 0.97), rgba(1, 1, 29, 0.8))";
  } else if (lowercaseTypes.includes("dragon")) {
    return "radial-gradient(80% 80% at 50% bottom, rgba(72, 61, 139, 0.97), rgba(1, 1, 29, 0.8))";
  } else if (lowercaseTypes.includes("dark")) {
    return "radial-gradient(80% 80% at 50% bottom, rgba(47, 47, 47, 0.97), rgba(1, 1, 29, 0.8))";
  } else if (lowercaseTypes.includes("steel")) {
    return "radial-gradient(80% 80% at 50% bottom, rgba(169, 169, 169, 0.97), rgba(1, 1, 29, 0.8))";
  } else if (lowercaseTypes.includes("fairy")) {
    return "radial-gradient(80% 80% at 50% bottom, rgba(255, 182, 193, 0.97), rgba(1, 1, 29, 0.8))";
  }
  return "radial-gradient(80% 80% at 50% bottom, rgba(128, 128, 128, 0.97), rgba(1, 1, 29, 0.8))"; // Default color
};

const Cards = ({ data, flag = true }) => {
  const dispatch = useDispatch();
  const currentPokemon = useSelector((store) => store.pokemon.currentPokemon);

  

  const handleClick=(pokemon)=>{
    dispatch(addcurrent(pokemon)); 

  }

  const handleAddToFavorites = (pokemon, e) => {
    e.stopPropagation();
    dispatch(addUser(pokemon));
    toast.success(`${pokemon.name} added to favorites!`, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeButton: false,
      style: {
        background: '#2d3748',
        color: '#fff',
        borderRadius: '8px',
        fontSize: '14px',
        textAlign: 'center',
      },
    });
  };

 
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-13 space-y-14 lg:space-y-20 cursor-pointer px-0 lg:px-0   justify-items-center ">
      {data.map((pokemon, index) => (
        <motion.div
          onClick={() => handleClick(pokemon)}
          key={index}
          className="relative border-[0.1px] border-white/20 w-70 lg:w-76 h-80 lg:h-95 p-5 lg:p-5 rounded-[12%] shadow-lg text-white flex flex-col justify-center items-center "
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          style={{
            backgroundImage: `url('https://pokedexplore.vercel.app/svgs/half-pokeball.svg'), ${getBackgroundGradient(
              pokemon.types
            )}`,
            backgroundSize: "cover",
            backgroundPosition: "left",
          }}
        >
          {flag ? (
            <button
            onClick={(e) => handleAddToFavorites(pokemon, e)}
              className="absolute cursor-pointer top-3 left-3 font-bold text-white/70 hover:text-white hover:scale-[150%] text-2xl trasition-all transform duration-100"
            >
              +
            </button>
          ) : (
            <button
              onClick={(e) => {
                e.stopPropagation(); // Prevent parent card click
                dispatch(removeUser(pokemon));
              }}
              className="cursor-pointer absolute top-2 right-3 font-semibold text-white/70 hover:text-white hover:scale-[150%] text-4xl trasition-all transform duration-100"
            >
              -
            </button>
          )}

          <img
            className="w-50 lg:w-65 absolute left-1/2 top-10 transform -translate-x-1/2 -translate-y-1/2"
            src={pokemon.image}
            alt={pokemon.name}
          />
          <div className="absolute left-1/2 bottom-6 lg:bottom-7 transform -translate-x-1/2 text-center w-full px-2">
            <h2 className="text-2xl lg:text-4xl font-semibold py-1 lg:py-2 tracking-relaxed">
              •{pokemon.name}•
            </h2>
            <div className="flex justify-center gap-1 lg:gap-2 py-1">
              {pokemon.types.map((type, i) => (
                <button
                  key={i}
                  className={`w-20 lg:w-27 flex items-center justify-center gap-1 py-1 text-sm lg:text-lg rounded-lg ${
                    type.toLowerCase() === "fire"
                      ? "bg-orange-500"
                      : type.toLowerCase() === "water"
                      ? "bg-blue-500"
                      : type.toLowerCase() === "grass"
                      ? "bg-green-500"
                      : type.toLowerCase() === "electric"
                      ? "bg-yellow-500"
                      : type.toLowerCase() === "psychic"
                      ? "bg-purple-500"
                      : type.toLowerCase() === "bug"
                      ? "bg-lime-500"
                      : type.toLowerCase() === "poison"
                      ? "bg-violet-500"
                      : type.toLowerCase() === "normal"
                      ? "bg-gray-500"
                      : type.toLowerCase() === "fighting"
                      ? "bg-red-500"
                      : type.toLowerCase() === "flying"
                      ? "bg-sky-500"
                      : type.toLowerCase() === "rock"
                      ? "bg-stone-500"
                      : type.toLowerCase() === "ground"
                      ? "bg-yellow-600"
                      : type.toLowerCase() === "ice"
                      ? "bg-cyan-200"
                      : type.toLowerCase() === "ghost"
                      ? "bg-indigo-500"
                      : type.toLowerCase() === "dragon"
                      ? "bg-indigo-900"
                      : type.toLowerCase() === "dark"
                      ? "bg-zinc-800"
                      : type.toLowerCase() === "steel"
                      ? "bg-slate-500"
                      : type.toLowerCase() === "fairy"
                      ? "bg-pink-200"
                      : "bg-gray-500" // Default color
                  }
                  `}
                >
                  {
                    <img
                      className="h-5"
                      src={TypeConst[type.toLowerCase()]}
                    ></img>
                  }{" "}
                  {type.toUpperCase()}
                </button>
              ))}
            </div>
            <div className="flex justify-between pt-2 lg:pt-3">
              <div className="flex flex-col items-center w-1/2">
                <span className="text-xl lg:text-2xl font-bold">
                  {pokemon.height}
                </span>
                <p className="text-sm lg:text-lg flex items-center gap-1">
                  📏 Height
                </p>
              </div>
              <div className="flex flex-col items-center w-1/2">
                <span className="text-xl lg:text-2xl font-bold">
                  {pokemon.weight}
                </span>
                <p className="text-sm lg:text-lg flex items-center gap-1">
                  🏋️ Weight
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
      
    </div>
  );
};

export default Cards;
