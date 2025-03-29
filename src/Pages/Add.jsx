import React, { useState,useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import Cards from "../Components/LandingPartials/Cards";
import { addUser } from "../Store/Slicer.jsx/PokemonSlice";
import { FaPlus, FaTimes } from "react-icons/fa";
import transition from "../Components/Transition";
const Add = () => {
  const [value, setValue] = useState("");
  const [showToast, setToast] = useState(false);

  const randomPokemon = useSelector((store) => store.pokemon.randomPokemon);
  const userQue = useSelector((store) => store.pokemon.userQue);
  const dispatch = useDispatch();
  const handleClick = () => {
    const name = value.toLowerCase().trim();
    const filter = randomPokemon.filter((object, i) => object.name === name);
    if (filter.length === 0) {
      setToast(true);
      setValue("");
      return;
    }
    setValue("");
    dispatch(addUser(filter));
  };

  useEffect(() => {
      if (showToast) {
        const timerId = setTimeout(() => {
          setToast(false);
        }, 3000);
  
        return () => {
          clearTimeout(timerId);
        };
      }
    }, [showToast]);
  return (
    <div className="relative py-4 h-screen overflow-y-auto overflow-x-hidden w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-4 md:px-20">
      <h1 className="text-2xl sm:text-3xl text-white/80 mt-3 text-center italic">
        Build Your Dream Team – One Pokémon at a Time!
      </h1>
      <motion.div
        className="absolute top-30 sm:top-30 left-1/2 -translate-x-1/2 flex gap-1 sm:gap-2 w-90 sm:w-full max-w-xl"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <input
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleClick();
            }
          }}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter Pokémon name..."
          className="w-full h-13 px-3 py-4 text-xl bg-black/30 backdrop-blur-lg border-2 border-white/10 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-rose-500 transition-all"
        />
        <button
          onClick={handleClick}
          className="lg:px-8 px-4 bg-gradient-to-r from-rose-600 to-amber-500 rounded-2xl font-semibold text-white hover:scale-[98%] transform transition-all duration-200 shadow-lg hover:shadow-rose-600/30"
        >
          Add
        </button>
      </motion.div>
      <AnimatePresence>
        {showToast && (
          <motion.div
            className="absolute top-8 right-8 flex items-center gap-3 px-6 py-4 bg-rose-600/90 backdrop-blur-lg text-white rounded-xl shadow-xl z-50"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <FaTimes className="flex-shrink-0" />
            <span className="text-lg font-medium">
              Pokémon not found. Please try again!
            </span>
          </motion.div>
        )}
      </AnimatePresence>
      


      {/*MAIn cards */}
      <div className="mt-50">
        <Cards data={userQue} flag={false} />
      </div>
    </div>
  );
};

export default Add;
