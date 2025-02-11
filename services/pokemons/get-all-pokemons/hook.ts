import * as ReactQuery from '@tanstack/react-query';
import * as PokemonsServices from '@/services/pokemons';

export function getAllPokemonsQueryKey() {
    return ['pokemons/getAllPokemons'];
}

export const useGetAllPokemons = () => {

    const {
        data,
        isLoading,
    } = ReactQuery.useQuery({
        queryKey: getAllPokemonsQueryKey(),
        queryFn: () => PokemonsServices.getAllPokemonsApi(),
    });

    return {
        allPokemons: data?.results,
        next: data?.next,
        isLoading,
    };
}
