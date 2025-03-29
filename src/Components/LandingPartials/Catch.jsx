import React from "react";
import Contacts from "./Contacts";
import { Link } from "react-router-dom";

const Catch = () => {
  return (
    <div className="bg-black h-[100vh] md:h-[140vh] relative w-full p-4 md:p-10 gap-5 flex flex-col justify-center items-center overflow-hidden">
      <div className="relative w-full max-w-[400px] md:max-w-none md:ml-[15vw] ">
        <img
          className="h-auto w-full md:h-100 md:w-[80vw]"
          src="https://static.vecteezy.com/system/resources/previews/013/007/615/non_2x/set-of-console-game-device-handheld-portable-free-png.png"
          alt="console device"
        />
        <video
          className="h-[85%] w-[90%] md:h-98 md:w-150 absolute top-[8%] md:top-[1%] left-1/2 -translate-x-1/2 md:left-39 md:scale-[102%] md:translate-x-0 rounded-xl"
          src="./vd1.mp4"
          autoPlay
          playsInline
          muted
          loop
        ></video>
      </div>
      <p className="text-white text-xl md:text-2xl font-semibold italic mt-5 text-center px-4">
        A great battle starts with the perfect Pokémon lineup!
      </p>
      <Link to="favourites" className="bg-red-400 mt-10 md:ml-20  inline-block text-center cursor-pointer font-bold rounded-xl shadow-2xl w-45 md:w-50 px-2 py-4 transform transition-all duration-500 hover:scale-[95%]">
        Catch 'Em & Save
      </Link>
      <div className="bottom-5 absolute">
        <Contacts/>
      </div>
    </div>
  );
};

export default Catch;