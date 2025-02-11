'use client';

import React from "react";
import {Pokemon} from "@/services/types";
import {usePagination} from "@/components/Pagination/hooks";
import * as PokemonsServices from "@/services/pokemons";

type PokemonsContextProps = {
    pokemons: any[];
    setFilteredPokemonsByName: React.Dispatch<React.SetStateAction<Pokemon[] | undefined>>;
    setFilteredPokemonsByType: React.Dispatch<React.SetStateAction<Pokemon[] | undefined>>;
    setFilteredPokemonsByNameAndType: React.Dispatch<React.SetStateAction<Pokemon[] | undefined>>;
    currentPage: number,
    totalPages: number,
    nextPage: React.Dispatch<React.SetStateAction<undefined>>,
    previousPage: React.Dispatch<React.SetStateAction<undefined>>,
    setCurrentPage: React.Dispatch<React.SetStateAction<any>>,
};

const PokemonsContext = React.createContext<PokemonsContextProps>({
    pokemons: [],
    setFilteredPokemonsByName: () => [],
    setFilteredPokemonsByType: () => [],
    setFilteredPokemonsByNameAndType: () => [],
    currentPage: 1,
    totalPages: 0,
    nextPage: () => null,
    previousPage: () => null,
    setCurrentPage: () => null,
})

type PokemonsProviderProps = {
    children: React.ReactNode
}

export const PokemonsProvider = ({children}: PokemonsProviderProps) => {

    const allPokemons = PokemonsServices.useGetAllPokemonsPaginated();

    const { currentItems, currentPage, totalPages, handlePrevPage, handleNextPage, updateItems, setCurrentPage} = usePagination({
        items: allPokemons?.results,
        itemsPerPage: 10
    });
    
    const setFilteredPokemonsByName = React.useCallback((e: any) => {
        updateItems(e);
    }, [updateItems]);

    const setFilteredPokemonsByType = React.useCallback((e: any) => {
        updateItems(e);
    }, [updateItems]);

    const setFilteredPokemonsByNameAndType = React.useCallback((e: any) => {
        updateItems(e);
    }, [updateItems]);



    return (
        <PokemonsContext.Provider
            value={{
                pokemons: currentItems,
                setFilteredPokemonsByName,
                setFilteredPokemonsByType,
                setFilteredPokemonsByNameAndType,
                currentPage,
                totalPages,
                nextPage: handleNextPage,
                previousPage: handlePrevPage,
                setCurrentPage
            }}
        >
            {children}
        </PokemonsContext.Provider>
    )
}

export const usePokemons = () => {
    const context = React.useContext(PokemonsContext);
    if (!context) {
        throw new Error("usePokemons must be used within a PokemonsProvider");
    }
    return context;
};
