import * as ReactQuery from '@tanstack/react-query';
import {getPokemonApi} from "@/services/pokedex";

export function getPokemonQueryKey(id?: string | number) {
    return ['pokedex/getPokemon', id];
}

type UseGetPokemonProps = {
    id?: string | number
}
export const useGetPokemon = ({ id }: UseGetPokemonProps) => {

    const {
        data,
        isLoading,
        isError,
    } = ReactQuery.useQuery({
        queryKey: getPokemonQueryKey(id),
        queryFn: () => getPokemonApi({id}),
        enabled: Boolean(id)
    });

    return {
        pokemon: data,
        isLoading,
        isError
    };
}
