'use client';

import React from 'react';
import * as PokemonsServices from "@/services/pokemons";
import * as PokedexServices from "@/services/pokedex";
import Image from 'next/image';
import DefaultImage from '@/public/pokemon-logo.svg';
import {Loading} from "@/components/Loading";
import {PokemonAbilities, PokemonStats, PokemonTypes} from "@/components/pokemons/Pokemon/components";

type PokemonProps = {
    name: string;
}
export const Pokemon = ({name}: PokemonProps) => {

    const {pokemon, isLoading: isLoadingForGetPokemon} = PokemonsServices.useGetPokemon({name});

    const {pokemon: pokedexPokemon, isError: isErrorForPokedex, isLoading: isLoadingForPokedex} = PokedexServices.useGetPokemon({
        id: pokemon?.id
    });

    const isAddedToPokedex = pokedexPokemon?.name === name;

    const {addPokemon, isPending: isPendingForAddPokemon} = PokedexServices.useAddPokemon();

    if (isLoadingForGetPokemon) return <Loading/>;

    if (!pokemon?.showPokemon) return <div> Pokemon not found </div>;

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                gap: '40px'
            }}
        >
            <h2>{name?.toUpperCase()}</h2>

            <Image
                width={100}
                height={100}
                src={pokemon?.photo || DefaultImage.src}
                alt={pokemon?.name || 'pokemon'}
                priority
            />

            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                }}
            >
                <PokemonTypes pokemon={pokemon}/>

                <PokemonAbilities pokemon={pokemon}/>

                <PokemonStats pokemon={pokemon}/>

                <div
                    style={{
                        display: 'flex',
                        gap: '10px'
                    }}
                >
                    <button
                        disabled={isLoadingForPokedex || isErrorForPokedex || isAddedToPokedex}
                        onClick={() => addPokemon({id: pokemon?.id, name: pokemon?.name})}
                        style={{
                            width: 'fit-content'
                        }}>
                        {isPendingForAddPokemon ? 'Loading...' : 'Add to pokedex'}
                    </button>

                    {isAddedToPokedex && ('✔ Added to pokedex')}
                    {isErrorForPokedex && ('Something went wrong, try again later or contact our team')}

                </div>
            </div>


        </div>
    )
};
