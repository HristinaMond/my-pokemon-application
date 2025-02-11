'use client';
import * as PokemonsServices from '@/services/pokemons';
import React from 'react';
import * as Store from "@/store";
import { Loading } from "@/components/Loading";
import { TablePaginated } from "@/components/TablePaginated";
import { useRouter } from "next/navigation";
import * as Routing from '@/global/routing';

export const PokemonsList = () => {

    const router = useRouter();

    const allPokemons = PokemonsServices.useGetAllPokemonsPaginated();
    const { search, filter } = Store.useSearchWithFilter();
    const pokemonSearchResults = Store.usePokemons();

    if (allPokemons?.isLoading) return <Loading />;

    if(allPokemons?.isError) {
        return <div>Failed to fetch the pokemons, try again later</div>;
    }


    const hasPokemons = allPokemons?.results?.length > 0;
    if (!hasPokemons && !allPokemons?.isError) return <p>No pokemons found</p>;

    const hasFilteredResults = (search || filter && filter?.length > 0) && pokemonSearchResults?.pokemons?.length > 0;
    const filteredPokemons = pokemonSearchResults?.pokemons || [];

    const dataToDisplay = hasFilteredResults ? filteredPokemons : allPokemons?.results;

    if (hasFilteredResults && filteredPokemons.length === 0) {
        return <div>No pokemons match the current filter</div>;
    }

    return (
        <TablePaginated
            data={dataToDisplay}
            currentPage={hasFilteredResults ? pokemonSearchResults?.currentPage : allPokemons?.currentPage}
            totalPages={hasFilteredResults ? pokemonSearchResults?.totalPages : allPokemons?.totalPages}
            setCurrentPage={hasFilteredResults ? pokemonSearchResults?.setCurrentPage : allPokemons?.setCurrentPage}
            onClick={(name: string) => router.push(Routing.POKEMONS.getPath({name}))}
        />
    );
};
