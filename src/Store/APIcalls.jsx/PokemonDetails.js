import { createAsyncThunk } from "@reduxjs/toolkit";

// The async thunk to fetch details for each Pokémon
export const pokemonDetails = createAsyncThunk(
  "pokemon/pokemonDetails",
  async (pokemons) => {
    try {
      const pokemonData = [];

      // Iterate over each pokemon URL
      for (const pokemon of pokemons) {
        const response = await fetch(pokemon.url); // Fetch the Pokémon data
        const data = await response.json(); // Convert to JSON

        // Fetch weaknesses from damage relations (assuming damage relations API is available)
        const typeResponses = await Promise.all(
          data.types.map(async (type) => {
            const typeResponse = await fetch(type.type.url);
            const typeData = await typeResponse.json();
            return typeData.damage_relations.double_damage_from.map((weak) => weak.name);
          })
        );
        const weaknesses = [...new Set(typeResponses.flat())]; // Remove duplicate weaknesses

        // Extract required fields and format them
        const pokemonInfo = {
          name: data.name,
          
          types: data.types.map((type) => type.type.name), // Extract the types
          height: `${data.height / 10} M`, // Convert height from decimeters to meters
          weight: `${data.weight / 10} KG`, // Convert weight from hectograms to kilograms
          image: data.sprites.other["official-artwork"].front_default, // Get official artwork image URL
          stats: data.stats.map((stat) => ({
            name: stat.stat.name,
            value: stat.base_stat,
          })), // Extract stats with name and value
          weaknesses: weaknesses // Assign actual weaknesses
        };

        // Push the formatted Pokémon data to the array
        pokemonData.push(pokemonInfo);
      }

      return pokemonData; // Return the formatted data
    } catch (error) {
      console.error("Error fetching Pokémon details:", error);
    }
  }
);
