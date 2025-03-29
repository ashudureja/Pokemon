import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addcurrent, addUser } from "../../Store/Slicer.jsx/PokemonSlice";

const arr = [
  { val: "SEARCH", to: "search" },
  { val: "COMPARE", to: "compare" },
  { val: "FAVOURITES", to: "favourites" },
];

const MotionLink = motion.create(Link);

const Navbar1 = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  const randomPokemon = useSelector((store) => store.pokemon.randomPokemon);
  const dispatch = useDispatch();

  const handleClick = () => {
  
    const copy=[...randomPokemon]

    
    const filter = copy.sort(() => Math.random() - 0.5).slice(0, 1);
    console.log(filter)
    
   
    if (filter.length > 0) {
      dispatch(addcurrent(filter[0]))
      dispatch(addUser(filter[0]))
      setCaughtPokemon(filter[0].name); // Assuming Pokémon has a 'name' property
      
    }
  };

  return (
    <nav className="flex justify-center lg:justify-between -mt-5 mb-5  w-full items-center lg:px-5 relative">
      <div className="relative">
        <motion.img
          className="sm:h-10 h-8 cursor-pointer"
          src="https://pokedexplore.vercel.app/pokeball.png"
          animate={{ x: [-2, 2, -2, 2, -1, 1, 0] }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={handleClick} // Fixed typo
        />

        {/* Hover Notification */}
        {isHovered && (
          <motion.div
            className="absolute ml-7 top-full lg:mt-2 mt-1 left-1/2 -translate-x-1/2 bg-white text-gray-900 px-4 py-2 rounded-lg shadow-md text-sm font-medium whitespace-nowrap"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <span
              className="cursor-pointer hover:text-blue-600 transition-colors"
              
            >
              Catch a random Pokémon!
            </span>
          </motion.div>
        )}

        
        
      </div>

      <div className="flex items-center">
        <div className="  text-white">
          {arr.map((object, i) => (
            <MotionLink
              key={i}
              to={object.to}
              className="nav-hover-btn"
              initial={{ opacity: 0, y: 200 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.1}}
              transition={{
                duration: 0.8,
                delay: 0.1 + 0.1 / (i + 1),
                ease: [0.76, 0, 0.24, 1],
              }}
            >
              {object.val}
            </MotionLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar1;
