import React, { useEffect, useReducer, useState,useRef } from "react";
import { FaPlus, FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addCompare, addcurrent } from "../Store/Slicer.jsx/PokemonSlice";
import { motion, AnimatePresence } from "framer-motion";
import { CompareCard } from "../Components/CompareCard";
import transition from "../Components/Transition";

const Compare = () => {
  const [showinput, setInput] = useState(false);
  const [value, setValue] = useState("");
  const [showToast, setToast] = useState(false);

  const randomPokemon = useSelector((store) => store.pokemon.randomPokemon);
  const dispatch = useDispatch();
  const firstPokemon = useSelector((store) => store.pokemon.compareQue[0]); // Assuming firstPokemon is stored in state
  const secondPokemon = useSelector((store) => store.pokemon.compareQue[1]); // Assuming secondPokemon is stored in state

  const inputRef=useRef(null)
  const handleClick = (index) => {
    setInput(!true);
  };

  const handleClick2 = () => {
    const name = value.toLowerCase().trim();
    const filter = randomPokemon.filter((object, i) => object.name === name);
    if (filter.length === 0) {
      setToast(true);
      setValue("");
      return;
    }
    setValue("");
    dispatch(addCompare(filter));
  };

  const handleRemove = (index) => {
    // Handle the removal of Pokémon (You can dispatch actions or update state here)
    console.log(`Remove Pokémon at index: ${index}`);
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
    <div className="relative py-4 h-screen overflow-auto sm:overflow-hidden w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-between px-4 md:px-20">
      {/* Background texture */}
      <div className="absolute inset-0 bg-noise opacity-10 pointer-events-none" />

      {/* Animated Toast */}
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

      {/* Search Container */}
      <motion.div
        className="absolute top-8 left-1/2 -translate-x-1/2 flex gap-1 sm:gap-2 w-90 sm:w-full max-w-xl"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <input
        ref={inputRef}
          value={value}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleClick2();
            }
          }}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter Pokémon name..."
          className="w-full h-13 px-3 py-4 text-xl bg-black/30 backdrop-blur-lg border-2 border-white/10 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-rose-500 transition-all"
        />
        <button
          onClick={handleClick2}
          className="lg:px-8 px-4 bg-gradient-to-r from-rose-600 to-amber-500 rounded-2xl font-semibold text-white hover:scale-[98%] transform transition-all duration-200 shadow-lg hover:shadow-rose-600/30"
        >
          Compare
        </button>
      </motion.div>

      {/* Comparison Sections */}

      <div className="flex sm:flex-row flex-col mt-150 sm:mt-20 w-full items-center justify-between gap-7 sm:gap-12">
        {/* First Pokémon Card */}
        {!firstPokemon ? (
          <motion.div
            className="relative w-full h-[67vh] sm:h-[78vh] max-w-md rounded-2xl shadow-2xl overflow-hidden border-2 border-white/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {/* Gradient Overlay with Blurred Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl backdrop-blur-lg shadow-2xl" />

            {/* Plus Icon Button */}
            <div
              onClick={()=>{inputRef.current.focus()}}
              className="absolute top-5 right-5 p-4 bg-gradient-to-br from-rose-600 to-amber-500 rounded-full cursor-pointer transition-all transform hover:scale-110 shadow-xl hover:shadow-2xl"
            >
              <FaPlus className="text-4xl text-white" />
            </div>
          </motion.div>
        ) : (
          <CompareCard pokemonInfo={firstPokemon} index={0} />
        )}

       

        {/* Second Pokémon Card */}
        {!secondPokemon ? (
          <motion.div
            className="relative w-full h-[67vh] sm:h-[78vh] max-w-md rounded-2xl shadow-2xl overflow-hidden border-2 border-white/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {/* Gradient Overlay with Blurred Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl backdrop-blur-lg shadow-2xl" />

            {/* Plus Icon Button */}
            <div
              onClick={()=>{inputRef.current.focus()}}
              className="absolute top-5 right-5 p-4 bg-gradient-to-br from-rose-600 to-amber-500 rounded-full cursor-pointer transition-all transform hover:scale-110 shadow-xl hover:shadow-2xl"
            >
              <FaPlus className="text-4xl text-white" />
            </div>
          </motion.div>
        ) : (
          <CompareCard pokemonInfo={secondPokemon} index={1} />
        )}
        
      </div>
    </div>
  );
};

export default Compare;
