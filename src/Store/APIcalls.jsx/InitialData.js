// When pokemondata is dispatched in a Redux slice or component, Redux Toolkit will:

// Dispatch a pending action (e.g., "pokemon/initialData/pending").

// Perform the async API call.

// On success, dispatch a fulfilled action with the data.results payload ("pokemon/initialData/fulfilled").

// On failure, dispatch a rejected action ("pokemon/initialData/rejected") with an error message.



import { pokemonsRoute } from '../../Utils/Constants'
import { createAsyncThunk } from '@reduxjs/toolkit'


export const initialPokemonData = createAsyncThunk("pokemon/initialData", async () => {
  try {
    console.log("Fetching Pokemon data...");
    const response = await fetch(pokemonsRoute);
    if (!response.ok) throw new Error("Failed to fetch data");
    const data = await response.json();
    return data.results;
  } catch (err) {
    throw err; // Properly pass error to Redux rejected state
  }
});
    
