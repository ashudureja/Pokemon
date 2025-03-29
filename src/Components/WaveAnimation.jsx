import React from 'react';
import { motion } from 'framer-motion';


const WaveAnimation = () => {
  return (
    <div className="wave-container">
      <motion.img
        className="wave-image"
        src="https://pokedexplore.vercel.app/svgs/wave.svg"
        alt="Wave 1"
        initial={{ x: '100%' }}
        animate={{ x: '-100%' }}
        transition={{ repeat: Infinity, duration: 5, ease: 'linear' }}
      />
      <motion.img
        className="wave-image"
        src="https://pokedexplore.vercel.app/svgs/wave.svg"
        alt="Wave 2"
        initial={{ x: '100%' }}
        animate={{ x: '-100%' }}
        transition={{ repeat: Infinity, duration: 6, ease: 'linear' }}
      />
      <motion.img
        className="wave-image"
        src="https://pokedexplore.vercel.app/svgs/wave.svg"
        alt="Wave 3"
        initial={{ x: '100%' }}
        animate={{ x: '-100%' }}
        transition={{ repeat: Infinity, duration: 7, ease: 'linear' }}
      />
    </div>
  );
};

export default WaveAnimation;
