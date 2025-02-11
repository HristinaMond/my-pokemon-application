import * as ReactQuery from '@tanstack/react-query';
import {addPokemonApi} from "@/services/pokedex";
import React from "react";
import {useQueryClient} from "@tanstack/react-query";
import * as PokedexServices from "@/services/pokedex";
import * as PokemonServices from "@/services/pokemons";

export function addPokemonQueryKey() {
    return ['pokedex/addPokemon'];
}

export const useAddPokemon = () => {

    const [data, setData] = React.useState<{ id?: string, name?: string }>();

    const queryClient = useQueryClient();

    const {
        mutate,
        isPending,
    } = ReactQuery.useMutation({
            mutationKey: addPokemonQueryKey(),
            mutationFn: (data: { id?: string, name?: string }) => {
                setData(data);
                return addPokemonApi({data});
            },
            onSuccess: async () => {
                await queryClient.refetchQueries({queryKey: PokedexServices.getAllPokemonsQueryKey()});
                await queryClient.refetchQueries({queryKey: PokedexServices.getPokemonQueryKey(data?.id)});
                await queryClient.refetchQueries({queryKey: PokemonServices.getPokemonQueryKey(data?.name)});
            }
        }
    );


    return {
        addPokemon: mutate,
        isPending
    };
}
