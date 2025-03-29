import React, { useEffect, useState } from "react";
import Landing from "./Components/Landing";

import { Routes, Route, useLocation } from "react-router-dom";
import Search from "./Pages/Search";
import Compare from "./Pages/Compare";
import Add from "./Pages/Add";
import { initialPokemonData } from "./Store/APIcalls.jsx/InitialData";
import { pokemonDetails } from "./Store/APIcalls.jsx/PokemonDetails";
import { Showdetails } from "./Components/Showdetails";

import { useSelector, useDispatch } from "react-redux";

import { AnimatePresence } from "framer-motion";
import { resetState } from "./Store/Slicer.jsx/PokemonSlice";
import { ToastContainer } from "react-toastify";
import LoadingScreen from "./Components/LoadingScreen";
import { motion } from "framer-motion";

const App = () => {
  const currentPokemon = useSelector((store) => store.pokemon.currentPokemon);
  const randomPokemon = useSelector((state) => state.pokemon.randomPokemon);
  const filteredPokemon = useSelector((state) => state.pokemon.filteredPokemon);
  const allPokemon = useSelector((state) => state.pokemon.allPokemon);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setloading(false);
    }, 1500);
    return () => clearTimeout(timer);
  });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initialPokemonData());
  }, [dispatch]);

  useEffect(() => {
    if (allPokemon) {
      const copy = [...allPokemon];
      const copy1 = copy.slice(0, 500);
      const randomPokemons = copy1.sort(() => Math.random() - Math.random());

      dispatch(pokemonDetails(randomPokemons));
    }
  }, [dispatch, allPokemon]);

  useEffect(() => {
    // Disable scrolling when Showdetails is active
    if (currentPokemon) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Clean up the effect when the component unmounts or `currentPokemon` changes
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [currentPokemon]);

  const location = useLocation();
  useEffect(() => {
    dispatch(resetState());
  }, [location, dispatch]);

  // Add this at your root component or where you need page transitions

  return (
    <div className="h-screen w-full relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-x-hidden">
      {loading ? (
        <LoadingScreen />
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 20,
            mass: 0.5,
          }}
          className="h-full w-full"
        >
          {currentPokemon && <Showdetails />}

          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route
                index
                element={
                  <motion.div
                    initial={{ opacity: 0, filter: "blur(12px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, filter: "blur(12px)" }}
                    transition={{
                      animate: { duration: 0.6, ease: "easeInOut" }, // duration for animate state
                      exit: { duration: 0.3, ease: "easeInOut" }, // duration for exit state
                    }}
                  >
                    <Landing />
                  </motion.div>
                }
              />

              <Route
                path="/search"
                element={
                  <motion.div
                    initial={{ opacity: 0, y: -20, filter: "blur(12px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -100 }}
                    transition={{ duration: 0.3, ease: "circOut" }}
                  >
                    <Search />
                  </motion.div>
                }
              />

              <Route
                path="/compare"
                element={
                  <motion.div
                    initial={{ opacity: 0, y: -200, filter: "blur(12px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -100 }}
                    transition={{ duration: 0.5, ease: "circOut" }}
                  >
                    <Compare />
                  </motion.div>
                }
              />

              <Route
                path="/favourites"
                element={
                  <motion.div
                    initial={{ opacity: 0, y: -200 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -100 }}
                    transition={{ duration: 0.4, ease: "circOut" }}
                  >
                    <Add />
                  </motion.div>
                }
              />
            </Routes>
          </AnimatePresence>

          <ToastContainer />
        </motion.div>
      )}
    </div>
  );
};
export default App;
