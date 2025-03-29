import { createSlice } from "@reduxjs/toolkit";
import { initialPokemonData } from "../APIcalls.jsx/InitialData";
// import { pokemonDetails } from "../APIcalls.jsx/PokemonDetails";
import { fetchPokemonData } from "../APIcalls.jsx/PokemonDetails";

const initialState = {
 
  currentPokemon: undefined,
  filteredPokemon: undefined,
  randomPokemon: undefined,
  compareQue: [],
  userQue: [],
  loading: false,
};

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    addfilter: (state, action) => {
      console.log(action.payload)
      state.filteredPokemon = action.payload;
    },
    addcurrent: (state, action) => {
      state.currentPokemon = action.payload;
    },

    addCompare: (state, action) => {
      //if index already present in que then return and if que length>=2 then remove one and add one
      //how to search for index in que?
      //index of , is used in array made of object ,  exampl;
      // const pokemons = [
      //     { name: "Pikachu", id: 25 },
      //     { name: "Bulbasaur", id: 1 },
      //
      //   ];

      //   const index = pokemons.findIndex(pokemon => pokemon.id === 25);
      //   console.log(index); // Output: 0

      const index = state.compareQue.indexOf(
        (pokemon) => pokemon.id === action.payload[0].id
      );
      // if (index>0){return} no need to write this bcoz code will only run if index===-1
      if (index === -1) {
        if (state.compareQue.length >= 2) {
          state.compareQue.pop();
          state.compareQue.unshift(action.payload[0]);
        }
        state.compareQue.push(action.payload[0]);
      }
    },

    removeCompare: (state, action) => {
      console.log(action.payload.index);
      const copy = [...state.compareQue];
      copy.splice(action.payload.index, 1); //splice(i,1) remove 1 item from index=i
      state.compareQue = copy;
    },

    addUser: (state, action) => {
      state.userQue.unshift(action.payload[0] || action.payload);
    },
    removeUser: (state, action) => {
      const index = state.userQue.indexOf(
        (pokemon) => pokemon.id === action.payload[0].id
      );
      const copy = [...state.userQue];
      copy.splice(index, 1);
      state.userQue = copy;
    },

    setLoader: (state, action) => {
      state.loading = action.payload;
    },

    resetState: (state) => {
      state.filteredPokemon = undefined;
      state.compareQue = [];
      
    },
  },

  extraReducers: (builder) => {
    builder.addCase( fetchPokemonData.fulfilled, (state, action) => {
      state.randomPokemon = action.payload;
    });
  },
});

export const {
  addfilter,
  addcurrent,
  addCompare,
  removeCompare,
  addUser,
  removeUser,
  setLoader,
  resetState,
} = pokemonSlice.actions;
