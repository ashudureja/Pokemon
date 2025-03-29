import React from "react";
import { motion } from "framer-motion";
import { FaWeightHanging } from "react-icons/fa";
import { GiBodyHeight } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { TypeConst } from "../Utils/TypeConst";
import { FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addCompare, removeCompare } from "../Store/Slicer.jsx/PokemonSlice";
import { IoIosAdd } from "react-icons/io";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addUser } from "../Store/Slicer.jsx/PokemonSlice";

export const CompareCard = ({ pokemonInfo, index }) => {
  
  
  const compareQue = useSelector((store) => store.pokemon.compareQue);
  const handleClose = (index) => {
    dispatch(removeCompare(index));
  };

  const typeColorMap = {
    fire: {
      primary: "#F56D5D",
      secondary: "#ED9A5E",
      gradient: "from-[#F56D5D] to-[#ED9A5E]",
    },
    water: {
      primary: "#5E9AEA",
      secondary: "#6ED3FF",
      gradient: "from-[#5E9AEA] to-[#6ED3FF]",
    },
    grass: {
      primary: "#5FBE62",
      secondary: "#81D4A3",
      gradient: "from-[#5FBE62] to-[#81D4A3]",
    },
    electric: {
      primary: "#F7D54C",
      secondary: "#FFE694",
      gradient: "from-[#F7D54C] to-[#FFE694]",
    },
    psychic: {
      primary: "#F85888",
      secondary: "#FF94B4",
      gradient: "from-[#F85888] to-[#FF94B4]",
    },
    ice: {
      primary: "#74CEC0",
      secondary: "#A8E1E6",
      gradient: "from-[#74CEC0] to-[#A8E1E6]",
    },
    dragon: {
      primary: "#7038F8",
      secondary: "#9C51E9",
      gradient: "from-[#7038F8] to-[#9C51E9]",
    },
    dark: {
      primary: "#705848",
      secondary: "#6F5442",
      gradient: "from-[#705848] to-[#6F5442]",
    },
    fairy: {
      primary: "#EE99AC",
      secondary: "#F4C1D0",
      gradient: "from-[#EE99AC] to-[#F4C1D0]",
    },
    normal: {
      primary: "#A8A878",
      secondary: "#C6C6A7",
      gradient: "from-[#A8A878] to-[#C6C6A7]",
    },
    fighting: {
      primary: "#C03028",
      secondary: "#E0534E",
      gradient: "from-[#C03028] to-[#E0534E]",
    },
    flying: {
      primary: "#A890F0",
      secondary: "#C6B7F5",
      gradient: "from-[#A890F0] to-[#C6B7F5]",
    },
    poison: {
      primary: "#A040A0",
      secondary: "#C468C8",
      gradient: "from-[#A040A0] to-[#C468C8]",
    },
    ground: {
      primary: "#E0C068",
      secondary: "#F4E394",
      gradient: "from-[#E0C068] to-[#F4E394]",
    },
    rock: {
      primary: "#B8A038",
      secondary: "#D4C684",
      gradient: "from-[#B8A038] to-[#D4C684]",
    },
    bug: {
      primary: "#A8B820",
      secondary: "#C6D84C",
      gradient: "from-[#A8B820] to-[#C6D84C]",
    },
    ghost: {
      primary: "#705898",
      secondary: "#9C7EC8",
      gradient: "from-[#705898] to-[#9C7EC8]",
    },
    steel: {
      primary: "#B8B8D0",
      secondary: "#D4D4E0",
      gradient: "from-[#B8B8D0] to-[#D4D4E0]",
    },
  };

  // Get first type for color scheme
  const primaryType = pokemonInfo.types[0]?.toLowerCase() || "normal";
  const colors = typeColorMap[primaryType] || typeColorMap.normal;

  // Filter out special attack and special defense
  const filteredStats = pokemonInfo.stats.filter(
    (stat) => stat.name !== "special-attack" && stat.name !== "special-defense"
  );

  const dispatch = useDispatch();
  

  const handleAddToFavorites = () => {
    
      
      dispatch(addUser(pokemonInfo));
      toast.success(`${pokemonInfo.name} added to favorites!`, {
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
    <motion.div
      className={`relative w-full h-[76vh] sm:h-[78vh] max-w-md rounded-2xl shadow-2xl overflow-hidden border-2 border-white/20 
          bg-gradient-to-br ${colors.gradient} text-white`}
      initial={{ scale: 0.8, rotate: -8, opacity: 0 }}
      animate={{ scale: 1, rotate: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
       {/* Add Button */}
      <motion.button
        whileHover={{ scale: 1.2, rotate: 90 }}
        whileTap={{ scale: 0.9 }}
        className="absolute cursor-pointer top-4 left-4 z-10 text-white/70 hover:text-white transition-all duration-200"
        onClick={(e) => handleAddToFavorites()}
      >
        <IoIosAdd size={40} className="drop-shadow-lg" />
      </motion.button>

      {/* Close Button */}
      <motion.button
        whileHover={{ scale: 1.2, rotate: 90 }}
        whileTap={{ scale: 0.9 }}
        className="absolute top-4 cursor-pointer right-4 z-10 text-white/70 hover:text-white transition-all duration-200"
        onClick={() => handleClose({ index })}
      >
        <IoClose size={28} className="drop-shadow-lg" />
      </motion.button>

      {/* Main Content */}
      <div className="relative z-0 px-6 pt-4 pb-6">
        {/* Pokémon Image Container */}
        <div className="absolute top-0 left-0 right-0 h-1/3 bg-white/10 blur-sm" />

        <div className="relative z-10 flex flex-col items-center space-y-4">
          {/* Pokémon Image */}
          <div
            className={`relative p-4 rounded-full bg-white/10 backdrop-blur-md 
                border-2 border-white/20 shadow-xl mb-2`}
          >
            <img
              src={pokemonInfo.image}
              alt={pokemonInfo.name}
              className="w-32 h-32 object-contain drop-shadow-2xl"
            />
          </div>

          {/* Name */}
          <h2
            className="text-3xl font-bold text-center capitalize tracking-wide 
              bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70"
          >
            {pokemonInfo.name}
          </h2>

          {/* Physical Attributes */}
          {/* <div className="flex gap-4 text-lg text-white/80">
              <div className="flex items-center gap-1">
                <GiBodyHeight className="text-white/70" size={22} />
                <span>{pokemonInfo.height}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaWeightHanging className="text-white/70" size={22} />
                <span>{pokemonInfo.weight}</span>
              </div>
            </div> */}

          {/* Types */}
          <div className="flex gap-3 mb-2">
            {pokemonInfo.types.map((type, index) => (
              <motion.span
                key={index}
                whileHover={{ y: -3, scale: 1.05 }}
                className="px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider 
                    text-white shadow-xl transition-all duration-300"
                style={{
                  background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                }}
              >
                {type}
              </motion.span>
            ))}
          </div>

          {/* Stats */}
          <div className="w-full space-y-2">
            {filteredStats.map((stat) => (
              <div key={stat.name} className="space-y-2">
                <div className="flex justify-between text-sm font-medium text-white/90">
                  <span className="capitalize">{stat.name}</span>
                  <span>{stat.value}</span>
                </div>
                <div className="h-3 bg-white/20 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${(stat.value ) }%` }}
                    transition={{
                      duration: 0.8,
                      type: "tween",
                      ease: "easeOut",
                    }}
                    className="h-full bg-white rounded-full shadow-md"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Weaknesses */}
          <div className="w-full mt-2">
            <h3 className="text-lg font-semibold text-white/90 lg:mb-3 mb-1">
              Weaknesses
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {pokemonInfo.weaknesses.map((weakness, index) => {
                const weakType = weakness.toLowerCase();
                return (
                  <motion.img
                    key={index}
                    src={TypeConst[weakType]}
                    alt={weakness}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="h-10 w-10 object-contain 
                        bg-white/20 rounded-full p-2 
                        hover:bg-white/30 transition-all duration-300"
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
