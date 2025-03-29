import { motion } from "framer-motion";
import { FaWeightHanging } from "react-icons/fa";
import { GiBodyHeight } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { addcurrent } from "../Store/Slicer.jsx/PokemonSlice";
import { TypeConst } from "../Utils/TypeConst";

export const Showdetails = () => {
  const pokemon = useSelector((store) => store.pokemon.currentPokemon);
  const dispatch = useDispatch();
  const handleclose = () => {
    dispatch(addcurrent(undefined));
  };

  const typeColorMap = {
    fire: { primary: "from-orange-600", secondary: "to-red-500" },
    water: { primary: "from-blue-600", secondary: "to-cyan-400" },
    grass: { primary: "from-green-600", secondary: "to-lime-400" },
    electric: { primary: "from-yellow-500", secondary: "to-amber-400" },
    psychic: { primary: "from-purple-600", secondary: "to-pink-400" },
    ice: { primary: "from-cyan-500", secondary: "to-blue-300" },
    dragon: { primary: "from-indigo-600", secondary: "to-purple-500" },
    dark: { primary: "from-gray-800", secondary: "to-gray-900" },
    fairy: { primary: "from-pink-500", secondary: "to-rose-300" },
    normal: { primary: "from-gray-400", secondary: "to-gray-600" },
    fighting: { primary: "from-red-700", secondary: "to-orange-600" },
    flying: { primary: "from-sky-500", secondary: "to-blue-300" },
    poison: { primary: "from-purple-500", secondary: "to-fuchsia-400" },
    ground: { primary: "from-yellow-700", secondary: "to-amber-600" },
    rock: { primary: "from-yellow-800", secondary: "to-stone-500" },
    bug: { primary: "from-lime-600", secondary: "to-green-400" },
    ghost: { primary: "from-purple-700", secondary: "to-indigo-500" },
    steel: { primary: "from-slate-400", secondary: "to-gray-500" },
  };

  // Get first type for color scheme
  const primaryType = pokemon.types[0]?.toLowerCase() || "normal";
  const colors = typeColorMap[primaryType] || typeColorMap.normal;

  return (
    <motion.div
      className="fixed px-5 inset-0 flex justify-center items-center bg-black/50 backdrop-blur-lg z-[999]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className={`relative bg-gradient-to-br ${colors.primary} ${colors.secondary} lg:p-8 p-2 rounded-3xl shadow-2xl text-white w-full h-[96%] md:h-[89%] max-w-md border border-white/10 overflow-hidden`}
        initial={{ scale: 0.8, rotate: -8 }}
        animate={{ scale: 1, rotate: 0 }}
        
      >
        {/* Dynamic Overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-r ${colors.primary.replace(
            "from",
            "from"
          )}/20 ${colors.secondary.replace("to", "to")}/20 pointer-events-none`}
        />

        {/* Close Button */}
        <motion.button
          whileHover={{ scale: 1.2 }}
          className={`absolute top-5 right-5 cursor-pointer text-white/70 hover:text-white`}
          onClick={handleclose}
        >
          <IoClose size={28} className="drop-shadow-md" />
        </motion.button>

        {/* Main Content */}
        <div className="flex flex-col items-center space-y-4">
          {/* Pokémon Image */}
          <div
            className={`relative bg-gradient-to-b ${colors.primary.replace(
              "from",
              "from"
            )}/30 ${colors.secondary.replace(
              "to",
              "to"
            )}/30 p-4 rounded-full shadow-2xl`}
          >
            <div className="absolute inset-0 border-2 border-white/10 rounded-full" />
            <img
              src={pokemon.image}
              alt={pokemon.name}
              className="w-32 h-32 object-contain drop-shadow-2xl"
            />
          </div>

          {/* Name */}
          <h2 className="text-3xl !text-black font-bold bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent tracking-wide">
            {pokemon.name}
          </h2>

          {/* Physical Attributes */}
          <div className="flex gap-6 text-lg ">
            <div className="flex items-center gap-2">
              <GiBodyHeight className="text-black" size={22} />
              <span>{pokemon.height}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaWeightHanging className="text-black" size={22} />
              <span>{pokemon.weight}</span>
            </div>
          </div>

          {/* Types */}
          <div className="flex gap-3">
            {pokemon.types.map((type, index) => (
              <motion.span
                key={index}
                whileHover={{ y: -2 }}
                className="textbg-gradient-to-br from-emerald-600 to-teal-600 px-3 py-1.5 rounded-full text-sm font-medium uppercase tracking-wide shadow-xl"
              >
                {type}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-6 space-y-4">
          {pokemon.stats
            .filter(
              (stat) =>
                stat.name !== "special-attack" &&
                stat.name !== "special-defense"
            ) // Filter out stats
            .map((stat, index) => (
              <div key={index} className="space-y-1.5">
                <div className="flex justify-between text-sm font-medium">
                  <span className={`capitalize text-${colors.primary.split("-")[1]}-900`}>{stat.name}</span>
                  <span className={`text-${colors.primary.split("-")[1]}-500`}>
                    {stat.value}
                  </span>
                </div>
                <div className="h-2.5 bg-gray-500 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${stat.value}%` }}
                    transition={{ duration: 0.8 }}
                    className={`h-full bg-black rounded-full shadow-md`}
                  />
                </div>
              </div>
            ))}
        </div>

        {/* Weaknesses */}
        <div className="mt-6">
          <h3
            className={`text-lg font-semibold text-${
              colors.secondary.split("-")[1]
            }-800 mb-3`}
          >
            Weaknesses
          </h3>
          <div className="flex flex-wrap gap-2">
            {pokemon.weaknesses.map((weakness, index) => {
              const weakType = weakness.toLowerCase();
              
              return (
                <motion.img
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  src={TypeConst[weakType]}
                  className="h-10 "
                >
                </motion.img>
              );
            })}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
