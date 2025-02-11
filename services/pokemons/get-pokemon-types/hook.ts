import * as ReactQuery from '@tanstack/react-query';
import {getPokemonTypesApi} from "@/services/pokemons/get-pokemon-types/api";


export function getPokemonTypesQueryKey() {
  return ['pokemons/getPokemonTypes'];
}

export function useGetPokemonTypes() {

  const { data, isLoading } = ReactQuery.useQuery({
    queryKey: getPokemonTypesQueryKey(),
    queryFn: () => getPokemonTypesApi(),
  });

  return {
    types: data?.results,
    hasTypes: data?.results && data.results.length > 0,
    isLoading
  };
}
