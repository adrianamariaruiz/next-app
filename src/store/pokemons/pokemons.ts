import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SimplePokemon } from '@/pokemons/interfaces/simple-pokemon';

interface FavoritesPokemons {
  [key: string]: SimplePokemon
}

const getInitialState = () => {
  // if(typeof localStorage === 'undefined') return {};
  const favorites = JSON.parse(localStorage.getItem('favorite-pokemons') ?? '{}' )
  return favorites
}

const initialState :FavoritesPokemons = {
  ...getInitialState()
  // '1': {id: '1', name: 'bulbasaur'},
  // '3': {id: '3', name: 'venusaur'}
}

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {

    toggleFavorite(state, action: PayloadAction<SimplePokemon>){
      const pokemon = action.payload
      const {id} = pokemon

      if(state[id] !== undefined){
        delete state[id]
        // return
      }else{
        state[id] = pokemon;
      }

      // no se debe hacer en redux
      localStorage.setItem('favorite-pokemons', JSON.stringify(state))
    }
  }
});

export const {toggleFavorite} = pokemonsSlice.actions

export default pokemonsSlice.reducer