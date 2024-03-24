'use client'

import { useState } from "react"
import { useAppSelector } from "@/store"
import PokemonGrid from "./PokemonGrid"
import { IoHeartDislikeOutline } from "react-icons/io5"

export const GetFavoritesPokemons = () => {
  const pokemon = useAppSelector(state => state.pokemons)
  const pokemons = Object.values(pokemon)

  const [favorites, setFavorites] = useState(pokemons)

  return (
    <>
    {
      favorites.length === 0 ? <NoFavoritesFound/> : <PokemonGrid pokemons={favorites}/>
    }
    </>
  )
}

export const NoFavoritesFound = () => {
  return (
    <div className="flex flex-col h-[50vh] justify-center items-center">
      <IoHeartDislikeOutline size={100} className="text-red-600"/>
      <p>No se encontraron Favoritos</p>
    </div>
  )
}