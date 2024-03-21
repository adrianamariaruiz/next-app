import { GetFavoritesPokemons } from "@/pokemons/components/GetFavoritesPokemons";

export const metadata = {
 title: 'Favoritos',
 description: 'Favoritos',
};

export default async function PokemonsPage() {

  return (
    <div className="flex flex-col">
      <p className="text-5xl py-4">Pokemones favoritos <span className="text-3xl text-blue-600">estado global</span></p>
      <GetFavoritesPokemons/>
    </div>
  );
}