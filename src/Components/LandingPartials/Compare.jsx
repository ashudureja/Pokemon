import React from "react";
import { Link } from "react-router-dom";

const Compare = () => {
  return (
    <div className="h-[100vh] w-full bg-blue-500 lg:flex items-center relative px-10">
      {/* Desktop Layout */}
      <div className="hidden lg:block">
        <img
          className="h-[95vh]"
          src="https://i.pinimg.com/originals/28/ec/d6/28ecd67d058708db6a65de3e88f2c9f6.png"
          alt="Charizard"
        />
        <div className="absolute top-12 left-100">
          <img
            className="h-100 relative"
            src="https://cdn.pixabay.com/photo/2012/04/15/21/59/cloud-35467_960_720.png"
            alt="Speech bubble"
          />
          <p className="text-black absolute top-18 italic left-10 sm:text-[22px] w-100 text-sm text-center font-bold ">
            Ever wondered how <span className="text-yellow-400">Charizard</span>{" "}
            stacks up against <span className="text-yellow-400">Dragonite</span>
            ? Or if <span className="text-yellow-400">Pikachu</span>
            is the best choice for your electric-type team? With our intuitive{" "}
            <span className="text-yellow-400">Pokémon comparison </span> tool ,
            you can analyze stats, abilities, and hidden strengths to craft the
            ultimate battle strategy!
          </p>
          <Link
            to="compare"
            className="bg-yellow-400 inline-block text-center mt-10 ml-20 cursor-pointer font-bold rounded-xl shadow-2xl w-50 px-2 py-4 transform transition-all duration-500 hover:scale-[95%]"
          >
            COMPARE NOW
          </Link>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden h-full w-full flex flex-col items-center justify-center space-y-10 py-8">
        <img
          className="h-auto max-h-[50vh]"
          src="https://i.pinimg.com/originals/28/ec/d6/28ecd67d058708db6a65de3e88f2c9f6.png"
          alt="Charizard"
        />
        <div className="text-center px-4">
          <p className="text-black sm:text-xl text-sm italic font-semibold">
            Ever wondered how <span className="text-yellow-400">Charizard</span>{" "}
            stacks up against <span className="text-yellow-400">Dragonite</span>
            ? Or if <span className="text-yellow-400">Pikachu</span> is the best
            choice for your electric-type team? With our intuitive{" "}
            <span className="text-yellow-400">Pokémon comparison</span> tool,
            you can analyze stats, abilities, and hidden strengths to craft the
            ultimate battle strategy!
          </p>
        </div>
        <Link
          to="compare"
          className="bg-yellow-400 cursor-pointer font-bold rounded-xl shadow-2xl px-5 py-3 transform transition-all duration-500 hover:scale-95"
        >
          COMPARE NOW
        </Link>
      </div>

      {/* GIF (Desktop only) */}
      <img
        className="absolute bottom-0 right-0 h-40 hidden lg:block"
        src="https://media4.giphy.com/media/XwENvq9FeAr7zd3QD8/200w.gif?cid=6c09b952smjff27u6zwacro4mb7wz7kv3lpdgvu9crgv2oic&ep=v1_stickers_search&rid=200w.gif&ct=s"
        alt="Animated Pokemon"
      />
    </div>
  );
};

export default Compare;
