import React from "react";
import * as ReactQuery from '@tanstack/react-query';
import {getAllPokemonsPaginatedApi} from "@/services/pokemons";

export function getPokemonPaginatedQueryKey(currentPage?: number) {
    return ['pokemons/pokemonsPaginated', currentPage];
}

export const useGetAllPokemonsPaginated = () => {

    const [currentPage, setCurrentPage] = React.useState(1);

    const { 
        data, 
        isLoading,
        isSuccess,
        isError,
        error,
    } = ReactQuery.useQuery({
        queryKey: getPokemonPaginatedQueryKey(currentPage),
        queryFn: () => getAllPokemonsPaginatedApi(currentPage),
    });


    const totalPages = data ? Math.ceil(data.count / 10) : 1;



    return {
        results: data?.results,
        currentPage,
        setCurrentPage,
        totalPages,
        previousPage: data?.previous,
        nextPage: data?.next,
        isLoading,
        isError,
        isSuccess,
        error
    };
}