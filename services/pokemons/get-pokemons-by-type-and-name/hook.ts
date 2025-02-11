import * as ReactQuery from '@tanstack/react-query';
import {getPokemonsByTypesAndNameApi} from "./api";


export function getPokemonsByTypesAndNameQueryKey(type?: string[], name?: string) {
  return ['pokemons/getPokemonsByTypesAndName', type, name];
}

type UseGetPokemonsByTypeAndNameProps = {
  type?: string[];
  name?: string;
}
export function useGetPokemonsByTypesAndName({type, name}: UseGetPokemonsByTypeAndNameProps) {

  const { data, isLoading } = ReactQuery.useQuery({
    queryKey: getPokemonsByTypesAndNameQueryKey(type, name),
    queryFn: () => getPokemonsByTypesAndNameApi({type, name}),
    enabled: Boolean(type) || Boolean(name),
  });

  return {
    filteredPokemonsByTypeAndName: data,
    isLoading
  };
}
