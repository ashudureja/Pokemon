import React from "react";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
import BubbleText from "./BubbleText";
import { Link } from "react-router-dom";

const Menupage = ({ show, setShow }) => {
  const links = ["About", "Search", "Compare", "Favourites"];
  return (
    <motion.div
      className="absolute z-[999] top-0 bg-blue-900 h-[100vh] w-full"
      initial={{
        clipPath: "polygon(0 0, 100% 0, 100% 2%, 0 36%)",
      }}
      animate={{
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        transition: { duration: 0.6, ease: "circIn" }, // Exit transition
      }}
      exit={{
        clipPath: "polygon(0 0, 100% 0, 100% 2%, 0 36%)",
        transition: { duration: 0.4, ease: "circOut" }, // Entry transition
      }}
    >
      <div
        onClick={() => setShow(false)}
        className="text-white absolute gap-2 cursor-pointer flex items-center justify-center right-7 top-5"
      >
        <h1>Close</h1>
        <IoMdClose className="hover:rotate-[90deg] transition-all duration-200" />
      </div>
      <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c4594239-a003-4e8b-9e20-fc0e764b9a16/df6lu8z-352ffcc1-3d62-49cd-8ed8-4f4959724f0c.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2M0NTk0MjM5LWEwMDMtNGU4Yi05ZTIwLWZjMGU3NjRiOWExNlwvZGY2bHU4ei0zNTJmZmNjMS0zZDYyLTQ5Y2QtOGVkOC00ZjQ5NTk3MjRmMGMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.xa-hg5HZAZzOjSlYpYGcWq_f5qOffW7GSho7DGEIau4"></img>
      <div className="flex flex-col gap-2 mt-10">
        {links.map((val, i) => (
          <Link
            key={i}
            to={val}
            className="text-center cursor-pointer text-3xl md:text-6xl font-thin text-yellow-300 relative group"
          >
            {val}
          </Link>
        ))}
      </div>
    </motion.div>
  );
};

export default Menupage;
