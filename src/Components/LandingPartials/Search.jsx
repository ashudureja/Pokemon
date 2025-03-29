import React, { useEffect, useState } from "react";
import Cards from "./Cards";

const Search = () => {
  const pokemonData = [
    {
      name: "Bulbasaur",
      types: ["Grass", "Poison"],
      height: "0.7 M",
      weight: "6.9 KG",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      stats: [
        { name: "HP", value: 45 },
        { name: "Attack", value: 49 },
        { name: "Defense", value: 49 },
        { name: "Speed", value: 45 },
      ],
      weaknesses: ["Fire", "Psychic", "Flying", "Ice"],
    },
    {
      name: "Ivysaur",
      types: ["Grass", "Poison"],
      height: "1 M",
      weight: "13 KG",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
      stats: [
        { name: "HP", value: 60 },
        { name: "Attack", value: 62 },
        { name: "Defense", value: 63 },
        { name: "Speed", value: 60 },
      ],
      weaknesses: ["Fire", "Psychic", "Flying", "Ice"],
    },
    {
      name: "Venusaur",
      types: ["Grass", "Poison"],
      height: "2 M",
      weight: "100 KG",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
      stats: [
        { name: "HP", value: 80 },
        { name: "Attack", value: 82 },
        { name: "Defense", value: 83 },
        { name: "Speed", value: 80 },
      ],
      weaknesses: ["Fire", "Psychic", "Flying", "Ice"],
    },
    {
      name: "Charmander",
      types: ["Fire"],
      height: "0.6 M",
      weight: "8.5 KG",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      stats: [
        { name: "HP", value: 39 },
        { name: "Attack", value: 52 },
        { name: "Defense", value: 43 },
        { name: "Speed", value: 65 },
      ],
      weaknesses: ["Water", "Ground", "Rock"],
    },
    {
      name: "Charmeleon",
      types: ["Fire"],
      height: "1.1 M",
      weight: "19 KG",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png",
      stats: [
        { name: "HP", value: 58 },
        { name: "Attack", value: 64 },
        { name: "Defense", value: 58 },
        { name: "Speed", value: 80 },
      ],
      weaknesses: ["Water", "Ground", "Rock"],
    },
    {
      name: "Charizard",
      types: ["Fire", "Flying"],
      height: "1.7 M",
      weight: "90.5 KG",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
      stats: [
        { name: "HP", value: 78 },
        { name: "Attack", value: 84 },
        { name: "Defense", value: 78 },
        { name: "Speed", value: 100 },
      ],
      weaknesses: ["Water", "Electric", "Rock"],
    },
    {
      name: "Squirtle",
      types: ["Water"],
      height: "0.5 M",
      weight: "9 KG",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      stats: [
        { name: "HP", value: 44 },
        { name: "Attack", value: 48 },
        { name: "Defense", value: 65 },
        { name: "Speed", value: 43 },
      ],
      weaknesses: ["Electric", "Grass"],
    },
    {
      name: "Wartortle",
      types: ["Water"],
      height: "1 M",
      weight: "22.5 KG",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png",
      stats: [
        { name: "HP", value: 59 },
        { name: "Attack", value: 63 },
        { name: "Defense", value: 80 },
        { name: "Speed", value: 58 },
      ],
      weaknesses: ["Electric", "Grass"],
    },
    {
      name: "Blastoise",
      types: ["Water"],
      height: "1.6 M",
      weight: "85.5 KG",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png",
      stats: [
        { name: "HP", value: 79 },
        { name: "Attack", value: 83 },
        { name: "Defense", value: 100 },
        { name: "Speed", value: 78 },
      ],
      weaknesses: ["Electric", "Grass"],
    },
  ];

  const [filteredData, setFilteredData] = useState(pokemonData);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        // Mobile screen condition
        setFilteredData(
          pokemonData.filter(
            (pokemon) =>
              !["Venusaur", "Charizard", "Blastoise"].includes(pokemon.name)
          )
        );
      } else {
        setFilteredData(pokemonData);
      }
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-black lg:h-[270vh] h-[360vh] w-full p-23 relative">
      <div className="flex md:flex-row flex-col gap-10 items-center">
        <img
          className="sm:h-50 h-40"
          src="https://pokedexplore.vercel.app/pokemons/treinador-pk.png"
          alt="Trainer"
        />
        <p className="text-white sm:text-lg text-sm text-center italic font-semibold">
          Looking for your favorite Pokémon? Search through our massive Pokédex
          and uncover stats, abilities, evolutions, and more! Whether you're
          planning your next battle or just exploring the Pokémon world, finding
          the right Pokémon has never been this easy. Type in a name and let the
          adventure begin!
        </p>
      </div>
      <div className="mt-30 sm:mt-50">
        <Cards data={filteredData} />
      </div>
      {/* <svg
        className="absolute hidden lg:block xl:hidden fix -bottom-0 left-0 w-full h-[80px] sm:h-[50px]"
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

export default Search;
