import { configureStore } from "@reduxjs/toolkit";
import { pokemonSlice } from "./Slicer.jsx/PokemonSlice";

export const store = configureStore({
    reducer: {
        pokemon: pokemonSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false, // Disables serializability checks
        }),
});
