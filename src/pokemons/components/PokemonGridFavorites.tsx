'use client'

import { useAppSelector } from "@/store";
import { SimplePokemon } from "../interfaces/simple-pokemon";
import PokemonCard from "./PokemonCard";

interface Props {
  pokemons: SimplePokemon[];
}

const PokemonGridFavorites = ({pokemons}: Props) => {

  const pokemon = useAppSelector(state => state.pokemons)
  console.log([pokemon])

  return (
    <div className="flex flex-wrap gap-10 items-center justify-center">
        {
          pokemons.map(poke => (
            <PokemonCard key={poke.id} pokemon={poke}/>
          ))

        }
      </div>
  )
}

export default PokemonGridFavorites