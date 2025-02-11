import * as ReactQuery from '@tanstack/react-query';
import {getPokemonApi} from '@/services/pokemons';


export function getPokemonQueryKey(name?: string) {
  return ['pokemons/getPokemon', name];
}

type UseGetPokemonProps = {
  name: string;
}
export function useGetPokemon({name}: UseGetPokemonProps) {

  const { data, isLoading } = ReactQuery.useQuery({
    queryKey: getPokemonQueryKey(name),
    queryFn: () => getPokemonApi({name}),
    enabled: Boolean(name),
  });

  return {
    pokemon: {
      id: data?.id,
      name: data?.name,
      photo: data?.sprites?.front_default,
      types: data?.types,
      abilities: data?.abilities,
      stats: data?.stats,
      showPokemon: !!data?.name,
    },
    isLoading
  };
}
