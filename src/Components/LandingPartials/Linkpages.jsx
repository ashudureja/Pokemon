import React from "react";
import { motion } from "framer-motion";

export const Linkpages = () => {
  return (
    <section className="grid place-content-center gap-2  px-8 py-24 text-white">
      <FlipLink href="#">About</FlipLink>
      <FlipLink href="#">Search</FlipLink>
      <FlipLink href="#">Compare</FlipLink>
      <FlipLink href="#">Favourites</FlipLink>
    </section>
  );
};

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({ children, href }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="relative block overflow-hidden whitespace-nowrap text-4xl font-black uppercase sm:text-4xl md:text-4xl lg:text-7xl"
      style={{
        lineHeight: 0.75,
      }}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};