import { createAsyncThunk } from "@reduxjs/toolkit";
import { pokemonsRoute } from "../../Utils/Constants";

export const fetchPokemonData = createAsyncThunk(
  "pokemon/fetchData",
  async () => {
    try {
      console.log("Fetching Pokemon data...");
      
      // Fetch initial list of Pokémon
      const response = await fetch(pokemonsRoute);
      if (!response.ok) throw new Error("Failed to fetch data");
      const data = await response.json();
      const pokemons = data.results;
      
      // Fetch details for each Pokémon
      const pokemonData = await Promise.all(
        pokemons.map(async (pokemon) => {
          const response = await fetch(pokemon.url);
          const data = await response.json();

          // Fetch weaknesses from damage relations
          const typeResponses = await Promise.all(
            data.types.map(async (type) => {
              const typeResponse = await fetch(type.type.url);
              const typeData = await typeResponse.json();
              return typeData.damage_relations.double_damage_from.map((weak) => weak.name);
            })
          );
          const weaknesses = [...new Set(typeResponses.flat())];

          return {
            name: data.name,
            types: data.types.map((type) => type.type.name),
            height: `${data.height / 10} M`,
            weight: `${data.weight / 10} KG`,
            image: data.sprites.other["official-artwork"].front_default,
            stats: data.stats.map((stat) => ({ name: stat.stat.name, value: stat.base_stat })),
            weaknesses: weaknesses,
          };
        })
      );
      
      return pokemonData;
    } catch (error) {
      console.error("Error fetching Pokémon data:", error);
      throw error;
    }
  }
);
