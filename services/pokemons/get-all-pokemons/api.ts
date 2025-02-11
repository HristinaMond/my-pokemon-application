import { getRequest } from '@/utils/requests';
import {Pokemons} from "@/services/types";
import {BASE_URL} from "@/services/pokemons/requests";

export function getAllPokemonsApi(): Promise<Pokemons> {
  return getRequest(BASE_URL,`/pokemon?limit=100000&offset=0`);
}
