import React, { useState } from "react";
import { easeInOut, motion } from "framer-motion";


import { Link, Outlet } from "react-router-dom"; // Added Outlet
import Navbar1 from "./Navbar1";



const About = () => {
  return (
    <div className="h-[105vh] relative sm:h-[210vh] w-full bg-[#FF8000] p-10 flex flex-col items-center">
      <Navbar1 />
      <div className="flex flex-col sm:flex-row items-center">
        <img
          loading="lazy"
          draggable="false"
          className="w-[210px] sm:w-[400px]"
          src="https://pokedexplore.vercel.app/pokedexplore.svg"
          alt="PokédExplore"
        />
      </div>

      {/* Text Content - Responsive */}
      <p className="text-lg sm:text-xl italic w-[90%] sm:w-[70%] mt-5 sm:mt-14 text-center text-white">
        Welcome to the ultimate Pokédex! Whether you're a seasoned trainer or
        just starting your journey, our web app lets you explore every Pokémon,
        compare their abilities, and create your perfect lineup. Stay ahead in
        battles, build strategic teams, and become the Pokémon Master you were
        born to be!
      </p>

      {/* Button - Responsive */}
      <Link to="search" className="h-13 sm:h-13 py-3 inline-block  w-[80%] sm:w-[70%] bg-black text-white rounded-lg cursor-pointer text-center transform transition-all duration-500 hover:scale-[95%] mt-10 sm:mt-10 shadow-2xl font-bold uppercase  sm:text-lg">
        More Details
      </Link>

      {/* Pokémon Image - Responsive */}
      <motion.img
        className="mt-8 sm:mt-10 w-[150%] sm:w-[1000px]"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: easeInOut }}
        loading="lazy"
        draggable="false"
        src="https://pokedexplore.vercel.app/pokemons/charizard.png"
        alt="PokédExplore"
      />

      {/* SVG Wave - Positioned at the Bottom */}
      {/* <svg
        className="absolute hidden fix -bottom-10 left-0 w-full h-[80px] sm:h-[50px]"
        viewBox="0 0 1440 120"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          fill="#FF8000"
          d="M0 120L48 102C96 84 192 48 288 42C384 36 480 60 576 66C672 72 768 60 864 48C960 36 1056 24 1152 30C1248 36 1344 60 1392 72L1440 84V0H0V120Z"
        />
      </svg> */}
    </div>
  );
};

export default About;
