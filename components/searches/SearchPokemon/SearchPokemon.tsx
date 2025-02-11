'use client';

import React from "react";
import * as Store from '@/store';
import * as PokemonsServices from "@/services/pokemons";
import {FilterDropdown, Search} from "@/components";


export const SearchPokemon = () => {

    const {search, filter} = Store.useSearchWithFilter();

    const {setFilteredPokemonsByNameAndType} = Store.usePokemons();

    const pokemons = PokemonsServices.useGetAllPokemonsPaginated();

    const {filteredPokemonsByTypeAndName} = PokemonsServices.useGetPokemonsByTypesAndName({type: filter, name: search});

    const {types} = PokemonsServices.useGetPokemonTypes();

    const handleSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
        e?.preventDefault();
        pokemons?.setCurrentPage(1)

        setFilteredPokemonsByNameAndType(filteredPokemonsByTypeAndName)

    }


    return (
        <div
            style={{
                width: '100%',
                display: 'flex'
            }}>
            <Search handleSearch={handleSearch}/>


            <FilterDropdown
                options={types?.map(type => type?.name)}
            />


        </div>
    )
}